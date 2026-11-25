// Site content. Components only handle layout.

export const person = {
  name: "Samuel Ogbodo",
  shortName: "Samuel",
  role: "Fullstack Software Engineer",
  title: "Co-Founder & CTO, VerityWave Innovations",
  location: "Nigeria",
  timezone: "Africa/Lagos",
  url: "https://devsamc.xyz",
  email: "samuel@devsamc.xyz",
  linkedin: "https://linkedin.com/in/samuel-ogbodo",
  github: "https://github.com/samuel515",
};

export const hero = {
  eyebrow: "Fullstack engineer · Co-founder & CTO",
  headline: ["I build software", "people can trust."],
  intro:
    "I design and ship products end to end, from the interface down to the infrastructure. Right now I lead engineering at VerityWave, where we build tools that detect AI-generated content and move money safely over a conversation.",
};

export const stats = [
  { value: "4", label: "Live products" },
  { value: "3", label: "Client sites shipped" },
  { value: "2025", label: "Co-founded VerityWave" },
  { value: "UI → DNS", label: "Ownership, end to end" },
];

export type Project = {
  slug: string;
  name: string;
  url: string;
  urlLabel: string;
  image: string;
  role: string;
  period?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  extraLink?: { label: string; url: string };
};

export const products: Project[] = [
  {
    slug: "veritywave",
    name: "VerityWave",
    url: "https://veritywave.com",
    urlLabel: "veritywave.com",
    image: "/projects/veritywave.webp",
    role: "Co-Founder & CTO",
    period: "2025 – Present",
    summary:
      "A multi-modal platform that detects AI-generated and manipulated content across text, images, video, voice and code.",
    highlights: [
      "Designed the detection architecture: modality-specific models on GPU cloud, coordinated by an agent-based orchestration layer.",
      "Built the serving layer with FastAPI, Redis and Celery for queued, scalable inference.",
      "Built the public site with server-side rendering, SEO and Core Web Vitals work, deployed across AWS Amplify and Cloudflare.",
    ],
    stack: ["FastAPI", "Redis", "Celery", "TanStack Start", "GSAP", "Cloudflare"],
  },
  {
    slug: "veripay",
    name: "VeriPay",
    url: "https://useveripay.com",
    urlLabel: "useveripay.com",
    image: "/projects/veripay.webp",
    role: "Fullstack engineer",
    summary:
      "A conversational money app for Nigeria. Users send money, pay bills and buy airtime by typing or speaking in English, Pidgin, Hausa, Yoruba or Igbo.",
    highlights: [
      "Split the system so an AI agent understands intent while a deterministic, non-AI state machine handles anything that moves money.",
      "NestJS monorepo with identity, gateway and orchestrator services, a risk engine, bulk transfers and crypto deposits.",
      "Recipient names are verified with the bank before every transfer, and anyone can check a receipt online without logging in.",
    ],
    stack: ["NestJS", "TypeScript", "Prisma", "Redis", "BullMQ", "WhatsApp API", "Next.js"],
    extraLink: { label: "Receipt checker", url: "https://useveripay.com/verify" },
  },
  {
    slug: "alidu",
    name: "ALIDU",
    url: "https://alidu.veritywave.com",
    urlLabel: "alidu.veritywave.com",
    image: "/projects/alidu.webp",
    role: "Lead engineer",
    summary:
      "An academic platform for universities that puts integrity and learning in one place.",
    highlights: [
      "Plagiarism and AI-content scanning for submitted work.",
      "Invigilated computer-based tests with facial verification, plus live video classrooms.",
      "Role-based portals for students, lecturers and administrators, with an e-library and timetables.",
    ],
    stack: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL"],
  },
  {
    slug: "nexusbotix",
    name: "Nexus Botix",
    url: "https://nexusbotix.io",
    urlLabel: "nexusbotix.io",
    image: "/projects/nexusbotix.webp",
    role: "Frontend Lead engineer",
    summary:
      "An embeddable AI chat widget that answers, engages and converts, with a companion web app for teams.",
    highlights: [
      "Maintain the widget and web app, including WhatsApp onboarding and team management.",
      "Led a backend API migration and fixed session handling and CORS across environments.",
      "Built theming that holds across light and dark mode, including dynamically created elements, and tuned mobile scroll behaviour.",
    ],
    stack: ["NestJS", "Firestore", "BullMQ", "React", "Vite", "Tailwind CSS"],
  },
];

