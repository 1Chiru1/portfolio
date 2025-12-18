
import React from "react";
import { certificates } from '../constants';

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
                    <i className="fas fa-building"></i> Infosys (Telecom Client)
                  </p>
                  <p className="timeline-period">
                    <i className="far fa-calendar-alt"></i> 2021 - Present
                  </p>
                  <p>
                    Part of a 10-member development team building enterprise-grade microservices for network infrastructure management 
                    using <strong>Java 17/21</strong>, <strong>Spring Boot 3.x</strong>, <strong>Maven</strong>, <strong>REST APIs</strong>, <strong>JWT Security</strong>, <strong>PostgreSQL</strong>, <strong>Kafka</strong>, and <strong>Neo4j</strong> graph database.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <div className="timeline-content">
                  <h3>Key Projects & Contributions</h3>
                  <ul className="experience-highlights">
                    <li><strong>Network Planning:</strong> Contributed to microservices for telecommunications network planning and workflow automation, implementing backend services with Spring Boot, PostgreSQL, Neo4j, and Apache Kafka for resource allocation</li>
                    <li><strong>Inventory Visualiser:</strong> Developed backend services for 3D network equipment visualization platform, enabling real-time data synchronization across relational and graph databases for capacity analytics</li>
                    <li><strong>Catalogue Editor:</strong> Implemented features for YANG network device model processing, managing hardware compatibility matrices and template synchronization via Git integration</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <i className="fas fa-tools"></i>
                </div>
                <div className="timeline-content">
                  <h3>Technical Contributions & Integration</h3>
                  <p>
                    Designed and implemented RESTful APIs with polyglot persistence architecture combining PostgreSQL and Neo4j for complex network topology modeling. 
                    Worked on integrating multiple external systems using synchronous REST APIs and asynchronous Kafka messaging, collaborating with 
                    cross-functional teams for seamless workflow orchestration.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="timeline-content">
                  <h3>Security & Authentication</h3>
                  <p>
                    Implemented JWT-based authentication, role-based access control, and Azure AD integration components for secure application access. 
                    Supported DevOps team with application-specific configurations and troubleshooting during deployment cycles.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="timeline-content">
                  <h3>Quality Assurance & Testing</h3>
                  <p>
                    Maintained rigorous code quality standards using <strong>SonarQube</strong> and <strong>JUnit 5</strong>, writing comprehensive unit and integration tests 
                    to ensure application performance and reliability. Collaborated with leads for code reviews and adherence to enterprise coding standards.
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
            {certificates.map((cert, idx) => 
              cert.link ? (
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
            ) : (
              <div
                key={cert.name + idx}
                className="certificate-card"
                style={{ cursor: 'default', opacity: 0.9 }}
                title="Certificate link not available"
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
                  <span className="certificate-view" style={{ opacity: 0.6 }}>
                    Certificate Available{" "}
                    <i className="fas fa-check-circle"></i>
                  </span>
                </div>
              </div>
            )
            )}
          </div>
        </section>
      </main>
    </section>
  );
}

export default Experience;
