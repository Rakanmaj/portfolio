import { useRef } from "react";

export default function ProjectCard({ title, desc, tags = [] }) {
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card || window.innerWidth < 900) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;

    const rotateY = (px - 0.5) * 14;
    const rotateX = (0.5 - py) * 14;

    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
    card.style.setProperty(
      "transform",
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`
    );
  }

  function handleLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty(
      "transform",
      "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)"
    );
  }

  return (
    <article
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
    >
      <div className="project-card-inner">
        <div className="project-topline" />
        <h3>{title}</h3>
        <p>{desc}</p>

        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}