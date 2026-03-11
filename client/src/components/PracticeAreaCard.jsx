function PracticeAreaCard({ title, summary, backgroundImage }) {
  const cardStyle = backgroundImage
    ? { '--practice-image': `url(${backgroundImage})` }
    : undefined

  return (
    <article
      className={`practice-area-card ${
        backgroundImage ? 'practice-area-card--image' : ''
      }`}
      style={cardStyle}
    >
      <h3>{title}</h3>
      <p>{summary}</p>
    </article>
  )
}

export default PracticeAreaCard
