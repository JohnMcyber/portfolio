import { skillGroups } from '../data/skills.js'

// Supporting evidence only (Section 6.5) — every tag here should also be
// visible in use inside one of the three projects.
export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="eyebrow fade-in">~/skills</span>
        <h2>Skills</h2>
        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills__group">
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
    </section>
  )
}
