import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-block">
      <motion.div
        className="contact-panel"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <div className="contact-copy">
          <p className="eyebrow">CONTACT</p>
          <h2 className="section-title">Let’s connect</h2>
          <p className="section-subtitle">
            I’m actively building my skills in full-stack development and open
            to opportunities where I can contribute, learn, and grow.
          </p>
        </div>

        <div className="contact-items">
          <a href="mailto:rakanshamali77@gmail.com" className="contact-item">
            <span>Email</span>
            <strong>rakanshamali77@gmail.com</strong>
          </a>

          <div className="contact-item">
            <span>Phone</span>
            <strong>0790812036</strong>
          </div>

          <div className="contact-item">
            <span>Location</span>
            <strong>Amman, Jordan</strong>
          </div>
        </div>
      </motion.div>
    </section>
  );
}