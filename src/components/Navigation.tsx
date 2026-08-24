import { navigation } from "../data/portfolio";

export function Navigation() {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <a href="#top" className="brand">
        HUGO / SYSTEM 01
      </a>
      <div className="nav-links">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </div>
      <div>Girona / 2026</div>
    </nav>
  );
}
