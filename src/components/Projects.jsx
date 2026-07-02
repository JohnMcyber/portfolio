import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

// Exactly three projects render here (V2-R9 / V3-R4) — depth over breadth.
// Extra ideas go in the backlog comment in data/projects.js, not the site.
export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="eyebrow fade-in">~/projects</span>
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
