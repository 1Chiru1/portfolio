import { useState, useEffect, useRef } from "react";
import { SCROLL_THRESHOLDS, OBSERVER_OPTIONS } from './constants';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";
import "./App.css";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLDS.SCROLL_TOP_BUTTON) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, OBSERVER_OPTIONS.SECTION_FADE);

    const sections = sectionsRef.current;

    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div id="home" ref={el => sectionsRef.current[0] = el} className="fade-in-section">
          <Hero />
        </div>
        <div id="about" ref={el => sectionsRef.current[1] = el} className="fade-in-section">
          <About />
        </div>
        <div id="experience" ref={el => sectionsRef.current[2] = el} className="fade-in-section">
          <Experience />
        </div>
        <div id="hobbies" ref={el => sectionsRef.current[3] = el} className="fade-in-section">
          <Hobbies />
        </div>
        <div id="contact" ref={el => sectionsRef.current[4] = el} className="fade-in-section">
          <Contact />
        </div>
      </main>
      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
export default App;
