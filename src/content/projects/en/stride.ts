import type { ProjectContent } from "../../types";

export default {
  title: "Stride",
  theme: "light",
  tags: ["expo", "react", "typescript", "supabase"],
  description: "A mobile app that generates realistic running routes from distance, time, surface, and route-shape constraints.<br/><br/>Instead of promising a mathematically perfect route, Stride produces multiple candidates and scores them for real-world usability.",
  components: [
    { type: "text", props: { title: "Constraint-based routing", text: "The generation pipeline creates candidate waypoints, requests routes, and ranks the results by distance accuracy, surface preference, shape, and practical usability." } },
    { type: "list", props: { title: "MVP outcomes", items: ["Circular and point-to-point route generation", "Multiple scored route candidates", "OpenRouteService and OpenStreetMap integration", "GPX export for real-world use"], size: "md" } },
  ],
} as const satisfies ProjectContent;
