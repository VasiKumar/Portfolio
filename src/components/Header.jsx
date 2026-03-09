function Header({ name, imagePath }) {
  return (
    <header className="hero">
      <div className="hero-inner">
        <img className="hero-image" src={imagePath} alt="Profile" />
        <div className="hero-content">
          <p className="eyebrow">Welcome to my portfolio</p>
          <h1>{name}</h1>
          <p className="hero-role">Computer Science Student &middot; Web Developer</p>
          <nav className="hero-nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header