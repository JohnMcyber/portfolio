import { skillGroups } from '../data/skills.js'
import { toolShowcase } from '../data/toolShowcase.js'
import TypedHeading from './TypedHeading.jsx'
import Reveal from './Reveal.jsx'
import { useDragScroll } from '../hooks/useDragScroll.js'

// Supporting evidence only (Section 6.5) — every tag here should also be
// visible in use inside one of the three projects. Skill categories are
// draggable cards (grab-and-pan, per owner reference) rather than a
// static grid; the tools ticker below is a separate, purely decorative
// strip — placeholder tiles until real icons are supplied.
export default function Skills() {
  const skillsRef = useDragScroll()
  const toolsRef = useDragScroll({ autoScrollSpeed: 0.4 })
  const tools = [...toolShowcase, ...toolShowcase]

  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <TypedHeading as="h2" text="Skills" />
        </Reveal>
        <p className="timeline-hint">Drag to explore &rarr;</p>
        <div
          ref={skillsRef}
          className="skills-scroll drag-scroll"
          tabIndex={0}
          role="region"
          aria-label="Skill categories — scrolls horizontally"
        >
          <div className="skills-scroll__track">
            {skillGroups.map((group) => (
              <div key={group.category} className="skills-card">
                <h3>{group.category}</h3>
                <div>
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="tools-caption">Tools I use day to day</p>
        <div
          ref={toolsRef}
          className="tools-scroll drag-scroll"
          tabIndex={0}
          role="region"
          aria-label="Tools — decorative, scrolls horizontally"
        >
          <div className="tools-scroll__track">
            {tools.map((tool, i) => (
              <div
                className="tool-tile"
                key={`${tool}-${i}`}
                aria-hidden={i >= toolShowcase.length}
              >
                <span className="tool-tile__icon" aria-hidden="true" />
                <span className="tool-tile__label">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
