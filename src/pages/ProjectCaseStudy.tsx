import { useEffect } from "react";
import type { ProjectCaseStudy as ProjectCaseStudyData } from "../data/projectCaseStudies";
import { getProjectNavigationTarget } from "../data/projectNavigation";

interface ProjectCaseStudyProps {
  project: ProjectCaseStudyData;
}

function CaseSectionHeader({ title, meta }: { title: string; meta: string }) {
  const [firstLine, secondLine] = title.split("\n");

  return (
    <div className="case-section-head reveal">
      <h2>
        {firstLine}
        {secondLine && <br />}
        {secondLine}
      </h2>
      <div className="case-section-num">{meta}</div>
    </div>
  );
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const nextProject = getProjectNavigationTarget(`/projects/${project.slug}`);

  useEffect(() => {
    const title = `${project.title.join(" ")} — Hugo Pérez`;
    const url = `https://hugopza.dev/projects/${project.slug}`;
    document.title = title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", project.description);

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    canonical?.setAttribute("href", url);

    const metadata = [
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', project.description],
      ['meta[property="og:url"]', url],
      ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', project.description],
    ] as const;

    metadata.forEach(([selector, content]) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
    });
  }, [project]);

  return (
    <div className={`case-study case-study-${project.slug}`}>
      <a className="skip-link" href="#case-main">
        Skip to project content
      </a>

      <nav className="case-nav" aria-label="Project navigation">
        <a href="/">← Hugo / Portfolio</a>
        <div className="case-nav-right">
          <a href="#system">System</a>
          <a href="#result">Result</a>
        </div>
      </nav>

      <main id="case-main">
        <header className="case-hero">
          <div className="case-hero-top">
            <div className="case-eyebrow">{project.index} / Selected Work</div>
            <div className="case-hero-meta">
              {project.disciplines}
              <br />
              {project.year}
            </div>
          </div>

          <h1 className="case-hero-title">
            <span>{project.title[0]}</span>
            <span className="case-blue">{project.title[1]}</span>
          </h1>

          <img
            className="case-hero-visual"
            src={`/project-visuals/${project.slug}.svg`}
            alt=""
            width="800"
            height="800"
            aria-hidden="true"
          />

          <div className="case-hero-footer">
            <p className="case-hero-statement">{project.statement}</p>
          </div>
        </header>

        <section className="case-section" aria-labelledby="project-overview-title">
          <div id="project-overview-title">
            <CaseSectionHeader title={"The\nProject"} meta="02 / Overview" />
          </div>

          <div className="case-quick-grid">
            <p className="case-quick-copy reveal">{project.overview}</p>
            <dl className="case-facts reveal">
              {project.facts.map((fact) => (
                <div className="case-fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="case-section case-problem" aria-labelledby="project-problem-title">
          <div id="project-problem-title">
            <CaseSectionHeader title={"The\nProblem"} meta="03 / Constraint" />
          </div>

          <div className="case-problem-grid">
            <div className="case-problem-copy reveal">
              {project.problem.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="case-problem-diagram reveal" role="img" aria-label={project.problemFlow.join(" to ")}>
              <div className="case-problem-flow" aria-hidden="true">
                <div className="case-problem-node">{project.problemFlow[0]}</div>
                <div className="case-arrow" />
                <div className="case-problem-node bad">{project.problemFlow[1]}</div>
                <div className="case-arrow" />
                <div className="case-problem-node">{project.problemFlow[2]}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section case-system" id="system" aria-labelledby="project-system-title">
          <div id="project-system-title">
            <CaseSectionHeader title={"The\nSystem"} meta="04 / Architecture" />
          </div>

          <p className="case-system-intro reveal">{project.systemIntro}</p>

          <div className="case-system-diagram reveal">
            {project.system.map((node, index) => (
              <div className="case-system-fragment" key={node.title}>
                {index > 0 && <div className="case-system-arrow" aria-hidden="true" />}
                <article className={`case-system-node${index === 1 ? " blue" : ""}`}>
                  <small>
                    {node.index} / {node.label}
                  </small>
                  <strong>{node.title}</strong>
                  <small>{node.description}</small>
                </article>
              </div>
            ))}
          </div>

          <div className="case-system-bottom reveal" aria-label="Implementation details">
            {project.system.map((node) => (
              <div className="case-system-mini" key={node.detail}>
                {node.detail}
              </div>
            ))}
          </div>
        </section>

        <section className="case-section" aria-labelledby="project-decisions-title">
          <div id="project-decisions-title">
            <CaseSectionHeader title={"Engineering\nDecisions"} meta="05 / Principles" />
          </div>

          <div className="case-decisions-grid">
            {project.decisions.map((decision) => (
              <article className="case-decision reveal" key={decision.index}>
                <div className="case-decision-index">
                  {decision.index} / {decision.label}
                </div>
                <div>
                  <h3>{decision.title}</h3>
                  <p>{decision.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-stack" aria-labelledby="project-stack-title">
          <div id="project-stack-title">
            <CaseSectionHeader title={"Built\nWith"} meta="06 / Stack" />
          </div>

          <div className="case-stack-grid reveal">
            {project.stack.map((item) => (
              <div className="case-stack-item" key={item.name}>
                <span>{item.name}</span>
                <span>{item.purpose}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="case-section case-result" id="result" aria-labelledby="project-result-title">
          <div>
            <div id="project-result-title">
              <CaseSectionHeader title={"The\nResult"} meta="07 / Output" />
            </div>
            <p className="case-result-statement reveal">
              {project.result[0]}
              <span className="case-blue">{project.result[1]}</span>
              {project.result[2]}
            </p>
          </div>

          <div className="case-result-points reveal">
            {project.resultPoints.map((point, index) => (
              <div className="case-result-point" key={point}>
                <div className="case-result-index">{String(index + 1).padStart(2, "0")}</div>
                <strong>{point}</strong>
              </div>
            ))}
          </div>
        </section>

        <a
          className="case-next hoverable"
          href={nextProject.href}
          data-next-project={nextProject.isReturn ? "projects" : nextProject.title.toLowerCase().replaceAll(" ", "")}>
          <div className="case-next-top">
            <span>{nextProject.isReturn ? "Project Index" : "Next Project"}</span>
            <span>{nextProject.isReturn ? nextProject.index : `${nextProject.index} / Selected Work`}</span>
          </div>

          <h2 className="case-next-title">{nextProject.title}</h2>

          <div className="case-next-bottom">
            <span>{nextProject.disciplines}</span>
            <span className="case-next-arrow" aria-hidden="true">
              →
            </span>
          </div>
        </a>
      </main>
    </div>
  );
}
