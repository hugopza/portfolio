import portraitUrl from "../assets/hugo-perez.jpg";
import { SectionHeader } from "../components/SectionHeader";
import { offlineInterests, profileItems } from "../data/portfolio";

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <SectionHeader
        title={
          <span id="about-title">
            About
            <br />
            Me
          </span>
        }
        meta="05 / PROFILE"
      />

      <div className="about-editorial">
        <div className="about-main">
          <div className="eyebrow reveal">HUGO PÉREZ / SOFTWARE ENGINEER</div>
          <p className="about-quote reveal">I like building things that didn't exist yesterday.</p>

          <div className="about-copy reveal">
            <p>
              I’m a software engineer based in Girona. I’m especially interested in the point where software
              engineering, artificial intelligence and product thinking overlap.
            </p>
            <p>
              I enjoy taking ideas that initially feel abstract — an AI agent, a new workflow, an automation, an
              internal tool — and turning them into systems that actually work in the real world.
            </p>
            <p>
              I’m most comfortable when I can understand the problem deeply, prototype fast and keep improving the
              product until the complexity starts to disappear.
            </p>
          </div>

          <div className="about-data-row">
            <div className="about-data-block reveal">
              <div className="eyebrow">PROFILE /</div>
              <dl className="profile-data compact">
                {profileItems.map((item) => (
                  <div className="profile-row" key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="about-data-block reveal">
              <div className="eyebrow">WHEN I'M OFFLINE /</div>
              <div className="personal-list light-list">
                {offlineInterests.map((interest) => (
                  <div key={interest.index}>
                    <span>{interest.index}</span>
                    <strong>{interest.name}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="about-photo-side" aria-label="Portrait">
          <div className="profile-photo-wrap reveal">
            <div className="profile-photo-frame">
              <img
                src={portraitUrl}
                alt="Hugo Pérez by the marina in Girona"
                className="profile-photo"
                width="1024"
                height="1365"
                loading="lazy"
                decoding="async"
              />
              <div className="profile-photo-overlay" aria-hidden="true" />
              <div className="profile-photo-meta">
                <span>PORTRAIT / 2026</span>
                <span>GIRONA</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
