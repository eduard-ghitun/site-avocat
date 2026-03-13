function WhyChooseCard({
  id,
  title,
  text,
  shortText,
  details = [],
  iconToken,
  isActive = false,
  onToggle,
}) {
  const detailsId = `${id}-why-details`
  const previewText = text || shortText

  return (
    <article className={`why-choose-card ${isActive ? 'is-active' : ''}`}>
      <button
        type="button"
        className="why-choose-card__button"
        onClick={onToggle}
        aria-expanded={isActive}
        aria-controls={detailsId}
      >
        <div className="why-choose-card__top">
          <span className="why-choose-icon">{iconToken}</span>
          <span className="why-choose-card__toggle" aria-hidden="true">
            +
          </span>
        </div>

        <div className="why-choose-card__content">
          <span className="why-choose-card__eyebrow">Avantajul colaborării</span>
          <h3>{title}</h3>
          {previewText ? <p className="why-choose-card__summary">{previewText}</p> : null}

          <div
            id={detailsId}
            className="why-choose-card__details"
            aria-hidden={!isActive}
          >
            <div className="why-choose-card__details-inner">
              {shortText ? <p className="why-choose-card__description">{shortText}</p> : null}
              {details.length > 0 ? (
                <ul className="why-choose-card__list">
                  {details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </button>
    </article>
  )
}

export default WhyChooseCard
