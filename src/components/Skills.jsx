import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "Java",
  "Python",
  "C",
  "PHP",
  "React",
  "Node.js",
  "Express",
  "REST APIs",
  "PostgreSQL",
  "MySQL",
  "Power BI",
  "Git",
  "GitHub",
  "Railway",
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
        <p className="eyebrow">TOOLKIT</p>
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          A mix of programming, backend, frontend, database, and tooling
          experience shaped through real projects.
        </p>
      </motion.div>

      <div className="skills-cloud">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            className="skill-chip"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}