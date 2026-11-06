import { useEffect } from "react";
import { contactLinks } from "./data/portfolio";
import { work } from "./data/editorial";
import { Stack } from "./pages/Stack";
import { Weekly } from "./pages/Weekly";
import { publishedPosts } from "./data/weekly";
import { SiteHeader } from "./components/SiteHeader";
import { TextArrow } from "./components/TextArrow";

const navigation = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Stack", href: "/stack" },
  { label: "Weekly", href: "/weekly" },
  { label: "Contact", href: "/contact" },
];

const routeAliases: Record<string, string> = {
  "/tools": "/stack",
  "/projects/rrpp-agent-bridge": "/projects/talia-ai",
};

function Navigation({ path }: { path: string }) {
  return (
    <nav aria-label="Main navigation" className="navigation">
      {navigation.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          data-command={`open("${label}")`}
          aria-current={path === href || path.startsWith(`${href}/`) ? "page" : undefined}>
          {label}
        </a>
      ))}
    </nav>
  );
}

function ProjectIndex({ slug }: { slug: string }) {
  return (
    <nav className="project-index" aria-label="Projects">
      <h2>Projects</h2>
      <div>
        {work.map((project, index) => (
          <a
            href={`/projects/${project.slug}`}
            key={project.slug}
            aria-current={slug === project.slug ? "page" : undefined}>
            <span className="index-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{project.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

function About() {
  return (
    <div className="page-layout about-layout">
      <div className="about-intro">
        <div className="page-intro">
          <h1>About</h1>
        </div>
        <div className="experience">
          <section className="history-group" aria-labelledby="experience-title">
            <h2 id="experience-title">Experience</h2>
            <div className="history-entries">
              <div className="history-entry">
                <h3>GISCE</h3>
                <p>Software Engineer</p>
                <span className="about-period">2026 — present</span>
                <ul>
                  <li>Developing software and ERP workflows for the energy sector.</li>
                </ul>
              </div>
              <div className="history-entry">
                <h3>Independent projects</h3>
                <p>Software &amp; product development</p>
                <span className="about-period">Ongoing</span>
                <ul>
                  <li>Building mobile apps, conversational assistants and booking tools.</li>
                  <li>Working across interfaces, backend systems and automation.</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="history-group" aria-labelledby="education-title">
            <h2 id="education-title">Education</h2>
            <div className="history-entry">
              <h3>Computer Engineering</h3>
              <p>Universitat de Girona</p>
              <span className="about-period">2022 — 2026</span>
            </div>
          </section>
        </div>
        <section className="about-links" aria-labelledby="about-links-title">
          <h2 id="about-links-title">Links</h2>
          <a
            href={contactLinks.find((link) => link.label === "GitHub")?.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hugo Pérez on GitHub (opens in a new tab)">
            <span className="about-link-name">GitHub</span>
            <span className="about-link-handle">@hugopza</span>
            <TextArrow />
          </a>
        </section>
      </div>
      <div className="reading-column">
        <div className="about-copy">
          <div>
            <p>
              I started programming to make everyday things easier. When a task was repetitive or a tool didn’t quite do
              what I needed, I could build a small solution of my own. Seeing something I’d written become useful was
              what kept me going.
            </p>
            <p>
              Most of my projects still start that way: with a personal need or an idea I want to try. The result might
              be a mobile app, an automation or a script that does one job well.
            </p>
          </div>
          <div>
            <p>
              I like being involved from the first idea through to a working version. Trying it out, finding the awkward
              parts and making small improvements is often the part I enjoy most.
            </p>
            <p>
              Lately, that has included AI agents and the ways they can work with other software. Away from the screen,
              I spend time with friends and family, play sports and travel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="page-layout contact-layout">
      <div className="page-intro">
        <h1>Let’s talk.</h1>
        <p>Send me an email, or find me on LinkedIn.</p>
      </div>
      <div className="contact-list">
        <h2>Get in touch</h2>
        <ul className="contact-items">
          {contactLinks
            .filter((link) => link.label !== "GitHub")
            .map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="contact-row"
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  <span>{link.label}</span>
                  <span className="contact-value">
                    <span>{link.label === "Email" ? "hugoperezaraus@gmail.com" : "Hugo Pérez"}</span>
                    <TextArrow />
                  </span>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  const requestedPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const path = routeAliases[requestedPath] ?? requestedPath;
  const project = path === "/projects" ? work[0] : work.find((item) => path === `/projects/${item.slug}`);
  const page = navigation.find((item) => item.href === path);
  const post = publishedPosts.find((entry) => path === `/weekly/${entry.slug}`);
  const isHome = path === "/";
  const isKnown = isHome || Boolean(project || page || post);
  const title = project?.name || post?.title || page?.label || "Page not found";

  useEffect(() => {
    document.title = "Hugo Pérez";
    const description =
      project?.summary ||
      post?.summary ||
      (path === "/weekly" ? "Notes on AI, projects and what I’m learning along the way." : "") ||
      "Software engineer based in Girona. A few projects, a little about me and what I’m working with.";
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", document.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `https://hugopza.dev${isHome ? "/" : path}`);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", `https://hugopza.dev${isHome ? "/" : path}`);
    document
      .querySelector('meta[name="robots"]')
      ?.setAttribute("content", isKnown ? "index, follow" : "noindex, follow");
  }, [isHome, isKnown, path, project, post, title]);

  return (
    <div className={`site ${isHome ? "is-home" : "is-interior"} ${project ? "is-project" : ""}`}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      {!isHome && <SiteHeader path={path} section={project ? "Projects" : post ? "Weekly" : title} />}
      <main id="main-content" tabIndex={-1} className={isHome ? "home" : "interior"}>
        {isHome ? (
          <div className="home-content">
            <h1>
              <span aria-hidden="true">&lt;</span>Hugo Pérez<span aria-hidden="true"> /&gt;</span>
            </h1>
            <p className="home-role">Software engineer</p>
            <div className="home-bottom">
              <Navigation path={path} />
            </div>
          </div>
        ) : project ? (
          <article className="page-layout project-layout">
            <div className="project-sidebar">
              <div className="page-intro">
                <h1>{project.name}</h1>
                <p>{project.summary}</p>
                <dl className="project-facts">
                  <div>
                    <dt>Context</dt>
                    <dd>{project.context}</dd>
                  </div>
                  <div>
                    <dt>Year</dt>
                    <dd>{project.year}</dd>
                  </div>
                  <div>
                    <dt>Built with</dt>
                    <dd>{project.tools.join(", ")}</dd>
                  </div>
                  {project.repository && (
                    <div>
                      <dt>GitHub</dt>
                      <dd>
                        <a
                          className="project-fact-link project-repository"
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.name} on GitHub (opens in a new tab)`}>
                          <span>{project.repository.replace("https://github.com/", "")}</span>
                          <TextArrow />
                        </a>
                      </dd>
                    </div>
                  )}
                  {project.website && (
                    <div>
                      <dt>Website</dt>
                      <dd>
                        <a
                          className="project-fact-link project-website"
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.name} (opens in a new tab)`}>
                          <span>{project.website.replace("https://", "").replace(/\/$/, "")}</span>
                          <TextArrow />
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
              <ProjectIndex slug={project.slug} />
            </div>
            <div className="project-content">
              <div className="prose">
                {project.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ) : path === "/weekly" || post ? (
          <Weekly post={post} />
        ) : path === "/about" ? (
          <About />
        ) : path === "/stack" ? (
          <Stack />
        ) : path === "/contact" ? (
          <Contact />
        ) : (
          <div className="page-layout">
            <div className="page-intro">
              <h1>Not found</h1>
              <p>This page doesn’t exist.</p>
              <a className="text-link" href="/">
                Back home
              </a>
            </div>
          </div>
        )}
      </main>
      {project && (
        <details className="mobile-project-picker">
          <summary>
            <span>Projects</span>
            <span>
              {String(work.indexOf(project) + 1).padStart(2, "0")} / {String(work.length).padStart(2, "0")}{" "}
              <span className="picker-chevron" aria-hidden="true">
                ⌃
              </span>
            </span>
          </summary>
          <ProjectIndex slug={project.slug} />
        </details>
      )}
    </div>
  );
}
