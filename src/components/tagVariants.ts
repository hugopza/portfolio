export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "typescript"
  | "supabase"
  | "expo"
  | "kotlin"
  | "shopify";

export const tagLabels = {
  three: "Three.js", websockets: "WebSockets", react: "React", redis: "Redis", gray: "Gray",
  html: "HTML", css: "CSS", javascript: "JavaScript", node: "Node.js", next: "Next.js",
  kubernetes: "Kubernetes", postgresql: "PostgreSQL", ogl: "OGL.js", glsl: "GLSL",
  typescript: "TypeScript", supabase: "Supabase", expo: "Expo", kotlin: "Kotlin", shopify: "Shopify",
} as const satisfies Record<TagVariant, string>;
