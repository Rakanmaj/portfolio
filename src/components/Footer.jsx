export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="#hero" className="footer-brand">
          <span className="footer-mark">RA</span>
          <span>
            <strong>Rakan Alshamali</strong>
            <small>Full-stack developer · Amman, Jordan</small>
          </span>
        </a>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-meta">
          <span>© {year} Rakan Alshamali</span>
          <span>Designed & built with React</span>
        </div>
      </div>
    </footer>
  );
}

