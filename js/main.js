/* Leslie Abiola portfolio · Portfolite-inspired UI & interactive mechanics.
   All content comes from js/content.js (window.CONTENT). */
(function () {
  "use strict";
  const C = window.CONTENT;
  const PH = !!C.SHOW_PLACEHOLDERS;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const el = (tag, attrs = {}, html = "") => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else n.setAttribute(k, v);
    }
    if (html) n.innerHTML = html;
    return n;
  };
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const get = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), C);
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const shortDomain = (u) => {
    try {
      return new URL(u).hostname.replace(/^www\./, "");
    } catch {
      return "";
    }
  };

  /* ---------- Simple bindings ---------- */
  $$("[data-bind]").forEach((n) => (n.textContent = get(n.dataset.bind) ?? ""));
  $$("[data-bind-src]").forEach((n) => (n.src = get(n.dataset.bindSrc) ?? ""));
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Format markdown-like *italic* headings ---------- */
  const formatItalics = (str) =>
    esc(str).replace(/\*([^*]+)\*/g, "<em>$1</em>");

  /* ---------- Portfolite Word-by-Word Blur Reveal for Hero H1 ---------- */
  const heroH1 = $("#heroHeading");
  if (heroH1 && C.person.heroHeading) {
    const tokens = C.person.heroHeading.split(/\s+/);
    heroH1.innerHTML = tokens
      .map((w) => {
        const isItalic = /^\*.*\*$/.test(w);
        const clean = esc(w.replace(/^\*|\*$/g, ""));
        return `<span class="pf-word">${isItalic ? `<em>${clean}</em>` : clean}</span>`;
      })
      .join(" ");
  }

  const aboutH2 = $("#aboutHeading");
  if (aboutH2 && C.about.heading) {
    aboutH2.innerHTML = formatItalics(C.about.heading);
  }

  /* ---------- Discovery Tracker State ---------- */
  const discovered = new Set();
  let totalDiscoverable = 0;
  const registerSecret = (id) => {
    totalDiscoverable++;
    return id;
  };
  const markDiscovered = (id) => {
    if (!id || discovered.has(id)) return;
    discovered.add(id);
    updateDiscoveryUI();
  };

  /* ---------- Loader ---------- */
  const loader = $("#loader");
  const loaderBar = $("#loaderBar");
  let loaderDone = false;
  const hideLoader = () => {
    if (loaderDone) return;
    loaderDone = true;
    if (loaderBar) loaderBar.style.width = "100%";
    setTimeout(() => loader && loader.classList.add("done"), 220);
    setTimeout(() => {
      $$(".pf-word", heroH1).forEach((w, i) => setTimeout(() => w.classList.add("in"), i * 65));
      $$(".hero-section .reveal").forEach((n, i) => setTimeout(() => n.classList.add("in"), 120 + i * 80));
    }, 300);
  };
  window.addEventListener("car:progress", (e) => {
    if (loaderBar) loaderBar.style.width = Math.round(e.detail * 100) + "%";
  });
  window.addEventListener("car:ready", () => {
    const stageWrap = $("#studioStageWrap");
    if (stageWrap) stageWrap.classList.add("webgl-ready");
    hideLoader();
  });
  window.addEventListener("car:error", () => {
    const statusEl = $("#carPreviewStatus");
    if (statusEl) statusEl.textContent = "Interactive 2D Studio Wrap Preview · Drag or tap car";
    hideLoader();
  });
  setTimeout(hideLoader, 2800);

  /* ---------- Navigation ---------- */
  const nav = $("#nav");
  const burger = $("#burger");
  const links = $("#navLinks");
  if (burger && links) {
    burger.addEventListener("click", () => {
      const open = burger.getAttribute("aria-expanded") !== "true";
      burger.setAttribute("aria-expanded", open);
      links.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        burger.setAttribute("aria-expanded", "false");
        links.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }
  let lastY = 0;
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      if (nav) {
        nav.classList.toggle("scrolled", y > 24);
        nav.classList.toggle("hide", y > lastY && y > window.innerHeight * 0.85 && !(links && links.classList.contains("open")));
      }
      lastY = y;
    },
    { passive: true }
  );

  const sectionIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        $$(".nav-links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      });
    },
    { rootMargin: "-42% 0px -50% 0px" }
  );
  $$("main section[id]").forEach((s) => sectionIO.observe(s));

  /* ---------- Hero Press Marquee ---------- */
  const heroMarquee = $("#heroMarquee");
  if (heroMarquee && Array.isArray(C.press)) {
    const outlets = [...new Set(C.press.map((p) => p.outlet))];
    const loopItems = [...outlets, ...outlets, ...outlets];
    loopItems.forEach((name) => {
      const item = el("span", { class: "pf-marquee-item" });
      item.innerHTML = `<span class="pf-marquee-dot"></span><span>${esc(name)}</span>`;
      heroMarquee.append(item);
    });
  }

  const safeUrl = (u) => (u ? encodeURI(String(u)) : "");

  /* ---------- Hero 3-Card Bento Showcase & Category Pills ---------- */
  const renderBentoCards = (container, items) => {
    if (!container || !Array.isArray(items)) return;
    items.forEach((card) => {
      const a = el("a", {
        class: "pf-bento-card reveal" + (card.featured ? " pf-bento-card--featured" : ""),
        href: card.href || "#work",
        "aria-label": card.alt || card.title || "Showcase item",
      });
      const altText = esc(card.alt || card.title || "");
      const mediaHtml = card.video
        ? `<video class="pf-bento-video" src="${esc(safeUrl(card.video))}" ${
            card.poster ? `poster="${esc(safeUrl(card.poster))}"` : ""
          } autoplay muted loop playsinline preload="auto" aria-label="${altText}" title="${altText}"></video>
           <span class="pf-live-video-pill"><span class="pf-dot-sm"></span><span>Autoplay Video</span></span>`
        : `<img src="${esc(safeUrl(card.image))}" alt="${altText}" loading="lazy" />`;

      a.innerHTML = `
        <div class="pf-mask-border" aria-hidden="true"></div>
        ${mediaHtml}
        <div class="pf-bento-bar">
          <div class="pf-bento-meta">
            <span class="pf-bento-title">${esc(card.title)}</span>
            ${card.subtitle ? `<span class="pf-bento-sub">${esc(card.subtitle)}</span>` : ""}
          </div>
          <span class="pf-bento-arrow" aria-hidden="true">↗</span>
        </div>`;
      container.append(a);
    });
  };
  renderBentoCards($("#heroShowcase"), C.heroCards);
  renderBentoCards($("#signatureShowcase"), C.signatureBuilds);

  /* ---------- Education (University of Sunderland) & Zeus3D Photo Grids ---------- */
  const renderPhotoFeatureGrid = (container, list) => {
    if (!container || !Array.isArray(list)) return;
    list.forEach((item) => {
      const fig = el("figure", {
        class: "pf-edu-photo-card reveal",
        tabindex: "0",
        role: "button",
        "aria-label": item.alt || item.title || "View photo",
        "data-src": safeUrl(item.src),
        "data-alt": item.alt || item.title || "",
        "data-title": [item.title, item.subtitle].filter(Boolean).join(" · "),
      });
      fig.innerHTML = `
        <div class="pf-mask-border" aria-hidden="true"></div>
        <img src="${esc(safeUrl(item.src))}" alt="${esc(item.alt || item.title || "")}" loading="lazy" />
        <figcaption class="pf-edu-photo-cap">
          <strong>${esc(item.title || "")}</strong>
          ${item.subtitle ? `<span>${esc(item.subtitle)}</span>` : ""}
        </figcaption>`;
      container.append(fig);
    });
  };
  renderPhotoFeatureGrid($("#eduGalleryHome"), C.educationGallery);
  renderPhotoFeatureGrid($("#eduGalleryPage"), C.educationGallery);
  renderPhotoFeatureGrid($("#zeus3dGalleryHome"), C.zeus3dGallery);
  renderPhotoFeatureGrid($("#zeus3dGalleryPage"), C.zeus3dGallery);

  /* ---------- Autoplaying Work & Process Videos Grid ---------- */
  const workVideoGrid = $("#workVideoGrid");
  if (workVideoGrid && Array.isArray(C.workVideos)) {
    C.workVideos.forEach((v) => {
      const card = el("article", { class: "pf-video-card reveal" });
      const altText = esc(v.alt || v.title || "Leslie Abiola work video");
      card.innerHTML = `
        <div class="pf-mask-border" aria-hidden="true"></div>
        <div class="pf-video-stage">
          <video
            class="pf-autoplay-video"
            src="${esc(safeUrl(v.src))}"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            aria-label="${altText}"
            title="${altText}"
          ></video>
          <div class="pf-video-top-badges">
            <span class="pf-tag-pill"><span class="pf-dot-sm"></span><span>${esc(v.tag || "Live Work")}</span></span>
            <div class="pf-video-actions">
              <button type="button" class="pf-vid-btn pf-vid-mute" aria-label="Toggle audio">🔇 Muted</button>
              <button type="button" class="pf-vid-btn pf-vid-expand" data-src="${esc(safeUrl(v.src))}" data-title="${esc(
        v.title
      )}" data-alt="${altText}" aria-label="Expand video">⛶ Expand</button>
            </div>
          </div>
        </div>
        <div class="pf-video-body">
          <h3 class="pf-video-title">${esc(v.title)}</h3>
          <p class="pf-video-caption">${esc(v.caption || "")}</p>
        </div>`;
      workVideoGrid.append(card);
    });

    workVideoGrid.addEventListener("click", (e) => {
      const muteBtn = e.target.closest(".pf-vid-mute");
      if (muteBtn) {
        const vid = muteBtn.closest(".pf-video-stage")?.querySelector("video");
        if (vid) {
          vid.muted = !vid.muted;
          muteBtn.textContent = vid.muted ? "🔇 Muted" : "🔊 Sound On";
        }
        return;
      }
      const expandBtn = e.target.closest(".pf-vid-expand");
      if (expandBtn) {
        openCustomMediaLb({
          src: expandBtn.dataset.src,
          video: true,
          title: expandBtn.dataset.title,
          alt: expandBtn.dataset.alt,
        });
      }
    });
  }

  /* ---------- Biography Pillars & Chapters (Home & Dedicated Bio Page) ---------- */
  const renderPillars = (container) => {
    if (!container || !C.biography || !Array.isArray(C.biography.pillars)) return;
    C.biography.pillars.forEach((p) => {
      const card = el("div", { class: "pf-dossier-card" });
      card.innerHTML = `
        <span class="pf-dossier-label">${esc(p.label)}</span>
        <strong class="pf-dossier-val">${esc(p.value)}</strong>
        <span class="pf-dossier-sub">${esc(p.detail)}</span>`;
      container.append(card);
    });
  };
  renderPillars($("#bioPillarsHome"));
  renderPillars($("#bioPillarsPage"));

  const bioChaptersPage = $("#bioChaptersPage");
  if (bioChaptersPage && C.biography && Array.isArray(C.biography.chapters)) {
    C.biography.chapters.forEach((ch) => {
      const card = el("article", { class: "pf-chapter-card reveal" });
      card.innerHTML = `
        <div class="pf-mask-border" aria-hidden="true"></div>
        <div class="pf-chapter-head">
          <span class="pf-chapter-num">${esc(ch.num)}</span>
          <span class="pf-chapter-tag">${esc(ch.tag)}</span>
        </div>
        <h3 class="pf-chapter-title">${esc(ch.title)}</h3>
        <p class="pf-chapter-body">${esc(ch.body)}</p>`;
      bioChaptersPage.append(card);
    });
  }

  const heroTags = $("#heroTags");
  if (heroTags && Array.isArray(C.heroTags)) {
    C.heroTags.forEach((tag) => {
      heroTags.append(el("span", { class: "pf-chip", text: tag }));
    });
  }

  /* ---------- 3D Wrap Studio & Facts ---------- */
  const state = (window.WRAP_STATE = { color: C.wrapColors[0], finish: C.wrapFinishes[0] });
  const readout = $("#studioReadout");
  const finishesEl = $("#finishes");
  const swatchesEl = $("#swatches");
  const factBox = $("#studioFact");
  const factNum = $("#factNum");
  const factText = $("#factText");
  let factIdx = -1;
  const studioSecretId = registerSecret("studio-wrap");

  const nextFact = () => {
    if (!C.facts || !C.facts.length || !factText) return;
    factIdx = (factIdx + 1) % C.facts.length;
    if (factBox) {
      factBox.classList.remove("pop");
      void factBox.offsetWidth;
      factBox.classList.add("pop");
    }
    if (factNum) factNum.textContent = String(factIdx + 1).padStart(2, "0");
    factText.textContent = C.facts[factIdx];
    markDiscovered(studioSecretId);
  };

  if (finishesEl && swatchesEl) {
    C.wrapFinishes.forEach((f) => {
      const b = el("button", {
        class: "finish",
        type: "button",
        role: "radio",
        "aria-checked": f === state.finish,
        "data-finish": f,
        text: f,
      });
      finishesEl.append(b);
    });
    C.wrapColors.forEach((c) => {
      const b = el("button", {
        class: "swatch",
        type: "button",
        role: "radio",
        "aria-checked": c === state.color,
        "aria-label": c.name,
        title: c.name,
        "data-hex": c.hex,
      });
      b.style.setProperty("--c", c.hex);
      swatchesEl.append(b);
    });
    if (readout) readout.textContent = `${state.finish} · ${state.color.name}`;
  }

  const previewFallback = $("#carPreviewFallback");
  const previewVehicle = $("#carPreviewVehicle");
  const previewBase = $(".car-preview-base", previewFallback || document);
  const previewSheen = $("#carPreviewSheen");

  function syncPreviewFallback(hex, finish) {
    if (!previewFallback) return;
    previewFallback.style.setProperty("--wrap-preview-hex", hex);
    const isRedDefault = hex.toLowerCase() === "#c81d25";
    const isDark = hex.toLowerCase() === "#121316";
    const isLight = hex.toLowerCase() === "#ecebe6" || hex.toLowerCase() === "#b8bdc2";
    previewFallback.style.setProperty("--wrap-tint-opacity", isRedDefault ? "0.15" : "0.86");

    let finishFilter = "contrast(1.05) brightness(0.96)";
    let sheenOpacity = "0.55";
    if (finish === "Matte") {
      finishFilter = "contrast(0.92) brightness(0.88) saturate(0.85)";
      sheenOpacity = "0.08";
    } else if (finish === "Satin") {
      finishFilter = "contrast(1.02) brightness(0.94) saturate(0.95)";
      sheenOpacity = "0.28";
    } else if (finish === "Chrome") {
      finishFilter = "contrast(1.22) brightness(1.08) saturate(1.1)";
      sheenOpacity = "0.88";
    } else if (finish === "Colour-shift") {
      finishFilter = "contrast(1.12) brightness(1.0) hue-rotate(28deg) saturate(1.3)";
      sheenOpacity = "0.75";
    }
    if (isDark) finishFilter += " brightness(0.68)";
    else if (isLight) finishFilter += " saturate(0.25) brightness(1.06)";

    if (previewBase) previewBase.style.filter = finishFilter;
    previewFallback.style.setProperty("--wrap-sheen-opacity", sheenOpacity);
    if (previewSheen) {
      previewSheen.style.background =
        finish === "Colour-shift"
          ? "linear-gradient(125deg, rgba(107, 44, 145, 0.45) 15%, rgba(14, 90, 62, 0.45) 52%, rgba(232, 93, 4, 0.38) 85%)"
          : "linear-gradient(125deg, transparent 20%, rgba(255, 255, 255, 0.28) 48%, transparent 72%)";
    }
  }
  syncPreviewFallback(state.color.hex, state.finish);

  if (previewFallback && previewVehicle) {
    let pDown = null;
    let rotY = 0;
    previewFallback.addEventListener("pointerdown", (e) => {
      pDown = { x: e.clientX, y: e.clientY, startY: rotY, t: performance.now() };
      previewFallback.setPointerCapture?.(e.pointerId);
    });
    previewFallback.addEventListener("pointermove", (e) => {
      if (!pDown) return;
      const dx = e.clientX - pDown.x;
      const dy = e.clientY - pDown.y;
      rotY = Math.max(-18, Math.min(18, pDown.startY + dx * 0.08));
      const rotX = Math.max(-8, Math.min(8, -dy * 0.04));
      previewVehicle.style.transform = `rotateY(${rotY.toFixed(2)}deg) rotateX(${rotX.toFixed(2)}deg)`;
    });
    const endDrag = (e) => {
      if (!pDown) return;
      const dist = Math.hypot(e.clientX - pDown.x, e.clientY - pDown.y);
      const dt = performance.now() - pDown.t;
      pDown = null;
      previewVehicle.style.transform = `rotateY(${(rotY * 0.35).toFixed(2)}deg) rotateX(0deg)`;
      if (dist < 6 && dt < 350) {
        window.dispatchEvent(new CustomEvent("car:tap"));
      }
    };
    previewFallback.addEventListener("pointerup", endDrag);
    previewFallback.addEventListener("pointercancel", () => {
      pDown = null;
    });
  }

  function applyWrap(partial, showFact = true) {
    Object.assign(state, partial);
    if (finishesEl) {
      $$(".finish", finishesEl).forEach((b) => b.setAttribute("aria-checked", b.dataset.finish === state.finish));
    }
    if (swatchesEl) {
      $$(".swatch", swatchesEl).forEach((b) => b.setAttribute("aria-checked", b.dataset.hex === state.color.hex));
    }
    if (readout) readout.textContent = `${state.finish} · ${state.color.name}`;
    syncPreviewFallback(state.color.hex, state.finish);
    window.dispatchEvent(new CustomEvent("wrap:change", { detail: { hex: state.color.hex, finish: state.finish } }));
    if (showFact) nextFact();
  }

  if (finishesEl) {
    finishesEl.addEventListener("click", (e) => {
      const b = e.target.closest(".finish");
      if (b) applyWrap({ finish: b.dataset.finish });
    });
  }
  if (swatchesEl) {
    swatchesEl.addEventListener("click", (e) => {
      const b = e.target.closest(".swatch");
      if (b) applyWrap({ color: C.wrapColors.find((c) => c.hex === b.dataset.hex) });
    });
  }
  const shuffleBtn = $("#shuffleBtn");
  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", () => {
      let c, f;
      do {
        c = C.wrapColors[Math.floor(Math.random() * C.wrapColors.length)];
        f = C.wrapFinishes[Math.floor(Math.random() * C.wrapFinishes.length)];
      } while (c === state.color && f === state.finish);
      applyWrap({ color: c, finish: f });
    });
  }
  window.addEventListener("car:tap", () => nextFact());

  /* ---------- About Section (Redacted Bio, Quotes, Tags, Experience, Portrait) ---------- */
  const paras = $("#aboutParas");
  if (paras && C.about && Array.isArray(C.about.paragraphs)) {
    let rIndex = 0;
    C.about.paragraphs.forEach((raw) => {
      const p = el("p", { class: "para reveal" });
      p.innerHTML = esc(raw).replace(/\[\[([^\]]+)\]\]/g, (_m, inner) => {
        const sid = registerSecret("redact-" + rIndex++);
        return `<span class="redact" tabindex="0" role="button" aria-label="Tap to reveal milestone" data-secret="${sid}">${inner}</span>`;
      });
      paras.append(p);
    });
    paras.addEventListener("click", (e) => {
      const r = e.target.closest(".redact");
      if (!r) return;
      r.classList.add("revealed");
      markDiscovered(r.dataset.secret);
      syncRedactGuideState();
    });
    paras.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const r = e.target.closest(".redact");
      if (!r) return;
      e.preventDefault();
      r.classList.add("revealed");
      markDiscovered(r.dataset.secret);
      syncRedactGuideState();
    });
  }

  const quotes = $("#aboutQuotes");
  if (quotes && C.about && Array.isArray(C.about.quotes)) {
    C.about.quotes.forEach((q) => {
      const b = el("blockquote", { class: "quote reveal" });
      b.append(document.createTextNode("“" + q.text + "”"));
      if (q.source) b.append(el("cite", { text: "Leslie Abiola, featured in " + q.source }));
      quotes.append(b);
    });
  }

  const aboutTags = $("#aboutTags");
  if (aboutTags && C.about && Array.isArray(C.about.tags)) {
    C.about.tags.forEach((t) => aboutTags.append(el("span", { class: "pf-chip", text: t })));
  }

  const expList = $("#expList");
  if (expList && Array.isArray(C.experience)) {
    C.experience.forEach((row) => {
      const d = el("div", { class: "pf-exp-row reveal" });
      d.innerHTML = `
        <span class="pf-exp-role">${esc(row.role)}</span>
        <span class="pf-exp-co">${esc(row.company)}</span>
        <span class="pf-exp-yr">${esc(row.period)}</span>`;
      expList.append(d);
    });
  }

  /* Portrait spotlight & reveal */
  const portrait = $("#portrait");
  if (portrait) {
    const portraitSecret = registerSecret("portrait");
    const spot = $(".spot", portrait);
    const btn = $(".spot-btn", portrait);
    if (finePointer && spot) {
      portrait.addEventListener("pointermove", (e) => {
        if (portrait.classList.contains("revealed")) return;
        const r = portrait.getBoundingClientRect();
        portrait.classList.add("spotting");
        spot.style.setProperty("--x", ((e.clientX - r.left) / r.width) * 100 + "%");
        spot.style.setProperty("--y", ((e.clientY - r.top) / r.height) * 100 + "%");
        spot.style.setProperty("--r", "120px");
      });
      portrait.addEventListener("pointerleave", () => {
        portrait.classList.remove("spotting");
        spot.style.setProperty("--r", "0px");
      });
    }
    if (btn) {
      btn.addEventListener("click", () => {
        portrait.classList.add("revealed");
        markDiscovered(portraitSecret);
      });
    }
  }

  /* ---------- Process Cards & Interactive Flip Timeline ---------- */
  const processCards = $("#processCards");
  if (processCards && Array.isArray(C.process)) {
    C.process.forEach((step) => {
      const card = el("div", { class: "pf-step-card reveal" });
      card.innerHTML = `
        <span class="pf-step-badge">${esc(step.num)}</span>
        <h3 class="pf-step-title">${esc(step.title)}</h3>
        <div class="pf-step-divider"></div>
        <p class="pf-step-text">${esc(step.text)}</p>`;
      processCards.append(card);
    });
  }

  const tl = $("#timeline");
  const tlBar = $("#timelineProgress");
  if (tl && Array.isArray(C.timeline)) {
    C.timeline
      .filter((t) => t.year || t.title)
      .forEach((t, idx) => {
        const sid = registerSecret("timeline-" + idx);
        const li = el("li", { class: "t-item reveal", "data-secret": sid });
        li.innerHTML = `
          <button class="t-card" type="button" aria-label="Milestone ${esc(t.year)}: tap to flip">
            <span class="t-inner">
              <span class="t-face t-front">
                <span class="t-year">${esc(t.year)}</span>
                <span class="t-tap"><span>Tap to flip</span><span>↻</span></span>
              </span>
              <span class="t-face t-back">
                <span class="t-year">${esc(t.year)}</span>
                <strong class="t-title">${esc(t.title)}</strong>
                <span class="t-text">${esc(t.text)}</span>
              </span>
            </span>
          </button>`;
        tl.append(li);
      });

    let dragMoved = false;
    tl.addEventListener("click", (e) => {
      if (dragMoved) return;
      const item = e.target.closest(".t-item");
      if (!item) return;
      item.classList.toggle("revealed");
      markDiscovered(item.dataset.secret);
    });

    const updateTl = () => {
      const max = tl.scrollWidth - tl.clientWidth;
      if (tlBar) tlBar.style.width = (max > 0 ? (tl.scrollLeft / max) * 100 : 100) + "%";
    };
    tl.addEventListener("scroll", updateTl, { passive: true });
    window.addEventListener("resize", updateTl);

    let drag = null;
    tl.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse") return;
      drag = { x: e.clientX, left: tl.scrollLeft };
      dragMoved = false;
    });
    window.addEventListener("pointermove", (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      if (Math.abs(dx) > 5) {
        dragMoved = true;
        tl.classList.add("dragging");
      }
      tl.scrollLeft = drag.left - dx;
    });
    window.addEventListener("pointerup", () => {
      if (!drag) return;
      drag = null;
      tl.classList.remove("dragging");
      setTimeout(() => (dragMoved = false), 50);
    });
  }

  /* ---------- Services Grid & Dual Tickers ---------- */
  const serviceGrid = $("#serviceGrid");
  const select = $("#serviceSelect");
  if (select) select.append(el("option", { value: "", text: "Choose a service…" }));

  if (Array.isArray(C.services)) {
    C.services.forEach((s, i) => {
      if (select) select.append(el("option", { value: s.name, text: s.name }));
      if (serviceGrid) {
        const card = el("div", { class: "pf-svc-card reveal" });
        card.innerHTML = `
          <div class="pf-svc-head">
            <div class="pf-svc-title-wrap">
              <span class="pf-svc-num">${String(i + 1).padStart(2, "0")}</span>
              <h3 class="pf-svc-title">${esc(s.name)}</h3>
            </div>
          </div>
          <div class="pf-step-divider"></div>
          <p class="pf-svc-text">${esc(s.text)}</p>
          ${
            s.preview
              ? `<button class="pf-svc-preview" type="button" data-preview="${esc(s.preview.finish)}">Preview ${esc(
                  s.preview.finish
                )} on 3D car ↑</button>`
              : ""
          }`;
        serviceGrid.append(card);
      }
    });
  }
  if (select) select.append(el("option", { value: "Other", text: "Other / Custom Project" }));

  if (serviceGrid) {
    serviceGrid.addEventListener("click", (e) => {
      const pv = e.target.closest("[data-preview]");
      if (!pv) return;
      applyWrap({ finish: pv.dataset.finish || pv.dataset.preview });
      const studioEl = $("#studioSection");
      if (studioEl) studioEl.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  const ticker1 = $("#serviceTicker1");
  const ticker2 = $("#serviceTicker2");
  if (ticker1 && ticker2 && Array.isArray(C.services)) {
    const names = C.services.map((s) => s.name);
    const extra = ["24/7 Lagos Studio", "Self-Healing PPF", "Resale Value Protection", "Eco-Conscious Vinyl", "UK & Nigeria Projects"];
    const row1 = [...names, ...extra, ...names, ...extra];
    const row2 = [...extra, ...names.slice().reverse(), ...extra, ...names.slice().reverse()];
    row1.forEach((label) => {
      const pill = el("span", { class: "pf-ticker-pill" });
      pill.innerHTML = `<span class="pf-dot-sm"></span><span>${esc(label)}</span>`;
      ticker1.append(pill);
    });
    row2.forEach((label) => {
      const pill = el("span", { class: "pf-ticker-pill" });
      pill.innerHTML = `<span class="pf-dot-sm"></span><span>${esc(label)}</span>`;
      ticker2.append(pill);
    });
  }

  /* ---------- Gallery & Filter Tabs (Supports Images & Autoplaying Work Videos) ---------- */
  const gallery = $("#gallery");
  const filters = $("#filters");
  const items = (C.gallery || []).filter((g) => g.src);
  if (gallery) {
    items.forEach((g, i) => {
      const altText = esc(g.alt || g.title || "Leslie Abiola portfolio item");
      const b = el("button", {
        class: "g-item reveal" + (g.video ? " g-item--video" : ""),
        type: "button",
        "data-loc": g.location || "",
        "data-i": i,
        "aria-label": g.alt || "View " + (g.title || "project"),
      });
      const mediaHtml = g.video
        ? `<video class="g-video" src="${esc(safeUrl(g.src))}" autoplay muted loop playsinline preload="metadata" aria-label="${altText}" title="${altText}"></video>
           <span class="pf-live-video-pill"><span class="pf-dot-sm"></span><span>Video</span></span>`
        : `<img src="${esc(safeUrl(g.src))}" alt="${altText}" loading="lazy" />`;

      b.innerHTML = `
        <div class="pf-mask-border" aria-hidden="true"></div>
        ${mediaHtml}
        <span class="g-cap">
          <span>${esc(g.title || "")}</span>
          ${g.location ? `<span class="pf-bento-sub">${esc(g.location)} ↗</span>` : ""}
        </span>`;
      gallery.append(b);
    });
    if (PH) {
      const n = Math.max(0, (C.galleryPlaceholderCount || 0) - items.length);
      for (let i = 0; i < n; i++) {
        const d = el("div", { class: "g-item g-ph placeholder reveal", "data-loc": i % 2 === 0 ? "Nigeria" : "UK" });
        d.innerHTML = `<strong>Build Slot 0${items.length + i + 1}</strong><span class="ph-note">Add work photo in js/content.js</span>`;
        gallery.append(d);
      }
    }
  }
  if (filters) {
    const locs = ["All", ...new Set(items.map((g) => g.location).filter(Boolean))];
    locs.forEach((l, i) =>
      filters.append(el("button", { class: "filter", type: "button", role: "tab", "aria-selected": i === 0, "data-loc": l, text: l }))
    );
    filters.addEventListener("click", (e) => {
      const b = e.target.closest(".filter");
      if (!b) return;
      $$(".filter", filters).forEach((f) => f.setAttribute("aria-selected", f === b));
      const loc = b.dataset.loc;
      $$(".g-item", gallery).forEach((g) => g.classList.toggle("hidden", loc !== "All" && g.dataset.loc !== loc));
    });
  }

  /* ---------- Lightbox (Images + Videos) ---------- */
  const lb = $("#lightbox");
  const lbImg = $("#lbImg");
  const lbVid = $("#lbVid");
  const lbCap = $("#lbCap");
  let lbIndex = 0;
  let lastFocus = null;

  function showLightboxItem(item) {
    if (!lb || !item) return;
    const src = safeUrl(item.src);
    if (item.video && lbVid) {
      if (lbImg) lbImg.hidden = true;
      lbVid.hidden = false;
      lbVid.src = src;
      lbVid.setAttribute("aria-label", item.alt || item.title || "");
      lbVid.play?.().catch(() => {});
    } else if (lbImg) {
      if (lbVid) {
        lbVid.pause?.();
        lbVid.hidden = true;
      }
      lbImg.hidden = false;
      lbImg.src = src;
      lbImg.alt = item.alt || item.title || "";
    }
    if (lbCap) {
      lbCap.textContent = [item.title, item.location].filter(Boolean).join(" · ");
    }
    if (lb.hidden) {
      lastFocus = document.activeElement;
      lb.hidden = false;
      $("#lbClose")?.focus();
    }
  }

  function openCustomMediaLb(item) {
    showLightboxItem(item);
  }

  const openLb = (i) => {
    if (!items.length || !lb) return;
    lbIndex = (i + items.length) % items.length;
    showLightboxItem(items[lbIndex]);
  };
  const closeLb = () => {
    if (!lb) return;
    if (lbVid) {
      lbVid.pause?.();
      lbVid.removeAttribute("src");
    }
    lb.hidden = true;
    if (lastFocus) lastFocus.focus();
  };
  if (gallery) {
    gallery.addEventListener("click", (e) => {
      const b = e.target.closest("button.g-item");
      if (b) openLb(+b.dataset.i);
    });
  }
  $$(".pf-edu-photo-grid").forEach((grid) => {
    grid.addEventListener("click", (e) => {
      const card = e.target.closest(".pf-edu-photo-card");
      if (!card) return;
      openCustomMediaLb({
        src: card.dataset.src,
        video: false,
        title: card.dataset.title,
        alt: card.dataset.alt,
      });
    });
    grid.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const card = e.target.closest(".pf-edu-photo-card");
      if (!card) return;
      e.preventDefault();
      openCustomMediaLb({
        src: card.dataset.src,
        video: false,
        title: card.dataset.title,
        alt: card.dataset.alt,
      });
    });
  });

  if ($("#lbClose")) $("#lbClose").addEventListener("click", closeLb);
  if (lb) lb.addEventListener("click", (e) => e.target === lb && closeLb());
  document.addEventListener("keydown", (e) => {
    if (!lb || lb.hidden) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowRight") openLb(lbIndex + 1);
    if (e.key === "ArrowLeft") openLb(lbIndex - 1);
  });

  /* ---------- Autoplay Video Viewport Observer ---------- */
  const allAutoVideos = $$("video[autoplay]");
  if (allAutoVideos.length && "IntersectionObserver" in window) {
    const vidIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          const v = en.target;
          if (en.isIntersecting) {
            v.muted = true;
            v.play?.().catch(() => {});
          } else {
            v.pause?.();
          }
        });
      },
      { threshold: 0.15 }
    );
    allAutoVideos.forEach((v) => vidIO.observe(v));
  }

  /* ---------- Stats Banner ---------- */
  const statsEl = $("#stats");
  if (statsEl && Array.isArray(C.stats)) {
    C.stats.forEach((s) => {
      const v = el("div", { class: "stat-value" });
      if (s.text) {
        v.textContent = s.text;
      } else {
        v.dataset.count = s.value;
        v.dataset.suffix = s.suffix || "";
        v.dataset.from = s.plain ? s.value - 15 : 0;
        v.textContent = s.value + (s.suffix || "");
      }
      const wrap = el("div", { class: "stat" });
      wrap.append(v, el("div", { class: "stat-label", text: s.label }));
      statsEl.append(wrap);
    });
  }
  function countUp(n) {
    const to = +n.dataset.count;
    const from = +n.dataset.from;
    const suf = n.dataset.suffix || "";
    if (reduceMotion || isNaN(to)) return;
    const t0 = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const p = Math.max(0, Math.min(1, (t - t0) / dur));
      const e = 1 - Math.pow(1 - p, 4);
      n.textContent = Math.round(from + (to - from) * e) + suf;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---------- Handwrk Live Phone Simulator ---------- */
  const H = C.handwrk;
  if (H && $("#handwrk")) {
    if ($("#hwDriver")) $("#hwDriver").href = H.driverUrl;
    if ($("#hwPro")) $("#hwPro").href = H.proUrl;
    if ($("#hwCoverage")) $("#hwCoverage").textContent = H.coverage.join(" · ");
    const feats = $("#hwFeatures");
    if (feats) {
      H.features.forEach((f) => feats.append(el("li", { text: f })));
      const site = el("li");
      site.innerHTML = `<a href="${esc(H.site)}" target="_blank" rel="noopener">${esc(shortDomain(H.site))} ↗</a>`;
      feats.append(site);
    }

    const stepsEl = $("#hwSteps");
    const proDot = $("#proDot");
    const route = $("#routePath");
    const proPos = [null, [73, 11.5], [50, 48], [38, 62.5], [35, 65]];
    let step = -1;
    let autoTimer = null;
    let holdUntil = 0;
    let hwVisible = false;
    const STEP_MS = 3200;

    if (stepsEl) {
      stepsEl.style.setProperty("--dur", STEP_MS / 1000 + "s");
      H.steps.forEach((s, i) => {
        const li = el("li", { class: "hw-step" });
        li.innerHTML = `<button type="button" aria-controls="phoneStatus"><strong>${esc(s.title)}</strong><span class="desc"><span>${esc(
          s.text
        )}</span></span><span class="bar"></span></button>`;
        li.querySelector("button").addEventListener("click", () => {
          setStep(i);
          holdAuto();
        });
        stepsEl.append(li);
      });
    }

    function setStep(i) {
      step = i;
      if (stepsEl) {
        $$(".hw-step", stepsEl).forEach((n, k) => {
          n.classList.toggle("active", k === i);
          const bar = n.querySelector(".bar");
          if (bar) {
            bar.style.animation = "none";
            void bar.offsetWidth;
            bar.style.animation = "";
          }
        });
      }
      if ($("#phoneStep")) $("#phoneStep").textContent = `Step ${i + 1} of ${H.steps.length}`;
      if ($("#phoneStatus")) $("#phoneStatus").textContent = H.steps[i].status;
      if ($("#phoneBar")) $("#phoneBar").style.width = ((i + 1) / H.steps.length) * 100 + "%";
      if (route) route.style.strokeDashoffset = i >= 1 ? "0" : "600";
      const p = proPos[i];
      if (proDot) {
        proDot.style.opacity = p ? "1" : "0";
        if (p) {
          proDot.style.left = p[0] + "%";
          proDot.style.top = p[1] + "%";
        }
      }
    }
    function holdAuto() {
      holdUntil = Date.now() + 9000;
      if (stepsEl) stepsEl.classList.add("paused");
      setTimeout(() => stepsEl && stepsEl.classList.remove("paused"), 9000);
    }
    function startAuto() {
      if (autoTimer || reduceMotion) return;
      if (step < 0) setStep(0);
      autoTimer = setInterval(() => {
        if (!hwVisible || Date.now() < holdUntil) return;
        setStep((step + 1) % H.steps.length);
      }, STEP_MS);
    }
    new IntersectionObserver(
      ([en]) => {
        hwVisible = en.isIntersecting;
        if (hwVisible) startAuto();
      },
      { threshold: 0.25 }
    ).observe($("#handwrk"));
    setStep(0);
  }

  /* ---------- Media Coverage Infinite Momentum Carousel (newsTrack) ---------- */
  const track = $("#newsTrack");
  const wrapper = $(".news-scroll-wrapper");
  if (track && wrapper && Array.isArray(C.press) && C.press.length) {
    const newsItems = C.press.map((p) => ({
      image: p.image || p.logo || "",
      source: p.source || p.outlet || "",
      title: p.title || p.headline || "",
      snippet: p.snippet || "",
      link: p.link || p.url || "#",
    }));

    track.style.animation = "none";
    track.style.display = "flex";
    track.style.width = "max-content";

    const createCard = (item) => `
      <div class="news-card" style="flex-shrink: 0;">
        <div class="news-image">
          <img src="${esc(item.image)}" alt="${esc(item.source)}" loading="lazy" />
        </div>
        <div class="news-content">
          <span class="news-source">${esc(item.source)}</span>
          <h3 class="news-title">${esc(item.title)}</h3>
          <p class="news-snippet">${esc(item.snippet)}</p>
          <a href="${esc(item.link)}" target="_blank" rel="noopener" class="read-more">Read Article <span>&rarr;</span></a>
        </div>
      </div>
    `;

    const originalContent = newsItems.map((item) => createCard(item)).join("");
    track.innerHTML = originalContent + originalContent + originalContent + originalContent;

    let scrollPosition = 0;
    let isUserInteracting = false;
    const baseScrollSpeed = reduceMotion ? 0 : 0.5;
    const cardWidth = 300;
    const gap = 32;
    const singleSetWidth = (cardWidth + gap) * newsItems.length;

    function autoScroll() {
      if (!isUserInteracting && baseScrollSpeed > 0) {
        scrollPosition += baseScrollSpeed;
        if (scrollPosition >= singleSetWidth) {
          scrollPosition -= singleSetWidth;
        }
        track.style.transform = `translateX(-${scrollPosition}px)`;
      }
      requestAnimationFrame(autoScroll);
    }
    requestAnimationFrame(autoScroll);

    let touchStartX = 0;
    let touchStartY = 0;
    let lastTouchX = 0;
    let lastTouchTime = 0;
    let isDragging = false;
    let dragStartScroll = 0;
    let velocity = 0;

    wrapper.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        lastTouchX = touchStartX;
        lastTouchTime = performance.now();
        isDragging = true;
        dragStartScroll = scrollPosition;
        isUserInteracting = true;
        track.style.transition = "none";
      },
      { passive: true }
    );

    wrapper.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return;
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        const currentTime = performance.now();
        const deltaX = touchStartX - touchX;
        const deltaY = touchStartY - touchY;

        const timeDelta = currentTime - lastTouchTime;
        if (timeDelta > 0) {
          velocity = (lastTouchX - touchX) / timeDelta;
        }
        lastTouchX = touchX;
        lastTouchTime = currentTime;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          scrollPosition = dragStartScroll + deltaX;
          if (scrollPosition < 0) {
            scrollPosition = singleSetWidth + (scrollPosition % singleSetWidth);
          } else if (scrollPosition >= singleSetWidth) {
            scrollPosition = scrollPosition % singleSetWidth;
          }
          track.style.transform = `translateX(-${scrollPosition}px)`;
        }
      },
      { passive: true }
    );

    wrapper.addEventListener(
      "touchend",
      () => {
        isDragging = false;
        if (Math.abs(velocity) > 0.1) {
          let momentum = velocity * 15;
          function applyMomentum() {
            if (Math.abs(momentum) < 0.1) {
              isUserInteracting = false;
              return;
            }
            scrollPosition += momentum;
            momentum *= 0.95;
            if (scrollPosition < 0) {
              scrollPosition = singleSetWidth + (scrollPosition % singleSetWidth);
            } else if (scrollPosition >= singleSetWidth) {
              scrollPosition = scrollPosition % singleSetWidth;
            }
            track.style.transform = `translateX(-${scrollPosition}px)`;
            requestAnimationFrame(applyMomentum);
          }
          applyMomentum();
        } else {
          isUserInteracting = false;
        }
        velocity = 0;
      },
      { passive: true }
    );

    let mouseDown = false;
    let mouseStartX = 0;
    let mouseStartScroll = 0;
    let mouseMoved = false;

    wrapper.addEventListener("mousedown", (e) => {
      mouseDown = true;
      mouseMoved = false;
      mouseStartX = e.clientX;
      mouseStartScroll = scrollPosition;
      isUserInteracting = true;
      wrapper.style.cursor = "grabbing";
      track.style.transition = "none";
    });

    document.addEventListener("mousemove", (e) => {
      if (!mouseDown) return;
      e.preventDefault();
      const deltaX = mouseStartX - e.clientX;
      if (Math.abs(deltaX) > 4) mouseMoved = true;
      scrollPosition = mouseStartScroll + deltaX;
      if (scrollPosition < 0) {
        scrollPosition = singleSetWidth + (scrollPosition % singleSetWidth);
      } else if (scrollPosition >= singleSetWidth) {
        scrollPosition = scrollPosition % singleSetWidth;
      }
      track.style.transform = `translateX(-${scrollPosition}px)`;
    });

    document.addEventListener("mouseup", () => {
      if (mouseDown) {
        mouseDown = false;
        isUserInteracting = false;
        wrapper.style.cursor = "grab";
        setTimeout(() => (mouseMoved = false), 50);
      }
    });

    wrapper.addEventListener(
      "click",
      (e) => {
        if (mouseMoved) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      true
    );

    wrapper.addEventListener("mouseleave", () => {
      if (!mouseDown) isUserInteracting = false;
    });
  }

  /* ---------- Portfolite FAQ Accordion ---------- */
  const faqList = $("#faqList");
  if (faqList && Array.isArray(C.faqs)) {
    C.faqs.forEach((item, i) => {
      const box = el("div", { class: "pf-faq-item reveal" + (i === 0 ? " open" : "") });
      const id = "faq-ans-" + i;
      box.innerHTML = `
        <button class="pf-faq-q" type="button" aria-expanded="${i === 0}" aria-controls="${id}">
          <span>${esc(item.q)}</span>
          <span class="pf-faq-icon" aria-hidden="true"></span>
        </button>
        <div class="pf-faq-a" id="${id}">
          <div><p>${esc(item.a)}</p></div>
        </div>`;
      faqList.append(box);
    });
    faqList.addEventListener("click", (e) => {
      const btn = e.target.closest(".pf-faq-q");
      if (!btn) return;
      const item = btn.parentElement;
      const willOpen = !item.classList.contains("open");
      $$(".pf-faq-item", faqList).forEach((elItem) => {
        elItem.classList.remove("open");
        elItem.querySelector(".pf-faq-q").setAttribute("aria-expanded", "false");
      });
      item.classList.toggle("open", willOpen);
      btn.setAttribute("aria-expanded", willOpen);
    });
  }

  /* ---------- Contact Channels, Form & Footer Social Bar ---------- */
  const K = C.contact || {};
  const contactRows = [
    { key: "whatsapp", label: "WhatsApp", href: (v) => `https://wa.me/${v.replace(/\D/g, "")}`, show: (v) => "+" + v.replace(/\D/g, "") },
    { key: "instagram", label: "Instagram", href: (v) => `https://instagram.com/${v}`, show: (v) => "@" + v },
    { key: "tiktok", label: "TikTok", href: (v) => `https://tiktok.com/@${v}`, show: (v) => "@" + v },
    { key: "youtube", label: "YouTube", href: (v) => `https://youtube.com/@${v}`, show: (v) => "@" + v },
    { key: "website", label: "Zeuswrap HQ", href: (v) => v, show: (v) => shortDomain(v) || v },
    { key: "email", label: "Email", href: (v) => `mailto:${v}` },
  ];
  const cl = $("#contactList");
  if (cl) {
    contactRows.forEach((r) => {
      const v = (K[r.key] || "").trim();
      if (!v) return;
      const li = el("li");
      const ext = !/^(tel|mailto):/.test(r.href(v));
      li.innerHTML = `<a href="${esc(r.href(v))}" ${ext ? 'target="_blank" rel="noopener"' : ""}><span class="c-label">${
        r.label
      }</span><span class="c-value">${esc(r.show ? r.show(v) : v)} ↗</span></a>`;
      cl.append(li);
    });
    [
      ["Studio Location", K.address],
      ["Operating Hours", K.hours],
    ].forEach(([l, v]) => {
      if (!v) return;
      const li = el("li");
      li.innerHTML = `<div class="c-static"><span class="c-label">${l}</span><span class="c-value">${esc(v)}</span></div>`;
      cl.append(li);
    });
  }

  /* Footer Social Bar with 2px Vertical Dividers (Portfolite framer-5xmfup) */
  const footerSocials = $("#footerSocials");
  if (footerSocials) {
    const linksData = [
      K.whatsapp ? { label: "WhatsApp", url: `https://wa.me/${K.whatsapp.replace(/\D/g, "")}` } : null,
      K.instagram ? { label: "Instagram", url: `https://instagram.com/${K.instagram}` } : null,
      K.tiktok ? { label: "TikTok", url: `https://tiktok.com/@${K.tiktok}` } : null,
      K.youtube ? { label: "YouTube", url: `https://youtube.com/@${K.youtube}` } : null,
      K.website ? { label: "Zeuswrap.com", url: K.website } : null,
      C.handwrk && C.handwrk.site ? { label: "Handwrk App", url: C.handwrk.site } : null,
    ].filter(Boolean);

    linksData.forEach((item, idx) => {
      if (idx > 0) footerSocials.append(el("span", { class: "pf-social-sep", "aria-hidden": "true" }));
      footerSocials.append(
        el("a", {
          class: "pf-social-link",
          href: item.url,
          target: "_blank",
          rel: "noopener",
          text: item.label,
        })
      );
    });
  }

  const form = $("#contactForm");
  const note = $("#formNote");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(form));
      const nameInput = form.elements.name;
      nameInput.classList.toggle("invalid", !d.name.trim());
      if (!d.name.trim()) {
        if (note) note.textContent = "Please enter your name.";
        nameInput.focus();
        return;
      }
      const msg =
        `Hi Leslie, I'm ${d.name}.` +
        (d.car ? ` Vehicle: ${d.car}.` : "") +
        (d.service ? ` Service: ${d.service}.` : "") +
        (d.message ? `\n\n${d.message}` : "");
      if (K.whatsapp) {
        window.open(`https://wa.me/${K.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
        if (note) note.textContent = "Opening WhatsApp…";
      } else if (K.email) {
        location.href = `mailto:${K.email}?subject=${encodeURIComponent("Wrap enquiry: " + (d.car || d.name))}&body=${encodeURIComponent(msg)}`;
        if (note) note.textContent = "Opening your email client…";
      }
    });
  }

  /* ---------- Discovery Progress Pill & Reveal All Controls ---------- */
  const discEl = $("#discover");
  const discCount = $("#discoverCount");
  const discArc = $("#discoverArc");
  const revealAllBtn = $("#revealAll");
  const revealAllInlineBtn = $("#revealAllInline");
  const revealAllInlineText = $("#revealAllInlineText");
  const redactGuide = $("#redactGuide");

  function syncRedactGuideState() {
    const allRedacts = $$(".redact");
    if (!allRedacts.length) return;
    const allRevealed = allRedacts.every((r) => r.classList.contains("revealed"));
    if (revealAllInlineBtn) {
      revealAllInlineBtn.classList.toggle("is-revealed", allRevealed);
      revealAllInlineBtn.setAttribute("aria-pressed", allRevealed ? "true" : "false");
    }
    if (revealAllInlineText) {
      revealAllInlineText.textContent = allRevealed ? "All Revealed ✓" : "Reveal All at Once";
    }
    if (redactGuide) {
      redactGuide.classList.toggle("all-revealed", allRevealed);
    }
  }

  function revealAllMilestones() {
    $$(".redact").forEach((r) => {
      r.classList.add("revealed");
      markDiscovered(r.dataset.secret);
    });
    $$(".t-item").forEach((t) => {
      t.classList.add("revealed");
      markDiscovered(t.dataset.secret);
    });
    if (portrait) {
      portrait.classList.add("revealed");
      markDiscovered("portrait");
    }
    syncRedactGuideState();
    nextFact();
  }

  function updateDiscoveryUI() {
    if (!discEl || !discCount || !discArc) return;
    const count = discovered.size;
    discCount.textContent = `${count} / ${totalDiscoverable}`;
    const pct = totalDiscoverable > 0 ? count / totalDiscoverable : 0;
    discArc.style.strokeDashoffset = String(97.4 * (1 - pct));
    if (count > 0) discEl.classList.add("show");
    discEl.classList.toggle("complete", count >= totalDiscoverable && totalDiscoverable > 0);
  }
  updateDiscoveryUI();
  syncRedactGuideState();

  if (revealAllBtn) {
    revealAllBtn.addEventListener("click", revealAllMilestones);
  }
  if (revealAllInlineBtn) {
    revealAllInlineBtn.addEventListener("click", revealAllMilestones);
  }

  /* ---------- Scroll Reveal Observer ---------- */
  const revealIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const n = en.target;
        n.classList.add("in");
        $$("[data-count]", n).forEach(countUp);
        if (n.dataset && n.dataset.count) countUp(n);
        revealIO.unobserve(n);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
  );
  $$(".reveal").forEach((n) => revealIO.observe(n));

  /* ---------- Subtle Magnetic Button Hover ---------- */
  if (finePointer && !reduceMotion) {
    $$(".magnetic").forEach((b) => {
      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
      });
      b.addEventListener("pointerleave", () => (b.style.transform = ""));
    });
  }
})();
