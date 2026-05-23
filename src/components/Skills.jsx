import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages",
    items: ["JavaScript", "Java", "Python", "C", "PHP", "C#"],
  },
  {
    title: "Web Development",
    items: ["React", "Node.js", "Express", "REST APIs", "HTML", "CSS"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Data & Tooling",
    items: ["Power BI", "Git", "GitHub", "Railway"],
  },
];

const soft = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Adaptability",
  "Time Management",
];

export default function Skills() {
  return (
    <section id="skills" className="section-block">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">03 — Toolkit</p>
        <h2 className="section-title">Skills shaped by real projects.</h2>
        <p className="section-subtitle">
          A mix of programming, backend, frontend, database, and tooling
          experience — picked up by building things, not just reading about them.
        </p>
      </motion.div>

      <div className="skills-grid">
        {groups.map((group, gi) => (
          <motion.div
            key={group.title}
            className="skill-group"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: gi * 0.08 }}
          >
            <div className="skill-group-head">
              <span className="skill-group-num">0{gi + 1}</span>
              <h3>{group.title}</h3>
            </div>
            <div className="skill-chips">
              {group.items.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="soft-skills"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <span className="soft-skills-label">Soft skills</span>
        <div className="soft-skills-list">
          {soft.map((s, i) => (
            <span key={s}>
              {s}
              {i < soft.length - 1 && <em>·</em>}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
