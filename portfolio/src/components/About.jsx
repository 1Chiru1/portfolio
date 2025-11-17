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
  return (
    <section id="about" className="about-section">
      <h2>What I Do?</h2>
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <img
            className="Programming"
            src={`${process.env.PUBLIC_URL}/image/Coding.svg`}
            alt="Programming"
          />
        </div>
        <div className="col-lg-6 col-md-12">
          <h1 class="Feature-Heading">Backend Developer</h1>
          <p>
            As a Java developer, I leveraged my expertise in Java, Spring Boot,
            microservices, Spring MVC, Neo4j, PostgreSQL (SQL), and Spring
            Security (OAuth 2.0) to design, develop, and enhance our web
            application.
          </p>
          <p>
            I architected and implemented RESTful API interfaces between
            multiple services, facilitating efficient data retrieval, creation,
            updating, and deletion. These services were designed to handle
            complex data processing while ensuring scalability and reliability.
          </p>
          <p>
            Additionally, I built a robust real-time data processing pipeline
            using Apache Kafka, optimizing business workflows and significantly
            improving overall system performance and efficiency.
          </p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <h1 class="Feature-Heading">Web Developer</h1>
          <p>
            I am learning to build fully responsive and dynamic website
            frontends using HTML, CSS, NodeJS, and JavaScript, ensuring seamless
            user experiences across devices.
          </p>
          <p>
            While my current focus is on backend development, I am eager to
            expand my skill set further. In the near future, I plan to dive
            deeper into frameworks like Angular, React, NodeJS, and explore a
            wide range of technologies to enhance my expertise.
          </p>
        </div>
        <div className="col-lg-6 col-md-12">
          <img
            className="Programming"
            src={`${process.env.PUBLIC_URL}/image/website.svg`}
            alt="Programming"
          />
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
