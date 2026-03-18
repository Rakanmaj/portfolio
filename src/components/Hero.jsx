import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hero section-block">
      <div className="hero-bg-orb orb-1" />
      <div className="hero-bg-orb orb-2" />
      <div className="hero-grid" />

      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">FULL-STACK PORTFOLIO</p>

        <h1 className="hero-title">
          Building <span className="gradient-text">real-world systems</span>
          <br />
          with modern frontend,
          <br />
          backend, and data.
        </h1>

        <p className="hero-description">
          I’m Rakan Alshamali, a Computer Science student focused on full-stack
          development using React, Node.js, Express, and PostgreSQL, with strong
          interest in clean architecture, scalable systems, and product-quality
          interfaces.
        </p>

        <div className="hero-actions">
          <a href="/Rakan_Full_CV.pdf" download className="btn btn-primary">
            Download CV
          </a>

          <a href="#projects" className="btn btn-secondary">
            Explore Projects
          </a>
        </div>

        <div className="hero-metrics">
          <div className="metric-pill">
            <span className="metric-value">5+</span>
            <span className="metric-label">Projects</span>
          </div>

          <div className="metric-pill">
            <span className="metric-value">React</span>
            <span className="metric-label">Frontend</span>
          </div>

          <div className="metric-pill">
            <span className="metric-value">PostgreSQL</span>
            <span className="metric-label">Database</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.92, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="spline-wrap">
          <div className="spline-glow" />
          <iframe
            title="Spline 3D Object"
            src="https://my.spline.design/3dpathsglassfluidcopy-QG3kcqGlwdXrEkGfil4Y3EqG/"
            frameBorder="0"
            width="100%"
            height="100%"
            allowFullScreen
          />
        </div>
      </motion.div>
    </section>
  );
}