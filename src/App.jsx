import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import { Suspense, lazy } from "react";
import "./styles.css";

const SpaceBackground = lazy(() => import("./components/SpaceBackground"));

function App() {
  return (
    <>
      <Cursor />
      <div className="ambient-bg" aria-hidden>
        <div className="ambient-grid" />
        <div className="ambient-glow glow-a" />
        <div className="ambient-glow glow-b" />
        <div className="ambient-glow glow-c" />
      </div>
      <Suspense fallback={null}>
        <SpaceBackground />
      </Suspense>

      <Navbar />
      <main className="site-shell">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
