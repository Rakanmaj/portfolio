import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ColorPalette from "./components/ColorPalette";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="site-shell">
        <Hero/>
        <Projects />
        <ColorPalette />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;