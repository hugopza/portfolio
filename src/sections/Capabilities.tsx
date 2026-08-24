import { capabilities } from "../data/portfolio";

export function Capabilities() {
  return (
    <section className="section" aria-labelledby="capabilities-title">
      <div className="capabilities">
        <div className="reveal">
          <div className="eyebrow">04 / CAPABILITIES</div>
          <h2 className="cap-title" id="capabilities-title">
            From
            <br />
            system
            <br />
            architecture
            <br />
            to the
            <br />
            interface.
          </h2>
        </div>
        <div className="cap-list reveal">
          {capabilities.map((capability) => (
            <article className="cap-row" key={capability.index}>
              <div className="n">{capability.index}</div>
              <div>
                <h3>{capability.name}</h3>
                <p>{capability.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
