import { motion } from "framer-motion";

const colors = [
  { hex: "#F7F8F0", role: "Background" },
  { hex: "#355872", role: "Primary" },
  { hex: "#7AAACE", role: "Support" },
  { hex: "#9CD5FF", role: "Highlight" },
  { hex: "#111111", role: "Text" },
];

export default function ColorPalette() {
  return (
    <section id="palette" className="section-block">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">DESIGN SYSTEM</p>
        <h2 className="section-title">Color Palette</h2>
        <p className="section-subtitle">
          Chosen to balance clarity, trust, and professionalism with a modern
          product feel.
        </p>
      </motion.div>

      <div className="palette-grid">
        {colors.map((color) => (
          <motion.div
            key={color.hex}
            className="palette-card"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <div
              className="palette-swatch"
              style={{ backgroundColor: color.hex }}
            />
            <h3>{color.hex}</h3>
            <p>{color.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}