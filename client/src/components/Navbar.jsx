import { useEffect, useState } from 'react'
import { navLinks } from '@/data/navLinks.js'
import { contactInfo } from '@/data/contactInfo.js'
import { siteImages } from '@/data/siteImages.js'

const phoneIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.6 10.8a15.8 15.8 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.7.7 4.1.7.7 0 1.3.6 1.3 1.3V21c0 .7-.6 1.3-1.3 1.3C10.8 22.3 1.7 13.2 1.7 2.3 1.7 1.6 2.3 1 3 1h4.1c.7 0 1.3.6 1.3 1.3 0 1.4.3 2.8.7 4.1.1.4 0 .9-.3 1.2l-2.2 2.2z" />
  </svg>
)

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a className="brand" href="/" onClick={closeMenu}>
          <img
            className="brand-logo"
            src={siteImages.logo}
            alt="Logo Cabinet de Avocat Nechita Iulian Bucuresti"
            loading="eager"
            decoding="async"
          />
        </a>

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          aria-label={isMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-navigation"
          className={`navbar-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Navigatie principala"
        >
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="nav-cta" href={contactInfo.actions.phoneHref} onClick={closeMenu}>
            <span className="nav-cta-icon">{phoneIcon}</span>
            Sună: {contactInfo.cards.find((item) => item.id === 'telefon')?.text}
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
