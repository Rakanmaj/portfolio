import { motion } from "framer-motion";

const timeline = [
  {
    when: "Expected 2027",
    title: "B.Sc. in Computer Science",
    place: "Al Hussein Technical University (HTU), Amman, Jordan",
    detail: "GPA 3.59 / 4.00",
  },
  {
    when: "Graduated",
    title: "Tawjihi Certificate — Scientific Stream",
    place: "Firas Al-Ajlouni Secondary School, Jordan",
    detail: "Final grade: 90%",
  },
];

const credentials = [
  {
    label: "Certification",
    value: "Pearson Edexcel International Advanced Level",
  },
  {
    label: "Activity",
    value: "STEM Robotics Expo — Presented technical concepts and engaged with visitors at a STEM-focused robotics exhibition.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-block">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">04 — Education</p>
        <h2 className="section-title">Academic background & credentials.</h2>
      </motion.div>

      <div className="edu-grid">
        <div className="timeline">
          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-when">{t.when}</div>
                <h3>{t.title}</h3>
                <p className="timeline-place">{t.place}</p>
                <p className="timeline-detail">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="credentials"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {credentials.map((c) => (
            <div key={c.value} className="cred-card">
              <span className="cred-label">{c.label}</span>
              <p>{c.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
