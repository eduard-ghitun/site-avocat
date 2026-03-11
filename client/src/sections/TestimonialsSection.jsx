import SectionTitle from '@/components/SectionTitle.jsx'
import TestimonialCard from '@/components/TestimonialCard.jsx'
import { testimonials } from '@/data/testimonials.js'

function TestimonialsSection({ items = testimonials, isLoading = false }) {
  return (
    <section
      id="testimoniale"
      className="page-section section-muted reveal-section"
      aria-labelledby="testimonials-section-title"
    >
      <div className="container">
        <SectionTitle
          id="testimonials-section-title"
          title="Testimoniale"
          subtitle="Ce spun clienții despre colaborarea cu echipa noastră."
        />
        {isLoading ? (
          <p className="section-loading">Se încarcă testimonialele...</p>
        ) : null}
        {!isLoading && items.length === 0 ? (
          <p className="section-loading">Momentan nu există testimoniale disponibile.</p>
        ) : null}
        <div className="cards-grid reveal-stagger">
          {items.map((item) => (
            <TestimonialCard
              key={item.id}
              quote={item.quote}
              author={item.author}
              role={item.role}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
