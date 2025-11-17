function Hero() {
  return (
    <section id="home" className="hero-section">
      <h1>
        Hello All! I'm Chiranjeevi <span className="wave">👋</span>
      </h1>
      <p>
        A passionate Java backend developer having 4 years of experience in
        telecom domain and OSS development. Learning Web Development to become
        Full Stack Developer which is my dream role.
      </p>
      <img
        src={`${process.env.PUBLIC_URL}/image/profile.png`}
        alt="Chiranjeevi N"
        className="profile-pic"
      />
      <div className="social_media_icon">
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
