function PracticeAreaCard({
  id,
  title,
  summary,
  shortText,
  details = [],
  backgroundImage,
  isActive = false,
  onToggle,
}) {
  const cardStyle = backgroundImage
    ? { '--practice-image': `url(${backgroundImage})` }
    : undefined
  const detailsId = `${id}-details`
  const previewText = summary || shortText

  return (
    <article
      className={`practice-area-card ${
        backgroundImage ? 'practice-area-card--image' : ''
      } ${isActive ? 'is-active' : ''}`}
      style={cardStyle}
    >
      <button
        type="button"
        className="practice-area-card__button"
        onClick={onToggle}
        aria-expanded={isActive}
        aria-controls={detailsId}
      >
        <div className="practice-area-card__header">
          <div>
            <span className="practice-area-card__eyebrow">Arie de practică</span>
            <h3>{title}</h3>
          </div>
          <span className="practice-area-card__icon" aria-hidden="true">
            +
          </span>
        </div>

        {previewText ? <p className="practice-area-card__summary">{previewText}</p> : null}

        <div
          id={detailsId}
          className="practice-area-card__details"
          aria-hidden={!isActive}
        >
          <div className="practice-area-card__details-inner">
            {shortText ? <p className="practice-area-card__description">{shortText}</p> : null}
            {details.length > 0 ? (
              <ul className="practice-area-card__list">
                {details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </button>
    </article>
  )
}

export default PracticeAreaCard
