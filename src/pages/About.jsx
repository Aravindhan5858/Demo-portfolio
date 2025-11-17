import React from 'react'

export default function About(){
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-grid-layout">
          <div className="about-image-section">
            <div className="about-image-frame">
              <img 
                src="/profile.png" 
                alt="Profile" 
                className="about-profile-image"
              />
            </div>
          </div>
          
          <div className="about-text-section">
            <h2 className="about-heading">ABOUT ME</h2>
            <p className="about-description">
            Built dynamic and interactive websites with HTML, CSS, JavaScript, and contemporary frameworks.
Created intuitive and user-friendly user interfaces and maximized web performance for seamless user
experience. Experienced in MS SQL, including database design, query optimization, and data
administration.
            </p>
            
            <div className="about-actions">
              <a 
                href="/cv.pdf" 
                download="CV.pdf"
                className="btn btn-outline"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
