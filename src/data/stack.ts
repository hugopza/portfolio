export interface StackItem {
  name: string;
  type: string;
  description: string;
  href?: string;
}

export interface StackSection {
  id: string;
  title: string;
  items: StackItem[];
}

export const stackSections: StackSection[] = [
  {
    id: "ai-stack",
    title: "AI stack",
    items: [
      { name: "OpenAI", type: "Tool", description: "Models for text and voice" },
      { name: "OpenClaw", type: "Tool", description: "Runtime for AI agents" },
      { name: "T3 Code", type: "Tool", description: "Workspace for coding with agents", href: "https://t3.codes" },
      {
        name: "Claude Code",
        type: "Tool",
        description: "Coding assistance in the terminal",
        href: "https://claude.com/product/claude-code",
      },
      {
        name: "Codex CLI",
        type: "Tool",
        description: "Terminal agent for software work",
        href: "https://developers.openai.com/codex/cli",
      },
      { name: "WezTerm", type: "Tool", description: "Terminal with tabs and panes", href: "https://wezterm.org" },
      {
        name: "LangGraph",
        type: "Framework",
        description: "Stateful workflows for AI agents",
        href: "https://www.langchain.com/langgraph",
      },
      {
        name: "Playwright",
        type: "Framework",
        description: "Browser automation and interface testing",
        href: "https://playwright.dev",
      },
      {
        name: "OpenWhispr",
        type: "Tool",
        description: "Voice dictation into text fields",
        href: "https://openwhispr.com",
      },
      { name: "Dia", type: "Tool", description: "A browser with AI assistance", href: "https://www.diabrowser.com" },
      { name: "Cursor", type: "Tool", description: "Code editor with AI assistance", href: "https://cursor.com" },
    ],
  },
  {
    id: "skills",
    title: "Skills",
    items: [
      { name: "Frontend Design", type: "Skill", description: "Guidance for considered interface design" },
      {
        name: "Vercel agent skills",
        type: "Skill",
        description: "Agent guidance for web development",
        href: "https://github.com/vercel-labs/agent-skills",
      },
      {
        name: "Poteto skills",
        type: "Skill",
        description: "Reusable workflows for coding agents",
        href: "https://github.com/cursor/plugins/tree/main/pstack",
      },
      {
        name: "ASD-STE100",
        type: "Skill",
        description: "Rules for simplified technical writing",
        href: "https://github.com/danyuchn/asd-ste100-skill",
      },
      { name: "Agent browser", type: "Skill", description: "Web navigation for AI agents" },
      { name: "Image generation", type: "Skill", description: "Create and edit visual assets" },
      { name: "Documents", type: "Skill", description: "Create and review formatted documents" },
      { name: "PDF", type: "Skill", description: "Read and prepare PDF files" },
      { name: "Skill creator", type: "Skill", description: "Build reusable instructions for agents" },
      { name: "Google Workspace", type: "Skill", description: "Work across Google productivity apps" },
      {
        name: "shadcn",
        type: "Skill",
        description: "Guidance for composing interface components",
        href: "https://ui.shadcn.com/docs/skills",
      },
      {
        name: "Grill me",
        type: "Skill",
        description: "Questions that challenge a plan",
        href: "https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me",
      },
    ],
  },
  {
    id: "mcp-servers",
    title: "MCP servers",
    items: [
      {
        name: "Figma MCP",
        type: "MCP",
        description: "Design context for coding agents",
        href: "https://developers.figma.com/docs/figma-mcp-server/",
      },
      {
        name: "Context7",
        type: "MCP",
        description: "Library documentation within agent workflows",
        href: "https://github.com/upstash/context7",
      },
      {
        name: "Playwright MCP",
        type: "MCP",
        description: "Browser control through agent tools",
        href: "https://github.com/microsoft/playwright-mcp",
      },
      {
        name: "FastMCP",
        type: "Framework",
        description: "Build MCP servers with Python",
        href: "https://gofastmcp.com",
      },
    ],
  },
  {
    id: "development-stack",
    title: "Development stack",
    items: [
      { name: "Python", type: "Language", description: "Services, automation and application logic" },
      { name: "TypeScript", type: "Language", description: "Typed code for web applications" },
      { name: "React", type: "Framework", description: "Component interfaces for the web" },
      { name: "React Native / Expo", type: "Framework", description: "Mobile interfaces and application tooling" },
      { name: "FastAPI", type: "Framework", description: "HTTP APIs written in Python" },
      { name: "PostgreSQL", type: "Database", description: "Relational storage for application data" },
      { name: "Supabase", type: "Cloud", description: "Database, authentication and file storage" },
      { name: "Redis / RQ", type: "Database", description: "Queues for background processing jobs" },
    ],
  },
  {
    id: "servers-infrastructure",
    title: "Servers & infrastructure",
    items: [
      { name: "AWS", type: "Cloud", description: "Cloud computing and infrastructure services" },
      { name: "Linux", type: "Server", description: "Operating system for server workloads" },
      { name: "Nginx", type: "Server", description: "Web serving and reverse proxying" },
      { name: "Docker", type: "Tool", description: "Containers for running application services" },
      { name: "Cloudflare", type: "Cloud", description: "DNS, caching and network services" },
      { name: "Vercel", type: "Cloud", description: "Hosting and deployments for websites" },
      { name: "Home server", type: "Server", description: "Local hardware for running services" },
    ],
  },
];
