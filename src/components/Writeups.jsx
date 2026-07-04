import { writeups } from '../data/writeups.js'
import Reveal from './Reveal.jsx'

// EXISTS BUT UNRENDERED (Section 6.7 / Section 8 decisions log): not
// imported into Home.jsx and not linked from SideNav until the owner
// publishes a first real writeup. Flip it on by rendering <Writeups />
// in Home.jsx and adding a "Writeups" entry to SideNav's SECTIONS.
export default function Writeups() {
  if (writeups.length === 0) return null

  return (
    <section id="writeups" className="section">
      <div className="container">
        <Reveal>
          <h2>Writeups</h2>
          <ul className="writeups__list">
            {writeups.map((entry) => (
              <li key={entry.title}>
                <a href={entry.link}>{entry.title}</a>
                <p>{entry.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
