import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-block">
      <motion.div
        className="contact-panel"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <div className="contact-copy">
          <p className="eyebrow">05 — Contact</p>
          <h2 className="section-title">
            Let's build <span className="gradient-text">something</span>.
          </h2>
          <p className="section-subtitle">
            I'm actively building my skills in full-stack development and open
            to internships, junior roles, and collaboration on real systems.
            The fastest way to reach me is email.
          </p>

          <a
            href="mailto:rakanshamali77@gmail.com"
            className="btn btn-primary contact-cta"
          >
            Email me
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="contact-items">
          <a href="mailto:rakanshamali77@gmail.com" className="contact-item">
            <span className="contact-key">Email</span>
            <strong>rakanshamali77@gmail.com</strong>
          </a>

          <a href="tel:+962778312946" className="contact-item">
            <span className="contact-key">Phone</span>
            <strong dir="ltr">+962 77 831 2946</strong>
          </a>

          <a
            href="https://linkedin.com/in/rakan-alshamali"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-key">LinkedIn</span>
            <strong>linkedin.com/in/rakan-alshamali</strong>
          </a>

          <a
            href="https://github.com/Rakanmaj"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-key">GitHub</span>
            <strong>github.com/Rakanmaj</strong>
          </a>

          <div className="contact-item">
            <span className="contact-key">Location</span>
            <strong>Amman, Jordan</strong>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
