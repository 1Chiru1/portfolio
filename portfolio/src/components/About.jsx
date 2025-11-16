function About() {
  return (
    <section id="about" className="about-section">
      <h2>What I Do?</h2>
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <img
            className="Programming"
            src="/image/Coding.svg"
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
            src="/image/website.svg"
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
        <li>Java</li>
        <li>Spring Boot</li>
        <li>Kafka</li>
        <li>RESTful APIs</li>
        <li>Postgres</li>
        <li>Neo4j</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>Maven</li>
        <li>Kubernetes</li>
        <li>Jenkins</li>
        <li>Git</li>
        <li>Agile JIRA</li>
      </ul>
    </section>
  );
}

export default About;
