import { Link, useLocation, useNavigate } from 'react-router-dom'
import { site } from '../data/site.js'
import { scrollToId } from '../utils/scroll.js'

// Section links scroll within the page rather than using "#id" hrefs,
// because HashRouter already owns the URL hash for routing (e.g.
// "#/projects/slug"). A real "#about" href would be read as a route
// change, not an in-page jump.
const NAV_ITEMS = [
  { id: 'about', label: '~/about' },
  { id: 'projects', label: '~/projects' },
  { id: 'skills', label: '~/skills' },
  { id: 'learning', label: '~/learning' },
  { id: 'contact', label: '~/contact' },
]

export default function Nav() {
  const location = useLocation()
  const navigate = useNavigate()

  function goToSection(id) {
    if (location.pathname === '/') {
      scrollToId(id)
    } else {
      // Navigate home first, then Home.jsx scrolls once the section exists.
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand">
          {site.name}
        </Link>
        <nav aria-label="Main">
          <ul className="nav__links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="nav__link"
                  onClick={() => goToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
