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

function About() {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section id="about" className="about-section">
      <h2>What I Do?</h2>
      <div className="row align-items-center">
        <div className={`col-lg-6 col-md-12 order-1 order-lg-1 animate-slide-left ${isVisible ? 'visible' : ''}`}>
          <img
            className="Programming"
            src={`${process.env.PUBLIC_URL}/image/Coding.svg`}
            alt="Programming"
          />
        </div>
        <div className={`col-lg-6 col-md-12 order-2 order-lg-2 animate-slide-right ${isVisible ? 'visible' : ''}`}>
          <h2>Backend Developer</h2>
          <p>
            As a Java developer, I specialize in building scalable microservices 
            using Spring Boot, Neo4j, PostgreSQL, and Spring Security (OAuth 2.0). 
            I design and develop robust web applications with a focus on performance 
            and reliability.
          </p>
          <p>
            I architect RESTful APIs that enable seamless data flow between services, 
            and implement real-time data processing pipelines using Apache Kafka to 
            optimize business workflows and enhance system efficiency.
          </p>
          <p>
            As an aspiring Full Stack Developer, I'm expanding my expertise in frontend 
            technologies including HTML, CSS, JavaScript, React, and Node.js to deliver 
            complete end-to-end solutions.
          </p>
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
          SEE MY RESUME
        </a>
      </div>
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>
            <i className={skill.icon}></i>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>

      <h2>Proficiency</h2>
      <div className="proficiency-section">
        {proficiencies.map((prof, index) => (
          <div key={index} className="proficiency-item">
            <div className="proficiency-header">
              <span className="proficiency-label">{prof.category}</span>
            </div>
            <div className="proficiency-bar">
              <div
                className="proficiency-fill"
                style={{ width: `${prof.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <h2>Education</h2>
      <div className="education-section">
        <div className="education-item">
          <h3 className="education-degree">
            Bachelor of Engineering in Mechanical Engineering
          </h3>
          <p className="education-school">ATME College of Engineering</p>
          <p className="education-year">2016 - 2020</p>
        </div>
      </div>
    </section>
  );
}

export default About;
