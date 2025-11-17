import { useState, useEffect } from "react";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`app-header ${
        showHeader ? "header-visible" : "header-hidden"
      }`}
    >
      <button className={`hamburger-menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={menuOpen ? "nav-open" : ""}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#experience" onClick={closeMenu}>Work Experience</a>
        <a href="#contact" onClick={closeMenu}>Contact Me</a>
      </nav>
    </header>
  );
}

export default Header;
