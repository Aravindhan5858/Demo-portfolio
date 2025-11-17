import React from 'react'

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern shopping experience with real-time inventory, secure payments, and responsive design',
    image: 'https://picsum.photos/seed/project1/600/400',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Component Library',
    description: 'Comprehensive design system with reusable components, tokens, and documentation',
    image: 'https://picsum.photos/seed/project2/600/400',
    tech: ['React', 'Storybook', 'CSS-in-JS']
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization with interactive charts and customizable reports',
    image: 'https://picsum.photos/seed/project3/600/400',
    tech: ['Vue.js', 'D3.js', 'Firebase']
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'Community platform with messaging, feeds, and real-time notifications',
    image: 'https://picsum.photos/seed/project4/600/400',
    tech: ['Next.js', 'PostgreSQL', 'WebSocket']
  },
  {
    id: 5,
    title: 'Portfolio Builder',
    description: 'Drag-and-drop builder for creating beautiful portfolio websites',
    image: 'https://picsum.photos/seed/project5/600/400',
    tech: ['React', 'DnD Kit', 'Tailwind']
  },
  {
    id: 6,
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking app with workout plans and progress analytics',
    image: 'https://picsum.photos/seed/project6/600/400',
    tech: ['React Native', 'Redux', 'REST API']
  }
]

export default function Projects(){
  return (
    <div className="projects-container">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projectsData.map(project => (
          <article key={project.id} className="project-card">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image"
              loading="lazy"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
