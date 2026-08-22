import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./portfolio.css";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="page-background" aria-hidden>
        <span className="background-orb background-orb-a" />
        <span className="background-orb background-orb-b" />
        <span className="background-grid" />
      </div>

      <Navbar />
      <main id="main-content" className="site-shell">
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
