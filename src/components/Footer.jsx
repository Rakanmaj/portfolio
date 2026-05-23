export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-mark">RA</span>
          <div>
            <strong>Rakan Alshamali</strong>
            <span>Full-Stack Developer · Amman, Jordan</span>
          </div>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-meta">
          <span>© {year} Rakan Alshamali</span>
          <span>Designed & built with React</span>
        </div>
      </div>
    </footer>
  );
}
