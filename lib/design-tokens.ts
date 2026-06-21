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
  { label: "About", href: "/about" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Products", href: "#products" },
  { label: "Talent", href: "#talent" },
  { label: "Vision", href: "/vision" },
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
      "Identifies real problems in African communities, builds technology companies to solve them, then owns and operates the products.",
    label: "SYSTEMS / PRODUCT",
  },
  {
    title: "Talent Engine",
    description:
      "Brings in interns, NYSC placements, and junior engineers, then trains them on live, real-stakes products.",
    label: "PEOPLE / BUILDERS",
  },
] as const;

export const products = [
  {
    category: "LOGISTICS / COMMERCE",
    name: "Send24",
    description: "Movement and commerce support for local logistics networks.",
  },
  {
    category: "ACADEMIC INTELLIGENCE",
    name: "Passmark",
    description:
      "Academic infrastructure for learning signals and education workflows.",
  },
  {
    category: "TRUST INFRASTRUCTURE",
    name: "CandidHeart",
    description: "Residential operations and community infrastructure.",
  },
  {
    category: "RESIDENTIAL SYSTEMS",
    name: "Residify",
    description: "Residential operations and community infrastructure.",
  },
  {
    category: "OPERATOR SAAS",
    name: "Co-Ship",
    description: "Logistics SaaS for operators who move goods.",
  },
] as const;

export const companyStory = [
  {
    year: "2010",
    title: "Founded",
    description: "NQB8 begins as a Nigerian technology company.",
  },
  {
    year: "2014",
    title: "Crisis",
    description: "A severe business crisis nearly closes the company.",
  },
  {
    year: "2015+",
    title: "Rebuild",
    description: "The team returns with deeper discipline and resilience.",
  },
  {
    year: "Today",
    title: "Multiple live products",
    description: "A growing ecosystem of practical infrastructure platforms.",
  },
] as const;

export const whyUsItems = [
  {
    icon: "/images/calendar.png",
    title: "Operating since 2010",
    description:
      "Clear execution capacity for partners who need systems that can survive real-world conditions.",
  },
  {
    icon: "/images/file.png",
    title: "Real products, not concepts",
    description:
      "Clear execution capacity for partners who need systems that can survive real-world conditions.",
  },
  {
    icon: "/images/lotus.png",
    title: "Multi-sector platform depth",
    description:
      "Clear execution capacity for partners who need systems that can survive real-world conditions.",
  },
  {
    icon: "/images/telescope.png",
    title: "Long-term operational thinking",
    description:
      "Clear execution capacity for partners who need systems that can survive real-world conditions.",
  },
  {
    icon: "/images/id-card.png",
    title: "African context and local intelligence",
    description:
      "Clear execution capacity for partners who need systems that can survive real-world conditions.",
  },
  {
    icon: "/images/user-group.png",
    title: "Builder culture and talent pipeline",
    description:
      "Clear execution capacity for partners who need systems that can survive real-world conditions.",
  },
] as const;

export const builderCultureItems = [
  {
    title: "Real products",
    description:
      "A serious environment for emerging builders to grow through useful systems.",
  },
  {
    title: "Real stakes",
    description:
      "A serious environment for emerging builders to grow through useful systems.",
  },
  {
    title: "Strong growth environment",
    description:
      "A serious environment for emerging builders to grow through useful systems.",
  },
] as const;

export const insightsItems = [
  {
    title: "The discipline of operating infrastructure in African markets",
    category: "LOGISTICS",
  },
  {
    title: "Digital trust as an emerging-market foundation",
    category: "TECHNOLOGY",
  },
  {
    title: "What product builders learn from real operational constraints",
    category: "PRODUCTS",
  },
] as const;

export const footerColumns = {
  company: [
    { label: "About", href: "#about" },
    { label: "Vision", href: "#vision" },
    { label: "Talent", href: "#talent" },
    { label: "Insights", href: "#insights" },
  ],
  products: [
    { label: "Send24", href: "https://send24.co/" },
    { label: "PassMark", href: "https://passmark.ai/" },
    { label: "CandidHeart", href: "https://candidheart.com/" },
    { label: "Residify", href: "#" },
    { label: "Co-ship", href: "https://coshipp.com/" },
  ],
  contact: [
    { label: "Partner with Us", href: "#partner" },
    { label: "Careers", href: "#careers" },
    { label: "LinkedIn", href: "#" },
    { label: "hello@nqb8.co", href: "mailto:hello@nqb8.co" },
  ],
} as const;
