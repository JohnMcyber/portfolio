import { Link } from 'react-router-dom'
import SmartLink from './SmartLink.jsx'
import { useInViewOnce } from '../hooks/useInView.js'

// Card layout per Section 6.4: title -> summary -> tool tags ->
// "Demonstrates" line -> links. Full case-study detail lives on the
// routed writeup page, not here.
//
// The two glow spans are decorative (hover-only orb shuffle, see
// components.css) — kept out of the normal document flow via
// position:absolute so they don't affect layout or a11y. Real content
// is wrapped in project-card__content, given its own stacking context
// (z-index) so it reliably paints above the glows regardless of DOM
// order — positioned descendants otherwise paint above normal-flow
// content by default, not below it.
export default function ProjectCard({ project }) {
  const [ref, inView] = useInViewOnce({ threshold: 0.12 })

  return (
    <article
      ref={ref}
      className={`card project-card shine-border reveal${inView ? ' in' : ''}`}
    >
      <span className="project-card__glow project-card__glow--a" aria-hidden="true" />
      <span className="project-card__glow project-card__glow--b" aria-hidden="true" />
      <div className="project-card__content">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-card__tags">
          {project.tools.map((tool) => (
            <span key={tool.name} className="tag">
              {tool.name}
            </span>
          ))}
        </div>
        <p className="project-card__demonstrates">
          <strong>Demonstrates:</strong> {project.demonstrates.join(', ')}
        </p>
        <div className="project-card__links">
          <Link to={`/projects/${project.slug}`} className="btn btn-secondary">
            Read the writeup
          </Link>
          <SmartLink href={project.links.repo}>Repo</SmartLink>
          <SmartLink href={project.links.diagram}>Diagram</SmartLink>
        </div>
      </div>
    </article>
  )
}
