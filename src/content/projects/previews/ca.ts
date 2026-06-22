import riseTogether from "../../../assets/thumbnails/risetogether.svg";
import stride from "../../../assets/thumbnails/stride.svg";
import araus from "../../../assets/thumbnails/araus.svg";
import type { ProjectPreview } from "../../types";

export default [
  { title: "RiseTogether", slug: "risetogether", thumbnail: riseTogether, description: "Alarma social i responsabilitat de grup" },
  { title: "Stride", slug: "stride", thumbnail: stride, description: "Generació de rutes per córrer amb restriccions" },
  { title: "Araus Joguines", slug: "araus", thumbnail: araus, description: "E-commerce per a un negoci local real" },
] as const satisfies ProjectPreview[];
