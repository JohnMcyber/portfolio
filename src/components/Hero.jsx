import { site } from '../data/site.js'
import { scrollToId } from '../utils/scroll.js'
import SmartLink from './SmartLink.jsx'
import TypedHeading from './TypedHeading.jsx'

// V2-R1 / V3-R2: the homepage must state the target role and what the
// portfolio proves, within seconds — this is that "online handshake".
export default function Hero() {
  return (
    <section className="hero section">
      <div className="container">
        <TypedHeading as="h1" text={site.name} className="hero__name" />
        <p className="hero__role">Targeting {site.targetRole} roles.</p>
        <p className="hero__tagline">{site.tagline}</p>
        <div className="hero__cta">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => scrollToId('projects')}
          >
            View projects
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => scrollToId('contact')}
          >
            Get in touch
          </button>
          <SmartLink href={site.links.resume} className="hero__resume-link">
            Resume (PDF)
          </SmartLink>
        </div>
      </div>
    </section>
  )
}
