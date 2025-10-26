import React from 'react'

export default function About(){
  return (
    <>
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-left">
          <p className="about-bio">Hi, I'm Muzammal — a front-end developer who loves building accessible and performant web applications. I focus on clean UI, responsive designs, and smooth interactions.</p>
          <div className="about-stats">
            <div><strong>5+</strong><span>Years Experience</span></div>
            <div><strong>200+</strong><span>Happy Clients</span></div>
            <div><strong>50+</strong><span>Projects</span></div>
          </div>
          <h3>Experience</h3>
          <ul className="exp-list">
            <li><strong>Senior Front-end Developer</strong> — Acme Corp (2022 - Present)</li>
            <li><strong>Front-end Engineer</strong> — Creative Studio (2019 - 2022)</li>
          </ul>
        </div>
        <div className="about-right">
          <h3>Skills</h3>
          <div className="skill-bar">
            <label>HTML</label>
            <div className="bar"><div className="active-bar" style={{width:'95%'}}></div></div>
          </div>
          <div className="skill-bar">
            <label>CSS</label>
            <div className="bar"><div className="active-bar" style={{width:'88%'}}></div></div>
          </div>
          <div className="skill-bar">
            <label>JavaScript</label>
            <div className="bar"><div className="active-bar" style={{width:'82%'}}></div></div>
          </div>
          <div className="skill-bar">
            <label>Develop</label>
            <div className="bar"><div className="active-bar" style={{width:'75%'}}></div></div>
          </div>
          <h3>Education</h3>
          <p>Bachelor of Computer Science — University of Somewhere (2016 - 2020)</p>
        </div>
      </div>
    </>
  )
}
