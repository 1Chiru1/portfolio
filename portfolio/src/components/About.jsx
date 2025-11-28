import { useState, useEffect } from "react";

const skills = [
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "Spring Boot", icon: "devicon-spring-plain colored" },
  { name: "Kafka", icon: "devicon-apachekafka-original colored" },
  { name: "RESTful APIs", icon: "fas fa-server" },
  { name: "Postgres", icon: "devicon-postgresql-plain colored" },
  { name: "Neo4j", icon: "devicon-neo4j-plain colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Maven", icon: "devicon-maven-plain colored" },
  { name: "Gradle", icon: "devicon-gradle-plain colored" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
  { name: "Jenkins", icon: "devicon-jenkins-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Jira", icon: "devicon-jira-plain colored" },
];

const proficiencies = [
  { category: "Frontend", percentage: 35 },
  { category: "Backend", percentage: 80 },
  { category: "Programming", percentage: 70 },
];

const techHighlights = [
  { icon: "fas fa-server", label: "Microservices Architecture" },
  { icon: "fas fa-database", label: "Database Design" },
  { icon: "fas fa-stream", label: "Real-time Processing" },
  { icon: "fas fa-lock", label: "Security & OAuth" },
];

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isProficiencyVisible, setIsProficiencyVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsProficiencyVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const proficiencySection = document.querySelector(".proficiency-section");
    if (proficiencySection) {
      observer.observe(proficiencySection);
    }

    return () => {
      if (proficiencySection) {
        observer.unobserve(proficiencySection);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <h2>
        <i className="fas fa-code"></i> What I Do?
      </h2>
      <div className="row align-items-center">
        <div
          className={`col-lg-6 col-md-12 order-1 order-lg-1 animate-slide-left ${
            isVisible ? "visible" : ""
          }`}
        >
          <img
            className="Programming"
            src={`${process.env.PUBLIC_URL}/image/Coding.svg`}
            alt="Programming"
          />
        </div>
        <div
          className={`col-lg-6 col-md-12 order-2 order-lg-2 animate-slide-right ${
            isVisible ? "visible" : ""
          }`}
        >
          <h3 className="role-title">
            <i className="fas fa-laptop-code"></i> Backend Developer
          </h3>
          <p>
            As a Java developer, I specialize in building scalable microservices
            using <strong>Spring Boot</strong>, <strong>Neo4j</strong>,{" "}
            <strong>PostgreSQL</strong>, and{" "}
            <strong>Spring Security (OAuth 2.0)</strong>. I design and develop
            robust web applications with a focus on performance and reliability.
          </p>
          <p>
            I architect <strong>RESTful APIs</strong> that enable seamless data
            flow between services, and implement real-time data processing
            pipelines using <strong>Apache Kafka</strong> to optimize business
            workflows and enhance system efficiency.
          </p>
          <p>
            As an aspiring <strong>Full Stack Developer</strong>, I'm expanding
            my expertise in frontend technologies including{" "}
            <strong>HTML, CSS, JavaScript, React, and Node.js</strong> to
            deliver complete end-to-end solutions.
          </p>

          <div className="tech-highlights">
            {techHighlights.map((tech, index) => (
              <div key={index} className="tech-box">
                <i className={tech.icon}></i>
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-actions">
        <a
          href="#contact"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          CONTACT ME
        </a>
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          HERE IS MY CV
        </a>
      </div>
      <h2>
        <i className="fas fa-tools"></i> Skills
      </h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>
            <i className={skill.icon}></i>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>

      <h2>
        <i className="fas fa-chart-line"></i> Proficiency
      </h2>
      <div className="proficiency-section">
        {proficiencies.map((prof, index) => (
          <div key={index} className="proficiency-item">
            <div className="proficiency-header">
              <span className="proficiency-label">{prof.category}</span>
            </div>
            <div className="proficiency-bar">
              <div
                className={`proficiency-fill ${
                  isProficiencyVisible ? "animate" : ""
                }`}
                style={{
                  width: isProficiencyVisible ? `${prof.percentage}%` : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <h2>
        <i className="fas fa-graduation-cap"></i> Education
      </h2>
      <div className="education-section">
        <div className="education-item">
          <div className="education-icon">
            <i className="fas fa-university"></i>
          </div>
          <div className="education-content">
            <h3 className="education-degree">
              <i className="fas fa-certificate"></i> Bachelor of Engineering
            </h3>
            <p className="education-major">Mechanical Engineering</p>
            <p className="education-school">
              <i className="fas fa-map-marker-alt"></i> ATME College of
              Engineering
            </p>
            <p className="education-year">
              <i className="far fa-calendar-alt"></i> 2016 - 2020
            </p>
            <div className="education-highlights">
              <span className="highlight-badge">
                <i className="fas fa-star"></i> Engineering Graduate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
