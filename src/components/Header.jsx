function Header({ name, imagePath }) {
  return (
    <header className="hero">
      <img className="hero-image" src={imagePath} alt="Profile" />
      <div className="hero-content">
        <p className="eyebrow">Portfolio</p>
        <h1>{name}</h1>
        <p className="hero-role">Computer Science Student &middot; Web Developer</p>
      </div>
    </header>
  )
}

export default Header