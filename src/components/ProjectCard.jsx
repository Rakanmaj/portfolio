import { motion } from "framer-motion";
import { useRef } from "react";

export default function ProjectCard({ title, org, desc, tags = [], highlight, index = 0 }) {
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card || window.innerWidth < 900) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = (0.5 - (y / rect.height)) * 8;
    card.style.setProperty(
      "transform",
      `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
    );
  }

  function handleLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty(
      "transform",
      "perspective(1400px) rotateX(0) rotateY(0) translateY(0)"
    );
  }

  return (
    <motion.article
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-card-inner">
        <div className="project-card-header">
          <div className="project-index">0{index + 1}</div>
          {highlight && <span className="project-badge">{highlight}</span>}
        </div>

        <div className="project-card-body">
          <h3>{title}</h3>
          {org && <p className="project-org">{org}</p>}
          <p className="project-desc">{desc}</p>
        </div>

        <div className="project-card-footer">
          <div className="project-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
