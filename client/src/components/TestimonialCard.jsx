function TestimonialCard({ quote, author, role }) {
  return (
    <article className="testimonial-card">
      <blockquote className="testimonial-quote">„{quote}”</blockquote>
      <div className="testimonial-meta">
        <div>
          <p className="testimonial-author">{author}</p>
          {role ? <p className="testimonial-role">{role}</p> : null}
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard
