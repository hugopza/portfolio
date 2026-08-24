import { SectionHeader } from "../components/SectionHeader";
import { labItems } from "../data/portfolio";

export function Lab() {
  return (
    <section className="section dark" id="lab" aria-labelledby="lab-title">
      <SectionHeader
        title={
          <span id="lab-title">
            Lab /<br />
            Experiments
          </span>
        }
        meta="03 / PERSONAL R&D"
      />
      <div className="lab-grid">
        {labItems.map((item) => (
          <article className="lab-card reveal hoverable" key={item.index}>
            <div className="tag">LAB / {item.index}</div>
            <h3>{item.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
