export type PersonalizedCaseStudyVariant = "talia" | "bookpilot" | "stride" | "risetogether" | "fitsee";

export interface PersonalizedFact {
  label: string;
  value: string;
}

export interface PersonalizedDecision {
  index: string;
  label: string;
  title: string;
  description: string;
}

export interface PersonalizedStackItem {
  name: string;
  purpose: string;
}

export interface PersonalizedCaseStudy {
  slug: PersonalizedCaseStudyVariant;
  title: [string, string];
  meta: string;
  statement: string;
  overview: string;
  facts: PersonalizedFact[];
  showcaseTitle: [string, string];
  showcaseMeta: string;
  problem?: { lead: string; body: string };
  decisions: PersonalizedDecision[];
  stack: PersonalizedStackItem[];
  result: [string, string, string];
  next: { slug: string; title: string };
  description: string;
}

export const personalizedCaseStudies: PersonalizedCaseStudy[] = [
  {
    slug: "talia",
    title: ["TALIA", "AI"],
    meta: "AI / PRODUCT / 2026",
    statement: "An AI-first assistant for nightlife discovery, lists and promotions.",
    overview: "Talia explores what happens when the front door to a service is not a form or app menu, but a message.",
    facts: [
      { label: "Channel", value: "Messaging" },
      { label: "Focus", value: "Nightlife discovery" },
      { label: "Interface", value: "Conversation" },
      { label: "Core value", value: "Instant response" },
      { label: "Model", value: "AI-assisted service" },
    ],
    showcaseTitle: ["The Product", "Is A Conversation"],
    showcaseMeta: "Message → useful action",
    decisions: [
      {
        index: "01",
        label: "SPEED",
        title: "Answer immediately",
        description:
          "The product’s main advantage is removing waiting from a flow that traditionally depends on promoters replying manually.",
      },
      {
        index: "02",
        label: "CONTEXT",
        title: "Ask before guessing",
        description:
          "A useful agent needs enough information about place, group, budget or intent before selecting an option.",
      },
      {
        index: "03",
        label: "BOUNDARIES",
        title: "Know what to do next",
        description:
          "The assistant needs explicit behaviors for replying, asking, sending links or escalating instead of improvising freely.",
      },
    ],
    stack: [
      { name: "AI Agent", purpose: "Decision layer" },
      { name: "Instagram", purpose: "Primary channel" },
      { name: "Webhooks", purpose: "Inbound messages" },
      { name: "Structured data", purpose: "Events / promos" },
      { name: "Automation", purpose: "Workflow" },
      { name: "Landing", purpose: "Product surface" },
    ],
    result: ["The ", "conversation", " becomes the interface."],
    next: { slug: "bookpilot", title: "BOOKPILOT" },
    description: "Case study: Talia AI — a conversational product for nightlife discovery and promotions.",
  },
  {
    slug: "bookpilot",
    title: ["BOOK", "PILOT"],
    meta: "BOOKING / SAAS / CHANNELS / 2026",
    statement: "One booking engine for every customer channel.",
    overview:
      "BookPilot is a multi-tenant booking platform that unifies web, WhatsApp and voice interactions around one scheduling engine and one canonical source of truth.",
    facts: [
      { label: "Role", value: "Product / Software Engineer" },
      { label: "Year", value: "2026" },
      { label: "Core", value: "Booking / SaaS / Channels" },
      { label: "Language", value: "TypeScript" },
    ],
    problem: {
      lead: "More channels should not mean more booking logic.",
      body: "Service businesses often manage appointments across calls, messages, paper calendars and disconnected digital tools. If web, WhatsApp and voice each own their own scheduling rules, availability quickly becomes inconsistent and conflicts become unavoidable.",
    },
    showcaseTitle: ["One", "Booking Core"],
    showcaseMeta: "Architecture",
    decisions: [
      {
        index: "01",
        label: "CONSISTENCY",
        title: "One Booking Core",
        description:
          "Every channel and dashboard action uses the same availability, conflict and booking lifecycle rules.",
      },
      {
        index: "02",
        label: "BOUNDARIES",
        title: "Thin Adapters",
        description:
          "Channel providers translate transport and intent, while critical business logic stays inside the platform.",
      },
      {
        index: "03",
        label: "EVOLUTION",
        title: "Generic By Design",
        description:
          "Organizations, locations, services and staff keep the core reusable across different service industries.",
      },
    ],
    stack: [
      { name: "Next.js", purpose: "Admin Dashboard" },
      { name: "TypeScript", purpose: "Core / API" },
      { name: "Supabase", purpose: "Platform Services" },
      { name: "PostgreSQL", purpose: "Source of Truth" },
      { name: "OpenAI", purpose: "Text / Voice" },
      { name: "SQL Migrations", purpose: "Schema Evolution" },
    ],
    result: ["One consistent booking system across ", "every customer touchpoint.", ""],
    next: { slug: "risetogether", title: "RISE TOGETHER" },
    description: "Case study: BookPilot — one booking engine shared across every customer channel.",
  },
  {
    slug: "stride",
    title: ["STRIDE", "ROUTES"],
    meta: "MOBILE / ROUTING / 2026",
    statement: "Smart route generation for walking and road cycling.",
    overview: "Stride turns a few route preferences into a real route you can preview, save and export.",
    facts: [
      { label: "Activities", value: "Foot / Road cycling" },
      { label: "Routing", value: "OpenRouteService" },
      { label: "Modes", value: "Loop / Point-to-point" },
      { label: "Waypoints", value: "1–3 mandatory" },
      { label: "Export", value: "GPX" },
    ],
    showcaseTitle: ["The Route", "Is The UI"],
    showcaseMeta: "Map-first",
    decisions: [
      {
        index: "01",
        label: "REAL ROUTES",
        title: "No demo fallback",
        description: "Routing uses OpenRouteService only, so the MVP can be evaluated against real map behavior.",
      },
      {
        index: "02",
        label: "WAYPOINTS",
        title: "Constraints, not decoration",
        description: "Selected waypoints preserve order and must be passed through by the generated route.",
      },
      {
        index: "03",
        label: "PORTABILITY",
        title: "Leave the app",
        description: "Saved routes keep enough map data to reopen later and can be exported through GPX.",
      },
    ],
    stack: [
      { name: "Expo", purpose: "Runtime" },
      { name: "React Native", purpose: "Mobile UI" },
      { name: "Supabase", purpose: "Auth + saved routes" },
      { name: "OpenRouteService", purpose: "Directions" },
      { name: "react-native-maps", purpose: "Map" },
      { name: "GPX", purpose: "Export" },
    ],
    result: ["A few preferences become a ", "real route", "."],
    next: { slug: "talia-ai", title: "TALIA AI" },
    description: "Case study: Stride — smart route generation for walking and road cycling.",
  },
  {
    slug: "risetogether",
    title: ["RISE", "TOGETHER"],
    meta: "MOBILE / SHARED ALARMS",
    statement: "An alarm that belongs to the group, not to one phone.",
    overview:
      "RiseTogether tackles a tiny but real coordination problem: everyone in a group should wake up at the same time without configuring separate alarms independently.",
    facts: [
      { label: "Type", value: "Mobile app" },
      { label: "Core", value: "Shared alarms" },
      { label: "Model", value: "Group state" },
      { label: "Backend", value: "Supabase" },
      { label: "Focus", value: "Synchronization" },
    ],
    showcaseTitle: ["One Alarm.", "Three Phones."],
    showcaseMeta: "Shared state",
    decisions: [
      {
        index: "01",
        label: "OWNERSHIP",
        title: "Group first",
        description: "The alarm is modeled as something the group owns rather than three unrelated local settings.",
      },
      {
        index: "02",
        label: "CONSISTENCY",
        title: "Same state everywhere",
        description:
          "The product should make it obvious that every participant is looking at the same alarm configuration.",
      },
      {
        index: "03",
        label: "SIMPLICITY",
        title: "One job",
        description:
          "The interface stays focused on creating, joining and understanding a shared alarm rather than becoming a full calendar.",
      },
    ],
    stack: [
      { name: "TypeScript", purpose: "Application" },
      { name: "Mobile UI", purpose: "Client" },
      { name: "Supabase", purpose: "Backend" },
      { name: "Auth", purpose: "Participants" },
      { name: "Shared state", purpose: "Synchronization" },
      { name: "Android", purpose: "Target" },
    ],
    result: ["One time. Multiple devices. ", "One shared state.", ""],
    next: { slug: "fitsee", title: "FITSEE" },
    description: "Case study: RiseTogether — one shared alarm synchronized across a group.",
  },
  {
    slug: "fitsee",
    title: ["FIT", "SEE"],
    meta: "BACKEND / VIRTUAL TRY-ON",
    statement: "Backend infrastructure for a virtual try-on experience that cannot happen inside one HTTP request.",
    overview:
      "Fitsee is a Phase 1 backend MVP for a virtual try-on workflow: body measurements, product selection, asynchronous render jobs and a video result.",
    facts: [
      { label: "Runtime", value: "Python 3.12" },
      { label: "API", value: "FastAPI" },
      { label: "Queue", value: "Redis + RQ" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Output", value: "Video URL" },
    ],
    showcaseTitle: ["A Render", "Has A Lifecycle"],
    showcaseMeta: "Async by design",
    decisions: [
      {
        index: "01",
        label: "ASYNC",
        title: "Jobs, not blocking requests",
        description: "Rendering is treated as background work instead of forcing the client to keep one request open.",
      },
      {
        index: "02",
        label: "PHASING",
        title: "Validate orchestration first",
        description:
          "The first phase simulates the rendering step so queueing, polling and delivery can be tested independently.",
      },
      {
        index: "03",
        label: "OBSERVABILITY",
        title: "Visible lifecycle",
        description: "A client can understand whether a render is pending, processing, complete or failed.",
      },
    ],
    stack: [
      { name: "Python 3.12", purpose: "Runtime" },
      { name: "FastAPI", purpose: "API" },
      { name: "PostgreSQL", purpose: "Database" },
      { name: "SQLAlchemy", purpose: "ORM" },
      { name: "Redis + RQ", purpose: "Queue" },
      { name: "Docker Compose", purpose: "Services" },
    ],
    result: ["An application skeleton ready for a future ", "try-on engine", "."],
    next: { slug: "stride", title: "STRIDE" },
    description: "Case study: Fitsee — an asynchronous backend MVP for virtual try-on rendering.",
  },
];

export function getPersonalizedCaseStudy(pathname: string): PersonalizedCaseStudy | undefined {
  const normalizedPath = pathname.replace(/\/+$/, "");
  const slug = normalizedPath.split("/").at(-1);

  if (slug === "talia-ai") return personalizedCaseStudies.find((project) => project.slug === "talia");
  return personalizedCaseStudies.find((project) => project.slug === slug);
}
