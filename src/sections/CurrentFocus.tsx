import { SectionHeader } from "../components/SectionHeader";
import { focusItems } from "../data/portfolio";

export function CurrentFocus() {
  return (
    <section className="section focus-section" aria-labelledby="focus-title">
      <SectionHeader
        title={
          <span id="focus-title">
            Current
            <br />
            Focus
          </span>
        }
        meta="06 / NOW"
      />
      <div className="focus-grid">
        <div className="focus-intro reveal">
          <div className="eyebrow">WHAT I'M THINKING ABOUT RIGHT NOW</div>
          <p>Not skill levels. Just the topics taking most of my attention lately.</p>
        </div>
        <div className="focus-list reveal">
          {focusItems.map((item) => (
            <div className="focus-row" key={item.index}>
              <div className="focus-name">
                <span>{item.index}</span>
                <strong>{item.name}</strong>
              </div>
              <div className="focus-meter" aria-hidden="true">
                <i style={{ width: `${item.value}%` }} />
              </div>
              <div className="focus-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
