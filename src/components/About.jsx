import { site } from '../data/site.js'
import TypedHeading from './TypedHeading.jsx'
import Reveal from './Reveal.jsx'

// V3-R3: 2-3 specific sentences — who you are, focus area, what you bring.
export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <TypedHeading as="h2" text="About" />
          <p>{site.about}</p>
        </Reveal>
      </div>
    </section>
  )
}
