import type { ProjectContent } from "../../types";

export default {
  title: "Stride",
  theme: "light",
  tags: ["expo", "react", "typescript", "supabase"],
  description: "Una app mòbil que genera rutes realistes per córrer a partir de restriccions de distància, temps, superfície i forma.<br/><br/>En lloc de prometre una ruta matemàticament perfecta, Stride crea múltiples candidates i les puntua segons la seva utilitat real.",
  components: [
    { type: "text", props: { title: "Rutes basades en restriccions", text: "El procés genera punts candidats, sol·licita rutes i ordena els resultats segons la precisió de distància, la superfície, la forma i la utilitat pràctica." } },
    { type: "list", props: { title: "Resultats de l'MVP", items: ["Generació de rutes circulars i punt a punt", "Múltiples candidates puntuades", "Integració amb OpenRouteService i OpenStreetMap", "Exportació GPX per utilitzar les rutes"], size: "md" } },
  ],
} as const satisfies ProjectContent;
