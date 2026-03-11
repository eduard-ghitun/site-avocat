import { navLinks } from '@/data/navLinks.js'
import { contactInfo } from '@/data/contactInfo.js'
import { siteImages } from '@/data/siteImages.js'

const address = contactInfo.cards.find((item) => item.id === 'adresa')?.text
const quickLinks = navLinks.filter((item) => item.id !== 'acasa')

const socialIconById = {
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 8.5V6.8c0-.8.5-1.3 1.5-1.3H17V2.2h-2.6c-3 0-4.4 1.7-4.4 4.4v1.9H7.4v3.3H10v10h3.5v-10h2.9l.5-3.3h-3.4z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.1 8.2a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM4.4 20h3.4V9.6H4.4V20zm6 0h3.4v-5.6c0-1.5.3-2.9 2.1-2.9 1.8 0 1.8 1.7 1.8 3V20h3.4v-6.2c0-3.1-.7-5.4-4.3-5.4-1.7 0-2.8 1-3.3 2h0V9.6h-3.3V20z" />
    </svg>
  ),
}

const contactIconById = {
  adresa: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.3a7.6 7.6 0 0 0-7.6 7.6c0 5.4 7.6 11.9 7.6 11.9s7.6-6.5 7.6-11.9A7.6 7.6 0 0 0 12 2.3zm0 10.3a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4z" />
    </svg>
  ),
  telefon: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8a15.8 15.8 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.7.7 4.1.7.7 0 1.3.6 1.3 1.3V21c0 .7-.6 1.3-1.3 1.3C10.8 22.3 1.7 13.2 1.7 2.3 1.7 1.6 2.3 1 3 1h4.1c.7 0 1.3.6 1.3 1.3 0 1.4.3 2.8.7 4.1.1.4 0 .9-.3 1.2l-2.2 2.2z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.3 4H3.7A2.7 2.7 0 0 0 1 6.7v10.6A2.7 2.7 0 0 0 3.7 20h16.6a2.7 2.7 0 0 0 2.7-2.7V6.7A2.7 2.7 0 0 0 20.3 4zm-.6 2L12 11.5 4.3 6h15.4zM3.7 18a.7.7 0 0 1-.7-.7V7.2l8.4 6a1 1 0 0 0 1.2 0l8.4-6v10.1a.7.7 0 0 1-.7.7H3.7z" />
    </svg>
  ),
}

const contactLabelById = {
  adresa: 'Locație',
  telefon: 'Telefon',
  email: 'Email',
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <section>
          <div className="footer-brand-row">
            <img
              src={siteImages.logo}
              alt="Cabinet de Avocat Nechita Iulian Bucuresti Sector 2"
              className="footer-logo"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3 className="footer-title">{contactInfo.officeName}</h3>
          <p className="footer-text">{contactInfo.tagline}</p>
          <p className="footer-meta">{contactInfo.registration}</p>
        </section>

        <nav aria-label="Linkuri rapide">
          <h4 className="footer-subtitle">Linkuri rapide</h4>
          <ul className="footer-list">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section>
          <h4 className="footer-subtitle">Date de contact</h4>
          <ul className="footer-list footer-contact-list">
            {contactInfo.cards.map((item) => (
              <li key={item.id} className="footer-contact-item">
                <span className="footer-contact-icon">{contactIconById[item.id]}</span>
                <div className="footer-contact-content">
                  <span className="footer-contact-label">{contactLabelById[item.id]}</span>
                  {item.id === 'telefon' ? (
                    <a href={contactInfo.actions.phoneHref}>{item.text}</a>
                  ) : null}
                  {item.id === 'email' ? (
                    <a href={contactInfo.actions.emailHref}>{item.text}</a>
                  ) : null}
                  {item.id === 'adresa' ? <span>{item.text}</span> : null}
                </div>
              </li>
            ))}
            {!address && contactInfo.cards.length === 0 ? (
              <li>Datele de contact nu sunt disponibile momentan.</li>
            ) : null}
          </ul>
        </section>

        <section>
          <h4 className="footer-subtitle">Social media</h4>
          <ul className="footer-list">
            {contactInfo.socialLinks.map((item) => (
              <li key={item.id}>
                <a className="footer-social-link" href={item.href} target="_blank" rel="noreferrer">
                  <span className="footer-social-icon">
                    {socialIconById[item.id]}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {contactInfo.officeName}. Toate drepturile
          rezervate.
        </p>
      </div>
    </footer>
  )
}

export default Footer
