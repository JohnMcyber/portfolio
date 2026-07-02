import { Link } from 'react-router-dom'
import SmartLink from './SmartLink.jsx'

// Card layout per Section 6.4: title -> summary -> tool tags ->
// "Demonstrates" line -> links. Full case-study detail lives on the
// routed writeup page, not here.
export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
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
    </article>
  )
}