export const clientWork: Project[] = [
  {
    slug: "eurovic",
    name: "Eurovic Engineering",
    url: "https://eurovic.devsamc.xyz",
    urlLabel: "eurovic.devsamc.xyz",
    image: "/projects/eurovic.webp",
    role: "Design & development",
    summary:
      "Marketing site for an electrical and solar engineering firm in Lagos, with an interactive 3D hero and a solar estimate tool.",
    highlights: [
      "One SEO landing page per service, each with FAQ structured data.",
      "Deployed to Cloudflare Workers through OpenNext.",
    ],
    stack: ["Next.js 16", "React 19", "Three.js", "Framer Motion", "Cloudflare Workers"],
  },
  {
    slug: "ikennaconsult",
    name: "Ikenna Consult",
    url: "https://ikennaconsult.com",
    urlLabel: "ikennaconsult.com",
    image: "/projects/ikennaconsult.webp",
    role: "Design & development",
    summary:
      "Website for an accounting, tax, audit and advisory practice in Lagos.",
    highlights: [
      "Every page is statically generated. The only server code is the contact form.",
      "Ships to Vercel or Cloudflare Workers from the same branch.",
    ],
    stack: ["Next.js", "TypeScript", "Server Actions", "Cloudflare"],
  },
  {
    slug: "stephenogbodo",
    name: "Stephen Ogbodo, MPH",
    url: "https://stephenogbodo.com",
    urlLabel: "stephenogbodo.com",
    image: "/projects/stephenogbodo.webp",
    role: "Design & development",
    summary:
      "Academic portfolio for a pharmacoepidemiologist and PhD candidate at McGill University.",
    highlights: [
      "Every page is server-rendered and prerendered at build time.",
      "Structured data, per-page Open Graph tags, a generated sitemap and a remembered light/dark theme.",
    ],
    stack: ["TanStack Start", "React 19", "Tailwind CSS v4"],
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "TypeScript", "Next.js", "TanStack", "Astro", "Tailwind CSS", "GSAP", "Three.js"] },
  { group: "Backend", items: ["Node.js", "NestJS", "FastAPI", "Deno", "Supabase", "PostgreSQL", "Redis", "BullMQ", "Celery"] },
  { group: "Infrastructure", items: ["Cloudflare (DNS, Pages, Workers)", "AWS Amplify", "Docker", "GitLab CI"] },
  { group: "Craft", items: ["UI/UX & design systems", "API design", "SEO & Core Web Vitals", "Web3", "Security fundamentals"] },
];

export const experience = [
  {
    role: "Co-Founder & CTO",
    org: "VerityWave Innovations Ltd.",
    period: "2025 – Present",
    detail: "Lead engineering across VerityWave, VeriPay and ALIDU, from architecture and product to deployment and DNS.",
  },
  {
    role: "Senior Frontend Developer",
    org: "Nexus Botix · Part-time",
    period: "Sep 2024 – Present",
    detail: "",
  },
  {
    role: "Web Developer Intern",
    org: "Endgame, Abuja",
    period: "Apr 2024 – Sep 2024",
    detail: "",
  },
];

export const education = [
  { title: "BSc Computer Science", org: "Renaissance University, Enugu", period: "2025" },
  { title: "Networking Basics", org: "Cisco", period: "" },
  { title: "Cybersecurity", org: "Cisco", period: "" },
];

// /work-with-me/ and the home page services section. Starting prices, NGN.
export const hire = {
  email: "samuel@devsamc.xyz",
  whatsapp: "2347045790953", // wa.me format
  whatsappLabel: "+234 704 579 0953",
  headline: "Websites and software that win you customers.",
  intro:
    "I design, build and launch fast, search-friendly websites and web apps for businesses, and I look after them afterwards. You deal with the engineer doing the work, from the first call to launch day.",
  services: [
    {
      name: "Business website",
      price: "₦250,000",
      time: "About 1 week",
      summary: "A professional site that shows up on Google and turns visitors into calls and WhatsApp messages.",
      includes: ["Up to 5 pages, designed for phones first", "Contact form and WhatsApp button", "Google search and Google Business setup", "Fast loading and secure hosting setup"],
      featured: true,
    },
    {
      name: "Online store",
      price: "₦450,000",
      time: "1–2 weeks",
      summary: "Sell online with a catalogue, cart and checkout your customers can pay through.",
      includes: ["Products, categories and stock", "Paystack or Flutterwave payments", "Order alerts by email or WhatsApp", "An easy admin to manage it all"],
      featured: true,
    },
    {
      name: "Bookings and payments",
      price: "₦350,000",
      time: "1–2 weeks",
      summary: "Let clients book appointments, rooms or sessions and pay a deposit online.",
      includes: ["Calendar with available times", "Online deposits or full payment", "Automatic reminders", "Built for clinics, salons, hotels and consultants"],
      featured: true,
    },
    {
      name: "Web app or portal",
      price: "₦800,000",
      time: "Quoted per project",
      summary: "Custom software for how your organisation works: school portals, dashboards, inventory and staff tools.",
      includes: ["Logins and roles for staff, students or customers", "Reports and dashboards", "Secure database and backups", "Built to grow with you"],
      featured: false,
    },
    {
      name: "WhatsApp and automation",
      price: "₦500,000",
      time: "1–3 weeks",
      summary: "Take orders, answer questions and send reminders automatically, including with AI chat.",
      includes: ["WhatsApp ordering and support flows", "AI assistant trained on your business", "Connects to your website and payments", "From the engineer behind VeriPay and Nexus Botix"],
      featured: false,
    },
    {
      name: "Hosting and care",
      price: "₦100,000 / year",
      time: "Ongoing",
      summary: "I keep your site online, secure and up to date, so you never have to think about it.",
      includes: ["Hosting, SSL and domain management", "Updates and security fixes", "Small text and image changes", "Fast help when something breaks"],
      featured: false,
    },
  ],
  agencies:
    "Agencies and studios: I also build white-label, under your brand. You keep the client relationship; I deliver production-ready Astro, React or Next.js on time.",
  process: [
    { title: "Talk", body: "Tell me what you need on WhatsApp or email. I reply within a day with a clear quote and timeline." },
    { title: "Start", body: "A 50% deposit books your slot. You send your logo, text and photos, or I help you write them." },
    { title: "Review", body: "You get a private preview link as it comes together, with two rounds of changes included." },
    { title: "Launch", body: "The balance is due at launch. I put it live, connect your domain and show you how everything works." },
  ],
  faqs: [
    { q: "How long does a website take?", a: "Most business websites are ready in 5 to 10 working days once I have your content. Larger stores and web apps get a timeline with the quote." },
    { q: "How do I pay?", a: "By bank transfer: 50% to start and 50% at launch. Larger projects can be split into milestones." },
    { q: "Do I need to buy hosting or a domain?", a: "No. I can register the domain and host the site for you under Hosting and care, or set everything up on your own accounts." },
    { q: "I'm outside Nigeria. Can we work together?", a: "Yes. I work with clients anywhere and quote in US dollars, British pounds or euros." },
    { q: "Can you fix or redesign my existing site?", a: "Yes. Send me the link and what's bothering you, and I'll tell you honestly whether a fix or a rebuild makes more sense." },
  ],
};

