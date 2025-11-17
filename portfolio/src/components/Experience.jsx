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
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <main className="experience-page">
        <section id="Section1" className="container">
          <h2>Experience</h2>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <img
                className="Programming"
                src={`${process.env.PUBLIC_URL}/image/Programming.svg`}
                alt="Programming"
              />
            </div>
            <div className="col-lg-6 col-md-12 project-heading">
              <p>
                As a Java backend developer for a British telecom client, I am
                responsible for designing, developing, and transforming their
                OSS inventory systems to enhance operational efficiency.
              </p>
              <p>
                My work includes building OSS infrastructure applications such
                as Plan and Build, network planning tools, and a catalogue
                template builder, ensuring seamless functionality for
                large-scale telecom operations.
              </p>
              <p>
                I actively collaborate with developers, testers, designers, and
                ASG teams to identify and resolve issues found during both the
                development phase and live operations. I develop solutions,
                perform unit tests, and oversee deployments to ensure stability
                and accuracy.
              </p>
              <p>
                To further optimize application performance and reliability, I
                leverage code quality tools like SonarQube to improve code
                coverage and write comprehensive test cases using JUnit,
                ensuring that enhancements meet high-quality standards.
              </p>
            </div>
          </div>
        </section>

        <section id="section2">
          <div className="Heading">
            <h2>Achievements and Certifications</h2>
          </div>
          <div className="certificate-grid">
            {certificates.map((cert, idx) => (
              <div key={cert.name + idx} className="card mb-4 box-shadow">
                <div className="certificate-card-flex">
                  <div className="certificate-img-col">
                    <img
                      src={cert.img}
                      alt={cert.issuer}
                      style={{
                        width: "100%",
                        maxWidth: 150,
                        height: "auto",
                        objectFit: "contain",
                        borderRadius: 6,
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                  </div>
                  <div className="certificate-name-issuer-col">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={cert.link}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <p className="card-text certificate-text mb-1">
                        {cert.name}
                      </p>
                    </a>
                    <p className="certificate-text issuer">
                      - by {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
}

export default Experience;
