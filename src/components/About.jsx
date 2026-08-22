import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Product-minded",
    text: "I start from the business workflow and the people using it, then shape the interface and architecture around what must actually work.",
  },
  {
    number: "02",
    title: "Full-stack ownership",
    text: "I work across UI, APIs, authentication, databases, testing, and deployment—so features remain coherent from click to query.",
  },
  {
    number: "03",
    title: "Built to improve",
    text: "Clear structure, reusable components, validation, and maintainable data models keep each product ready for its next iteration.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-block about-section">
      <motion.div
        className="section-heading section-heading-split"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <div>
          <p className="eyebrow">01 / About</p>
          <h2 className="section-title">Full-stack thinking.<br />Product-level detail.</h2>
        </div>
        <div className="about-intro">
          <p>
            I'm a Computer Science student at <strong>Al Hussein Technical University</strong>
            with hands-on experience building and deploying software for real operational use.
          </p>
          <p>
            My strongest work sits where thoughtful UI meets dependable backend logic:
            appointments, orders, inventory, payments, reporting, role-based access, and the
            workflows that connect them.
          </p>
        </div>
      </motion.div>

      <div className="principles-grid">
        {principles.map((item, index) => (
          <motion.article
            key={item.title}
            className="principle-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>

      <div className="about-facts">
        <div><span>Based in</span><strong>Amman, Jordan</strong></div>
        <div><span>Education</span><strong>B.Sc. Computer Science</strong></div>
        <div><span>Languages</span><strong>Arabic · English</strong></div>
        <div><span>Focus</span><strong>Production web systems</strong></div>
      </div>
    </section>
  );
}

