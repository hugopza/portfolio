import type { ProjectContent } from "../../types";

export default {
  title: "Araus Joguines",
  theme: "light",
  tags: ["shopify", "javascript"],
  description: "Implementació d'e-commerce per a una botiga de joguines real de Girona.<br/><br/>El projecte transforma un negoci físic, el seu catàleg i les operacions diàries en una botiga Shopify fàcil de gestionar.",
  components: [
    { type: "text", props: { title: "Construït al voltant del negoci", text: "L'objectiu no era personalitzar-ho tot, sinó crear una botiga fiable que persones no tècniques poguessin gestionar sense trencar els processos de la botiga física." } },
    { type: "list", props: { title: "Prioritats del lliurament", items: ["Configuració de Shopify i personalització de la botiga", "Catàleg i categories basats en l'inventari real", "Traducció directa dels requisits dels responsables", "Simplicitat operativa per sobre de funcionalitats innecessàries"], size: "md" } },
  ],
} as const satisfies ProjectContent;
