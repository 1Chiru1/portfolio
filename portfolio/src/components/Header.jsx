import { useState, useEffect } from "react";

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle header visibility
      if (currentScrollY < 100) {
        setShowHeader(true);
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowHeader(false);
        } else if (currentScrollY < lastScrollY) {
          setShowHeader(true);
        }
      }

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (currentScrollY / windowHeight) * 100;
      setScrollProgress(progress);

      // Detect active section
      const sections = ["home", "about", "experience", "hobbies", "contact"];
      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);

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

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleNavClick = (e, target) => {
    e.preventDefault();
    closeMenu();
    const element = document.getElementById(target);
    if (element) {
      const offsetTop = target === 'home' ? 0 : element.offsetTop - 60;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`app-header ${
        showHeader ? "header-visible" : "header-hidden"
      } ${isTransparent ? "header-transparent" : ""}`}
    >
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <div className="header-content">
        <img 
          src={`${process.env.PUBLIC_URL}/image/CNKLogo.jpg`} 
          alt="CNK Logo" 
          className="logo-signature"
          onClick={handleRefresh}
          title="Refresh"
        />
        <h1 className="header-title">Welcome to Chiru.dev 🖥️</h1>
        <nav className={menuOpen ? "nav-open" : ""}>
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </a>
          <a 
            href="#experience" 
            onClick={(e) => handleNavClick(e, 'experience')}
            className={activeSection === 'experience' ? 'active' : ''}
          >
            Work Experience
          </a>
          <a 
            href="#hobbies" 
            onClick={(e) => handleNavClick(e, 'hobbies')}
            className={activeSection === 'hobbies' ? 'active' : ''}
          >
            Hobbies
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`nav-highlight ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact Me
          </a>
        </nav>
        <button
          className={`hamburger-menu ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
