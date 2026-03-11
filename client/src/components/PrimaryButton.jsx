function PrimaryButton({ children, href, type = 'button' }) {
  if (href) {
    return (
      <a className="btn btn-primary" href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className="btn btn-primary" type={type}>
      {children}
    </button>
  )
}

export default PrimaryButton
