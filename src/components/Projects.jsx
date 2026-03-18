import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Coffee POS System",
    desc: "A full-stack point of sale system for coffee shop operations with authentication, dynamic menu management, order processing, inventory tracking, shift-based reporting, and real-time analytics.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "BMW Rental Web Application",
    desc: "A car rental platform supporting vehicle browsing, reservation workflows, admin approval logic, and secure REST-based frontend-backend integration.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "Vehicle Access Management System",
    desc: "A backend-focused access control system using Factory, Facade, and Strategy patterns with validation logic and automated testing.",
    tags: ["Java", "JUnit", "Design Patterns", "OOP"],
  },
  {
    title: "Phishing Detection Using Machine Learning",
    desc: "A research-based machine learning project for phishing URL detection using multiple classifiers, ensemble models, and structured evaluation metrics.",
    tags: ["Python", "ML", "Research", "Evaluation"],
  },
  {
    title: "Appointment Management System",
    desc: "A web-based booking platform with user registration, login, scheduling, and complete CRUD workflows using PHP and MySQL.",
    tags: ["PHP", "MySQL", "CRUD", "Web App"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-block">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">SELECTED WORK</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Real systems built around clean architecture, practical workflows, and
          production-style thinking.
        </p>
      </motion.div>

      <motion.div
        className="projects-grid"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8 }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            desc={project.desc}
            tags={project.tags}
          />
        ))}
      </motion.div>
    </section>
  );
}