import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Vehicle Management System (VMS)",
    org: "King Hussein Business Park",
    desc: "A gate access control system built in C with a custom in-memory database using hash tables and doubly linked lists for 9 entity types. Implements full CRUD, CSV persistence, audit logging, and concurrency simulation with shared/exclusive locking — paired with a browser-based management portal.",
    tags: ["C", "HTML", "CSS", "JavaScript", "Systems"],
    highlight: "Featured",
  },
  {
    title: "BMW Rental Management Web Application",
    org: "Full-Stack Project",
    desc: "A car rental platform with vehicle browsing, reservation management, and admin approval workflows. Features secure authentication and REST API integration across a React frontend and Express/PostgreSQL backend.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    liveUrl: "https://bmw-rental-client-production.up.railway.app/",
    highlight: "Live Demo",
  },
  {
    title: "Phishing Website Detection",
    org: "Machine Learning · Research",
    desc: "A research paper on phishing URL detection. Trained and compared multiple ML classifiers and ensemble models, supplemented by a user-awareness survey to ground the technical results in real-world behavior.",
    tags: ["Python", "ML", "Research"],
  },
  {
    title: "Vehicle Access Management System",
    org: "OOP · Design Patterns",
    desc: "A backend access control system applying Factory, Facade, and Strategy design patterns with validation logic and JUnit tests — demonstrating strong OOP and SOLID principles in a real domain.",
    tags: ["Java", "JUnit", "OOP", "SOLID"],
  },
  {
    title: "Web Appointment Management System",
    org: "PHP · MySQL",
    desc: "An appointment booking system with user registration, login, scheduling, and full CRUD functionality. Built on a classic PHP + MySQL stack with a clean HTML/CSS interface.",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
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
        <p className="eyebrow">02 — Selected Work</p>
        <h2 className="section-title">Projects with real systems behind them.</h2>
        <p className="section-subtitle">
          Each project below was built end-to-end — from architecture decisions
          and data modeling to UI polish — to solve a concrete problem.
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} index={i} {...project} />
        ))}
      </div>
    </section>
  );
}
