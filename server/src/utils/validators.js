export const hasText = (value, minLength = 1, maxLength = 1000) => {
  if (typeof value !== 'string') {
    return false
  }

  const normalized = value.trim()

  return normalized.length >= minLength && normalized.length <= maxLength
}

export const isValidEmail = (value) => {
  if (typeof value !== 'string') {
    return false
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export const isValidPhone = (value) => {
  if (typeof value !== 'string') {
    return false
  }

  const normalized = value.replace(/\s+/g, '')

  return /^\+?[0-9\-()]{9,20}$/.test(normalized)
}
