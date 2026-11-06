import { useEffect, useRef, useState } from "react";
import { GironaStatus } from "./GironaStatus";

const navigation = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Stack", href: "/stack" },
  { label: "Weekly", href: "/weekly" },
  { label: "Contact", href: "/contact" },
];

function Breadcrumb({ section }: { section: string }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <a href="/" className="wordmark">
        Hugo Pérez
      </a>
      <span className="breadcrumb-divider" aria-hidden="true">
        /
      </span>
      <span aria-current="page">{section}</span>
    </nav>
  );
}

export function SiteHeader({ path, section }: { path: string; section: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!menuOpen) {
      if (dialog.open) dialog.close();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();
    const desktop = window.matchMedia("(min-width: 1001px)");
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setMenuOpen(false);
    }
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  const isCurrent = (href: string) => path === href || path.startsWith(`${href}/`);

  return (
    <header className="site-header">
      <Breadcrumb section={section} />
      <nav className="navigation header-navigation" aria-label="Main navigation">
        {navigation.map(({ label, href }) => (
          <a key={href} href={href} aria-current={isCurrent(href) ? "page" : undefined}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-weather">
        <GironaStatus />
      </div>
      <button
        type="button"
        className="menu-toggle"
        ref={toggleRef}
        aria-controls="mobile-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(true)}>
        [ Menu ]
      </button>
      <dialog
        id="mobile-navigation"
        ref={dialogRef}
        className="mobile-menu"
        aria-label="Main navigation"
        onCancel={() => setMenuOpen(false)}
        onClose={() => {
          setMenuOpen(false);
          toggleRef.current?.focus();
        }}>
        <div className="mobile-menu-header">
          <Breadcrumb section={section} />
          <button type="button" className="menu-toggle" onClick={() => setMenuOpen(false)} autoFocus>
            [ Close ]
          </button>
        </div>
        <nav className="mobile-menu-links" aria-label="Main navigation">
          {navigation.map(({ label, href }, index) => (
            <a key={href} href={href} aria-current={isCurrent(href) ? "page" : undefined}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </dialog>
    </header>
  );
}
