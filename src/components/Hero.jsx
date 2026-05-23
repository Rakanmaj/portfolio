import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "Backend Engineer",
  "Problem Solver",
  "CS Student",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 45 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="status-dot" /> Open to opportunities · Amman, Jordan
        </motion.div>

        <h1 className="hero-title">
          <span className="line">Hi, I'm Rakan.</span>
          <span className="line">
            I build <span className="gradient-text">full-stack</span>
          </span>
          <span className="line">
            web systems that <span className="underline-flow">ship</span>.
          </span>
        </h1>

        <p className="hero-role">
          <span className="role-prefix">{">"}</span>
          <span className="role-text">{text}</span>
          <span className="role-caret" />
        </p>

        <p className="hero-description">
          Computer Science student at Al Hussein Technical University,
          building production-style apps with <strong>React</strong>,{" "}
          <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
          <strong>PostgreSQL</strong>. Grounded in clean code, design patterns,
          and practical problem-solving.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a
            href="/Rakan_Alshamali_CV.pdf"
            download="Rakan_Alshamali_CV.pdf"
            className="btn btn-ghost"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download CV
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/Rakanmaj" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.67.8.55C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
          </a>
          <a href="https://linkedin.com/in/rakan-alshamali" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
          </a>
          <a href="mailto:rakanshamali77@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M3 7l9 6 9-6M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="orb-stack">
          <div className="orb-ring ring-1" />
          <div className="orb-ring ring-2" />
          <div className="orb-ring ring-3" />
          <div className="orb-core">
            <div className="orb-shine" />
            <span className="orb-initials">RA</span>
          </div>

          <div className="orb-chip chip-react">React</div>
          <div className="orb-chip chip-node">Node.js</div>
          <div className="orb-chip chip-pg">PostgreSQL</div>
          <div className="orb-chip chip-java">Java</div>
          <div className="orb-chip chip-c">C</div>
          <div className="orb-chip chip-py">Python</div>
        </div>
      </motion.div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"><span /></div>
      </div>
    </section>
  );
}
