function SecondaryButton({ children, href, type = 'button' }) {
  if (href) {
    return (
      <a className="btn btn-secondary" href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className="btn btn-secondary" type={type}>
      {children}
    </button>
  )
}

export default SecondaryButton
