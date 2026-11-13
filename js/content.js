/* =====================================================================
   SITE CONTENT: edit everything here. No need to touch the HTML.
   ---------------------------------------------------------------------
   • Empty strings ("") are hidden on the live site.
   • While SHOW_PLACEHOLDERS is true, empty slots appear as dashed
     "add this" boxes so you can see where they go. Set it to false
     before you launch.
   • In about.paragraphs, wrap words in [[double brackets]] to make them
     interactive highlights that visitors can tap to reveal.
   ===================================================================== */

window.CONTENT = {
  SHOW_PLACEHOLDERS: false,

  person: {
    name: "Leslie Abiola",
    role: "Founder & CEO · Zeuswrap, Zeus3D & Handwrk",
    educationBadge: "MSc International Business · University of Sunderland, UK",
    company: "Zeuswrap",
    location: "Lagos, Nigeria & United Kingdom",
    heroHeading: "I'm *Leslie* *Abiola.*",
    heroSubtitle: "Automotive Entrepreneur · MSc International Business (University of Sunderland, UK)",
    tagline: "Founder & CEO of Zeuswrap, Zeus3D, and Handwrk. Blending international business strategy from the UK with hands-on automotive craftsmanship, Formula 1 culture, and mobility technology across Nigeria and Europe.",
    portrait: "assets/images/leslie-portrait.png",
    secondaryPhoto: "assets/images/leslie-f1-redbull.jpg",
    motorsportPhoto: "assets/images/leslie-redbull.png",
    logo: "assets/images/zeuswrap-logo.png",
  },

  /* Hero showcase cards (Portfolite 3-card bento showcase — puts Leslie Abiola front and center) */
  heroCards: [
    {
      title: "Leslie Abiola · Founder & CEO",
      subtitle: "Trackside · Lagos & UK Automotive Scene",
      image: "assets/images/leslie-portrait.png",
      href: "leslie-abiola.html",
    },
    {
      title: "Leslie Abiola · Formula 1 & Red Bull Racing",
      subtitle: "MSc International Business · University of Sunderland, UK",
      image: "assets/images/leslie-f1-redbull.jpg",
      href: "leslie-abiola.html",
      featured: true,
    },
    {
      title: "Motorsport Engineering & Livery Study",
      subtitle: "European Grand Prix & Supercar Culture",
      image: "assets/images/leslie-redbull.png",
      href: "leslie-abiola.html",
    },
  ],

  /* Secondary signature wraps showcase */
  signatureBuilds: [
    {
      title: "Satin Crimson & Tyre Lettering",
      subtitle: "Zeuswrap Signature Ferrari Build",
      image: "assets/images/wrap-ferrari-red.jpg",
      href: "#work",
    },
    {
      title: "Widebody Supra · Sunburst Yellow",
      subtitle: "Custom Livery & Aero Study",
      image: "assets/images/wrap-supra-yellow.jpg",
      href: "#work",
      featured: true,
    },
    {
      title: "Midnight Viola GT · Full Wrap",
      subtitle: "Gloss Finish & Chrome Delete",
      image: "assets/images/wrap-gt-purple.jpg",
      href: "#work",
    },
  ],

  /* Hero category pills (Portfolite tag strip) */
  heroTags: [
    "Leslie Abiola · Founder & CEO",
    "University of Sunderland (MSc International Business)",
    "Zeuswrap (600+ Vehicles Wrapped)",
    "Zeus3D Motorsport Art",
    "Handwrk Roadside Tech",
    "European Grand Prix & F1 Enthusiast",
    "Lagos · United Kingdom",
  ],

  /* Key metrics banner */
  stats: [
    { value: 2020, label: "Wrapping cars since", plain: true },
    { value: 600, suffix: "+", label: "Vehicles wrapped across NG & UK" },
    { value: 24, suffix: "/7", label: "Studio operations in Lagos" },
    { text: "MSc", label: "Int'l Business · Univ. of Sunderland, UK" },
  ],

  /* Experience & Academic Credentials table (Portfolite style) */
  experience: [
    { role: "Founder & CEO", company: "Zeuswrap (Lagos & UK)", period: "2021 — Present" },
    { role: "Founder & Product Lead", company: "Handwrk Roadside App", period: "2025 — Present" },
    { role: "Founder & Creative Lead", company: "Zeus3D Motorsport Decor", period: "2023 — Present" },
    { role: "MSc, International Business", company: "University of Sunderland, UK", period: "Postgraduate" },
    { role: "Automotive & Surface Wrapper", company: "Independent Craft", period: "2020 — 2021" },
  ],

  /* Full Biographical Profile for the "Who Is Leslie Abiola" page & section */
  biography: {
    fullName: "Leslie Abiola",
    moniker: "Nigeria's Trailblazing Automotive Customization & Mobility Entrepreneur",
    summary:
      "Leslie Abiola is a Nigerian entrepreneur, international business graduate, motorsport aficionado, and the Founder & Chief Executive Officer of Zeuswrap, Zeus3D, and Handwrk. Holding a Master's degree in International Business from the University of Sunderland in the United Kingdom, he bridges global business strategy with precision automotive craftsmanship.",
    university: {
      degree: "Master of Science (MSc) in International Business",
      institution: "University of Sunderland",
      location: "Sunderland, United Kingdom",
      focus: "Global Enterprise Strategy, Cross-Border Value Chains, Brand Positioning & Sustainable Operations",
      narrative:
        "At the University of Sunderland in the United Kingdom, Leslie Abiola earned his Master's degree in International Business. His time in the UK deepened both his academic grasp of global supply chains and his firsthand immersion in British and European motorsport and supercar culture—insights he brought back to scale Zeuswrap into a 24/7 market leader in Nigeria while continuing to execute projects across the UK.",
    },
    chapters: [
      {
        num: "01",
        tag: "Origins & Craft (2020)",
        title: "From Wrapping Laptops to Mastering Automotive Curves",
        body: "Leslie Abiola's journey began not in a multi-bay garage, but at a workbench wrapping laptops, consoles, fridges, and household surfaces with precision vinyl. Obsessed with surface tension, heat memory, and knife-less seam perfection, he transitioned in 2020 from consumer electronics to full vehicle exteriors—proving that patience on small corners translates to factory-grade finishes on supercars.",
      },
      {
        num: "02",
        tag: "Academic Foundation · United Kingdom",
        title: "University of Sunderland — MSc in International Business",
        body: "Determined to build an institution rather than just a workshop, Leslie pursued a Master's degree in International Business at the University of Sunderland in the United Kingdom. Studying international business frameworks equipped him to structure 24/7 studio operations, source premium global PVC and TPU films, and position vehicle wrapping as a high-growth sector within Nigeria's automotive value chain.",
      },
      {
        num: "03",
        tag: "Scaling Zeuswrap (2021 — Present)",
        title: "600+ Vehicles Transformed Across Nigeria & the UK",
        body: "Founded in Lagos in 2021, Zeuswrap quickly became the pulse of Nigeria's car-wrapping movement. Under Leslie's leadership, the studio has transformed over 600 vehicles—ranging from daily sedans and corporate fleets to G-Wagons, Range Rovers, Ferraris, and widebody builds across Nigeria and the UK—championing vinyl and self-healing PPF as safer, eco-friendly alternatives to toxic spray painting.",
      },
      {
        num: "04",
        tag: "Motorsport, Formula 1 & Zeus3D",
        title: "European Grand Prix Culture & Architectural Motorsport Art",
        body: "An avid motorsport enthusiast active in European Grand Prix circles—having driven Formula 1 machinery and studied open-wheel aero liveries firsthand—Leslie launched Zeus3D to bring automotive artistry indoors. Zeus3D designs full-scale Formula 1 wall sculptures and motorsport-inspired interior installations for luxury homes, executive offices, and collectors.",
      },
      {
        num: "05",
        tag: "Mobility Tech · Handwrk (2025 — Present)",
        title: "Solving Everyday Roadside Emergencies in Lagos",
        body: "Recognizing that car care doesn't end in the studio, Leslie founded Handwrk (usehandwrk.com)—an on-demand roadside-assistance platform connecting stranded Lagos motorists with vetted vulcanizers and tow trucks in minutes, complete with live GPS tracking and Paystack escrow protection.",
      },
    ],
    pillars: [
      {
        label: "Academic Pedigree",
        value: "University of Sunderland, UK",
        detail: "Master's Degree (MSc) in International Business",
      },
      {
        label: "Core Ventures",
        value: "Zeuswrap · Zeus3D · Handwrk",
        detail: "Automotive Customization, F1 Interior Art & Roadside Mobility Tech",
      },
      {
        label: "Track Record",
        value: "600+ Vehicles Wrapped",
        detail: "Operating 24/7 in Lagos with builds across Nigeria & the UK",
      },
      {
        label: "Motorsport Passion",
        value: "Formula 1 & Grand Prix",
        detail: "Hands-on F1 driving experience & open-wheel livery studies",
      },
      {
        label: "Industry Advocacy",
        value: "Eco-Conscious Preservation",
        detail: "Championing non-toxic PVC/PPF films & stronger vehicle resale value",
      },
      {
        label: "National Press",
        value: "8+ Major Outlets",
        detail: "Profiled in THISDAY, The Guardian, BusinessDay, The Sun, Daily Trust & P.M. News",
      },
    ],
  },

  /* Facts: one is revealed each time someone taps the car or uses the wrap studio */
  facts: [
    "Leslie Abiola holds a Master's degree in International Business from the University of Sunderland, UK.",
    "He started out wrapping laptops and household items before transitioning to full cars in 2020.",
    "He founded Zeuswrap in Lagos in 2021 and has wrapped 600+ vehicles across Nigeria and the UK.",
    "An avid Formula 1 enthusiast, he has driven F1 cars on the European circuit and founded Zeus3D for F1 wall sculptures.",
    "He has been profiled by THISDAY, BusinessDay, The Guardian, The Sun, Daily Trust, Tribune and P.M. News.",
    "He champions vinyl and PPF as safer, eco-conscious alternatives to chemical spray painting.",
    "Preserved factory paint under a wrap helps Nigerian car owners command stronger resale prices.",
    "He is the founder of Handwrk, an on-demand roadside-assistance app for Lagos drivers.",
  ],

  about: {
    heading: "Who is *Leslie* *Abiola?*",
    paragraphs: [
      "Leslie Abiola is a Nigerian automotive entrepreneur, creative executive, and Founder & CEO of [[Zeuswrap, Zeus3D, and Handwrk]]. He holds a [[Master's degree in International Business]] from the [[University of Sunderland in the United Kingdom]], combining global business strategy with a lifelong passion for cars and Formula 1 motorsport.",
      "His craft started small—wrapping [[laptops, consoles, and household items]]—before moving to full vehicles in [[2020]] and founding Zeuswrap in [[Lagos in 2021]]. Today Zeuswrap is the pulse of Nigeria's car-wrapping culture, with [[more than 600 vehicles]] wrapped across Nigeria and [[the United Kingdom]].",
      "Beyond the studio, Leslie is known within [[European Grand Prix and Formula 1 circles]], creates full-scale motorsport wall art through [[Zeus3D]], and is building [[Handwrk]] to connect stranded Lagos motorists with verified roadside help. He champions precision vinyl and PPF to [[preserve resale value]] while avoiding the [[chemical emissions of spray painting]].",
    ],
    quotes: [
      { text: "We don't just wrap cars—we transform them into reflections of their owners' identities while preserving factory paint and resale value.", source: "Leslie Abiola · THISDAY & The Guardian" },
    ],
    tags: [
      "MSc Int'l Business · Univ. of Sunderland UK",
      "Founder & CEO · Zeuswrap",
      "Founder · Handwrk & Zeus3D",
      "Formula 1 & Grand Prix Culture",
      "600+ Vehicles Wrapped (NG & UK)",
      "Eco-Conscious Auto Preservation",
    ],
  },

  /* Process / Philosophy steps (Portfolite numbered cards) */
  process: [
    {
      num: "01",
      title: "Consultation & Surface Education",
      text: "We guide every car owner not only on which film, finish or colour to choose, but why it matters for their vehicle's body lines, usage and climate.",
    },
    {
      num: "02",
      title: "Precision PVC & Self-Healing PPF",
      text: "Unlike permanent repainting, our precision-cut films deliver an instant overhaul without altering factory paint or exposing technicians to toxic spray chemicals.",
    },
    {
      num: "03",
      title: "Preserved Value & Cultural Statement",
      text: "Guarded against UV fade, dust and traffic abrasions, your original paint stays pristine underneath—protecting resale value while turning heads 24/7.",
    },
  ],

  /* Timeline: cards flip to reveal. Add, remove or reorder freely. */
  timeline: [
    { year: "Origins", title: "Laptops to cars", text: "Started out wrapping laptops and household items, mastering tension, corners and clean edges one surface at a time." },
    { year: "2020", title: "First car wraps", text: "Transitioned from small consumer electronics and furniture to full vehicle exteriors." },
    { year: "2021", title: "Founded Zeuswrap", text: "Launched Zeuswrap in Lagos, operating 24/7 and serving car owners and fleets nationwide." },
    { year: "600+", title: "Vehicles transformed", text: "Sedans, SUVs, supercars and commercial fleets wrapped across Nigeria, the UK and beyond." },
    { year: "Jan 2026", title: "ThisDay & BusinessDay", text: "Profiled by ThisDay as leading Nigeria's car-wrapping scene, and shared expert wrapping insights in BusinessDay." },
    { year: "Mar 2026", title: "Featured in P.M. News", text: "Advocated for deeper local investment across Nigeria's automotive aftermarket value chain." },
    { year: "2026", title: "National recognition", text: "Featured in The Guardian, The Sun, Daily Trust, Tribune, Leadership and Independent." },
    { year: "Now", title: "Building Handwrk", text: "Scaling a roadside-assistance platform connecting Lagos drivers with verified vulcanizers and tow trucks." },
  ],

  /* Media Coverage / News items (used in the infinite momentum-drag carousel) */
  press: [
    {
      image: "assets/news/bd-logo.png",
      logo: "assets/press/bd-logo.png",
      source: "Businessday NG",
      outlet: "Businessday NG",
      title: "Zeuswrap shares essential car wrapping tips",
      snippet: "Car wrapping combines practical protection with powerful brand expression. When done right, you're better positioned to enjoy the full benefits...",
      link: "https://businessday.ng/transport/article/zeuswrap-shares-essential-car-wrapping-tips/",
      url: "https://businessday.ng/transport/article/zeuswrap-shares-essential-car-wrapping-tips/",
    },
    {
      image: "assets/news/guardian.png",
      logo: "assets/press/guardian.webp",
      source: "The Guardian Nigeria",
      outlet: "The Guardian Nigeria",
      title: "Why vinyl car wrapping is better, eco-friendly auto hack",
      snippet: "Zeuswrap CEO explains why wrapping is a safer, sustainable alternative to painting, offering protection while reducing carbon emissions.",
      link: "https://guardian.ng/news/why-vinyl-car-wrapping-is-better-eco-friendly-auto-hack-zeuswrap-ceo/",
      url: "https://guardian.ng/news/why-vinyl-car-wrapping-is-better-eco-friendly-auto-hack-zeuswrap-ceo/",
    },
    {
      image: "assets/news/bd-logo.png",
      logo: "assets/press/bd-logo.png",
      source: "Businessday NG",
      outlet: "Businessday NG",
      title: "Car wrapping in Nigeria's luxury automarket remains largely untapped",
      snippet: "The Nigerian luxury auto market presents a vast untapped potential for businesses to capitalize on the growing trend of vehicle personalization.",
      link: "https://businessday.ng/transport/article/car-wrapping-in-nigerias-luxury-automarket-remains-largely-untapped-zeuswrap-ceo/",
      url: "https://businessday.ng/transport/article/car-wrapping-in-nigerias-luxury-automarket-remains-largely-untapped-zeuswrap-ceo/",
    },
    {
      image: "assets/news/Tribune.png",
      logo: "assets/press/Tribune.png",
      source: "Tribune Online",
      outlet: "Tribune Online",
      title: "Why more Nigerians should explore car wrapping",
      snippet: "Car customization is evolving from luxury to self-expression. Zeuswrap leads the charge, encouraging Nigerians to explore the benefits of wrapping.",
      link: "https://tribuneonlineng.com/why-more-nigerians-should-explore-car-wrapping-zeuswrap/",
      url: "https://tribuneonlineng.com/why-more-nigerians-should-explore-car-wrapping-zeuswrap/",
    },
    {
      image: "assets/news/this-day-live.png",
      logo: "assets/press/this-day-live.png",
      source: "THISDAYLIVE",
      outlet: "THISDAYLIVE",
      title: "Why Zeuswrap Is Leading Nigeria's Car Wrapping Scene",
      snippet: "Zeuswrap transforms cars into reflections of their owners' identities, combining innovative techniques with customer-focused service.",
      link: "https://www.thisdaylive.com/2026/01/16/why-zeuswrap-is-leading-nigerias-car-wrapping-scene/",
      url: "https://www.thisdaylive.com/2026/01/16/why-zeuswrap-is-leading-nigerias-car-wrapping-scene/",
    },
    {
      image: "assets/news/pm-news.svg",
      logo: "assets/press/pm-news.svg",
      source: "P.M. News",
      outlet: "P.M. News",
      title: "Zeuswrap: Why More Nigerians Should Invest in Nigeria's Automotive Sector",
      snippet: "Zeuswrap's CEO highlights Nigeria's fast-growing auto market and urges investors to back local value chains, from assembly to aftermarket services and finance.",
      link: "https://pmnewsnigeria.com/2026/03/03/zeuswrap-why-more-nigerians-should-invest-in-nigerias-automotive-sector/",
      url: "https://pmnewsnigeria.com/2026/03/03/zeuswrap-why-more-nigerians-should-invest-in-nigerias-automotive-sector/",
    },
    {
      image: "assets/news/daily-trust.svg",
      logo: "assets/press/daily-trust.svg",
      source: "Daily Trust",
      outlet: "Daily Trust",
      title: "Firm champions safer car maintenance culture",
      snippet: "Daily Trust reports how Zeuswrap is promoting preventive exterior protection with vinyl wraps and PPF to support vehicle longevity, safety, and resale value.",
      link: "https://dailytrust.com/firm-champions-safer-car-maintenance-culture/",
      url: "https://dailytrust.com/firm-champions-safer-car-maintenance-culture/",
    },
    {
      image: "assets/news/the-sun.jpg",
      logo: "assets/press/the-sun.jpg",
      source: "The Sun Nigeria",
      outlet: "The Sun Nigeria",
      title: "How Zeuswrap is trailblazing Nigeria's car wrapping culture",
      snippet: "The Sun spotlights Zeuswrap's role in popularising vinyl wrapping as a safer, customizable way for Nigerians to protect and personalise their vehicles.",
      link: "https://thesun.ng/how-zeuswrap-is-trailblazing-nigerias-car-wrapping-culture/",
      url: "https://thesun.ng/how-zeuswrap-is-trailblazing-nigerias-car-wrapping-culture/",
    },
    {
      image: "assets/news/independent.jpg",
      logo: "assets/press/independent.jpg",
      source: "Independent Nigeria",
      outlet: "Independent Nigeria",
      title: "Nigeria's Booming Car Vinyl Wrapping Industry: FAQs, Facts & Expert Insights – Zeuswrap",
      snippet: "Independent breaks down key FAQs on car vinyl wrapping in Nigeria, with Zeuswrap explaining benefits, lifespan, costs, and care for wrapped vehicles.",
      link: "https://independent.ng/nigerias-booming-car-vinyl-wrapping-industry-faqs-facts-expert-insights-zeuswrap/",
      url: "https://independent.ng/nigerias-booming-car-vinyl-wrapping-industry-faqs-facts-expert-insights-zeuswrap/",
    },
  ],

  /* Wrap studio colours for the 3D car (the first one is the default) */
  wrapColors: [
    { name: "Racing Red", hex: "#c8102e" },
    { name: "Midnight Viola", hex: "#4b2a8a" },
    { name: "Sunburst Yellow", hex: "#f5b700" },
    { name: "Pearl White", hex: "#ecebe6" },
    { name: "Obsidian Black", hex: "#0d0d0f" },
    { name: "Nardo Grey", hex: "#7d8186" },
    { name: "British Emerald", hex: "#0f6b4a" },
    { name: "Papaya Spark", hex: "#ff6a13" },
  ],
  wrapFinishes: ["Gloss", "Satin", "Matte", "Chrome", "Colour-shift"],

  /* Services: `preview` (optional) shows that finish on the 3D car */
  services: [
    { name: "Colour-Change Wraps", text: "Full or partial exterior transformations in gloss, satin and matte—reversible at any time while keeping factory paint untouched.", preview: { finish: "Satin" } },
    { name: "Paint Protection Film (PPF)", text: "Self-healing optically clear or stealth PPF engineered to shield high-value vehicles from stone chips, road debris, dust and harsh sun.", preview: { finish: "Gloss" } },
    { name: "Chrome & Colour-Shift", text: "Mirror chrome, iridescent colour-shift and metallic flake films that command attention from every angle.", preview: { finish: "Colour-shift" } },
    { name: "Fleet & Commercial Branding", text: "Turn corporate vehicles and delivery fleets into high-impact moving billboards with durable commercial-grade vinyl." },
    { name: "Accents & Chrome Delete", text: "Blackout packages for roofs, bonnets, window trims, grilles and badges—subtle details that sharpen a vehicle's stance.", preview: { finish: "Matte" } },
    { name: "Window Tinting & Tyre Lettering", text: "Heat-rejecting ceramic tints for cabin comfort and privacy, paired with raised motorsport-grade sidewall lettering." },
    { name: "Custom Liveries & Decals", text: "Bespoke racing stripes, graphics and one-off designs plotted and installed with factory-level seam precision." },
    { name: "Gadgets & Interior Surfaces", text: "Where the journey began: precision skinning for laptops, consoles, architectural surfaces and household items." },
  ],

  /* Gallery: work photos & Leslie's automotive moments */
  gallery: [
    { src: "assets/images/wrap-ferrari-red.jpg", title: "Ferrari · Satin Crimson & Pirelli Lettering", location: "Nigeria" },
    { src: "assets/images/wrap-supra-yellow.jpg", title: "Widebody GR Supra · Sunburst Yellow", location: "UK" },
    { src: "assets/images/wrap-gt-purple.jpg", title: "Grand Tourer · Midnight Viola Gloss & Tyre Lettering", location: "Nigeria" },
    { src: "assets/images/leslie-f1-redbull.jpg", title: "Leslie Abiola · Oracle Red Bull Racing F1 Study", location: "UK" },
    { src: "assets/images/leslie-portrait.png", title: "Leslie Abiola · Trackside Classic", location: "Nigeria" },
    { src: "assets/images/leslie-redbull.png", title: "Motorsport Heritage · Aero & Livery Inspection", location: "UK" },
  ],
  galleryPlaceholderCount: 6,

  /* Handwrk: Leslie's current build */
  handwrk: {
    name: "Handwrk",
    tagline: "Stuck on the road? Verified help is minutes away.",
    summary: "On-demand roadside assistance built for Lagos drivers. Handwrk connects stranded motorists with vetted vulcanizers for flat tyres and with tow trucks for breakdowns, accidents and safe recovery.",
    site: "https://usehandwrk.com",
    driverUrl: "https://user.usehandwrk.com",
    proUrl: "https://artisan.usehandwrk.com",
    coverage: ["Lekki", "Ajah", "Victoria Island", "Ikoyi", "Ikeja", "Yaba", "Surulere", "Gbagada"],
    steps: [
      { title: "Request help", text: "Share your live location and select tyre repair or towing.", status: "Finding the nearest verified pro…" },
      { title: "Get matched", text: "The closest online vulcanizer or tow operator is dispatched immediately.", status: "Matched: Tow truck · 2.1 km away" },
      { title: "Track live", text: "Follow your responder's real-time GPS route on the map.", status: "Responder arriving in 6 mins" },
      { title: "Approve the quote", text: "Review a transparent, itemised quote before any work begins.", status: "Quote ready for your approval" },
      { title: "Pay safely via escrow", text: "Funds are held securely via Paystack and released only when you sign off.", status: "Paid & job complete ✓" },
    ],
    features: [
      "Upfront call-out fee",
      "Escrow protection via Paystack",
      "Card, transfer or USSD",
      "Book rescue for family or friends",
      "Instant web app — no download",
    ],
  },

  /* FAQ section (Portfolite accordion style) */
  faqs: [
    {
      q: "How does vinyl wrapping compare to repainting my car?",
      a: "Unlike traditional spray painting—which permanently alters your car's factory coat, takes weeks, and involves hazardous chemical emissions—vinyl wrapping is completely reversible, faster to install, and preserves the original manufacturer paintwork underneath.",
    },
    {
      q: "Does wrapping or PPF help with vehicle resale value in Nigeria?",
      a: "Yes. In Nigeria's dynamic climate and dense urban traffic, factory paint often suffers from UV fading, dust and minor scratches. Buyers increasingly pay a premium for wrapped vehicles because peeling back the film reveals untouched, factory-fresh paint.",
    },
    {
      q: "What is the difference between a vinyl wrap and Paint Protection Film (PPF)?",
      a: "Vinyl wraps are designed primarily for restyling—giving you hundreds of colours, matte, satin, chrome and colour-shift textures with light surface protection. PPF is a thicker, self-healing urethane film engineered specifically to absorb stone chips, scratches and road abrasions.",
    },
    {
      q: "Where does Zeuswrap operate, and what are your studio hours?",
      a: "Our flagship studio is based in Lagos and operates 24/7 to accommodate tight schedules and fleet turnarounds. We serve clients across Nigeria and have also executed projects in the UK.",
    },
    {
      q: "What is Handwrk and how can I use it?",
      a: "Handwrk (usehandwrk.com) is Leslie Abiola's roadside-assistance platform in Lagos. It connects drivers with verified vulcanizers and tow trucks on a live GPS map with upfront pricing and Paystack escrow protection.",
    },
  ],

  /* Contact: prefilled from zeuswraphq.com. Change anything, or leave "" to hide it. */
  contact: {
    whatsapp: "2347055711237",  // international format, digits only
    phone: "",                  // e.g. "+234 801 234 5678"
    email: "",                  // e.g. "hello@zeuswraphq.com"
    instagram: "zeuswrap_",     // handle without @
    tiktok: "zeuswrap",         // handle without @
    youtube: "zeuswrap",        // channel handle without @
    facebook: "zeuswrap",       // page name
    linkedin: "",               // full URL (Leslie's personal profile)
    x: "",                      // handle without @
    website: "https://zeuswraphq.com",
    address: "Lagos, Nigeria",
    hours: "Open 24/7",
  },
};
