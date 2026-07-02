import { site } from '../data/site.js'

// V3-R3: 2-3 specific sentences — who you are, focus area, what you bring.
export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <span className="eyebrow fade-in">~/about</span>
        <h2>About</h2>
        <p>{site.about}</p>
      </div>
    </section>
  )
}
