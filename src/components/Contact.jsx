import { site } from '../data/site.js'
import SmartLink from './SmartLink.jsx'
import { isPlaceholder } from '../utils/links.js'

export default function Contact() {
  const emailHref = isPlaceholder(site.links.email)
    ? site.links.email
    : `mailto:${site.links.email}`

  return (
    <section id="contact" className="section">
      <div className="container">
        <span className="eyebrow fade-in">~/contact</span>
        <h2>Let&rsquo;s talk.</h2>
        <p>
          I&rsquo;m targeting {site.targetRole} roles. Fastest way to reach me
          is email — happy to walk through any project on a call.
        </p>
        <div className="contact__actions">
          <SmartLink href={emailHref} className="btn btn-primary">
            Email
          </SmartLink>
          <SmartLink href={site.links.linkedin} className="btn btn-secondary">
            LinkedIn
          </SmartLink>
          <SmartLink href={site.links.github} className="btn btn-secondary">
            GitHub
          </SmartLink>
          <SmartLink href={site.links.resume} className="btn btn-secondary">
            Download resume (PDF)
          </SmartLink>
        </div>
      </div>
    </section>
  )
}
