import InfoCard from '@/components/InfoCard.jsx'
import SecondaryButton from '@/components/SecondaryButton.jsx'
import SectionTitle from '@/components/SectionTitle.jsx'
import { blogPosts } from '@/data/blogPosts.js'

function BlogPreviewSection({ items = blogPosts, isLoading = false }) {
  return (
    <section
      id="blog"
      className="page-section section-muted reveal-section"
      aria-labelledby="blog-section-title"
    >
      <div className="container">
        <SectionTitle
          id="blog-section-title"
          title="Blog Juridic"
          subtitle="Articole utile pentru înțelegerea modificărilor legislative."
        />
        {isLoading ? (
          <p className="section-loading">Se încarcă articolele...</p>
        ) : null}
        {!isLoading && items.length === 0 ? (
          <p className="section-loading">Momentan nu există articole disponibile.</p>
        ) : null}
        <div className="cards-grid reveal-stagger">
          {items.map((post) => (
            <InfoCard
              key={post.id}
              title={post.title}
              text={`${post.excerpt} (${post.category})`}
            />
          ))}
        </div>
        <div className="section-actions">
          <SecondaryButton href="#">Vezi toate articolele</SecondaryButton>
        </div>
      </div>
    </section>
  )
}

export default BlogPreviewSection
