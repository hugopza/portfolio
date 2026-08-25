import { useEffect } from "react";
import type { PersonalizedCaseStudy, PersonalizedCaseStudyVariant } from "../data/personalizedCaseStudies";

interface PersonalizedProjectCaseStudyProps {
  project: PersonalizedCaseStudy;
}

function ProjectHeading({ title, meta }: { title: [string, string]; meta: string }) {
  return (
    <div className="personal-head reveal">
      <h2>
        {title[0]}
        <br />
        {title[1]}
      </h2>
      <div className="personal-num">{meta}</div>
    </div>
  );
}

function TaliaShowcase() {
  return (
    <>
      <div className="personal-conversation reveal">
        <div className="personal-bubble user">What’s good tonight in Platja d’Aro? Something not too expensive.</div>
        <div className="personal-bubble ai">
          I’ve got a couple of options. Do you want clubbing or something more relaxed first?
        </div>
        <div className="personal-bubble user">Club. We’re 4.</div>
        <div className="personal-event-card">
          <small>Best match / Tonight</small>
          <h3>Monkey Nights</h3>
          <p>Guestlist available · group of 4 · promotion matched to the request.</p>
        </div>
        <div className="personal-bubble ai">This is the best fit. I can send you the guestlist link now.</div>
      </div>
      <div className="personal-decision-row reveal" aria-label="Available assistant decisions">
        <div className="personal-decision-pill active">Reply</div>
        <div className="personal-decision-pill">Ask</div>
        <div className="personal-decision-pill">Send link</div>
        <div className="personal-decision-pill">Escalate</div>
      </div>
    </>
  );
}

