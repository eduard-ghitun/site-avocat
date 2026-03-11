export const normalizeContactPayload = (payload) => ({
  name: payload.name.trim(),
  email: payload.email.trim().toLowerCase(),
  phone: typeof payload.phone === 'string' ? payload.phone.trim() : '',
  message: payload.message.trim(),
})
