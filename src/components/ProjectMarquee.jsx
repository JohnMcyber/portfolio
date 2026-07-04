import { projectShowcase } from '../data/projectShowcase.js'
import { useDragScroll } from '../hooks/useDragScroll.js'

// Decorative "more in the pipeline" strip below the real 3-project grid
// — auto-scrolls, is grab-to-drag, fades at both edges. Deliberately
// distinct from ProjectCard (smaller, muted, "Backlog" tagged, no
// links) so it reads as a teaser, not additional claimed case studies —
// the site still shows exactly 3 real projects per CLAUDE.md Section 7.
export default function ProjectMarquee() {
  const ref = useDragScroll({ autoScrollSpeed: 0.6 })
  // Rendered twice back-to-back so the auto-scroll loop (see
  // useDragScroll) can jump back by exactly one copy's width and look
  // seamless.
  const items = [...projectShowcase, ...projectShowcase]

  return (
    <div className="marquee-wrap">
      <p className="marquee-caption">...and a few more in the pipeline</p>
      <div
        ref={ref}
        className="marquee drag-scroll"
        tabIndex={0}
        role="region"
        aria-label="Upcoming project ideas (not yet built)"
      >
        {items.map((item, i) => (
          <div className="marquee__card" key={`${item.title}-${i}`} aria-hidden={i >= projectShowcase.length}>
            <span className="tag">{item.tag}</span>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
