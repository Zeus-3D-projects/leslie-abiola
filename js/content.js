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
    location: "Lagos, Nigeria & Working with Partners in the UK",
    heroHeading: "I'm *Leslie* *Abiola.*",
    heroSubtitle: "Automotive Entrepreneur · MSc International Business (University of Sunderland, UK)",
    tagline: "Founder & CEO of Zeuswrap, Zeus3D, and Handwrk. After wrapping his very first car, a Mikano Geely Coolray, in 2020, Leslie combined international business strategy from the UK with hands-on automotive craftsmanship, now wrapping 600+ vehicles in Lagos and working with partners in the UK.",
    portrait: "assets/images/leslie-portrait.png",
    secondaryPhoto: "assets/images/leslie-f1-redbull.jpg",
    motorsportPhoto: "assets/images/leslie-redbull.png",
    logo: "assets/images/zeuswrap-logo.png",
  },

  /* Hero showcase cards (Portfolite 3-card bento showcase · puts Leslie Abiola front and center) */
  heroCards: [
    {
      title: "Leslie Abiola · Porsche 963 Prototype Study",
      subtitle: "Founder & CEO · Zeuswrap, Zeus3D & Handwrk",
      image: "assets/images/lesie biography image.jpeg",
      alt: "Leslie Abiola kneeling beside a red, white, and black #7 Porsche 963 Penske Motorsport prototype race car, inspecting its Michelin racing slicks and aerodynamic bodywork.",
      href: "leslie-abiola.html",
    },
    {
      title: "Live Craft · Custom Tyre Lettering & Wrap",
      subtitle: "Autoplay Work Reel · Midnight Viola Ferrari",
      video: "assets/images/lesie.mp4",
      poster: "assets/images/leslie-portrait.png",
      alt: "Autoplaying video of Leslie Abiola kneeling in a high-visibility safety vest hand-installing custom white tyre lettering onto the wheel of a Midnight Viola purple wrapped Ferrari with yellow brake calipers.",
      href: "#videoShowcase",
      featured: true,
    },
    {
      title: "MSc International Business · Graduation",
      subtitle: "University of Sunderland, United Kingdom",
      image: "assets/images/lesie abiola edu.jpeg",
      alt: "Leslie Abiola in his University of Sunderland Master's graduation gown, mortarboard cap, and gold-and-orange academic hood standing outside the brick campus building in Sunderland, United Kingdom.",
      href: "leslie-abiola.html#education",
    },
  ],

  /* Secondary signature wraps & F1 showcase */
  signatureBuilds: [
    {
      title: "Lamborghini Urus · Client Handover Reaction",
      subtitle: "Autoplay Work Reel · \"Yo, Zeuswraps, it's a wrap!\"",
      video: "assets/images/client happy.mp4",
      poster: "assets/images/wrap-ferrari-red.jpg",
      alt: "Video of an excited client unveiling his freshly wrapped crimson-red Lamborghini Urus SUV in Lagos and shouting 'Yo, Zeuswraps, it's a wrap!'",
      href: "#videoShowcase",
    },
    {
      title: "McLaren Senna · Carbon-Fiber Wrap Craft",
      subtitle: "Autoplay Work Reel · Leslie Abiola Hands-On",
      video: "assets/images/leslie working on a black car.mp4",
      poster: "assets/images/leslie-portrait.png",
      alt: "Video of Leslie Abiola in a red cap and high-visibility safety vest using a heat gun to precision-wrap the rear diffuser and carbon-fiber wing of a McLaren Senna supercar alongside a Mercedes-AMG G63 and Rolls-Royce.",
      href: "#videoShowcase",
      featured: true,
    },
    {
      title: "McLaren F1 Watch Party · Zeus3D Showcase",
      subtitle: "3D-Printed Oracle Red Bull & Monster F1 Sculpture",
      image: "assets/images/lesie abiola 3d .jpeg",
      alt: "Leslie Abiola smiling alongside two Monster Energy brand ambassadors at The McLaren Mastercard Formula 1 Team Watch Party, showcasing his custom Zeus3D 3D-printed Formula 1 car sculpture with ZEUS3D tyre lettering.",
      href: "#videoShowcase",
    },
  ],

  /* University of Sunderland (UK) Graduation & Academic Photo Series */
  educationGallery: [
    {
      src: "assets/images/lesie abiola edu.jpeg",
      title: "University of Sunderland Campus · Graduation Day",
      subtitle: "MSc International Business · Sunderland, UK",
      alt: "Leslie Abiola in his University of Sunderland Master's graduation gown, mortarboard cap, and gold-and-orange academic hood standing outside the red-brick campus building in Sunderland, United Kingdom.",
    },
    {
      src: "assets/images/lesie bio edu.jpeg",
      title: "Stadium of Light Ceremony · Academic Regalia",
      subtitle: "Postgraduate Conferral · United Kingdom",
      alt: "Leslie Abiola celebrating his MSc in International Business graduation from the University of Sunderland in full academic regalia inside Sunderland AFC's Stadium of Light hall, framed by Niall Quinn's iconic #9 Sunderland jerseys.",
    },
    {
      src: "assets/images/lesie bio edu1.jpeg",
      title: "MSc International Business · Honours Hall",
      subtitle: "University of Sunderland, UK",
      alt: "Leslie Abiola wearing his University of Sunderland postgraduate cap, gown, and camel coat in front of framed Sunderland #9 football shirts during his UK graduation ceremony.",
    },
    {
      src: "assets/images/lesie bio edu 3.jpeg",
      title: "Postgraduate Portrait · Sunderland, UK",
      subtitle: "Bridging Global Strategy & Automotive Craft",
      alt: "Full-length portrait of Leslie Abiola in his University of Sunderland Master's degree academic gown, mortarboard cap, and yellow hood standing on wooden flooring in the United Kingdom.",
    },
  ],

  /* Autoplaying Work & Process Videos (Zeuswrap & Zeus3D in action) */
  workVideos: [
    {
      src: "assets/images/leslie working on a black car.mp4",
      tag: "McLaren Senna · Founder Hands-On",
      title: "Precision Carbon-Fiber & Heat-Gun Work on a McLaren Senna",
      caption: "Leslie Abiola using a heat gun and precision squeegee on the rear diffuser and swan-neck wing of a McLaren Senna alongside a Mercedes-AMG G63 and Rolls-Royce.",
      alt: "Video of Leslie Abiola in a red cap and high-visibility safety vest using a heat gun to precision-wrap the rear diffuser and carbon-fiber wing of a McLaren Senna supercar alongside a Mercedes-AMG G63 and Rolls-Royce.",
    },
    {
      src: "assets/images/beautiful lack car wrap done.mp4",
      tag: "Completed Supercar Build",
      title: "Gloss Woven Carbon-Fiber Finish & Hydrophobic Beading",
      caption: "Close-up walkaround of the completed gloss woven carbon-fiber wrap on the McLaren Senna, showcasing water-beading protection across the side intake and rear wing.",
      alt: "Close-up walkaround video of a completed gloss woven carbon-fiber wrap on a McLaren Senna supercar with hydrophobic water beading on the side intake and rear wing.",
    },
    {
      src: "assets/images/client happy.mp4",
      tag: "Client Handover · Lamborghini Urus",
      title: "\"Yo, Zeuswraps, It's a Wrap!\" · Client Reveal Reaction",
      caption: "Celebration at handover as a client unveils his freshly wrapped crimson-red Lamborghini Urus SUV in Lagos, praising the Zeuswrap finish.",
      alt: "Video of an excited client unveiling his freshly wrapped crimson-red Lamborghini Urus SUV in Lagos and shouting 'Yo, Zeuswraps, it's a wrap!'",
    },
    {
      src: "assets/images/leslie abiola team wrap.mp4",
      tag: "Zeuswrap Crew · 24/7 Studio",
      title: "Satin Pearl-White Luxury SUV Wrap Installation",
      caption: "Leslie Abiola and the Zeuswrap crew in branded yellow safety vests laying a seamless satin pearl-white wrap across a full-size SUV under hexagonal studio lights.",
      alt: "Video of the Zeuswrap team in branded yellow ZEUSWRAP safety vests installing a satin pearl-white vinyl wrap on a full-size luxury SUV under hexagonal studio lighting.",
    },
    {
      src: "assets/images/lesie.mp4",
      tag: "Zeuswrap Live Craft · Lagos",
      title: "Hands-On Ferrari Tyre Lettering & Midnight Viola Wrap",
      caption: "Leslie Abiola personally installing raised motorsport-grade white tyre lettering onto a Midnight Viola purple wrapped Ferrari with yellow brake calipers.",
      alt: "Video of Leslie Abiola kneeling outdoors in a high-visibility vest hand-applying custom white tyre lettering onto the wheel of a Midnight Viola purple wrapped Ferrari with yellow brake calipers.",
    },
    {
      src: "assets/images/zeus 3d new.mp4",
      tag: "Zeus3D Studio · Custom Pedestal",
      title: "F1 Barrel Pedestal, Framed Wall Art & Collector Studio",
      caption: "Inside the Zeus3D studio surrounded by wall-mounted F1 race car frames and a Michelin Sport 4S tyre while applying the Zeus3D badge onto an F1 barrel pedestal.",
      alt: "Video inside the Zeus3D studio showing wall-mounted framed Formula 1 race car art, a Michelin Sport 4S display tyre, and hand-application of the Zeus3D logo decal onto a custom gloss-black Formula 1 barrel pedestal with rotating supercar models.",
    },
    {
      src: "assets/images/people working on 3d.mp4",
      tag: "Zeus3D Team Assembly",
      title: "Fitting the 3D-Printed F1 Nose Cone, Front Wing & Diffuser",
      caption: "Leslie Abiola collaborating with the Zeus3D engineering team to align the 3D-printed front wing assembly and ZEUS 3D signed nose cone onto the carbon floor pan.",
      alt: "Video of Leslie Abiola and two Zeus3D engineers assembling the 3D-printed front wing, nose cone signed with ZEUS 3D, and aerodynamic floor diffuser of a large-scale Formula 1 car sculpture.",
    },
    {
      src: "assets/images/the 3d model .mp4",
      tag: "Zeus3D Reveal · Detail Pan",
      title: "Nose-to-Tail Showcase of the 3D-Printed Oracle Red Bull F1 Car",
      caption: "Close-up studio pan across the custom ZEUS3D tyre lettering, Bybit and Pirelli logos, TAG Heuer airbox, and the F1 collector barrel in the background.",
      alt: "Close-up panning video from nose to tail of the completed Zeus3D 3D-printed Oracle Red Bull Racing Formula 1 car showcasing ZEUS3D white tyre lettering, Bybit and Pirelli branding, and the F1 barrel pedestal.",
    },
    {
      src: "assets/images/zeus 3d process2.mp4",
      tag: "Zeus3D Engineering · Founder Hands-On",
      title: "Detailing the 3D-Printed Oracle Red Bull F1 Airbox & Engine Cover",
      caption: "Leslie Abiola assembling and finishing the 3D-printed orange-and-white Oracle Red Bull Racing & TAG Heuer engine cover module for a custom Zeus3D Formula 1 sculpture.",
      alt: "Video of Leslie Abiola in a red cap and black athletic jacket carefully assembling and detailing the 3D-printed Oracle Red Bull Racing engine cover and airbox on a worktable.",
    },
    {
      src: "assets/images/zeus 3d process.mp4",
      tag: "Zeus3D Production Process",
      title: "Mounting the 3D-Printed F1 Monocoque onto the Carbon Floor Pan",
      caption: "Inside the Zeus3D build process: fitting the multi-part 3D-printed Formula 1 monocoque and nose cone onto the aerodynamic underbody floor and front wing assembly.",
      alt: "Video showing the Zeus3D team fitting the 3D-printed white and orange Oracle Red Bull Racing and Citrix Formula 1 monocoque body onto the black floor pan and front wing assembly.",
    },
    {
      src: "assets/images/zeus 3d.mp4",
      tag: "Zeus3D Completed Build Showcase",
      title: "Completed Large-Scale 3D-Printed Formula 1 Sculpture",
      caption: "Full side-profile studio reveal of the finished Zeus3D 3D-printed Formula 1 race car featuring Oracle Red Bull livery, TAG Heuer & Pirelli branding, and custom ZEUS3D tyre lettering.",
      alt: "Studio showcase video of the completed Zeus3D large-scale 3D-printed Formula 1 race car with Oracle Red Bull Racing livery, Bybit, Mobil 1, Pirelli logos, and custom ZEUS3D white tyre lettering.",
    },
  ],

  /* Zeus3D & Formula 1 Watch Party Showcase Photos */
  zeus3dGallery: [
    {
      src: "assets/images/lesie abiola 3d.jpeg",
      title: "Zeus3D Formula 1 Sculpture · Driver Figurines Edition",
      subtitle: "Bespoke 3D-Printed Motorsport Art",
      alt: "Close-up studio photograph of a custom Zeus3D 3D-printed Formula 1 race car sculpture featuring the Zeus3D logo on the cockpit halo and three helmeted F1 driver figurines in orange, green, and white racing suits.",
    },
    {
      src: "assets/images/lesie abiola 3d .jpeg",
      title: "Leslie Abiola at The McLaren Mastercard F1 Watch Party",
      subtitle: "Exhibiting Zeus3D with Monster Energy",
      alt: "Leslie Abiola smiling alongside two Monster Energy brand ambassadors at The McLaren Mastercard Formula 1 Team Watch Party, displaying his custom Zeus3D 3D-printed Formula 1 car sculpture.",
    },
    {
      src: "assets/images/lesie abiola 3d 1.jpeg",
      title: "McLaren F1 Team Watch Party · Fan Reaction",
      subtitle: "Zeus3D Live Exhibition",
      alt: "Motorsport fan giving a double thumbs-up behind the custom Zeus3D 3D-printed Formula 1 race car model displayed at The McLaren Mastercard Formula 1 Team Watch Party.",
    },
    {
      src: "assets/images/lesie abiola 3d 2.jpeg",
      title: "Guests with the Zeus3D F1 Sculpture",
      subtitle: "McLaren Formula 1 Team Watch Party",
      alt: "Two guests smiling and posing behind the custom Zeus3D 3D-printed Formula 1 car sculpture with ZEUS3D tyre lettering and miniature F1 driver figurines at the McLaren Watch Party.",
    },
  ],

  /* Hero category pills (Portfolite tag strip) */
  heroTags: [
    "Leslie Abiola · Founder & CEO",
    "University of Sunderland (MSc International Business)",
    "First Wrap: Mikano Geely Coolray (2020)",
    "Zeuswrap (600+ Vehicles Wrapped)",
    "Working with Partners in the UK",
    "Zeus3D Motorsport Art",
    "Handwrk Roadside Tech",
  ],

  /* Key metrics banner */
  stats: [
    { value: 2020, label: "First wrap: Mikano Geely Coolray", plain: true },
    { value: 600, suffix: "+", label: "Vehicles wrapped in NG & with UK partners" },
    { value: 24, suffix: "/7", label: "Studio operations in Lagos" },
    { text: "MSc", label: "Int'l Business · Univ. of Sunderland, UK" },
  ],

  /* Experience & Academic Credentials table (Portfolite style) */
  experience: [
    { role: "Founder & CEO", company: "Zeuswrap (Lagos & With UK Partners)", period: "2021 to Present" },
    { role: "Founder & Product Lead", company: "Handwrk Roadside App", period: "2025 to Present" },
    { role: "Founder & Creative Lead", company: "Zeus3D Motorsport Decor", period: "2023 to Present" },
    { role: "MSc, International Business", company: "University of Sunderland, UK", period: "Postgraduate" },
    { role: "First Car Wrap: Mikano Geely Coolray", company: "Independent Surface Craft", period: "2020 to 2021" },
  ],

  /* Full Biographical Profile for the "Who Is Leslie Abiola" page & section */
  biography: {
    fullName: "Leslie Abiola",
    moniker: "Nigeria's Trailblazing Automotive Customization & Mobility Entrepreneur",
    summary:
      "Leslie Abiola is a Nigerian entrepreneur, international business graduate, motorsport aficionado, and the Founder & Chief Executive Officer of Zeuswrap, Zeus3D, and Handwrk. Starting with his very first car wrap, a Mikano Geely Coolray, and earning a Master's degree in International Business from the University of Sunderland in the United Kingdom, he leads 24/7 operations in Lagos while working with partners in the UK.",
    university: {
      degree: "Master of Science (MSc) in International Business",
      institution: "University of Sunderland",
      location: "Sunderland, United Kingdom",
      focus: "Global Enterprise Strategy, Cross-Border Value Chains, Brand Positioning & UK Partnerships",
      narrative:
        "At the University of Sunderland in the United Kingdom, Leslie Abiola earned his Master's degree in International Business. His time in the UK deepened both his academic grasp of global supply chains and his firsthand immersion in British and European motorsport culture, laying the foundation for cross-border collaboration as he scales Zeuswrap 24/7 in Nigeria and continues working with partners in the UK.",
    },
    chapters: [
      {
        num: "01",
        tag: "Origins & First Wrap · Mikano Geely Coolray",
        title: "From Wrapping Laptops to His First Car: The Mikano Geely Coolray",
        body: "Leslie Abiola's journey began not in a multi-bay garage, but at a workbench wrapping laptops, consoles, fridges, and household surfaces with precision vinyl. Obsessed with surface tension, heat memory, and knife-less seam perfection, he took on his very first full car wrap in 2020 on a Mikano Geely Coolray, proving that patience on small corners translates cleanly to complete vehicle exteriors, luxury sedans, and supercars.",
      },
      {
        num: "02",
        tag: "Academic Foundation · United Kingdom",
        title: "University of Sunderland · MSc in International Business",
        body: "Determined to build an institution rather than just a workshop, Leslie pursued a Master's degree in International Business at the University of Sunderland in the United Kingdom. Studying international business frameworks equipped him to structure 24/7 studio operations, source premium global PVC and TPU films, and build lasting collaborations with partners in the UK.",
      },
      {
        num: "03",
        tag: "Scaling Zeuswrap (2021 to Present)",
        title: "600+ Vehicles Transformed in Lagos & With Partners in the UK",
        body: "Founded in Lagos in 2021, Zeuswrap quickly became the pulse of Nigeria's car-wrapping movement. Under Leslie's leadership, and working closely with partners in the UK, the studio has transformed over 600 vehicles, from Mikano crossovers, sedans, and corporate fleets to Lamborghini Urus SUVs, McLaren Senna carbon finishes, Ferraris, and G-Wagons, championing vinyl and PPF as safer, eco-friendly alternatives to toxic spray painting.",
      },
      {
        num: "04",
        tag: "Motorsport, Formula 1 & Zeus3D",
        title: "European Grand Prix Culture & Architectural Motorsport Art",
        body: "An avid motorsport enthusiast active in European Grand Prix circles, having driven Formula 1 machinery and studied open-wheel aero liveries firsthand, Leslie launched Zeus3D to bring automotive artistry indoors. Zeus3D engineers 3D-printed large-scale Formula 1 race cars, custom barrel pedestals, and framed F1 wall sculptures for luxury homes, executive offices, and watch parties.",
      },
      {
        num: "05",
        tag: "Mobility Tech · Handwrk (2025 to Present)",
        title: "Solving Everyday Roadside Emergencies in Lagos",
        body: "Recognizing that car care doesn't end in the studio, Leslie founded Handwrk (usehandwrk.com), an on-demand roadside-assistance platform connecting stranded Lagos motorists with vetted vulcanizers and tow trucks in minutes, complete with live GPS tracking and Paystack escrow protection.",
      },
    ],
    pillars: [
      {
        label: "Academic Pedigree",
        value: "University of Sunderland, UK",
        detail: "Master's Degree (MSc) in International Business",
      },
      {
        label: "Very First Car Wrap",
        value: "Mikano Geely Coolray (2020)",
        detail: "Marked his transition from wrapping laptops & household surfaces to full cars",
      },
      {
        label: "Global Collaboration",
        value: "Working With Partners in the UK",
        detail: "24/7 Lagos flagship studio paired with UK automotive & motorsport partners",
      },
      {
        label: "Core Ventures",
        value: "Zeuswrap · Zeus3D · Handwrk",
        detail: "600+ vehicles wrapped, F1 3D art installations & roadside mobility tech",
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
    "Leslie Abiola's very first full car wrap in 2020 was a Mikano Geely Coolray.",
    "He holds a Master's degree in International Business from the University of Sunderland, UK.",
    "He started out wrapping laptops and household items before transitioning to full cars.",
    "He founded Zeuswrap in Lagos in 2021, transforming 600+ vehicles and working with partners in the UK.",
    "An avid Formula 1 enthusiast, he has driven F1 cars on the European circuit and founded Zeus3D for F1 sculptures.",
    "He has been profiled by THISDAY, BusinessDay, The Guardian, The Sun, Daily Trust, Tribune and P.M. News.",
    "He champions vinyl and PPF as safer, eco-conscious alternatives to chemical spray painting.",
    "He is the founder of Handwrk, an on-demand roadside-assistance app for Lagos drivers.",
  ],

  about: {
    heading: "Who is *Leslie* *Abiola?*",
    paragraphs: [
      "Leslie Abiola is a Nigerian automotive entrepreneur, creative executive, and Founder & CEO of [[Zeuswrap, Zeus3D, and Handwrk]]. He holds a [[Master's degree in International Business]] from the [[University of Sunderland in the United Kingdom]], combining global business strategy with a lifelong passion for cars and Formula 1 motorsport.",
      "His craft started small, wrapping [[laptops and household items]] before completing his very first full car wrap on a [[Mikano Geely Coolray in 2020]] and founding Zeuswrap in [[Lagos in 2021]]. Today he has transformed [[more than 600 vehicles]] across Nigeria while actively [[working with partners in the UK]].",
      "Beyond the studio, Leslie is known within [[European Grand Prix and Formula 1 circles]], creates large-scale F1 builds and wall art through [[Zeus3D]], and is building [[Handwrk]] to connect stranded Lagos motorists with verified roadside help. He champions precision vinyl and PPF to [[preserve resale value]] while avoiding the [[chemical emissions of spray painting]].",
    ],
    quotes: [
      { text: "We don't just wrap cars, we transform them into reflections of their owners' identities while preserving factory paint and resale value.", source: "Leslie Abiola · THISDAY & The Guardian" },
    ],
    tags: [
      "MSc Int'l Business · Univ. of Sunderland UK",
      "First Car Wrap: Mikano Geely Coolray",
      "Working With Partners in the UK",
      "Founder & CEO · Zeuswrap, Zeus3D & Handwrk",
      "Formula 1 & Grand Prix Culture",
      "600+ Vehicles Transformed",
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
      text: "Guarded against UV fade, dust and traffic abrasions, your original paint stays pristine underneath, protecting resale value while turning heads 24/7.",
    },
  ],

  /* Timeline: cards flip to reveal. Add, remove or reorder freely. */
  timeline: [
    { year: "Origins", title: "Laptops to cars", text: "Started out wrapping laptops and household items, mastering tension, corners and clean edges one surface at a time." },
    { year: "2020", title: "First wrap: Mikano Geely Coolray", text: "Completed his very first full car wrap on a Mikano Geely Coolray, marking his leap into automotive restyling." },
    { year: "2021", title: "Founded Zeuswrap", text: "Launched Zeuswrap in Lagos, operating 24/7 and serving car owners and fleets nationwide." },
    { year: "MSc UK", title: "University of Sunderland", text: "Earned a Master's degree in International Business in the UK and built strong ties working with partners in the UK." },
    { year: "600+", title: "Vehicles & UK partners", text: "Sedans, SUVs, McLarens, Lamborghini Urus SUVs, Ferraris and fleets wrapped in Nigeria and with partners in the UK." },
    { year: "Zeus3D", title: "F1 sculptures & watch parties", text: "Expanded into 3D-printed Formula 1 cars and wall sculptures exhibited at F1 watch parties and luxury interiors." },
    { year: "2026", title: "National recognition", text: "Profiled in THISDAY, The Guardian, BusinessDay, P.M. News, The Sun, Daily Trust, Tribune and Independent." },
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
    { name: "Colour-Change Wraps", text: "Full or partial exterior transformations in gloss, satin and matte, reversible at any time while keeping factory paint untouched.", preview: { finish: "Satin" } },
    { name: "Paint Protection Film (PPF)", text: "Self-healing optically clear or stealth PPF engineered to shield high-value vehicles from stone chips, road debris, dust and harsh sun.", preview: { finish: "Gloss" } },
    { name: "Chrome & Colour-Shift", text: "Mirror chrome, iridescent colour-shift and metallic flake films that command attention from every angle.", preview: { finish: "Colour-shift" } },
    { name: "Fleet & Commercial Branding", text: "Turn corporate vehicles and delivery fleets into high-impact moving billboards with durable commercial-grade vinyl." },
    { name: "Accents & Chrome Delete", text: "Blackout packages for roofs, bonnets, window trims, grilles and badges, with subtle details that sharpen a vehicle's stance.", preview: { finish: "Matte" } },
    { name: "Window Tinting & Tyre Lettering", text: "Heat-rejecting ceramic tints for cabin comfort and privacy, paired with raised motorsport-grade sidewall lettering." },
    { name: "Custom Liveries & Decals", text: "Bespoke racing stripes, graphics and one-off designs plotted and installed with factory-level seam precision." },
    { name: "Gadgets & Interior Surfaces", text: "Where the journey began: precision skinning for laptops, consoles, architectural surfaces and household items." },
  ],

  /* Gallery: complete archive of Leslie Abiola's biography, University of Sunderland graduation, Zeus3D F1 builds, wrapped cars & autoplaying work videos */
  gallery: [
    {
      src: "assets/images/leslie working on a black car.mp4",
      video: true,
      title: "McLaren Senna · Heat-Gun Carbon-Fiber Wrap Craft",
      location: "Work Videos",
      alt: "Video of Leslie Abiola in a red cap and high-visibility safety vest using a heat gun to precision-wrap the rear diffuser and carbon-fiber wing of a McLaren Senna supercar alongside a Mercedes-AMG G63 and Rolls-Royce.",
    },
    {
      src: "assets/images/beautiful lack car wrap done.mp4",
      video: true,
      title: "McLaren Senna · Completed Woven Carbon-Fiber Wrap",
      location: "Work Videos",
      alt: "Close-up walkaround video of a completed gloss woven carbon-fiber wrap on a McLaren Senna supercar with hydrophobic water beading on the side intake and rear wing.",
    },
    {
      src: "assets/images/client happy.mp4",
      video: true,
      title: "Lamborghini Urus · \"Yo, Zeuswraps, It's a Wrap!\" Client Reaction",
      location: "Work Videos",
      alt: "Video of an excited client unveiling his freshly wrapped crimson-red Lamborghini Urus SUV in Lagos and shouting 'Yo, Zeuswraps, it's a wrap!'",
    },
    {
      src: "assets/images/leslie abiola team wrap.mp4",
      video: true,
      title: "Zeuswrap Crew · Satin Pearl-White Luxury SUV Wrap",
      location: "Work Videos",
      alt: "Video of the Zeuswrap team in branded yellow ZEUSWRAP safety vests installing a satin pearl-white vinyl wrap on a full-size luxury SUV under hexagonal studio lighting.",
    },
    {
      src: "assets/images/zeus 3d new.mp4",
      video: true,
      title: "Zeus3D Studio · F1 Barrel Pedestal & Collector Wall Art",
      location: "Work Videos",
      alt: "Video inside the Zeus3D studio showing wall-mounted framed Formula 1 race car art, a Michelin Sport 4S display tyre, and hand-application of the Zeus3D logo decal onto a custom gloss-black Formula 1 barrel pedestal with rotating supercar models.",
    },
    {
      src: "assets/images/people working on 3d.mp4",
      video: true,
      title: "Zeus3D Team · Fitting 3D-Printed F1 Front Wing & Nose Cone",
      location: "Work Videos",
      alt: "Video of Leslie Abiola and two Zeus3D engineers assembling the 3D-printed front wing, nose cone signed with ZEUS 3D, and aerodynamic floor diffuser of a large-scale Formula 1 car sculpture.",
    },
    {
      src: "assets/images/the 3d model .mp4",
      video: true,
      title: "Zeus3D Model · Nose-to-Tail F1 Sculpture Reveal",
      location: "Work Videos",
      alt: "Close-up panning video from nose to tail of the completed Zeus3D 3D-printed Oracle Red Bull Racing Formula 1 car showcasing ZEUS3D white tyre lettering, Bybit and Pirelli branding, and the F1 barrel pedestal.",
    },
    {
      src: "assets/images/lesie.mp4",
      video: true,
      title: "Leslie Abiola · Hands-On Ferrari Tyre Lettering & Wrap",
      location: "Work Videos",
      alt: "Autoplaying video of Leslie Abiola kneeling in a high-visibility vest hand-applying custom white tyre lettering onto the wheel of a Midnight Viola purple wrapped Ferrari with yellow brake calipers.",
    },
    {
      src: "assets/images/lesie biography image.jpeg",
      title: "Leslie Abiola · Inspecting the #7 Porsche 963 Prototype",
      location: "Leslie & Bio",
      alt: "Leslie Abiola kneeling beside a red, white, and black #7 Porsche 963 Penske Motorsport prototype race car, inspecting its Michelin racing slicks and aerodynamic bodywork.",
    },
    {
      src: "assets/images/lesie abiola edu.jpeg",
      title: "University of Sunderland (UK) · MSc Graduation Campus Portrait",
      location: "University (UK)",
      alt: "Leslie Abiola in his University of Sunderland Master's graduation gown, mortarboard cap, and gold-and-orange academic hood standing outside the brick campus building in Sunderland, United Kingdom.",
    },
    {
      src: "assets/images/lesie abiola 3d .jpeg",
      title: "Leslie Abiola · McLaren F1 Watch Party & Zeus3D Showcase",
      location: "Zeus3D & F1",
      alt: "Leslie Abiola smiling alongside two Monster Energy brand ambassadors at The McLaren Mastercard Formula 1 Team Watch Party, displaying his custom Zeus3D 3D-printed Formula 1 car sculpture.",
    },
    {
      src: "assets/images/zeus 3d process2.mp4",
      video: true,
      title: "Leslie Abiola · Assembling the Zeus3D F1 Airbox & Engine Cover",
      location: "Work Videos",
      alt: "Autoplaying video of Leslie Abiola in a red cap and black athletic jacket carefully assembling and detailing the 3D-printed Oracle Red Bull Racing engine cover and airbox on a worktable.",
    },
    {
      src: "assets/images/lesie abiola 3d.jpeg",
      title: "Zeus3D Formula 1 Sculpture · Helmeted Driver Figurines",
      location: "Zeus3D & F1",
      alt: "Close-up studio photograph of a custom Zeus3D 3D-printed Formula 1 race car sculpture featuring the Zeus3D logo on the cockpit halo and three helmeted F1 driver figurines in orange, green, and white racing suits.",
    },
    {
      src: "assets/images/lesie bio edu.jpeg",
      title: "University of Sunderland · Stadium of Light Conferral",
      location: "University (UK)",
      alt: "Leslie Abiola celebrating his MSc in International Business graduation from the University of Sunderland in full academic regalia inside Sunderland AFC's Stadium of Light hall, framed by Niall Quinn's iconic #9 Sunderland jerseys.",
    },
    {
      src: "assets/images/zeus 3d process.mp4",
      video: true,
      title: "Zeus3D Production · Fitting the 3D-Printed F1 Monocoque",
      location: "Work Videos",
      alt: "Autoplaying video showing the Zeus3D team fitting the 3D-printed white and orange Oracle Red Bull Racing and Citrix Formula 1 monocoque body onto the black floor pan and front wing assembly.",
    },
    {
      src: "assets/images/lesie bio1.jpeg",
      title: "Porsche 963 Penske Motorsport · Atrium Showcase",
      location: "Leslie & Bio",
      alt: "Leslie Abiola standing beside the #7 Porsche 963 Penske Motorsport endurance race car under a geometric glass atrium with a red-and-white spiral motorsport display in the background.",
    },
    {
      src: "assets/images/zeus 3d.mp4",
      video: true,
      title: "Zeus3D · Completed Large-Scale 3D-Printed Formula 1 Car",
      location: "Work Videos",
      alt: "Autoplaying studio showcase video of the completed Zeus3D large-scale 3D-printed Formula 1 race car with Oracle Red Bull Racing livery, TAG Heuer, Bybit, Mobil 1, Pirelli logos, and custom ZEUS3D white tyre lettering.",
    },
    {
      src: "assets/images/lesie bio.jpeg",
      title: "Classic Porsche 911 Heritage Collection · Museum Study",
      location: "Leslie & Bio",
      alt: "Leslie Abiola at a classic Porsche heritage museum exhibition, looking at vintage air-cooled Porsche 911 models in Guards Red, Speed Yellow, and Grand Prix White.",
    },
    {
      src: "assets/images/lesie abiola info.jpeg",
      title: "Leslie Abiola · Lagos Executive Portrait",
      location: "Leslie & Bio",
      alt: "Leslie Abiola dressed in a tailored black Nigerian senator kaftan outfit, holding a brown leather briefcase and Red Bull Racing cap in front of a red football-themed installation at Lagos Irish Pub.",
    },
    {
      src: "assets/images/lesie bio2.jpeg",
      title: "Porsche 963 Penske Prototype · Exhibition Hall",
      location: "Leslie & Bio",
      alt: "Leslie Abiola posing with arms outstretched behind the #7 Porsche 963 Penske IMSA/WEC prototype race car in front of a digital motorsport exhibition screen.",
    },
    {
      src: "assets/images/lesie bio edu1.jpeg",
      title: "MSc International Business · Academic Honours Hall",
      location: "University (UK)",
      alt: "Leslie Abiola wearing his University of Sunderland postgraduate cap, gown, and camel coat in front of framed Sunderland #9 football shirts during his UK graduation ceremony.",
    },
    {
      src: "assets/images/lesie abiola 3d 1.jpeg",
      title: "McLaren Mastercard F1 Watch Party · Zeus3D Exhibition",
      location: "Zeus3D & F1",
      alt: "Motorsport fan giving a double thumbs-up behind the custom Zeus3D 3D-printed Formula 1 race car model displayed at The McLaren Mastercard Formula 1 Team Watch Party.",
    },
    {
      src: "assets/images/lesie abiola 3d 2.jpeg",
      title: "McLaren F1 Team Watch Party · Guests with Zeus3D F1 Car",
      location: "Zeus3D & F1",
      alt: "Two guests smiling and posing behind the custom Zeus3D 3D-printed Formula 1 car sculpture with ZEUS3D tyre lettering and miniature F1 driver figurines at the McLaren Watch Party.",
    },
    {
      src: "assets/images/lesie bio edu 3.jpeg",
      title: "University of Sunderland · Postgraduate Regalia Portrait",
      location: "University (UK)",
      alt: "Full-length portrait of Leslie Abiola in his University of Sunderland Master's degree academic gown, mortarboard cap, and yellow hood standing on wooden flooring in the United Kingdom.",
    },
    {
      src: "assets/images/lesie abiola info 3.jpeg",
      title: "Leslie Abiola · Heineken Formula 1 Showcase in Lagos",
      location: "Leslie & Bio",
      alt: "Leslie Abiola in a black traditional senator suit with glasses and leather work bag walking past a Heineken Formula 1 sponsorship display in Lagos.",
    },
    {
      src: "assets/images/lesie bio3.jpeg",
      title: "Leslie Abiola · RMS Titanic Monument Visit",
      location: "Leslie & Bio",
      alt: "Rear view of Leslie Abiola wearing a navy #19 Gwynn jersey and white cap, looking up at the life-size RMS Titanic ship hull and iceberg monument.",
    },
    {
      src: "assets/images/wrap-ferrari-red.jpg",
      title: "Ferrari · Satin Crimson & Pirelli Lettering",
      location: "Wrapped Cars",
      alt: "Front three-quarter studio shot of a Ferrari coupe wrapped in Satin Crimson red vinyl with black wheels and white Pirelli P Zero tyre lettering.",
    },
    {
      src: "assets/images/wrap-supra-yellow.jpg",
      title: "Widebody GR Supra · Sunburst Yellow",
      location: "Wrapped Cars",
      alt: "Rear three-quarter view of a widebody Toyota GR Supra wrapped in glossy Sunburst Yellow vinyl with an aggressive GT wing and Michelin tyre lettering.",
    },
    {
      src: "assets/images/wrap-gt-purple.jpg",
      title: "Grand Tourer · Midnight Viola Gloss & Tyre Lettering",
      location: "Wrapped Cars",
      alt: "Front three-quarter studio shot of a luxury Grand Tourer coupe wrapped in deep Midnight Viola purple gloss vinyl with black wheels and white tyre lettering.",
    },
    {
      src: "assets/images/leslie-f1-redbull.jpg",
      title: "Leslie Abiola · Oracle Red Bull Racing F1 Study",
      location: "Zeus3D & F1",
      alt: "Leslie Abiola in a Red Bull Racing jacket and headphones standing beside an Oracle Red Bull Racing Formula 1 car at an indoor motorsport exhibition.",
    },
    {
      src: "assets/images/leslie-portrait.png",
      title: "Leslie Abiola · Trackside Classic",
      location: "Leslie & Bio",
      alt: "Portrait of Leslie Abiola standing outdoors beside a classic race car.",
    },
    {
      src: "assets/images/leslie-redbull.png",
      title: "Motorsport Heritage · Aero & Livery Inspection",
      location: "Zeus3D & F1",
      alt: "Leslie Abiola inspecting open-wheel Formula 1 race cars in a motorsport heritage museum.",
    },
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
      "Instant web app, no download",
    ],
  },

  /* FAQ section (Portfolite accordion style) */
  faqs: [
    {
      q: "How does vinyl wrapping compare to repainting my car?",
      a: "Unlike traditional spray painting, which permanently alters your car's factory coat, takes weeks, and involves hazardous chemical emissions, vinyl wrapping is completely reversible, faster to install, and preserves the original manufacturer paintwork underneath.",
    },
    {
      q: "Does wrapping or PPF help with vehicle resale value in Nigeria?",
      a: "Yes. In Nigeria's dynamic climate and dense urban traffic, factory paint often suffers from UV fading, dust and minor scratches. Buyers increasingly pay a premium for wrapped vehicles because peeling back the film reveals untouched, factory-fresh paint.",
    },
    {
      q: "What is the difference between a vinyl wrap and Paint Protection Film (PPF)?",
      a: "Vinyl wraps are designed primarily for restyling, giving you hundreds of colours, matte, satin, chrome and colour-shift textures with light surface protection. PPF is a thicker, self-healing urethane film engineered specifically to absorb stone chips, scratches and road abrasions.",
    },
    {
      q: "Where does Zeuswrap operate, and what was Leslie Abiola's first car wrap?",
      a: "Leslie Abiola wrapped his very first full car, a Mikano Geely Coolray, in 2020. Today, our flagship studio operates 24/7 in Lagos serving clients across Nigeria, while Leslie works with partners in the UK on international automotive and motorsport projects.",
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
