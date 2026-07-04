import { learningPath } from '../data/learningPath.js'
import TypedHeading from './TypedHeading.jsx'
import Reveal from './Reveal.jsx'
import { useDragScroll } from '../hooks/useDragScroll.js'

// V3-R6: a simple dated timeline of completed/current/next certs and
// courses. This is the one section allowed a chronological layout
// (Section 4.4 exception) because the order carries real information.
// Its own horizontally-scrollable strip (drag, wheel, or arrow keys once
// focused) rather than part of the page's vertical scroll — scrolling
// while hovering it moves the strip, not the page.
export default function LearningPath() {
  const ref = useDragScroll()

  return (
    <section id="learning" className="section">
      <div className="container">
        <Reveal>
          <TypedHeading as="h2" text="Learning path" />
        </Reveal>
        <p className="timeline-hint">Drag to explore &rarr;</p>
        <div
          ref={ref}
          className="timeline drag-scroll"
          tabIndex={0}
          role="region"
          aria-label="Learning path timeline — scrolls horizontally"
        >
          <ol className="timeline__track">
            {learningPath.map((entry) => (
              <li
                key={`${entry.date}-${entry.title}`}
                className={`timeline__item timeline__item--${entry.status}`}
              >
                <span className="timeline__marker" aria-hidden="true" />
                <div className="timeline__card">
                  <span className="timeline__date">{entry.date}</span>
                  <p className="timeline__title">{entry.title}</p>
                  <span className="timeline__status">
                    {entry.status.replace('-', ' ')}
                  </span>
                  {entry.note && <p className="timeline__note">{entry.note}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
