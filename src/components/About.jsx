import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "", duration = 1500 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(eased * end));
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section-block">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">01 — About</p>
        <h2 className="section-title">A developer who cares about the craft.</h2>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.05 }}
        >
          <p>
            I'm a Computer Science student at{" "}
            <strong>Al Hussein Technical University</strong> (expected 2027)
            with hands-on experience in full-stack web development across
            frontend, backend, and database layers.
          </p>
          <p>
            I work with <strong>React</strong>, <strong>Node.js</strong>,{" "}
            <strong>Express</strong>, <strong>PostgreSQL</strong>, and RESTful
            APIs, with additional experience in backend-intensive systems and
            academic research. My work is grounded in clean code, design
            patterns, and practical problem-solving.
          </p>

          <ul className="about-facts">
            <li>
              <span className="fact-key">Focus</span>
              <span className="fact-val">Full-stack web development</span>
            </li>
            <li>
              <span className="fact-key">Currently</span>
              <span className="fact-val">B.Sc. CS @ HTU · GPA 3.59 / 4.00</span>
            </li>
            <li>
              <span className="fact-key">Based in</span>
              <span className="fact-val">Amman, Jordan</span>
            </li>
            <li>
              <span className="fact-key">Languages</span>
              <span className="fact-val">Arabic (Native) · English (Excellent)</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="stat-card">
            <div className="stat-num">
              <Counter end={5} suffix="+" />
            </div>
            <div className="stat-label">Projects shipped</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">
              <Counter end={6} />
            </div>
            <div className="stat-label">Languages used</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">
              <Counter end={3} />
            </div>
            <div className="stat-label">Stack layers</div>
          </div>
          <div className="stat-card stat-feature">
            <div className="stat-num gradient-text">3.59</div>
            <div className="stat-label">Cumulative GPA</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