function StrideShowcase() {
  return (
    <>
      <div className="personal-map-shell reveal">
        <svg
          className="personal-route-svg"
          viewBox="0 0 1000 620"
          preserveAspectRatio="none"
          role="img"
          aria-label="Generated circular route preview">
          <path
            className="personal-route"
            d="M120 450 C190 400 240 250 360 290 C480 330 480 140 630 170 C790 202 820 360 710 410 C580 470 370 500 120 450"
          />
        </svg>
        <div className="personal-metric-strip">
          {[
            ["Distance", "42.8 km"],
            ["Elevation", "+614 m"],
            ["Duration", "2h 08m"],
            ["Activity", "Road"],
          ].map(([label, value]) => (
            <div className="personal-metric" key={label}>
              <small>{label}</small>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="personal-route-compare">
        <article className="personal-mini-map reveal">
          <h3>Loop</h3>
          <p>
            Start with an origin and distance target. Stride generates a circular route and can fall back to
            waypoint-pattern routing when needed.
          </p>
          <div className="personal-dotline" aria-hidden="true" />
        </article>
        <article className="personal-mini-map reveal">
          <h3>Point to point</h3>
          <p>Origin, destination and optional mandatory waypoints define a route with an explicit end.</p>
          <div className="personal-dotline angled" aria-hidden="true" />
        </article>
      </div>
    </>
  );
}

function RiseTogetherShowcase() {
  const members = ["Hugo", "Anna", "Marc"];

  return (
    <>
      <div className="personal-phones reveal">
        {members.map((member) => (
          <article className="personal-phone" key={member}>
            <div className="personal-phone-head">{member} / synced</div>
            <div className="personal-alarm">
              06:30
              <small>Saturday · Group trip</small>
            </div>
            <div className="personal-member">
              <span>3 members</span>
              <span>● synced</span>
            </div>
          </article>
        ))}
      </div>
      <div className="personal-sync-line reveal" aria-hidden="true" />
    </>
  );
}

function FitseeShowcase() {
  return (
    <div className="personal-job">
      <article className="personal-profile-card reveal">
        <div className="personal-eyebrow">User measurements</div>
        <div className="personal-body-visual" aria-hidden="true">
          <div className="personal-silhouette" />
          <div className="personal-measure one" />
          <div className="personal-measure two" />
          <div className="personal-measure three" />
        </div>
        {[
          ["Height", "182 cm"],
          ["Chest", "96 cm"],
          ["Shoulders", "46 cm"],
        ].map(([label, value]) => (
          <div className="personal-fact" key={label}>
            <span>{label}</span>
            <span>{value}</span>
          </div>
        ))}
      </article>
      <article className="personal-job-board reveal">
        <div className="personal-eyebrow">Render job / #001</div>
        {[
          ["REQUEST", "Product + size received"],
          ["QUEUE", "Processing in background"],
          ["WORKER", "Render execution"],
          ["RESULT", "Video URL"],
        ].map(([label, value], index) => (
          <div className={`personal-status${index === 1 ? " active" : ""}`} key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
        <div className="personal-video">Generated try-on video</div>
      </article>
    </div>
  );
}

function BookPilotShowcase() {
  const channels = [
    ["Customer channel", "Web"],
    ["Customer channel", "WhatsApp"],
    ["Customer channel", "Voice"],
    ["Internal surface", "Dashboard"],
  ];
  const rules = ["Availability", "Conflict rules", "Create / Reschedule", "Cancellation", "Lifecycle events"];
  const surfaces = [
    ["Web", "Customer-facing booking surface."],
    ["WhatsApp", "Same state through a conversational channel."],
    ["Voice", "Same lifecycle rules through voice."],
    ["Dashboard", "Operational view over the same core."],
  ];

  return (
    <>
      <p className="personal-booking-intro reveal">
        Every customer channel stays thin. Availability lookups, creation, rescheduling and cancellation all converge on
        the same domain logic, while Postgres remains the canonical source of truth.
      </p>
      <div className="personal-booking-map reveal">
        <div className="personal-channels">
          {channels.map(([label, value]) => (
            <div className="personal-channel" key={value}>
              <small>{label}</small>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <div className="personal-arrowline" aria-hidden="true" />
        <article className="personal-corebox">
          <small>02 / Domain</small>
          <h3>
            Booking
            <br />
            Core
          </h3>
          <div className="personal-rulelist">
            {rules.map((rule) => (
              <div className="personal-rule" key={rule}>
                <span>{rule}</span>
                <span>shared</span>
              </div>
            ))}
          </div>
        </article>
        <div className="personal-arrowline" aria-hidden="true" />
        <article className="personal-sourcebox">
          <small>03 / Source of truth</small>
          <strong>Postgres</strong>
          <div className="personal-eyebrow">Tenant-scoped booking state</div>
        </article>
      </div>
      <div className="personal-canonical reveal">
        <div className="personal-canonical-title">
          <span>Same booking / every surface</span>
          <span>#BP-0921</span>
        </div>
        <div className="personal-booking-row">
          <article className="personal-booking-master">
            <small>Canonical state</small>
            <strong>
              09:30
              <br />
              Haircut
            </strong>
            <small>Anna · Girona · Confirmed</small>
          </article>
          {surfaces.map(([surface, description]) => (
            <article className="personal-surface" key={surface}>
              <small>{surface}</small>
              <strong>09:30 confirmed</strong>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectShowcase({ variant }: { variant: PersonalizedCaseStudyVariant }) {
  if (variant === "talia") return <TaliaShowcase />;
  if (variant === "stride") return <StrideShowcase />;
  if (variant === "risetogether") return <RiseTogetherShowcase />;
  if (variant === "fitsee") return <FitseeShowcase />;
  return <BookPilotShowcase />;
}

export function PersonalizedProjectCaseStudy({ project }: PersonalizedProjectCaseStudyProps) {
  useEffect(() => {
    const title = `${project.title.join(" ")} — Hugo Pérez`;
    const routeSlug = project.slug === "talia" ? "talia-ai" : project.slug;
    const url = `https://hugopza.dev/projects/${routeSlug}`;
    document.title = title;

    const metadata = [
      ['meta[name="description"]', project.description],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', project.description],
      ['meta[property="og:url"]', url],
      ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', project.description],
    ] as const;

    metadata.forEach(([selector, content]) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
    });
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", url);
  }, [project]);

  const nextTitle = project.next.title.split(" ");

  return (
    <div className={`personal-case personal-case-${project.slug}`}>
      <a className="skip-link" href="#personal-main">
        Skip to project content
      </a>
      <nav className="personal-nav" aria-label="Project navigation">
        <a href="/">← Hugo / Portfolio</a>
        <span>{project.title.join(" ")} / Case Study</span>
      </nav>

      <main id="personal-main">
        <header className="personal-hero">
          <div className="personal-hero-top">
            <div className="personal-eyebrow">Selected Work</div>
            <div className="personal-meta">{project.meta}</div>
          </div>
          <h1>
            <span>{project.title[0]}</span>
            <span className="personal-accent">{project.title[1]}</span>
          </h1>
          <div className="personal-hero-bottom">
            <p className="personal-statement">{project.statement}</p>
          </div>
        </header>

        <section className="personal-section">
          <ProjectHeading title={["The", "Project"]} meta="Overview" />
          <div className="personal-overview">
            <p className="personal-lead reveal">{project.overview}</p>
            <div className="personal-facts reveal">
              {project.facts.map((fact) => (
                <div className="personal-fact" key={fact.label}>
                  <span>{fact.label}</span>
                  <span>{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {project.problem && (
          <section className="personal-section personal-problem">
            <ProjectHeading title={["The", "Problem"]} meta="Constraint" />
            <div className="personal-overview">
              <p className="personal-lead reveal">{project.problem.lead}</p>
              <p className="personal-problem-copy reveal">{project.problem.body}</p>
            </div>
          </section>
        )}

        <section className={`personal-section personal-showcase personal-showcase-${project.slug}`}>
          <ProjectHeading title={project.showcaseTitle} meta={project.showcaseMeta} />
          <ProjectShowcase variant={project.slug} />
        </section>

        <section className="personal-section">
          <ProjectHeading title={["Key", "Decisions"]} meta="Product / Engineering" />
          <div className="personal-cards">
            {project.decisions.map((decision) => (
              <article className="personal-card reveal" key={decision.index}>
                <small>
                  {decision.index} / {decision.label}
                </small>
                <div>
                  <h3>{decision.title}</h3>
                  <p>{decision.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="personal-section personal-stack">
          <ProjectHeading title={["Built", "With"]} meta="Stack" />
          <div className="personal-stack-grid reveal">
            {project.stack.map((item) => (
              <div className="personal-stack-item" key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.purpose}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="personal-section personal-result">
          <ProjectHeading title={["The", "Result"]} meta="Output" />
          <p className="personal-result-line reveal">
            {project.result[0]}
            <span className="personal-accent">{project.result[1]}</span>
            {project.result[2]}
          </p>
        </section>

        <a className="personal-next hoverable" href={`/projects/${project.next.slug}`}>
          <small>Next Project</small>
          <h2>
            {nextTitle.map((word, index) => (
              <span key={`${word}-${index}`}>
                {word}
                {index < nextTitle.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </a>
      </main>
    </div>
  );
}
