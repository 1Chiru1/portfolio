function Header() {
  return (
    <div>
      <header className="app-header">
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          {/* <a href="#projects">Projects</a>*/} {/* Projects section is commented out to add later on */}
          <a href="#experience">Work Experience</a>
          <a href="#passion">Passion</a>
          <a href="#contact">Contact Me</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
