import type { ProjectContent } from "../../types";

export default {
  title: "Araus Joguines",
  theme: "light",
  tags: ["shopify", "javascript"],
  description: "A real-world e-commerce implementation for a local toy store in Girona.<br/><br/>The work translates an existing physical business, catalogue, and day-to-day operations into a manageable Shopify storefront.",
  components: [
    { type: "text", props: { title: "Built around the business", text: "The goal was not maximum customization. It was a reliable online store that non-technical stakeholders could operate without breaking the workflows already used in the physical shop." } },
    { type: "list", props: { title: "Delivery focus", items: ["Shopify setup and storefront customization", "Catalogue and category structure based on real inventory", "Direct stakeholder requirement translation", "Operational simplicity over unnecessary features"], size: "md" } },
  ],
} as const satisfies ProjectContent;
