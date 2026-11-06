import { stackSections, type StackItem } from "../data/stack";

function Item({ item }: { item: StackItem }) {
  const contents = (
    <>
      <span className="stack-name">
        {item.name}
        {item.href && (
          <span className="stack-inline-arrow" aria-hidden="true">
            ↗
          </span>
        )}
      </span>
      <span className="stack-type">{item.type}</span>
      <span className="stack-detail">
        <span className="stack-description">{item.description}</span>
        <span className="stack-arrow" aria-hidden="true">
          {item.href ? "↗" : ""}
        </span>
      </span>
    </>
  );
  return (
    <li className="stack-item">
      {item.href ? (
        <a
          className="stack-entry"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-description="Opens in a new tab">
          {contents}
        </a>
      ) : (
        <div className="stack-entry">{contents}</div>
      )}
    </li>
  );
}

export function Stack() {
  return (
    <div className="page-layout stack-page">
      <div className="page-intro stack-intro">
        <h1>Stack</h1>
        <p>Tools, skills &amp; infrastructure.</p>
      </div>
      <div className="stack-sections">
        {stackSections.map((section) => (
          <section className="stack-section" aria-labelledby={section.id} key={section.id}>
            <h2 id={section.id}>{section.title}</h2>
            <ul className="stack-items">
              {section.items.map((item) => (
                <Item item={item} key={item.name} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
