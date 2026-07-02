import { learningPath } from '../data/learningPath.js'

// V3-R6: a simple dated timeline of completed/current/next certs and
// courses. This is the one section allowed a chronological layout
// (Section 4.4 exception) because the order carries real information.
export default function LearningPath() {
  return (
    <section id="learning" className="section">
      <div className="container">
        <span className="eyebrow fade-in">~/learning</span>
        <h2>Learning path</h2>
        <ol className="timeline">
          {learningPath.map((entry) => (
            <li key={`${entry.date}-${entry.title}`} className="timeline__item">
              <span className="timeline__date tag">{entry.date}</span>
              <div className="timeline__body">
                <p className="timeline__title">
                  {entry.title}{' '}
                  <span
                    className={`timeline__status timeline__status--${entry.status}`}
                  >
                    {entry.status}
                  </span>
                </p>
                {entry.note && <p className="timeline__note">{entry.note}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
