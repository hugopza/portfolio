import { tickerItems } from "../data/portfolio";

export function StatusTicker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
