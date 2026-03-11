import { useState } from 'react'

function PortraitImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'Avocat',
  ...props
}) {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return (
      <div
        className={`${className} portrait-fallback`}
        role="img"
        aria-label={alt}
      >
        <span>{fallbackLabel}</span>
      </div>
    )
  }

  return <img src={src} alt={alt} className={className} onError={() => setHasError(true)} {...props} />
}

export default PortraitImage
