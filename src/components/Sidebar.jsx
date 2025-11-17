import React, {useState, useEffect} from 'react'

export default function Sidebar({theme, toggleTheme}){
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  const items = [
     {label:'Home', icon:'🏠', id:'home'},
     {label:'About', icon:'👤', id:'about'},
     {label:'Projects', icon:'💼', id:'projects'},
     {label:'Skills', icon:'⚡', id:'skills'},
     {label:'Certificates', icon:'🏆', id:'certificates'},
     {label:'Contact', icon:'✉️', id:'contact'},
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(items[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToSection(sectionId){
    const element = document.getElementById(sectionId)
    if(element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
      setOpen(false)
    }
  }

  return (
    <header className="header">
      <nav className="nav">
        <button className="menu-toggle" onClick={()=> setOpen(o=>!o)} aria-label="Toggle menu">
          <span className={open ? 'active' : ''}></span>
          <span className={open ? 'active' : ''}></span>
          <span className={open ? 'active' : ''}></span>
        </button>
        
        <ul className={`nav-links ${open? 'show': ''}`}>
          {items.map((it)=> (
            <li key={it.id}>
              <a 
                href={`#${it.id}`}
                className={activeSection === it.id ? 'active' : ''} 
                onClick={(e)=> {e.preventDefault(); scrollToSection(it.id)}}
              >
                <span className="nav-icon">{it.icon}</span>
                <span className="nav-label">{it.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <button 
          className="theme-toggle" 
          onClick={toggleTheme} 
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  )
}
