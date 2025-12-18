import { useState, useEffect } from "react";
import { skills, proficiencies, techHighlights } from "../constants";

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
          <li>
            As a backend developer in the telecommunications space, I transform complex requirements
            into working systems. My toolkit includes <strong>Java </strong>,
            <strong>Spring Boot</strong>, <strong>PostgreSQL</strong>, <strong>Neo4j</strong>, and{" "}
            <strong>Kafka</strong> — technologies I use daily to build microservices that manage
            network infrastructure and automate business workflows.
          </li>
          <li>
            Whether it's designing <strong>RESTful APIs</strong> , implementing
            <strong> event-driven architectures with Kafka</strong>, integrating external systems,
            or implementing security with <strong>JWT</strong> and <strong>OAuth 2.0</strong>, I
            focus on creating solutions that are both technically sound and business-impactful.
          </li>
          <li>
            Beyond backend development, I'm actively building full-stack capabilities with{" "}
            <strong>React, JavaScript, HTML/CSS, and Node.js</strong> — skills I'm applying in real
            projects to deliver complete end-to-end solutions from database to user interface.
          </li>

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
        <a href="#contact" rel="noopener noreferrer" className="btn btn-primary">
          CONTACT ME
        </a>
        <a
          href={`${process.env.PUBLIC_URL}/Resume.pdf`}
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
                className={`proficiency-fill ${isProficiencyVisible ? "animate" : ""}`}
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
              <i className="fas fa-map-marker-alt"></i> ATME College of Engineering
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

      <div className="scroll-indicator">
        <a href="#experience">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}

export default About;
