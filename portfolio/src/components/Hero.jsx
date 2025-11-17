function Hero() {
  return (
    <section id="home" className="hero-section">
      <h1 className="hero-title">
        Hi All! I'm Chiranjeevi <span className="wave">👋</span>
      </h1>
      <p className="hero-tagline">
        A passionate Java backend developer with 4 years of experience in telecom 
        and OSS development. Aspiring Full Stack Developer expanding into frontend technologies.
      </p>
      <img
        src={`${process.env.PUBLIC_URL}/image/profile.png`}
        alt="Chiranjeevi N"
        className="profile-pic profile-pic-animated"
      />
      <div className="social_media_icon social-icons-animated">
        <a
          className="btn"
          href="https://www.instagram.com/chiranjeevi_kashyap/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          className="btn"
          href="https://www.linkedin.com/in/chiranjeevi-n/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          className="btn"
          href="https://github.com/1Chiru1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="btn"
          href="mailto:chiranjeevikashyap@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-google"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
