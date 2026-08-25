import { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../data/portfolio";

export function SelectedWork() {
  const [showMore, setShowMore] = useState(false);
  const featuredProjects = projects.slice(0, 3);
  const additionalProjects = projects.slice(3);

  const renderProject = (project: (typeof projects)[number], additional = false) => (
    <a
      className={`project hoverable${additional ? " project-additional" : " reveal"}`}
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
  );

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

      {featuredProjects.map((project) => renderProject(project))}

      <div id="additional-projects">
        {showMore && additionalProjects.map((project) => renderProject(project, true))}
      </div>

      <button
        className="projects-toggle hoverable"
        type="button"
        aria-expanded={showMore}
        aria-controls="additional-projects"
        onClick={() => setShowMore((current) => !current)}>
        <span>{showMore ? "Show less" : "Show more"}</span>
        <span aria-hidden="true">{showMore ? "−" : "+"}</span>
      </button>
    </section>
  );
}
