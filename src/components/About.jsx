const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Git', 'Vite', 'Node.js']

function About({ college }) {
  return (
    <section id="about" className="section-block">
      <h2>About Me</h2>
      <p className="about-text">
        I am a passionate developer currently studying at {college}. I love building
        clean, user-friendly web applications and am always eager to learn new technologies.
      </p>
      <span className="skills-label">Tech Stack</span>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill} className="skill-tag">{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default About