import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      setScrolled(y > 24);

      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const current = max > 0 ? (window.scrollY / max) * 100 : 0;
      setProgress(current);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress">
        <span style={{ width: `${progress}%` }} />
      </div>

      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a href="#hero" className="logo">
          Rakan
        </a>

        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#palette">Design</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </>
  );
}