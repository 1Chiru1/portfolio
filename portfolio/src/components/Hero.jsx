import { heroStats, socialLinks, heroContent } from '../constants';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <h1 className="hero-title">
        Hey, I'm {heroContent.name} <span className="wave">👋</span>
      </h1>
      <div className="hero-subtitle">
        <i className="fas fa-laptop-code"></i> {heroContent.title}{" "}
        <span className="divider">|</span>
        <i className="fas fa-layer-group"></i> {heroContent.subtitle}
      </div>
      <p className="hero-tagline">
        {heroContent.tagline}
      </p>



      <div className="hero-stats">
        {heroStats.map((stat, index) => (
          <div key={index} className="stat-badge">
            <i className={stat.icon}></i>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="hero-cta">
        <a href="#contact" className="cta-button cta-primary">
          <i className="fas fa-envelope"></i> Get In Touch
        </a>
        <a
           href={`${process.env.PUBLIC_URL}${heroContent.resumePath}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button cta-secondary"
        >
          <i className="fas fa-download"></i> Download CV
        </a>
      </div>

      <div className="social_media_icon social-icons-animated">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            className="btn social-btn"
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            data-label={social.label}
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>

      <div className="scroll-indicator">
        <a href="#about">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
