function SectionTitle({ as = 'h2', id, eyebrow, title, subtitle }) {
  const HeadingTag = as

  return (
    <header className="section-header">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <HeadingTag id={id}>{title}</HeadingTag>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  )
}

export default SectionTitle
