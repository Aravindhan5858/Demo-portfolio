import React, {useState, useEffect, useRef} from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'

export default function App(){
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const sectionsRef = useRef([])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <div className="brand" role="button" tabIndex={0}
        onClick={() => document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})}
        onKeyDown={(e) => { if(e.key==='Enter') document.getElementById('home')?.scrollIntoView({behavior: 'smooth'}) }}
      >
        Aravindhan.C
      </div>
      
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="main-content">
        <section id="home" className="section reveal"><Home /></section>
        <section id="about" className="section reveal"><About /></section>
        <section id="projects" className="section reveal"><Projects /></section>
        <section id="skills" className="section reveal"><Gallery /></section>
        <section id="certificates" className="section reveal"><Certificates /></section>
        <section id="contact" className="section reveal"><Contact /></section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Aravindhan.C. Built with React and modern web technologies.</p>
      </footer>
    </>
  )
}
