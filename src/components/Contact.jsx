function Contact({ email }) {
  return (
    <section id="contact" className="section-block">
      <h2>Get in Touch</h2>
      <p className="contact-text">
        Have a question or want to work together? Feel free to reach out!
      </p>
      <a href={`mailto:${email}`} className="contact-email-link">
        &#9993; {email}
      </a>
    </section>
  )
}

export default Contact