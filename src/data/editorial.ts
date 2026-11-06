export interface EditorialProject {
  slug: string;
  name: string;
  summary: string;
  year: string;
  context: string;
  tools: string[];
  paragraphs: string[];
  repository?: string;
  website?: string;
}

export const work: EditorialProject[] = [
  {
    slug: "fitsee",
    repository: "https://github.com/hugopza/Fitsee",
    name: "Fitsee",
    summary: "A virtual fitting room to help you choose a size and see how a garment looks on you before buying.",
    year: "2026",
    context: "Independent project",
    tools: ["Python", "FastAPI", "PostgreSQL", "Redis", "RQ", "Blender"],
    paragraphs: [
      "Users upload two photos of their body and provide a few body measurements. This information is used to create a digital mannequin with their proportions. They then choose a garment to try on and receive a 360-degree video showing how it looks from every angle.",
      "The process combines 3D modelling and rendering in Blender with a final AI step that gives the mannequin an appearance closer to the user’s own.",
    ],
  },
  {
    slug: "stride",
    repository: "https://github.com/hugopza/stride-routes",
    name: "Stride",
    summary:
      "An app for finding walking and cycling routes when you know the kind of outing you want, but not which path to take.",
    year: "2026",
    context: "Independent project",
    tools: ["Expo", "React Native", "OpenRouteService", "Supabase"],
    paragraphs: [
      "Users choose an activity, distance and preferred surface. They can also add places they want to pass through. Stride uses these preferences to generate routes that can be viewed on a map, saved or exported as GPX files to follow on other devices.",
      "The app is built with React Native, using OpenRouteService to calculate routes and Supabase to manage data.",
    ],
  },
  {
    slug: "talia-ai",
    repository: "https://github.com/hugopza/rrpp-agent-bridge",
    name: "Talia AI",
    summary:
      "An assistant that helps answer recurring Instagram enquiries and leaves conversations needing personal attention to a human.",
    year: "2026",
    context: "Independent project",
    tools: ["Python", "OpenClaw", "Meta API", "SQLite"],
    paragraphs: [
      "Customers message the Instagram account as they normally would. Talia receives the message, interprets the enquiry and prepares a reply or hands the conversation over to a person. A dashboard lets the team review messages and step in when needed.",
      "The system connects Meta’s API to an AI agent through OpenClaw. Messages are processed in the background, and each reply goes through checks before being sent.",
    ],
  },
  {
    slug: "encaixa-cv",
    name: "Encaixa CV",
    summary:
      "A tool for comparing candidates without reviewing every CV from scratch or losing sight of the role’s requirements.",
    year: "2026",
    context: "Independent project",
    tools: ["TypeScript", "Supabase", "Anthropic"],
    repository: "https://github.com/hugopza/encaixa-cv",
    paragraphs: [
      "The recruiter creates a vacancy, defines the criteria and their relative weights, and uploads CVs as PDF or text files. Encaixa CV analyses the information and shows how well each candidate meets the requirements, pointing to the passages that support its assessment.",
      "Users can compare up to three candidates and prepare interview questions. The system combines a Supabase database with Anthropic AI models to analyse documents and organise the results.",
    ],
  },
  {
    slug: "thirsty",
    name: "Thirsty",
    summary: "A website for discovering Thirsty’s parties and experiences, with all the information in one place.",
    year: "2026",
    context: "Web project",
    tools: ["Next.js", "React", "TypeScript", "Supabase"],
    repository: "https://github.com/hugopza/thirsty",
    website: "https://thirsty.cat/",
    paragraphs: [
      "Visitors browse events and open the one that interests them to discover the details through text, photography and video. They can also explore trips with Thirsty Experiences and revisit past events in the photo archive.",
      "The website is built with Next.js and uses Supabase to manage data, with a focus on visual content and browsing on mobile.",
    ],
  },
  {
    slug: "emotira",
    name: "Emotira",
    summary: "A game that tests how well you know Catalan towns through emoji clues.",
    year: "2026",
    context: "Collaborative project",
    tools: ["React", "TypeScript", "Vite", "Supabase"],
    repository: "https://github.com/JoanPerez10/emotira",
    website: "https://emotira.vercel.app/",
    paragraphs: [
      "Players interpret a combination of emojis and try to guess which town it represents. Each correct answer adds a town to their map. A timed mode adds the challenge of playing against the clock.",
      "Built collaboratively with React and TypeScript, the game saves progress in the browser so players can continue their collection when they return.",
    ],
  },
  {
    slug: "risetogether",
    repository: "https://github.com/hugopza/RiseTogether",
    name: "RiseTogether",
    summary: "A shared alarm app for coordinating mornings and seeing who in the group is already awake.",
    year: "2026",
    context: "Independent project",
    tools: ["Expo", "React Native", "TypeScript", "Supabase", "Kotlin"],
    paragraphs: [
      "Users join a group and set an alarm for selected participants. When the time comes, the alarm rings on each person’s device and they confirm they are up. That confirmation is shared with the rest of the group.",
      "The app combines React Native with native Android features to schedule and ring alarms. Supabase keeps groups, participants and wake-up confirmations in sync.",
    ],
  },
  {
    slug: "bookpilot",
    repository: "https://github.com/hugopza/bookpilot",
    name: "BookPilot",
    summary: "A platform for managing appointments without keeping separate calendars for web and WhatsApp bookings.",
    year: "2026",
    context: "Independent project",
    tools: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "OpenAI"],
    paragraphs: [
      "Customers choose a service and check the available times. When they confirm an appointment, it is added to the same calendar the business uses. Bookings and cancellations share availability across channels to keep the schedule consistent.",
      "The business manages services, staff and locations from a dashboard. The platform is built with Next.js and Supabase, with a booking core shared by all interfaces.",
    ],
  },
  {
    slug: "gisce-mcp",
    name: "GISCE MCP",
    summary:
      "A connection between AI assistants and GISCE’s ERP for looking up information and carrying out operations using natural language.",
    year: "2026",
    context: "Work at GISCE",
    tools: ["Python", "MCP", "FastMCP", "OpenERP"],
    paragraphs: [
      "The user makes a request to the assistant, which selects an available tool to handle it. The tool queries the ERP or performs the operation and returns a result for the assistant to present to the user.",
      "The integration is built with Python and FastMCP. Each tool defines the data it needs and the operations it allows, and executions are recorded so they can be reviewed.",
    ],
  },
];
