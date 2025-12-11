import { useRef } from "react";

const contactCards = [
  {
    icon: "fas fa-envelope",
    title: "Email",
    info: "chiranjeevikashyap@gmail.com",
    action: "Send a message",
    href: "mailto:chiranjeevikashyap@gmail.com",
    external: false,
  },
  {
    icon: "fab fa-linkedin-in",
    title: "LinkedIn",
    info: "Chiranjeevi N",
    action: "Connect with me",
    href: "https://linkedin.com/in/chiranjeevi-n",
    external: true,
  },
  {
    icon: "fab fa-github",
    title: "GitHub",
    info: "@1Chiru1",
    action: "View my work",
    href: "https://github.com/1Chiru1",
    external: true,
  },
  {
    icon: "fas fa-phone-alt",
    title: "Phone",
    info: "Available on request",
    action: "Get in touch",
    href: "mailto:chiranjeevikashyap@gmail.com?subject=Request for Contact Number",
    external: false,
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Location",
    info: "India",
    action: "View timezone",
    href: "https://time.is/India",
    external: true,
  },
];

function Contact() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 350;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e, target) => {
    e.preventDefault();
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
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Let's Connect!</h2>
      </div>
      <p className="contact-intro">
        Let's collaborate on exciting projects! Whether you have an idea to bring to life 
        or an opportunity to explore, I'd love to hear from you.
      </p>

      <div className="contact-cards-container">
        <button 
          className="contact-scroll-arrow contact-scroll-left" 
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="contact-cards" ref={scrollContainerRef}>
          {contactCards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className="contact-card"
              {...(card.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <div className="contact-icon">
                <i className={card.icon}></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.info}</p>
              <span className="contact-action">
                {card.action} <i className="fas fa-arrow-right"></i>
              </span>
            </a>
          ))}
        </div>

        <button 
          className="contact-scroll-arrow contact-scroll-right" 
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="contact-navigation">
        <p className="nav-signature">Chiranjeevi N Kashyap</p>
        <div className="nav-links">
          <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#experience" className="nav-link" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
