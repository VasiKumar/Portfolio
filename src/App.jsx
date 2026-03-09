import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import placeholderImage from './assets/placeholder-profile.jpg'
import './App.css'

const profile = {
  name: 'mohanta basistha kamal lochan',
  college: 'GIFT Autonomous',
  email: 'basistha@gmail.com',
}

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A clean personal website to showcase profile and projects.',
    tech: 'React, CSS',
  },
  {
    title: 'College Event Page',
    description: 'A responsive page to publish event details and schedules.',
    tech: 'HTML, CSS, JavaScript',
  },
  {
    title: 'Student Notes Hub',
    description: 'A simple interface to organize notes by subject and semester.',
    tech: 'React, Local Storage',
  },
]

function App() {
  return (
    <main className="portfolio-page">
      <Header name={profile.name} imagePath={placeholderImage} />
      <div className="content-wrap">
        <About college={profile.college} />
        <Projects projects={projects} />
        <Contact email={profile.email} />
        <footer className="portfolio-footer">
          &copy; {new Date().getFullYear()} {profile.name} &middot; Built with React
        </footer>
      </div>
    </main>
  )
}

export default App
