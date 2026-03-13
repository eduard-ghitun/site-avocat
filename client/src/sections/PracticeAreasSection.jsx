import { useEffect, useState } from 'react'
import PracticeAreaCard from '@/components/PracticeAreaCard.jsx'
import SectionTitle from '@/components/SectionTitle.jsx'
import { practiceAreas } from '@/data/practiceAreas.js'

function PracticeAreasSection({ items = practiceAreas, isLoading = false }) {
  const [activeAreaId, setActiveAreaId] = useState(null)

  useEffect(() => {
    setActiveAreaId((currentActiveAreaId) => {
      if (!currentActiveAreaId) {
        return null
      }

      return items.some((area) => area.id === currentActiveAreaId) ? currentActiveAreaId : null
    })
  }, [items])

  const handleAreaToggle = (areaId) => {
    setActiveAreaId((currentActiveAreaId) =>
      currentActiveAreaId === areaId ? null : areaId
    )
  }

  return (
    <section
      id="practice-areas"
      className="page-section reveal-section practice-areas-section"
      aria-labelledby="practice-areas-section-title"
    >
      <div className="practice-areas-section__overlay" aria-hidden="true" />
      <div className="container practice-areas-section__container">
        <SectionTitle
          id="practice-areas-section-title"
          title="Arii de Practică în București"
          subtitle="Asistență juridică în domenii esențiale pentru persoane fizice și companii din București."
        />
        {isLoading ? (
          <p className="section-loading">Se încarcă ariile de practică...</p>
        ) : null}
        {!isLoading && items.length === 0 ? (
          <p className="section-loading">Momentan nu există arii de practică disponibile.</p>
        ) : null}
        <div className="cards-grid practice-areas-grid reveal-stagger">
          {items.map((area) => {
            const fallbackArea = practiceAreas.find((practiceArea) => practiceArea.id === area.id)

            return (
              <PracticeAreaCard
                key={area.id}
                id={area.id}
                title={area.title}
                summary={area.summary}
                shortText={area.shortText || fallbackArea?.shortText || area.summary}
                details={area.details || fallbackArea?.details || []}
                isActive={activeAreaId === area.id}
                onToggle={() => handleAreaToggle(area.id)}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PracticeAreasSection
