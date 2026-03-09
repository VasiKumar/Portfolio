function Contact({ email }) {
  return (
    <section className="section-block">
      <h2>Contact</h2>
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