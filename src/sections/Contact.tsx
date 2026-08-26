import { contactLinks } from "../data/portfolio";

export function Contact() {
  return (
    <footer className="contact" id="contact">
      <div>
        <div className="eyebrow contact-eyebrow">10 / CONTACT</div>
        <h2>
          Let's
          <br />
          build it.
        </h2>
      </div>
      <div className="contact-links">
        <div className="contact-linkset">
          {contactLinks.map((link) => (
            <a
              className="hoverable"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              key={link.label}>
              {link.label} ↗
            </a>
          ))}
        </div>
        <div className="system">
          HUGO PÉREZ / PORTFOLIO
          <br />
          VERSION 1.3.0 · SYSTEM ONLINE ●
        </div>
      </div>
    </footer>
  );
}
