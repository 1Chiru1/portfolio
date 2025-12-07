const stats = [
  { icon: "fas fa-briefcase", label: "4+ Years" },
  { icon: "fas fa-award", label: "7 Certifications" },
  { icon: "fas fa-code", label: "10+ Projects" },
];

const socialLinks = [
  {
    icon: "fab fa-instagram",
    href: "https://www.instagram.com/chiranjeevi_kashyap/",
    label: "Instagram",
  },
  {
    icon: "fab fa-linkedin",
    href: "https://www.linkedin.com/in/chiranjeevi-n/",
    label: "LinkedIn",
  },
  {
    icon: "fab fa-github",
    href: "https://github.com/1Chiru1",
    label: "GitHub",
  },
  {
    icon: "fab fa-google",
    href: "mailto:chiranjeevikashyap@gmail.com",
    label: "Email",
  },
];

function Hero() {
  return (
    <section id="home" className="hero-section">
      <h1 className="hero-title">
        Hey, I'm Chiranjeevi <span className="wave">👋</span>
      </h1>
      <div className="hero-subtitle">
        <i className="fas fa-laptop-code"></i> Backend Developer{" "}
        <span className="divider">|</span>
        <i className="fas fa-layer-group"></i> Full Stack Enthusiast
      </div>
      <p className="hero-tagline">
        Java developer who loves crafting clean code and building cool stuff! 
        With 5 years turning ideas into reality in telecom, now exploring the 
        exciting world of full-stack development. Let's create something amazing together! ✨
      </p>

      <img
        src={`${process.env.PUBLIC_URL}/image/profile.png`}
        alt="Chiranjeevi N"
        className="profile-pic profile-pic-animated"
      />

      <div className="hero-stats">
        {stats.map((stat, index) => (
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
           href={`${process.env.PUBLIC_URL}/Resume.pdf`}
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
