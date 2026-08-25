export interface CaseStudyFact {
  label: string;
  value: string;
}

export interface CaseStudyNode {
  index: string;
  label: string;
  title: string;
  description: string;
  detail: string;
}

export interface CaseStudyDecision {
  index: string;
  label: string;
  title: string;
  description: string;
}

export interface CaseStudyStackItem {
  name: string;
  purpose: string;
}

export interface ProjectCaseStudy {
  slug: string;
  index: string;
  title: [string, string];
  disciplines: string;
  year: string;
  statement: string;
  overview: string;
  facts: CaseStudyFact[];
  problem: [string, string];
  problemFlow: [string, string, string];
  systemIntro: string;
  system: [CaseStudyNode, CaseStudyNode, CaseStudyNode];
  decisions: CaseStudyDecision[];
  stack: CaseStudyStackItem[];
  result: [string, string, string];
  resultPoints: string[];
  description: string;
}

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "gisce-mcp",
    index: "01",
    title: ["GISCE", "MCP"],
    disciplines: "AI / ERP / SOFTWARE ARCHITECTURE",
    year: "2026",
    statement: "Bringing AI-native interaction to legacy enterprise software.",
    overview:
      "GISCE-ERP is a large legacy ERP used in the energy sector. The project explores how AI systems can interact with it through a controlled MCP layer instead of unrestricted access.",
    facts: [
      { label: "Role", value: "Software Engineer" },
      { label: "Year", value: "2026" },
      { label: "Core", value: "MCP / ERP / AI" },
      { label: "Language", value: "Python" },
    ],
    problem: [
      "AI is useful when it can act on real systems. But giving a language model direct access to a large legacy ERP creates obvious security, observability and reliability problems.",
      "The challenge was not simply connecting an LLM to the ERP. It was defining a controlled interaction layer with explicit operations, predictable contracts and auditable execution.",
    ],
    problemFlow: ["AI / LLM", "UNCONTROLLED ACCESS ?", "LEGACY ERP"],
    systemIntro:
      "The solution introduces a narrow MCP interface between AI clients and GISCE-ERP. The model never receives generic ERP access: it can only invoke explicitly registered tools with controlled inputs and outputs.",
    system: [
      {
        index: "01",
        label: "CLIENT",
        title: "AI Client",
        description: "Discovers and invokes available tools",
        detail: "LLM / Agent",
      },
      {
        index: "02",
        label: "PROTOCOL",
        title: "MCP Server",
        description: "Publishes a constrained tool interface",
        detail: "FastMCP / external server",
      },
      {
        index: "03",
        label: "ERP LAYER",
        title: "GISCE MCP Service",
        description: "Validates, executes and audits ERP operations",
        detail: "OpenERP / registered tools",
      },
    ],
    decisions: [
      {
        index: "01",
        label: "CONTROL",
        title: "Controlled Tool Access",
        description:
          "AI never receives unrestricted access to the ERP. Every available operation must be explicitly registered as an MCP tool.",
      },
      {
        index: "02",
        label: "OBSERVABILITY",
        title: "Auditable Execution",
        description:
          "Tool execution records the database, user, tool, duration, status and error code so interactions remain traceable.",
      },
      {
        index: "03",
        label: "RELIABILITY",
        title: "Predictable Failure",
        description:
          "Operations return normalized success and error contracts instead of exposing unpredictable internal failures to the AI client.",
      },
    ],
    stack: [
      { name: "Python 2.7", purpose: "ERP Core" },
      { name: "Python 3.12", purpose: "MCP Server" },
      { name: "OpenERP", purpose: "Legacy ERP" },
      { name: "FastMCP", purpose: "Protocol Layer" },
      { name: "XML-RPC", purpose: "ERP Communication" },
      { name: "PostgreSQL", purpose: "Data / Audit" },
    ],
    result: ["A controlled bridge between ", "AI", " and a legacy ERP."],
    resultPoints: [
      "Explicit, discoverable MCP tools.",
      "Controlled read and write operations.",
      "Validation, rate limiting and auditability.",
      "A reusable pattern for future ERP capabilities.",
    ],
    description: "Case study: GISCE MCP — an AI-native interaction layer for legacy enterprise software.",
  },
  {
    slug: "talia-ai",
    index: "02",
    title: ["TALIA", "AI"],
    disciplines: "PRODUCT / AI / AUTOMATION",
    year: "2026",
    statement: "Turning customer intent into safe, traceable business action.",
    overview:
      "Talia AI is an always-on growth operator that receives Instagram conversations, understands customer intent and moves routine interactions toward the next useful action.",
    facts: [
      { label: "Role", value: "Product / Software Engineer" },
      { label: "Year", value: "2026" },
      { label: "Core", value: "Agents / Automation / Safety" },
      { label: "Language", value: "Python" },
    ],
    problem: [
      "Customer intent is immediate, but high-volume social conversations are repetitive and easy to miss. A delayed response often means a lost opportunity.",
      "Automating the reply alone is not enough. The system needs verified business context, deterministic policy and a clear path to a human whenever the request is sensitive or uncertain.",
    ],
    problemFlow: ["CUSTOMER INTENT", "MANUAL QUEUE / DELAY", "MISSED ACTION"],
    systemIntro:
      "Talia separates conversational reasoning from operational authority. Events are persisted first, an agent returns a structured decision, and the bridge alone decides whether to draft, escalate or send.",
    system: [
      {
        index: "01",
        label: "CHANNEL",
        title: "Instagram",
        description: "Receives customer messages through official webhooks",
        detail: "Meta webhook / Send API",
      },
      {
        index: "02",
        label: "CONTROL",
        title: "Talia Bridge",
        description: "Persists, validates and applies deterministic policy",
        detail: "Queue / policy / audit",
      },
      {
        index: "03",
        label: "REASONING",
        title: "AI Agent",
        description: "Returns a constrained, structured decision",
        detail: "OpenClaw / business context",
      },
    ],
    decisions: [
      {
        index: "01",
        label: "AUTHORITY",
        title: "Separated Control",
        description:
          "The agent never holds the Instagram token and cannot send directly. Operational authority remains inside the bridge.",
      },
      {
        index: "02",
        label: "DURABILITY",
        title: "Persist First",
        description:
          "Incoming events and conversations are stored before processing, making retries, recovery and inspection predictable.",
      },
      {
        index: "03",
        label: "SAFETY",
        title: "Human Escalation",
        description:
          "Sensitive, ambiguous or unsupported requests pause automation and move to a visible human workflow.",
      },
    ],
    stack: [
      { name: "Python 3.12", purpose: "Application Core" },
      { name: "OpenClaw", purpose: "Agent Runtime" },
      { name: "Meta API", purpose: "Instagram Channel" },
      { name: "SQLite", purpose: "State / Audit" },
      { name: "Webhooks", purpose: "Inbound Events" },
      { name: "Docker", purpose: "Deployment" },
    ],
    result: ["An always-on operator with ", "AI", " inside clear boundaries."],
    resultPoints: [
      "Durable inbound and outbound message flow.",
      "Structured agent decisions with explicit policy.",
      "Human review for sensitive conversations.",
      "A private dashboard with a complete audit trail.",
    ],
    description: "Case study: Talia AI — a safe, observable AI operator for customer conversations.",
  },
  {
    slug: "stride",
    index: "03",
    title: ["STRI", "DE"],
    disciplines: "EXPO / REACT NATIVE / ROUTE GENERATION",
    year: "2026",
    statement: "Generating outdoor routes from the way people actually want to move.",
    overview:
      "Stride is a mobile route-generation app for planning walking and road-cycling routes, previewing alternatives on a map, saving them and exporting GPX files.",
    facts: [
      { label: "Role", value: "Product / Mobile Engineer" },
      { label: "Year", value: "2026" },
      { label: "Core", value: "Routes / Maps / Mobile" },
      { label: "Language", value: "TypeScript" },
    ],
    problem: [
      "Standard navigation tools optimize a trip to a destination. Outdoor users often need something different: a route shaped by distance, activity, surface and optional waypoints.",
      "The engineering challenge was generating usable point-to-point and circular routes while keeping every constraint explicit and preserving a simple mobile flow.",
    ],
    problemFlow: ["ROUTE INTENT", "GENERIC DIRECTIONS", "WRONG EXPERIENCE"],
    systemIntro:
      "Stride turns a compact route brief into real route candidates. OpenRouteService handles routing, activity-aware logic validates and scores the result, and the app keeps the route portable through saved state and GPX export.",
    system: [
      {
        index: "01",
        label: "INPUT",
        title: "Route Brief",
        description: "Activity, distance, surface and waypoints",
        detail: "Point-to-point / circular",
      },
      {
        index: "02",
        label: "GENERATION",
        title: "Route Engine",
        description: "Builds and validates real route candidates",
        detail: "OpenRouteService / scoring",
      },
      {
        index: "03",
        label: "EXPERIENCE",
        title: "Mobile App",
        description: "Previews, saves and exports selected routes",
        detail: "Maps / Supabase / GPX",
      },
    ],
    decisions: [
      {
        index: "01",
        label: "CONSTRAINTS",
        title: "Intent First",
        description:
          "Activity, surface and ordered waypoints are first-class route constraints rather than filters applied after generation.",
      },
      {
        index: "02",
        label: "INTEGRITY",
        title: "Real Routes Only",
        description:
          "The product uses OpenRouteService without a fake fallback, keeping previews and exported geometry honest.",
      },
      {
        index: "03",
        label: "PORTABILITY",
        title: "Keep The Route",
        description:
          "Saved routes preserve activity and geometry, while native GPX export makes the result usable beyond the app.",
      },
    ],
    stack: [
      { name: "Expo", purpose: "Mobile Platform" },
      { name: "React Native", purpose: "Application UI" },
      { name: "TypeScript", purpose: "Application Core" },
      { name: "OpenRouteService", purpose: "Route Generation" },
      { name: "Supabase", purpose: "Auth / Persistence" },
      { name: "GPX", purpose: "Route Export" },
    ],
    result: ["A route generator built around ", "intent", ", not just destinations."],
    resultPoints: [
      "Point-to-point and circular route generation.",
      "Walking and road-cycling aware constraints.",
      "Interactive previews and persistent saved routes.",
      "Portable GPX export through the native share sheet.",
    ],
    description: "Case study: Stride — a mobile route generator for walking and road cycling.",
  },
  {
    slug: "bookpilot",
    index: "04",
    title: ["BOOK", "PILOT"],
    disciplines: "SAAS / BOOKING / OMNICHANNEL",
    year: "2026",
    statement: "One booking engine for every customer channel.",
    overview:
      "BookPilot is a multi-tenant booking platform that unifies web, WhatsApp and voice interactions around one scheduling engine and one canonical source of truth.",
    facts: [
      { label: "Role", value: "Product / Software Engineer" },
      { label: "Year", value: "2026" },
      { label: "Core", value: "Booking / SaaS / Channels" },
      { label: "Language", value: "TypeScript" },
    ],
    problem: [
      "Service businesses often manage appointments across calls, messages, paper calendars and disconnected digital tools. The result is delayed replies, manual work and inconsistent availability.",
      "Adding another booking channel can make the problem worse when each surface owns separate scheduling logic. Every channel needs to converge on the same rules and canonical booking state.",
    ],
    problemFlow: ["WEB / WHATSAPP / VOICE", "PARALLEL BOOKING LOGIC", "CONFLICTING STATE"],
    systemIntro:
      "BookPilot keeps channels thin and routes every availability lookup, creation, reschedule and cancellation through a central booking core. Postgres owns canonical state while the dashboard and customer channels remain interchangeable surfaces.",
    system: [
      {
        index: "01",
        label: "CHANNELS",
        title: "Customer Entry",
        description: "Web, WhatsApp and voice normalize booking intent",
        detail: "Public web / conversation",
      },
      {
        index: "02",
        label: "DOMAIN",
        title: "Booking Core",
        description: "Computes availability and enforces lifecycle rules",
        detail: "Slots / conflicts / lifecycle",
      },
      {
        index: "03",
        label: "SOURCE OF TRUTH",
        title: "Postgres",
        description: "Commits tenant-scoped booking state and events",
        detail: "Supabase / SQL migrations",
      },
    ],
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
          "Channel providers translate transport and intent, but critical business logic remains inside the platform.",
      },
      {
        index: "03",
        label: "EVOLUTION",
        title: "Generic By Design",
        description:
          "Multi-tenant organizations, locations, services and staff keep the core reusable across service industries.",
      },
    ],
    stack: [
      { name: "Next.js", purpose: "Admin Dashboard" },
      { name: "TypeScript", purpose: "Core / API" },
      { name: "Supabase", purpose: "Platform Services" },
      { name: "PostgreSQL", purpose: "Source Of Truth" },
      { name: "OpenAI", purpose: "Text / Voice" },
      { name: "SQL Migrations", purpose: "Schema Evolution" },
    ],
    result: ["One consistent booking system across ", "every", " customer touchpoint."],
    resultPoints: [
      "Shared availability and booking lifecycle logic.",
      "Tenant-scoped organizations, services and schedules.",
      "A web dashboard over the same operational core.",
      "Channel-ready architecture for web, WhatsApp and voice.",
    ],
    description: "Case study: BookPilot — one omnichannel booking system for service businesses.",
  },
  {
    slug: "risetogether",
    index: "05",
    title: ["RISE", "TOGETHER"],
    disciplines: "EXPO / REACT NATIVE / SOCIAL ALARMS",
    year: "2026",
    statement: "Making the morning alarm a shared commitment.",
    overview:
      "RiseTogether is a mobile social-alarm app where groups create shared alarms, choose participants and see who has checked in awake for the next alarm.",
    facts: [
      { label: "Role", value: "Product / Mobile Engineer" },
      { label: "Year", value: "2026" },
      { label: "Core", value: "Groups / Alarms / Check-ins" },
      { label: "Language", value: "TypeScript / Kotlin" },
    ],
    problem: [
      "A normal alarm is private: it rings, gets dismissed and gives nobody else a reason to follow through. Group routines lose the social accountability that makes shared commitments effective.",
      "The product needed reliable device-level alarm behavior while keeping group membership, participants and awake status synchronized across users.",
    ],
    problemFlow: ["GROUP COMMITMENT", "ISOLATED ALARMS", "NO SHARED STATUS"],
    systemIntro:
      "RiseTogether separates shared group state from device execution. Supabase coordinates groups, members, alarms and check-ins, while a native Android alarm layer schedules and rings locally even when the React Native UI is not active.",
    system: [
      {
        index: "01",
        label: "SOCIAL",
        title: "Group Space",
        description: "Members create alarms and select participants",
        detail: "Invite codes / membership",
      },
      {
        index: "02",
        label: "SHARED STATE",
        title: "Supabase",
        description: "Stores alarms, participants and awake check-ins",
        detail: "Auth / database / storage",
      },
      {
        index: "03",
        label: "DEVICE",
        title: "Alarm Runtime",
        description: "Synchronizes and executes alarms on Android",
        detail: "Kotlin / service / receiver",
      },
    ],
    decisions: [
      {
        index: "01",
        label: "SOCIAL MODEL",
        title: "Groups First",
        description:
          "Alarms belong to a group and explicitly selected participants, keeping shared routines visible and intentional.",
      },
      {
        index: "02",
        label: "RELIABILITY",
        title: "Native Alarm Path",
        description:
          "Android scheduling, receivers and a foreground alarm service handle device behavior beyond the JavaScript lifecycle.",
      },
      {
        index: "03",
        label: "FEEDBACK",
        title: "Visible Check-ins",
        description: "The group view turns an individual wake-up into a shared status that shows who is already awake.",
      },
    ],
    stack: [
      { name: "Expo", purpose: "Mobile Platform" },
      { name: "React Native", purpose: "Application UI" },
      { name: "TypeScript", purpose: "Application Core" },
      { name: "Supabase", purpose: "Auth / Shared State" },
      { name: "Kotlin", purpose: "Android Alarms" },
      { name: "Expo Notifications", purpose: "Notifications" },
    ],
    result: ["A personal alarm transformed into a ", "shared", " morning ritual."],
    resultPoints: [
      "Create or join groups through invite codes.",
      "Shared alarms with selected participants.",
      "Native Android ringing and sound handling.",
      "Awake check-ins visible to the whole group.",
    ],
    description: "Case study: RiseTogether — a social alarm app for shared morning routines.",
  },
  {
    slug: "fitsee",
    index: "06",
    title: ["FIT", "SEE"],
    disciplines: "AI / E-COMMERCE / VIRTUAL TRY-ON",
    year: "2026",
    statement: "Helping shoppers see the product on themselves before buying.",
    overview:
      "Fitsee is a virtual try-on backend demo for e-commerce. It turns a shopper profile, product and size into an asynchronous render job with a viewable video result.",
    facts: [
      { label: "Role", value: "Backend / Product Engineer" },
      { label: "Year", value: "2026" },
      { label: "Core", value: "Try-on / Rendering / Commerce" },
      { label: "Language", value: "Python" },
    ],
    problem: [
      "Online shoppers can inspect a garment but cannot easily understand how it will look on their own proportions. That gap adds uncertainty at the exact moment a buying decision is made.",
      "Virtual try-on rendering is also too slow for a normal synchronous request. The product needs a durable job workflow that accepts input quickly, renders in the background and exposes progress safely.",
    ],
    problemFlow: ["SHOPPER + PRODUCT", "NO PERSONAL PREVIEW", "PURCHASE UNCERTAINTY"],
    systemIntro:
      "Fitsee separates the product API from rendering work. FastAPI authenticates the shopper and creates a render request, Redis and RQ queue the job, and a background worker produces a result whose status can be polled by the client.",
    system: [
      {
        index: "01",
        label: "REQUEST",
        title: "Try-on API",
        description: "Validates profile measurements, product and size",
        detail: "FastAPI / authentication",
      },
      {
        index: "02",
        label: "ASYNC WORK",
        title: "Render Queue",
        description: "Moves expensive rendering outside the request cycle",
        detail: "Redis / RQ worker",
      },
      {
        index: "03",
        label: "RESULT",
        title: "Video Output",
        description: "Publishes job status and the completed preview URL",
        detail: "PostgreSQL / render storage",
      },
    ],
    decisions: [
      {
        index: "01",
        label: "LATENCY",
        title: "Async By Default",
        description:
          "Rendering runs as a queued background job, keeping API requests responsive and work independently recoverable.",
      },
      {
        index: "02",
        label: "INPUT",
        title: "Profile Before Render",
        description:
          "Required body measurements make the try-on request explicit before product and size enter the render pipeline.",
      },
      {
        index: "03",
        label: "DELIVERY",
        title: "Observable Progress",
        description:
          "Clients poll a stable job endpoint and receive a video URL only after the render reaches its completed state.",
      },
    ],
    stack: [
      { name: "Python 3.12", purpose: "Application Core" },
      { name: "FastAPI", purpose: "HTTP API" },
      { name: "PostgreSQL", purpose: "Persistent State" },
      { name: "Redis", purpose: "Job Infrastructure" },
      { name: "RQ", purpose: "Render Queue" },
      { name: "Docker Compose", purpose: "Local Runtime" },
    ],
    result: ["A virtual fitting workflow built as an ", "observable", " render pipeline."],
    resultPoints: [
      "Authenticated shopper and profile workflow.",
      "Product and size-specific render requests.",
      "Background processing through a durable queue.",
      "Status polling with a viewable video result.",
    ],
    description: "Case study: Fitsee — an asynchronous virtual try-on backend for e-commerce.",
  },
];

export function getProjectCaseStudy(pathname: string): ProjectCaseStudy | undefined {
  const normalizedPath = pathname.replace(/\/+$/, "");
  return projectCaseStudies.find((project) => normalizedPath === `/projects/${project.slug}`);
}

export function getNextProject(project: ProjectCaseStudy): ProjectCaseStudy {
  const currentIndex = projectCaseStudies.findIndex((item) => item.slug === project.slug);
  return projectCaseStudies[(currentIndex + 1) % projectCaseStudies.length];
}
