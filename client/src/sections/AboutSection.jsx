import PrimaryButton from '@/components/PrimaryButton.jsx'
import PortraitImage from '@/components/PortraitImage.jsx'
import SectionTitle from '@/components/SectionTitle.jsx'
import { siteImages } from '@/data/siteImages.js'

function AboutSection() {
  return (
    <section
      id="despre-avocat"
      className="page-section reveal-section"
      aria-labelledby="about-section-title"
    >
      <div className="container">
        <div className="about-layout reveal-stagger">
          <figure className="about-figure">
            <PortraitImage
              src={siteImages.aboutPortrait}
              alt="Nechita Iulian, avocat in Bucuresti Sector 2"
              className="about-image"
              fallbackLabel="Nechita"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 900px) 92vw, 40vw"
            />
          </figure>

          <div className="about-content">
            <SectionTitle
              id="about-section-title"
              title="Nechita Iulian – Avocat"
              subtitle="Despre Avocat"
            />
            <p className="section-text">
              Absolvent al Facultății de Drept din cadrul Universității din
              București, cu studii de master în Științe Penale și
              Criminalistică, ofer asistență juridică și reprezentare în fața
              instanțelor de judecată cu profesionalism, seriozitate și
              dedicare, în București, Sector 2.
            </p>
            <div className="section-actions">
              <PrimaryButton href="#contact">Programează o consultație</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
