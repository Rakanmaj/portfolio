import { motion } from "framer-motion";
import { useRef } from "react";

function PreviewUI({ visual }) {
  if (visual === "bmw") {
    return (
      <div className="preview-scene preview-bmw">
        <span className="bmw-letter">M</span>
        <div className="car-line"><span /><span /><span /></div>
        <div className="preview-data"><span>AVAILABLE</span><strong>12 vehicles</strong></div>
      </div>
    );
  }

  if (visual === "salon") {
    return (
      <div className="preview-scene preview-salon">
        <div className="calendar-days"><span>MON</span><span className="active">TUE</span><span>WED</span><span>THU</span></div>
        <div className="appointment-row"><span>10:30</span><strong>Hair styling</strong><i>Approved</i></div>
        <div className="appointment-row muted"><span>12:00</span><strong>Nail care</strong><i>Pending</i></div>
      </div>
    );
  }

  if (visual === "coffee") {
    return (
      <div className="preview-scene preview-coffee">
        <span className="moment-word">MO<br />MENT</span>
        <div className="coffee-menu">
          <span><i />Peach Signature</span>
          <span><i />Spanish Latte</span>
          <span><i />Code Red</span>
        </div>
      </div>
    );
  }

  if (visual === "dry") {
    return (
      <div className="preview-scene preview-dry">
        <div className="dry-stats"><span><small>Due today</small><strong>08</strong></span><span><small>Ready</small><strong>14</strong></span></div>
        <div className="dry-progress"><span /><span /><span /><span /></div>
        <div className="dry-labels"><span>Received</span><span>Cleaning</span><span>Ready</span></div>
      </div>
    );
  }

  if (visual === "systems") {
    return (
      <div className="preview-scene preview-systems">
        <div className="terminal-line"><span>01</span> hash_table::vehicle_lookup</div>
        <div className="terminal-line"><span>02</span> access_status = GRANTED</div>
        <div className="terminal-line"><span>03</span> audit_log.append(event)</div>
        <div className="terminal-status">● SYSTEM HEALTHY</div>
      </div>
    );
  }

  return (
    <div className="preview-scene preview-java">
      <div className="architecture-node">Factory</div>
      <span className="node-line" />
      <div className="architecture-node featured">Facade</div>
      <span className="node-line" />
      <div className="architecture-node">Strategy</div>
    </div>
  );
}

export default function ProjectCard({
  title,
  org,
  desc,
  tags = [],
  highlight,
  liveUrl,
  repoUrl,
  visual,
  previewKicker,
  previewTitle,
  index = 0,
}) {
  const cardRef = useRef(null);

  function handleMouseMove(event) {
    if (!cardRef.current || window.innerWidth < 900) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  }

  return (
    <motion.article
      ref={cardRef}
      className={`project-card ${index === 0 ? "project-card-lead" : ""} ${liveUrl ? "project-card-live" : ""}`}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.24), ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`project-preview project-preview-${visual}`}>
        <div className="preview-browser">
          <span /><span /><span />
          <small>{liveUrl ? "Live product" : "System build"}</small>
        </div>
        <div className="preview-copy">
          <span>{previewKicker}</span>
          <strong>{previewTitle}</strong>
        </div>
        <PreviewUI visual={visual} />
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-badge">{highlight}</span>
        </div>

        <div className="project-heading">
          <h3>{title}</h3>
          <p>{org}</p>
        </div>

        <p className="project-desc">{desc}</p>

        <div className="project-tags">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        {(liveUrl || repoUrl) && (
          <div className="project-links">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" className="project-link project-link-live">
                <span className="live-dot" />
                Visit live project
                <span aria-hidden>↗</span>
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noreferrer" className="project-link">
                View source <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

