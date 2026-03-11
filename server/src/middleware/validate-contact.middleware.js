import { hasText, isValidEmail, isValidPhone } from '../utils/validators.js'

export const validateContactPayload = (req, res, next) => {
  const { name, email, phone, message } = req.body
  const errors = []

  if (!hasText(name, 2, 120)) {
    errors.push({
      field: 'name',
      message: 'Numele este obligatoriu și trebuie să aibă între 2 și 120 caractere.',
    })
  }

  if (!isValidEmail(email)) {
    errors.push({
      field: 'email',
      message: 'Email invalid.',
    })
  }

  const hasPhone = typeof phone === 'string' && phone.trim().length > 0

  if (hasPhone && !isValidPhone(phone)) {
    errors.push({
      field: 'phone',
      message: 'Număr de telefon invalid.',
    })
  }

  if (!hasText(message, 10, 2000)) {
    errors.push({
      field: 'message',
      message: 'Mesajul trebuie să conțină între 10 și 2000 caractere.',
    })
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Datele trimise sunt invalide.',
      errors,
    })
  }

  req.contactPayload = { name, email, phone: phone || '', message }
  return next()
}
