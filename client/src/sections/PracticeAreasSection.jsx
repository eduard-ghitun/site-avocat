import PracticeAreaCard from '@/components/PracticeAreaCard.jsx'
import SectionTitle from '@/components/SectionTitle.jsx'
import { practiceAreas } from '@/data/practiceAreas.js'

const practiceImageFallbackById = Object.fromEntries(
  practiceAreas.map((area) => [area.id, area.image])
)

function PracticeAreasSection({ items = practiceAreas, isLoading = false }) {
  return (
    <section
      id="practice-areas"
      className="page-section reveal-section"
      aria-labelledby="practice-areas-section-title"
    >
      <div className="container">
        <SectionTitle
          id="practice-areas-section-title"
          title="Arii de Practică în București"
          subtitle="Asistență juridică în domenii esențiale pentru persoane fizice și companii din București, Sector 2."
        />
        {isLoading ? (
          <p className="section-loading">Se încarcă ariile de practică...</p>
        ) : null}
        {!isLoading && items.length === 0 ? (
          <p className="section-loading">Momentan nu există arii de practică disponibile.</p>
        ) : null}
        <div className="cards-grid reveal-stagger">
          {items.map((area, index) => {
            const backgroundImage =
              area.image ||
              practiceImageFallbackById[area.id] ||
              practiceAreas[index]?.image

            return (
              <PracticeAreaCard
                key={area.id}
                title={area.title}
                summary={area.summary}
                backgroundImage={backgroundImage}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PracticeAreasSection
