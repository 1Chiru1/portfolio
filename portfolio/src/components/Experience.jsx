const certificates = [
  {
    name: "Infosys Certified Java SE8 Developer",
    issuer: "Infosys",
    img: `${process.env.PUBLIC_URL}/image/infosys.jpeg`,
    link: "https://1chiru1.github.io/myProfile/Experience.html",
  },
  {
    name: "Java Basic",
    issuer: "HackerRank",
    img: `${process.env.PUBLIC_URL}/image/java.jpeg`,
    link: "https://www.hackerrank.com/certificates/7237435b74fd",
  },
  {
    name: "Python Basic",
    issuer: "HackerRank",
    img: `${process.env.PUBLIC_URL}/image/python.jpeg`,
    link: "https://www.hackerrank.com/certificates/cc1a125837ec",
  },
  {
    name: "SQL Advanced",
    issuer: "HackerRank",
    img: `${process.env.PUBLIC_URL}/image/sql.jpeg`,
    link: "https://www.hackerrank.com/certificates/ec606aa5fb9b",
  },
  {
    name: "Neo4j Certified Professional",
    issuer: "Neo4j",
    img: `${process.env.PUBLIC_URL}/image/neo4j.png`,
    link: "https://graphacademy.neo4j.com/c/e8b71dfb-2ae5-4f43-ba70-5ce237af2c53/",
  },
  {
    name: "Learn JavaScript",
    issuer: "CodeChef",
    img: `${process.env.PUBLIC_URL}/image/CodeChef.png`,
    link: "https://www.codechef.com/certificates/public/e4aa142",
  },
  {
    name: "Learn React JS for Front-end development",
    issuer: "CodeChef",
    img: `${process.env.PUBLIC_URL}/image/CodeChef.png`,
    link: "https://www.codechef.com/certificates/public/cb92e5e",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <main className="experience-page">
        <section id="Section1" className="container">
          <h2>
            <i className="fas fa-briefcase"></i> Professional Experience
          </h2>
          <div className="experience-content">
            <div className="experience-timeline">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="timeline-content">
                  <h3>Java Backend Developer</h3>
                  <p className="timeline-company">
                    <i className="fas fa-building"></i>Infosys - British Telecom
                    Client
                  </p>
                  <p>
                    Design and develop OSS inventory systems that enhance
                    operational efficiency across large-scale network
                    operations.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <div className="timeline-content">
                  <h3>Infrastructure Development</h3>
                  <p>
                    Build critical infrastructure applications including Plan
                    and Build tools, network planning systems, and catalogue
                    template builders, ensuring seamless functionality and
                    scalability.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="timeline-content">
                  <h3>Cross-Functional Collaboration</h3>
                  <p>
                    Collaborate closely with cross-functional teams to identify
                    and resolve issues throughout the development lifecycle,
                    from design to production deployment, ensuring stability and
                    high-quality deliverables.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="timeline-content">
                  <h3>Quality Assurance</h3>
                  <p>
                    Using tools like SonarQube and JUnit, I maintain rigorous
                    code quality standards and comprehensive test coverage to
                    optimize application performance and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section2" className="certifications-section">
          <div className="Heading">
            <h2>
              <i className="fas fa-award"></i> Achievements & Certifications
            </h2>
          </div>
          <div className="certificate-grid">
            {certificates.map((cert, idx) => (
              <a
                key={cert.name + idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-card"
              >
                <div className="certificate-badge">
                  <i className="fas fa-certificate"></i>
                </div>
                <div className="certificate-image">
                  <img src={cert.img} alt={cert.issuer} />
                </div>
                <div className="certificate-details">
                  <h3>{cert.name}</h3>
                  <p className="certificate-issuer">
                    <i className="fas fa-building"></i> {cert.issuer}
                  </p>
                  <span className="certificate-view">
                    View Certificate{" "}
                    <i className="fas fa-external-link-alt"></i>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
}

export default Experience;
