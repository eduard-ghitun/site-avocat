import { useEffect, useState } from 'react'
import WhyChooseCard from '@/components/WhyChooseCard.jsx'
import SectionTitle from '@/components/SectionTitle.jsx'
import { services } from '@/data/services.js'

const iconTokens = ['01', '02', '03', '04']

function WhyChooseUsSection({ items = services, isLoading = false }) {
  const [activeItemId, setActiveItemId] = useState(null)

  useEffect(() => {
    setActiveItemId((currentActiveItemId) => {
      if (!currentActiveItemId) {
        return null
      }

      return items.some((item) => item.id === currentActiveItemId) ? currentActiveItemId : null
    })
  }, [items])

  const handleItemToggle = (itemId) => {
    setActiveItemId((currentActiveItemId) =>
      currentActiveItemId === itemId ? null : itemId
    )
  }

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

        <div className="why-choose-grid why-choose-grid--interactive reveal-stagger">
          {items.map((item, index) => {
            const fallbackItem = services.find((service) => service.id === item.id)

            return (
              <WhyChooseCard
                key={item.id}
                id={item.id}
                iconToken={iconTokens[index % iconTokens.length]}
                title={item.title}
                text={item.text}
                shortText={item.shortText || fallbackItem?.shortText || item.text}
                details={item.details || fallbackItem?.details || []}
                isActive={activeItemId === item.id}
                onToggle={() => handleItemToggle(item.id)}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
