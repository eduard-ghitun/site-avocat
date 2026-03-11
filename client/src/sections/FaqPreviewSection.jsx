import InfoCard from '@/components/InfoCard.jsx'
import SecondaryButton from '@/components/SecondaryButton.jsx'
import SectionTitle from '@/components/SectionTitle.jsx'
import { faqs } from '@/data/faqs.js'

function FaqPreviewSection({ items = faqs, isLoading = false }) {
  return (
    <section id="faq" className="page-section reveal-section" aria-labelledby="faq-section-title">
      <div className="container">
        <SectionTitle
          id="faq-section-title"
          title="Întrebări Frecvente"
          subtitle="Răspunsuri rapide la întrebările pe care le primim cel mai des."
        />
        {isLoading ? (
          <p className="section-loading">Se încarcă întrebările frecvente...</p>
        ) : null}
        {!isLoading && items.length === 0 ? (
          <p className="section-loading">Momentan nu există întrebări disponibile.</p>
        ) : null}
        <div className="cards-grid reveal-stagger">
          {items.map((item) => (
            <InfoCard key={item.id} title={item.title} text={item.text} />
          ))}
        </div>
        <div className="section-actions">
          <SecondaryButton href="#contact">Discută cu un avocat</SecondaryButton>
        </div>
      </div>
    </section>
  )
}

export default FaqPreviewSection
