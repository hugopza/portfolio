export interface Project {
  index: string;
  name: string;
  disciplines: string;
  year: string;
  href: string;
}

export interface IndexedItem {
  index: string;
  name: string;
}

export interface Capability extends IndexedItem {
  description: string;
}

export interface ProfileItem {
  label: string;
  value: string;
}

export interface FocusItem extends IndexedItem {
  value: number;
}

export interface ExperienceItem {
  period: string;
  organization: string;
  description: string;
  tags: string;
}

export interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
}

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Lab", href: "#lab" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const tickerItems = [
  "● AVAILABLE FOR OPPORTUNITIES",
  "BASED IN GIRONA",
  "06 SELECTED PROJECTS",
  "AI / SOFTWARE / PRODUCT",
] as const;

export const projects: Project[] = [
  {
    index: "01",
    name: "Talia AI",
    disciplines: "PRODUCT / AI / AUTOMATION",
    year: "2026",
    href: "/projects/talia-ai",
  },
  {
    index: "02",
    name: "GISCE MCP",
    disciplines: "AI / ERP / SOFTWARE ARCHITECTURE",
    year: "2026",
    href: "/projects/gisce-mcp",
  },
  {
    index: "03",
    name: "Stride",
    disciplines: "EXPO / REACT NATIVE / ROUTE GENERATION",
    year: "2026",
    href: "/projects/stride",
  },
  {
    index: "04",
    name: "Fitsee",
    disciplines: "AI / E-COMMERCE / VIRTUAL TRY-ON",
    year: "2026",
    href: "/projects/fitsee",
  },
  {
    index: "05",
    name: "RiseTogether",
    disciplines: "EXPO / REACT NATIVE / SOCIAL ALARMS",
    year: "2026",
    href: "/projects/risetogether",
  },
  {
    index: "06",
    name: "BookPilot",
    disciplines: "SAAS / BOOKING / OMNICHANNEL",
    year: "2026",
    href: "/projects/bookpilot",
  },
];

export const labItems: IndexedItem[] = [
  { index: "001", name: "AI Agents" },
  { index: "002", name: "LLM Systems" },
  { index: "003", name: "Automation" },
  { index: "004", name: "Interactive UI" },
  { index: "005", name: "Computer Vision" },
  { index: "006", name: "Prototypes" },
];

export const capabilities: Capability[] = [
  {
    index: "01",
    name: "Artificial Intelligence",
    description: "LLMs · Agents · MCP · RAG · automation · intelligent workflows.",
  },
  {
    index: "02",
    name: "Engineering",
    description: "Python · JavaScript · APIs · backend systems · integrations · architecture.",
  },
  {
    index: "03",
    name: "Product",
    description: "Rapid prototyping · UX thinking · interface design · shipping fast.",
  },
];

export const profileItems: ProfileItem[] = [
  { label: "Location", value: "Girona" },
  { label: "Focus", value: "AI / Product / Systems" },
  { label: "Degree", value: "Computer Engineering" },
  { label: "Languages", value: "CAT / ES / EN" },
];

export const offlineInterests: IndexedItem[] = [
  { index: "01", name: " FRIENDS & FAMILY" },
  { index: "02", name: "SPORTS" },
  { index: "03", name: "TRAVEL" },
];

export const focusItems: FocusItem[] = [
  { index: "01", name: "AI AGENTS", value: 88 },
  { index: "02", name: "PRODUCT BUILDING", value: 94 },
  { index: "03", name: "AUTOMATION", value: 82 },
  { index: "04", name: "CREATIVE WEB", value: 68 },
];

export const experience: ExperienceItem[] = [
  {
    period: "2026 → NOW",
    organization: "GISCE",
    description:
      "Software Engineer · Building software in the energy sector and exploring safe AI interaction with legacy enterprise systems.",
    tags: "PYTHON / ERP / MCP / AI",
  },
  {
    period: "2022 → 2026",
    organization: "Universitat de Girona",
    description:
      "Computer Engineering · Software, systems, product thinking and the foundations behind everything I build today.",
    tags: "COMPUTER ENGINEERING",
  },
  {
    period: "ONGOING",
    organization: "Independent Projects",
    description: "AI products, agents, automations and experiments built outside the constraints of day-to-day work.",
    tags: "TALIA AI / STRIDE / EXPERIMENTS",
  },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:hugoperezaraus@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hugoperezaraus/", external: true },
  { label: "GitHub", href: "https://github.com/hugopza", external: true },
];
