import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "BMW Rental Platform",
    org: "Full-stack booking product",
    desc: "A deployed vehicle-rental platform with live fleet browsing, date-based reservations, secure accounts, and admin approval workflows. The responsive React client is backed by an Express and PostgreSQL REST API.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Railway"],
    liveUrl: "https://bmw-rental-client-production.up.railway.app/",
    highlight: "Live product",
    visual: "bmw",
    previewKicker: "Premium mobility",
    previewTitle: "Find your next drive.",
  },
  {
    title: "Violet Spring Beauty Center",
    org: "Salon appointments & operations",
    desc: "A production salon platform for customers, employees, reception, and administrators. It combines conflict-safe booking, service and staff scheduling, appointment workflows, WhatsApp hand-offs, ratings, and revenue analytics.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "WhatsApp"],
    liveUrl: "https://violet-spring-beauty-center-client-production.up.railway.app/",
    highlight: "Live product",
    visual: "salon",
    previewKicker: "Violet Spring",
    previewTitle: "Every appointment, organized.",
  },
  {
    title: "Moment Coffee",
    org: "Coffee POS, drive-thru & brand experience",
    desc: "A bilingual coffee platform uniting a polished brand site, live menu, POS operations, and QR drive-thru ordering. The mobile-first Moment experience includes RTL support and cinematic product storytelling.",
    tags: ["React", "Node.js", "PostgreSQL", "GSAP", "RTL"],
    liveUrl: "https://coffee-client-production.up.railway.app/moment",
    highlight: "Live product",
    visual: "coffee",
    previewKicker: "Coffee / people / moments",
    previewTitle: "More than coffee. A Moment.",
  },
  {
    title: "Nadif Dry-Cleaning System",
    org: "Multi-tenant operations platform",
    desc: "A bilingual multi-tenant system that gives every laundry an isolated workspace. It manages customers, garments, orders, pricing, payments, due and overdue queues, dashboards, and secure first-party authentication.",
    tags: ["React", "Vite", "Node.js", "PostgreSQL", "Multi-tenant"],
    liveUrl: "https://dry-clean-client-production.up.railway.app/login",
    highlight: "Live product",
    visual: "dry",
    previewKicker: "Laundry operations",
    previewTitle: "From intake to ready.",
  },
  {
    title: "Vehicle Management System",
    org: "Systems programming · KHBP",
    desc: "A gate-access control system built in C with a custom in-memory database across nine entity types. Includes hash tables, doubly linked lists, full CRUD, CSV persistence, audit logging, and shared/exclusive locking simulation.",
    tags: ["C", "Data Structures", "Concurrency", "CSV", "Systems"],
    highlight: "Engineering",
    visual: "systems",
    previewKicker: "Access control",
    previewTitle: "Fast decisions at the gate.",
  },
  {
    title: "Vehicle Access Management",
    org: "Object-oriented architecture",
    desc: "A Java access-control backend shaped around Factory, Facade, and Strategy patterns. Validation rules and JUnit coverage keep the domain logic modular, testable, and aligned with SOLID principles.",
    tags: ["Java", "JUnit", "OOP", "SOLID", "Design Patterns"],
    highlight: "Engineering",
    visual: "java",
    previewKicker: "Pattern-driven Java",
    previewTitle: "Clean architecture by design.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-block projects-section">
      <motion.div
        className="section-heading section-heading-split"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <div>
          <p className="eyebrow">02 / Selected work</p>
          <h2 className="section-title">Real systems.<br />Live outcomes.</h2>
        </div>
        <p className="section-subtitle">
          Four production products plus two systems-focused builds—covering customer
          experiences, operational dashboards, data modeling, security, and deployment.
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}

