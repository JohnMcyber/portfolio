import { Link, Navigate, useParams } from 'react-router-dom'
import { getProjectBySlug, projects } from '../data/projects.js'
import SmartLink from '../components/SmartLink.jsx'

// Routed writeup page: /#/projects/[slug]. Implements the full
// case-study structure required by Section 7 (V2-R9): summary -> goal ->
// tools -> steps -> findings -> recommendation -> learned -> demonstrates.
export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  const index = projects.findIndex((p) => p.slug === slug)
  const prev = projects[index - 1]
  const next = projects[index + 1]

  return (
    <article className="section project-page">
      <div className="container">
        <Link to="/" className="project-page__back">
          &larr; Back to projects
        </Link>

        <span className="eyebrow">~/projects/{project.slug}</span>
        <h1>{project.title}</h1>
        <p className="project-page__summary">{project.summary}</p>

        <h2>Goal</h2>
        <p>{project.goal}</p>

        <h2>Tools used</h2>
        <ul>
          {project.tools.map((tool) => (
            <li key={tool.name}>
              <strong>{tool.name}</strong> — {tool.why}
            </li>
          ))}
        </ul>

        <h2>Steps taken</h2>
        <ol>
          {project.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <h2>Findings</h2>
        <p>{project.findings}</p>

        <h2>Recommendation</h2>
        <p>{project.recommendation}</p>

        <h2>What I learned</h2>
        <p>{project.learned}</p>

        <p className="project-page__demonstrates">
          <strong>Demonstrates:</strong> {project.demonstrates.join(', ')}
        </p>

        <div className="project-page__links">
          <SmartLink href={project.links.repo} className="btn btn-secondary">
            Repo
          </SmartLink>
          <SmartLink
            href={project.links.writeup}
            className="btn btn-secondary"
          >
            Writeup
          </SmartLink>
          <SmartLink
            href={project.links.diagram}
            className="btn btn-secondary"
          >
            Diagram
          </SmartLink>
        </div>

        <nav className="project-page__pager" aria-label="Other projects">
          {prev ? (
            <Link to={`/projects/${prev.slug}`}>&larr; {prev.title}</Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/projects/${next.slug}`}>{next.title} &rarr;</Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  )
}
