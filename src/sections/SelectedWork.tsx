import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../data/portfolio";

export function SelectedWork() {
  return (
    <section className="section projects" id="work" aria-labelledby="work-title">
      <SectionHeader
        title={
          <span id="work-title">
            Selected
            <br />
            Work
          </span>
        }
        meta="02 / PROJECT INDEX"
      />

      {projects.map((project) => (
        <a
          className="project reveal hoverable"
          href={project.href}
          aria-label={`${project.name}, ${project.disciplines}, ${project.year}`}
          key={project.name}>
          <div className="project-index">{project.index}</div>
          <h3>{project.name}</h3>
          <div className="project-meta">
            {project.disciplines}
            <br />
            {project.year}
          </div>
        </a>
      ))}
    </section>
  );
}
