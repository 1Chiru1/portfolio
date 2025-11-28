const contactCards = [
  {
    icon: "fas fa-envelope",
    title: "Email",
    info: "chiranjeevikashyap@gmail.com",
    action: "Send a message",
    href: "mailto:chiranjeevikashyap@gmail.com",
    external: false,
  },
  {
    icon: "fab fa-linkedin-in",
    title: "LinkedIn",
    info: "Chiranjeevi N",
    action: "Connect with me",
    href: "https://linkedin.com/in/chiranjeevi-n",
    external: true,
  },
  {
    icon: "fab fa-github",
    title: "GitHub",
    info: "@1Chiru1",
    action: "View my work",
    href: "https://github.com/1Chiru1",
    external: true,
  },
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Let's Connect!</h2>
      <p className="contact-intro">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </p>

      <div className="contact-cards">
        {contactCards.map((card, index) => (
          <a
            key={index}
            href={card.href}
            className="contact-card"
            {...(card.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            <div className="contact-icon">
              <i className={card.icon}></i>
            </div>
            <h3>{card.title}</h3>
            <p>{card.info}</p>
            <span className="contact-action">
              {card.action} <i className="fas fa-arrow-right"></i>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
