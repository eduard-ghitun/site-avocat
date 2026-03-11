import PrimaryButton from '@/components/PrimaryButton.jsx'
import SectionTitle from '@/components/SectionTitle.jsx'
import { siteImages } from '@/data/siteImages.js'

function HeroSection() {
  return (
    <section
      className="page-section hero-section"
      aria-labelledby="hero-title"
      style={{ '--hero-image': `url(${siteImages.heroOffice})` }}
    >
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-shell">
        <div className="hero-content hero-enter">
          <SectionTitle
            as="h1"
            id="hero-title"
            eyebrow="Excelență juridică"
            title="Cabinet de Avocat"
            subtitle="Nechita Iulian – Avocat"
          />
          <p className="section-text hero-lead">
            Oferim consultanță juridică în București, asistență și reprezentare
            în instanță pentru litigii de drept penal, drept civil, drept
            comercial și dreptul muncii.
          </p>
          <div className="section-actions hero-actions">
            <PrimaryButton href="#contact">Solicită consultanță juridică</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
