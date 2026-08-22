import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-block contact-section">
      <motion.div
        className="contact-panel"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="contact-copy">
          <p className="eyebrow">05 / Contact</p>
          <h2>Have a product to build?<br /><em>Let's make it real.</em></h2>
          <p>
            I'm open to internships, junior full-stack roles, and collaborations on
            useful software. Send me a message and I'll get back to you.
          </p>
          <a href="mailto:rakanshamali77@gmail.com" className="btn btn-light">
            Start a conversation <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="contact-directory">
          <a href="mailto:rakanshamali77@gmail.com">
            <span>Email</span><strong>rakanshamali77@gmail.com</strong><i>↗</i>
          </a>
          <a href="tel:+962778312946">
            <span>Phone</span><strong dir="ltr">+962 77 831 2946</strong><i>↗</i>
          </a>
          <a href="https://linkedin.com/in/rakan-alshamali" target="_blank" rel="noreferrer">
            <span>LinkedIn</span><strong>rakan-alshamali</strong><i>↗</i>
          </a>
          <a href="https://github.com/Rakanmaj" target="_blank" rel="noreferrer">
            <span>GitHub</span><strong>Rakanmaj</strong><i>↗</i>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

