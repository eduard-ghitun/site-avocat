function InfoCard({ title, text, children }) {
  return (
    <article className="info-card">
      <h3>{title}</h3>
      {text ? <p>{text}</p> : null}
      {children}
    </article>
  )
}

export default InfoCard
