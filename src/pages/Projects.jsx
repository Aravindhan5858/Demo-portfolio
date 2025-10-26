import React from 'react'

export default function Projects(){
  return (
    <>
      <h2>Projects</h2>
      <div className="projects-list">
        <article className="project-card">
          <img src="https://picsum.photos/seed/project1/520/300" alt="Project 1"/>
          <div className="project-body">
            <h4>Shop UI Redesign</h4>
            <p className="muted">A responsive e-commerce UI focused on conversion and performance.</p>
          </div>
        </article>
        <article className="project-card">
          <img src="https://picsum.photos/seed/project2/520/300" alt="Project 2"/>
          <div className="project-body">
            <h4>Design System</h4>
            <p className="muted">Design tokens, components and documentation for a consistent product UI.</p>
          </div>
        </article>
        <article className="project-card">
          <img src="https://picsum.photos/seed/project3/520/300" alt="Project 3"/>
          <div className="project-body">
            <h4>Landing Page</h4>
            <p className="muted">Fast, accessible landing page with A/B tested hero variations.</p>
          </div>
        </article>
      </div>
    </>
  )
}
