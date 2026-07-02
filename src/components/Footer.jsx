import { site } from '../data/site.js'
import SmartLink from './SmartLink.jsx'

// "Last updated" stamp is deliberate (V3-M5, living-document rule) — keep
// it current by hand in src/data/site.js; a stale date signals coasting.
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {site.name} · Last updated {site.lastUpdated}
        </p>
        <div className="footer__links">
          <SmartLink href={site.links.github}>GitHub</SmartLink>
          <SmartLink href={site.links.linkedin}>LinkedIn</SmartLink>
        </div>
      </div>
    </footer>
  )
}
