import { SectionHeader } from "../components/SectionHeader";
import { builds } from "../data/portfolio";

export function CurrentlyBuilding() {
  return (
    <section className="section" aria-labelledby="building-title">
      <SectionHeader
        title={
          <span id="building-title">
            Currently
            <br />
            Building
          </span>
        }
        meta="09 / ACTIVE SYSTEMS"
      />
      <div className="build-list">
        {builds.map((build) => (
          <article className="build-row reveal" key={build.name}>
            <h3>{build.name}</h3>
            <div className="meter" aria-label={`${build.progress}% progress`}>
              <span style={{ width: `${build.progress}%` }} />
            </div>
            <div className="state">
              {build.active && <span aria-hidden="true">● </span>}
              {build.state}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
