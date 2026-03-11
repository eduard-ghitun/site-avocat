import { normalizeContactPayload } from '../services/contact.service.js'
import { sendContactEmail } from '../services/email.service.js'

export const postContact = async (req, res, next) => {
  try {
    console.info(
      `[contact] Incoming /api/contact request ip=${req.ip || 'unknown'}`
    )

    const normalizedPayload = normalizeContactPayload(req.contactPayload)
    console.info(
      `[contact] Processing message from ${normalizedPayload.email} (phone provided: ${Boolean(
        normalizedPayload.phone
      )})`
    )

    await sendContactEmail(normalizedPayload)

    res.status(201).json({
      success: true,
      message: 'Mesajul a fost trimis cu succes. Veți fi contactat în curând.',
      data: {
        receivedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error('[contact] Failed to send message:', error.message)
    next(error)
  }
}
