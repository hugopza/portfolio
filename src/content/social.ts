export const social = [
  { url: "mailto:hugoperezaraus@gmail.com", name: "mail" },
  { url: "https://github.com/hugopza", name: "github" },
  { url: "https://www.linkedin.com/in/hugoperezaraus/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
