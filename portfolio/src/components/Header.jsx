import { useState, useEffect } from "react";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        // Always show header near the top
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    const throttledScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`app-header ${
        showHeader ? "header-visible" : "header-hidden"
      }`}
    >
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Work Experience</a>
        <a href="#contact">Contact Me</a>
      </nav>
    </header>
  );
}

export default Header;
