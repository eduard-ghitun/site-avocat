import { postJson } from './apiClient.js'

export const submitContactForm = async (payload) => {
  const response = await postJson('/api/contact', payload)

  return {
    message:
      response?.message ||
      'Mesajul a fost trimis cu succes. Veți fi contactat în curând.',
    data: response?.data || null,
  }
}
