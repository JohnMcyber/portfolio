import { writeups } from '../data/writeups.js'

// EXISTS BUT UNRENDERED (Section 6.7 / Section 8 decisions log): not
// imported into Home.jsx and not linked from Nav until the owner
// publishes a first real writeup. Flip it on by rendering <Writeups />
// in Home.jsx and adding a "~/writeups" entry to Nav's NAV_ITEMS.
export default function Writeups() {
  if (writeups.length === 0) return null

  return (
    <section id="writeups" className="section">
      <div className="container">
        <span className="eyebrow fade-in">~/writeups</span>
        <h2>Writeups</h2>
        <ul className="writeups__list">
          {writeups.map((entry) => (
            <li key={entry.title}>
              <a href={entry.link}>{entry.title}</a>
              <p>{entry.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
