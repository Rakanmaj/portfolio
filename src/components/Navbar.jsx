import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("#about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      setScrolled(y > 24);

      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const current = max > 0 ? (window.scrollY / max) * 100 : 0;
      setProgress(current);

      const offsets = links.map((l) => {
        const el = document.querySelector(l.href);
        if (!el) return { href: l.href, top: Infinity };
        return { href: l.href, top: el.getBoundingClientRect().top };
      });
      const current2 = offsets
        .filter((o) => o.top - 160 <= 0)
        .sort((a, b) => b.top - a.top)[0];
      if (current2) setActive(current2.href);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden>
        <span style={{ width: `${progress}%` }} />
      </div>

      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a href="#hero" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">RA</span>
          <span className="logo-text">Rakan Alshamali</span>
        </a>

        <div className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Rakan_Alshamali_CV.pdf"
            download="Rakan_Alshamali_CV.pdf"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className={`nav-toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>
    </>
  );
}
