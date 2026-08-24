import { SectionHeader } from "../components/SectionHeader";
import { experience } from "../data/portfolio";

export function Experience() {
  return (
    <section className="section" aria-labelledby="experience-title">
      <SectionHeader title={<span id="experience-title">Experience</span>} meta="07 / TIMELINE" />
      <div className="timeline">
        {experience.map((item) => (
          <article className="time-row reveal" key={item.organization}>
            <div className="year">{item.period}</div>
            <div>
              <h3>{item.organization}</h3>
              <p>{item.description}</p>
              <div className="exp-tags">{item.tags}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
