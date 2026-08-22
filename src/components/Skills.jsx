import { motion } from "framer-motion";

const featured = ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "Figma · Basics"];

const groups = [
  {
    title: "Frontend",
    summary: "Responsive, accessible product interfaces",
    items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Framer Motion", "GSAP"],
  },
  {
    title: "Backend & APIs",
    summary: "Secure business logic and integrations",
    items: ["Node.js", "Express", "REST APIs", "Authentication", "Validation", "Multi-tenancy"],
  },
  {
    title: "Data & languages",
    summary: "Structured data and core programming",
    items: ["PostgreSQL", "MySQL", "Java", "C", "Python", "C#"],
  },
  {
    title: "Design & delivery",
    summary: "From interface planning to production",
    items: ["Figma · Basics", "Git", "GitHub", "Railway", "Responsive Design", "Power BI"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-block skills-section">
      <motion.div
        className="section-heading section-heading-split"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <div>
          <p className="eyebrow">03 / Capabilities</p>
          <h2 className="section-title">A practical toolkit<br />for shipping products.</h2>
        </div>
        <p className="section-subtitle">
          My toolkit spans the full path from basic interface design in Figma to
          responsive frontend work, API architecture, relational data, and production deployment.
        </p>
      </motion.div>

      <motion.div
        className="featured-skills"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        {featured.map((skill, index) => (
          <span key={skill}><small>{String(index + 1).padStart(2, "0")}</small>{skill}</span>
        ))}
      </motion.div>

      <div className="skills-grid">
        {groups.map((group, index) => (
          <motion.article
            key={group.title}
            className="skill-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
          >
            <div className="skill-group-head">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.summary}</p>
              </div>
            </div>
            <div className="skill-chips">
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

