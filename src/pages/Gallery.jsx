import Certificates from './Certificates'

// Deprecated alias for backward compatibility
import React from 'react'

const skillsData = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Next.js', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS', 'CI/CD'],
  design: ['Figma', 'Adobe XD', 'Responsive Design', 'Accessibility', 'Performance', 'SEO', 'Testing', 'Agile']
}

export default function Gallery(){
  return (
    <div className="skills-container">
      <h2 className="section-title">Skills & Technologies</h2>
      
      <div className="skills-categories">
        <div className="skill-category">
          <h3>Frontend Development</h3>
          <div className="skills-grid">
            {skillsData.frontend.map(skill => (
              <div key={skill} className="skill-badge" tabIndex={0}>
                {skill}
              </div>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Backend & Tools</h3>
          <div className="skills-grid">
            {skillsData.backend.map(skill => (
              <div key={skill} className="skill-badge" tabIndex={0}>
                {skill}
              </div>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Design & Other</h3>
          <div className="skills-grid">
            {skillsData.design.map(skill => (
              <div key={skill} className="skill-badge" tabIndex={0}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
