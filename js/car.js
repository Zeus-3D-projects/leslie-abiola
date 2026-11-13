/* Interactive 3D wrap studio (Three.js r160).
   Listens for "wrap:change" events from main.js and smoothly re-wraps the car.
   Supports both HTTP/HTTPS servers and direct file:// opening via window.CAR_GLB_B64.
   Car model: Ferrari 458 Italia by vicent091036 (CC BY 4.0), via the three.js examples. */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const stage = document.getElementById("carStage");
const emit = (name, detail) => window.dispatchEvent(new CustomEvent(name, { detail }));
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function supportsWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
  } catch {
    return false;
  }
}

function base64ToArrayBuffer(b64) {
  const bin = atob(b64);
  const len = bin.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = bin.charCodeAt(i);
  }
  return bytes.buffer;
}

/* Finish presets → physical material params */
const FINISHES = {
  Gloss:          { metalness: 0.5,  roughness: 0.28, clearcoat: 1.0,  clearcoatRoughness: 0.02, iridescence: 0, envMapIntensity: 0.95 },
  Satin:          { metalness: 0.55, roughness: 0.46, clearcoat: 0.32, clearcoatRoughness: 0.38, iridescence: 0, envMapIntensity: 0.72 },
  Matte:          { metalness: 0.25, roughness: 0.85, clearcoat: 0.0,  clearcoatRoughness: 1.0,  iridescence: 0, envMapIntensity: 0.42 },
  Chrome:         { metalness: 1.0,  roughness: 0.05, clearcoat: 1.0,  clearcoatRoughness: 0.0,  iridescence: 0, envMapIntensity: 1.15 },
  "Colour-shift": { metalness: 0.85, roughness: 0.22, clearcoat: 1.0,  clearcoatRoughness: 0.03, iridescence: 1, envMapIntensity: 1.0 },
};
const LERP_KEYS = ["metalness", "roughness", "clearcoat", "clearcoatRoughness", "iridescence", "envMapIntensity"];

