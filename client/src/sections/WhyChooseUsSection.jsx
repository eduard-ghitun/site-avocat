import SectionTitle from '@/components/SectionTitle.jsx'
import { services } from '@/data/services.js'

const iconTokens = ['01', '02', '03', '04']

function WhyChooseUsSection({ items = services, isLoading = false }) {
  return (
    <section
      id="why-choose-us"
      className="page-section section-muted reveal-section"
      aria-labelledby="why-choose-us-title"
    >
      <div className="container">
        <SectionTitle
          id="why-choose-us-title"
          title="De ce să ne alegi"
          subtitle="Un partener juridic de încredere pentru clienți din București care au nevoie de strategie, claritate și rezultate."
        />

        {isLoading ? (
          <p className="section-loading">Se încarcă avantajele colaborării...</p>
        ) : null}

        {!isLoading && items.length === 0 ? (
          <p className="section-loading">Momentan nu există informații disponibile.</p>
        ) : null}

        <div className="why-choose-grid reveal-stagger">
          {items.map((item, index) => (
            <article key={item.id} className="why-choose-card">
              <span className="why-choose-icon">{iconTokens[index % iconTokens.length]}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
