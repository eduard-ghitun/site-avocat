import InfoCard from '@/components/InfoCard.jsx'
import SectionTitle from '@/components/SectionTitle.jsx'
import { services } from '@/data/services.js'

function ServicesSection({ items = services, isLoading = false }) {
  return (
    <section
      id="servicii"
      className="page-section section-muted"
      aria-labelledby="services-section-title"
    >
      <div className="container">
        <SectionTitle
          id="services-section-title"
          title="Servicii Juridice"
          subtitle="Soluții personalizate pentru persoane fizice și companii."
        />
        {isLoading ? (
          <p className="section-loading">Se încarcă serviciile...</p>
        ) : null}
        {!isLoading && items.length === 0 ? (
          <p className="section-loading">Momentan nu există servicii disponibile.</p>
        ) : null}
        <div className="cards-grid">
          {items.map((service) => (
            <InfoCard key={service.id} title={service.title} text={service.text} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