async function init() {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;
  stage.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const BG = new THREE.Color("#050505");
  scene.background = BG;
  scene.fog = new THREE.Fog(BG, 11, 22);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(5.6, 1.85, -6.2);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.45, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.enablePan = false;
  controls.enableZoom = false; // never hijack page scroll
  controls.minPolarAngle = Math.PI / 2.95;
  controls.maxPolarAngle = Math.PI / 2.08;
  controls.autoRotate = !reduceMotion;
  controls.autoRotateSpeed = 0.75;
  renderer.domElement.style.touchAction = "pan-y";

  let resumeTimer;
  controls.addEventListener("start", () => {
    controls.autoRotate = false;
    clearTimeout(resumeTimer);
  });
  controls.addEventListener("end", () => {
    resumeTimer = setTimeout(() => (controls.autoRotate = !reduceMotion), 3500);
  });

  /* Detect quick tap on the 3D car stage to reveal a fact */
  let downPos = null;
  renderer.domElement.addEventListener("pointerdown", (e) => {
    downPos = { x: e.clientX, y: e.clientY, t: performance.now() };
  });
  renderer.domElement.addEventListener("pointerup", (e) => {
    if (!downPos) return;
    const dist = Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y);
    const dt = performance.now() - downPos.t;
    downPos = null;
    if (dist < 6 && dt < 350) emit("car:tap");
  });

  /* Monochrome obsidian floor disc + crisp silver studio ring */
  const floorTex = radialTexture([
    [0, "rgba(38,38,42,1)"],
    [0.45, "rgba(14,14,16,1)"],
    [1, "rgba(5,5,5,1)"],
  ]);
  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(9, 64),
    new THREE.MeshBasicMaterial({ map: floorTex, toneMapped: false })
  );
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(3.0, 3.03, 128),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.32, toneMapped: false })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.002;
  scene.add(ring);

  /* Materials */
  const start = window.WRAP_STATE || { color: { hex: "#ecebe6" }, finish: "Gloss" };
  const body = new THREE.MeshPhysicalMaterial({
    color: start.color.hex,
    ...FINISHES[start.finish],
    iridescenceIOR: 1.8,
    iridescenceThicknessRange: [180, 900],
  });
  const details = new THREE.MeshStandardMaterial({ color: 0xe2e2e2, metalness: 1, roughness: 0.3 });
  const trim = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.6, roughness: 0.4 });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x0a0a0c,
    metalness: 0.2,
    roughness: 0.02,
    transmission: 0.25,
    transparent: true,
    opacity: 0.92,
    clearcoat: 1,
  });

  /* Load car (supports in-memory base64 for file:// and HTTP fetch) */
  const manager = new THREE.LoadingManager();
  manager.onProgress = (_u, loaded, total) => emit("car:progress", loaded / total);
  const dracoPath =
    location.protocol === "file:"
      ? "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/libs/draco/gltf/"
      : "assets/draco/";
  const draco = new DRACOLoader(manager).setDecoderPath(dracoPath);
  const loader = new GLTFLoader(manager).setDRACOLoader(draco);

  const gltf = await new Promise((res, rej) => {
    if (window.CAR_GLB_B64) {
      try {
        const buffer = base64ToArrayBuffer(window.CAR_GLB_B64);
        loader.parse(buffer, "", res, rej);
        return;
      } catch (e) {
        console.warn("Base64 parse fallback to URL:", e);
      }
    }
    loader.load(
      "assets/models/car.glb",
      res,
      (e) => e.total && emit("car:progress", (e.loaded / e.total) * 0.95),
      rej
    );
  });

  const car = gltf.scene.children[0];
  const setMat = (name, m) => {
    const o = car.getObjectByName(name);
    if (o) o.material = m;
  };
  setMat("body", body);
  ["rim_fl", "rim_fr", "rim_rr", "rim_rl"].forEach((n) => setMat(n, details));
  setMat("trim", trim);
  setMat("glass", glass);
  const wheels = ["wheel_fl", "wheel_fr", "wheel_rl", "wheel_rr"].map((n) => car.getObjectByName(n)).filter(Boolean);

  const aoSrc = window.CAR_AO_B64 || "assets/models/car_ao.png";
  const ao = await new THREE.TextureLoader().loadAsync(aoSrc);
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(0.655 * 4, 1.3 * 4),
    new THREE.MeshBasicMaterial({
      map: ao,
      blending: THREE.MultiplyBlending,
      toneMapped: false,
      transparent: true,
      premultipliedAlpha: true,
    })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.renderOrder = 2;
  car.add(shadow);
  scene.add(car);

  /* Crisp studio rim light */
  const rim = new THREE.SpotLight(0xffffff, 36, 14, Math.PI / 6, 0.85);
  rim.position.set(-4, 4.2, 4);
  scene.add(rim);

  /* Smooth wrap transitions */
  const target = { color: new THREE.Color(start.color.hex), ...FINISHES[start.finish] };
  let flash = 0;
  window.addEventListener("wrap:change", (e) => {
    target.color.set(e.detail.hex);
    Object.assign(target, FINISHES[e.detail.finish] || FINISHES.Gloss);
    flash = 1;
    controls.autoRotate = false;
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => (controls.autoRotate = !reduceMotion), 3500);
  });

  function resize() {
    const w = stage.clientWidth || stage.parentElement?.clientWidth || 640;
    const h = stage.clientHeight || stage.parentElement?.clientHeight || 480;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.clearViewOffset();
    camera.fov = w > 760 ? 34 : 38;
    const dist = w > 760 ? 7.6 : 7.0;
    const dir = camera.position.clone().sub(controls.target).normalize();
    camera.position.copy(controls.target).addScaledVector(dir, dist);
    controls.minDistance = controls.maxDistance = dist;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(stage);
  resize();

  let visible = true;
  new IntersectionObserver(([en]) => (visible = en.isIntersecting)).observe(stage);

  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05);
    if (!visible || document.hidden) return;
    const k = 1 - Math.pow(0.0015, dt);
    body.color.lerp(target.color, k);
    for (const p of LERP_KEYS) {
      body[p] += (target[p] - body[p]) * k;
    }
    const t = clock.elapsedTime;
    wheels.forEach((w) => (w.rotation.x = -t * Math.PI * 0.6));
    if (flash > 0) flash = Math.max(0, flash - dt * 1.6);
    ring.scale.setScalar(1 + flash * 0.1);
    ring.material.opacity = 0.24 + flash * 0.5 + Math.sin(t * 2) * 0.05;
    controls.update();
    renderer.render(scene, camera);
  });

  emit("car:progress", 1);
  emit("car:ready");
}

function radialTexture(stops) {
  const c = document.createElement("canvas");
  c.width = c.height = 512;
  const g = c.getContext("2d");
  const grd = g.createRadialGradient(256, 256, 0, 256, 256, 256);
  stops.forEach(([o, col]) => grd.addColorStop(o, col));
  g.fillStyle = grd;
  g.fillRect(0, 0, 512, 512);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

if (!stage || !supportsWebGL()) {
  emit("car:error", "no-webgl");
} else {
  init().catch((err) => {
    console.error(err);
    emit("car:error", String(err));
  });
}