export const contact = {
  heading: "Let's build something worth trusting.",
  body: "I'm open to full-time roles, freelance and contract work, and collaborations. I'm also glad to talk with investors about VerityWave and with reviewers about study opportunities.",
};

// Free, open-source browser tools at *.devsamc.xyz. Hues match each tool's accent colour.
export const toolsRepo = "https://github.com/Samuel515/devsam-tools";
export const tools = [
  { name: "Markdown Reader", url: "https://md.devsamc.xyz", tagline: "Read, edit and export Markdown files.", hue: 255, glyph: "MD" },
  { name: "Image Converter", url: "https://image.devsamc.xyz", tagline: "HEIC, WebP, PNG, JPG, AVIF and more.", hue: 45, glyph: "IM" },
  { name: "PDF to Image", url: "https://pdf2img.devsamc.xyz", tagline: "Turn PDF pages into high-quality images.", hue: 25, glyph: "P→" },
  { name: "Image Compressor", url: "https://compress.devsamc.xyz", tagline: "Shrink images by up to 80% with mozjpeg.", hue: 185, glyph: "CP" },
  { name: "PDF Toolkit", url: "https://pdf.devsamc.xyz", tagline: "Merge, split, rotate and create PDFs.", hue: 350, glyph: "PDF" },
  { name: "QR Code Generator", url: "https://qr.devsamc.xyz", tagline: "Styled QR codes for links, Wi-Fi and WhatsApp.", hue: 295, glyph: "QR" },
  { name: "QR Code Scanner", url: "https://qrscan.devsamc.xyz", tagline: "Scan QR codes with your camera or an image.", hue: 280, glyph: "SC" },
  { name: "Dev Formatter", url: "https://dev.devsamc.xyz", tagline: "JSON, Base64, URL encoding and JWTs.", hue: 85, glyph: "{}" },
  { name: "Code Minifier", url: "https://minify.devsamc.xyz", tagline: "Minify JavaScript, CSS, HTML and JSON.", hue: 215, glyph: "MN" },
  { name: "JavaScript Obfuscator", url: "https://obfuscate.devsamc.xyz", tagline: "Protect JavaScript from copying.", hue: 140, glyph: "OB" },
  { name: "Background Remover", url: "https://bg.devsamc.xyz", tagline: "AI background removal that runs in the browser.", hue: 320, glyph: "BG" },
  { name: "Image Resizer", url: "https://resize.devsamc.xyz", tagline: "Social, passport and custom sizes, perfectly framed.", hue: 60, glyph: "RS" },
  { name: "PDF Compressor", url: "https://pdfcompress.devsamc.xyz", tagline: "Shrink PDFs for email and upload limits.", hue: 10, glyph: "PC" },
  { name: "Word Counter", url: "https://words.devsamc.xyz", tagline: "Words, characters, reading time and keywords.", hue: 235, glyph: "WC" },
  { name: "Password Generator", url: "https://password.devsamc.xyz", tagline: "Strong passwords and memorable passphrases.", hue: 165, glyph: "PW" },
];

// AdSense for the tools hub only (/tools/*). Keep disabled until approval + slot IDs.
export const adsense = {
  publisherId: "pub-7349479508743936",
  enabled: false,
  slots: {
    hubTop: "",
    hubMid: "",
  },
  get client() {
    return `ca-${this.publisherId}`;
  },
};

export const hubAdsEnabled = () => adsense.enabled && adsense.publisherId.trim().length > 0;
