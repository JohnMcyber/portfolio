import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectMarquee from './ProjectMarquee.jsx'
import TypedHeading from './TypedHeading.jsx'
import Reveal from './Reveal.jsx'

// Exactly three real projects render as full cards (V2-R9 / V3-R4) —
// depth over breadth. ProjectMarquee below is a decorative "more coming"
// teaser using placeholder data, not additional claimed case studies —
// see its own comments for why that distinction matters here.
export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <TypedHeading as="h2" text="Projects" />
        </Reveal>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <ProjectMarquee />
      </div>
    </section>
  )
}
