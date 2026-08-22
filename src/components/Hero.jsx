import { motion } from "framer-motion";

const liveProducts = [
  { code: "01", name: "BMW Rental", type: "Booking platform" },
  { code: "02", name: "Violet Spring", type: "Salon operations" },
  { code: "03", name: "Moment", type: "Coffee POS + drive-thru" },
  { code: "04", name: "Nadif", type: "Dry-cleaning SaaS" },
];

const coreStack = ["React", "Next.js", "Node.js", "PostgreSQL", "Figma · Basics"];

export default function Hero() {
  return (
    <section id="hero" className="hero section-block section-block-hero">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="availability-pill">
          <span className="status-dot" />
          <span>Available for internships & junior opportunities</span>
        </div>

        <h1 className="hero-title">
          <span>Building software</span>
          <span>for the <em>real world.</em></span>
        </h1>

        <p className="hero-description">
          I'm Rakan, a full-stack developer and Computer Science student in Amman.
          I turn operational problems into polished, production-ready web products—from
          customer experiences to the dashboards that run the business behind them.
        </p>

        <div className="hero-stack" aria-label="Core skills">
          {coreStack.map((skill) => <span key={skill}>{skill}</span>)}
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Explore live work
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="/Rakan_Alshamali_CV.pdf" download="Rakan_Alshamali_CV.pdf" className="btn btn-ghost">
            Download résumé
          </a>
        </div>

        <div className="hero-socials" aria-label="Social links">
          <a href="https://github.com/Rakanmaj" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          <a href="https://linkedin.com/in/rakan-alshamali" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <a href="mailto:rakanshamali77@gmail.com">Email <span>↗</span></a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="product-console">
          <div className="console-topbar">
            <div className="console-dots"><span /><span /><span /></div>
            <span>production.log</span>
            <span className="console-online">4 live</span>
          </div>
          <div className="console-heading">
            <span>Selected products</span>
            <strong>Built. Deployed. Used.</strong>
          </div>
          <div className="console-products">
            {liveProducts.map((product) => (
              <a href="#projects" key={product.name} className="console-product">
                <span className="console-code">{product.code}</span>
                <span className="console-product-copy">
                  <strong>{product.name}</strong>
                  <small>{product.type}</small>
                </span>
                <span className="console-arrow">↗</span>
              </a>
            ))}
          </div>
          <div className="console-footer">
            <span className="status-dot" />
            <span>All systems deployed on Railway</span>
            <span>AMM / JO</span>
          </div>
        </div>
      </motion.div>

      <div className="hero-metrics" aria-label="Portfolio statistics">
        <div><strong>04</strong><span>live full-stack products</span></div>
        <div><strong>06+</strong><span>complete systems built</span></div>
        <div><strong>3.59</strong><span>computer science GPA</span></div>
        <div><strong>2027</strong><span>expected graduation</span></div>
      </div>
    </section>
  );
}
