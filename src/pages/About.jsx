import React from 'react'

export default function About(){
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-grid-layout">
          <div className="about-image-section">
            <div className="about-image-frame">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" 
                alt="Profile" 
                className="about-profile-image"
              />
            </div>
          </div>
          
          <div className="about-text-section">
            <h2 className="about-heading">ABOUT ME</h2>
            <p className="about-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book. It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged.
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
