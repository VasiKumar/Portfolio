function Projects({ projects }) {
  return (
    <section className="section-block">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-badges">
              {project.tech.split(',').map((t) => (
                <span key={t} className="tech-badge">{t.trim()}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects