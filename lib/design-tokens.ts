/**
 * NQB8 homepage design tokens and content.
 */

export const tokens = {
  colors: {
    background: "#000000",
    surface: "#0A0A0A",
    surfaceElevated: "#111111",
    surfaceCard: "#141414",
    border: "rgba(255, 255, 255, 0.08)",
    accent: "#0066FF",
    accentBright: "#0070F3",
    textPrimary: "#FFFFFF",
    textSecondary: "#A1A1AA",
    textMuted: "#71717A",
  },
  spacing: {
    sectionY: "120px",
    sectionYMobile: "80px",
    containerMax: "1280px",
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Products", href: "#products" },
  { label: "Talent", href: "#talent" },
  { label: "Vision", href: "#vision" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroPillars = [
  { label: "Product engine", href: "#engines" },
  { label: "Talent engine", href: "#talent" },
  { label: "Venture studio", href: "#portfolio" },
  { label: "Infrastructure investment", href: "#platforms" },
] as const;

export const engines = [
  {
    title: "Product Engine",
    description:
      "We design, build, and scale digital products with infrastructure intent — from payments to platforms that serve millions across emerging markets.",
    href: "#platforms",
  },
  {
    title: "Talent Engine",
    description:
      "We develop technical talent through structured programs, real product work, and an environment where builders grow into leaders who ship systems that last.",
    href: "#talent",
  },
] as const;

export const platforms = [
  {
    category: "Dev-ops & Cloud",
    name: "Grendel",
    description:
      "Cloud infrastructure and developer tooling built for teams operating at scale in complex markets.",
    href: "#",
  },
  {
    category: "Identity & Data",
    name: "Personas",
    description:
      "Identity and profile infrastructure that powers trusted interactions across digital ecosystems.",
    href: "#",
  },
  {
    category: "Social Infrastructure",
    name: "Social Graph",
    description:
      "Relationship and network layers that connect people, products, and communities with purpose.",
    href: "#",
  },
  {
    category: "Payments & Fintech",
    name: "Baxi",
    description:
      "Agent network and payment infrastructure reaching communities across Nigeria and beyond.",
    href: "#",
  },
  {
    category: "Payments & Fintech",
    name: "Paystack",
    description:
      "Modern payments API enabling businesses to accept and manage transactions seamlessly.",
    href: "#",
  },
] as const;

export const impactStats = [
  { value: "270", label: "Employees" },
  { value: "274", label: "Cities" },
  { value: "2751", label: "Partners" },
  { value: "100M+", label: "Monthly transactions", highlight: true },
] as const;

export const whyUsItems = [
  {
    icon: "calendar",
    title: "Founded in 2011",
    description:
      "Over a decade of building technology institutions and platforms with long-term infrastructure thinking.",
  },
  {
    icon: "layers",
    title: "Multi-sector platform scale",
    description:
      "Experience across payments, cloud, identity, and talent — not single-product dependency.",
  },
  {
    icon: "target",
    title: "Key product milestones",
    description:
      "Products that reached millions of users and defined categories in emerging markets.",
  },
  {
    icon: "globe",
    title: "Emerging market focus",
    description:
      "Deep understanding of the constraints and opportunities in African and global emerging economies.",
  },
  {
    icon: "users",
    title: "Builder-first culture",
    description:
      "Teams organized around engineering excellence, product discipline, and operational resilience.",
  },
  {
    icon: "shield",
    title: "Infrastructure mindset",
    description:
      "Every product is designed as a layer others can build on — not an isolated application.",
  },
] as const;

export const learnMoreItems = [
  {
    title: "The products",
    description:
      "Live platforms and infrastructure layers serving real users across payments, cloud, and identity.",
    href: "#platforms",
  },
  {
    title: "The stories",
    description:
      "Case studies and narratives from builders who shaped products that changed how markets work.",
    href: "#news",
  },
  {
    title: "The growth environment",
    description:
      "Programs, mentorship, and hands-on product work that develop the next generation of technical leaders.",
    href: "#talent",
  },
] as const;

export const newsItems = [
  {
    title: "Why infrastructure thinking matters for African fintech",
    category: "Perspective",
    date: "Mar 2026",
    href: "#",
  },
  {
    title: "Building talent pipelines that outlast product cycles",
    category: "Talent",
    date: "Feb 2026",
    href: "#",
  },
  {
    title: "Resilience as an operating principle, not a feature",
    category: "Systems",
    date: "Jan 2026",
    href: "#",
  },
] as const;

export const footerColumns = {
  company: [
    { label: "About", href: "#about" },
    { label: "Team", href: "#" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  products: [
    { label: "Grendel", href: "#" },
    { label: "Personas", href: "#" },
    { label: "Social Graph", href: "#" },
    { label: "Fluidity", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
} as const;
