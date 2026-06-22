import riseTogether from "../../../assets/thumbnails/risetogether.svg";
import stride from "../../../assets/thumbnails/stride.svg";
import araus from "../../../assets/thumbnails/araus.svg";
import type { ProjectPreview } from "../../types";

export default [
  { title: "RiseTogether", slug: "risetogether", thumbnail: riseTogether, description: "Social alarm and group accountability" },
  { title: "Stride", slug: "stride", thumbnail: stride, description: "Constraint-based running route generation" },
  { title: "Araus Joguines", slug: "araus", thumbnail: araus, description: "E-commerce for a real local business" },
] as const satisfies ProjectPreview[];
