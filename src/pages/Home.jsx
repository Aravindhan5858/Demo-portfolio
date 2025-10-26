import React from 'react'

export default function Home(){
  return (
    <div className="home-grid">
      <div className="profile-card" data-animate>
        <img className="avatar" src="https://i.pravatar.cc/120?img=12" alt="Muzammal"/>
        <h3>Aravindhan.C</h3>
        <p className="muted">Front-end Developer</p>
        <div className="profile-stats">
          <div><strong>5+</strong><span>Years</span></div>
          <div><strong>200+</strong><span>Clients</span></div>
          <div><strong>50+</strong><span>Projects</span></div>
        </div>
        <div className="profile-actions">
          <button className="btn primary">Hire Me</button>
          <button className="btn ghost">Portfolio</button>
        </div>
      </div>

      <div className="home-intro" data-animate>
        <h1 className="headline">Welcome to My Portfolio</h1>
        <p className="lead">I design and build beautiful web experiences. Explore my projects and get in touch.</p>
        <div className="recent-projects">
          <h4>Recent Work</h4>
          <div className="projects-grid">
            <div className="project-tile"><img src="https://picsum.photos/seed/p1/300/200" alt=""/></div>
            <div className="project-tile"><img src="https://picsum.photos/seed/p2/300/200" alt=""/></div>
            <div className="project-tile"><img src="https://picsum.photos/seed/p3/300/200" alt=""/></div>
          </div>
        </div>
      </div>
    </div>
  )
}
