import nodemailer from 'nodemailer'

const FALLBACK_RECIPIENT = 'avocat.iulian.nechita@gmail.com'

let cachedTransporter = null

const createConfigurationError = () => {
  const error = new Error('Serviciul de email nu este configurat corect.')
  error.statusCode = 500
  return error
}

const createDeliveryError = () => {
  const error = new Error(
    'Mesajul nu a putut fi trimis momentan. Te rugăm să încerci din nou.'
  )
  error.statusCode = 502
  return error
}

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')

const getEmailConfig = () => {
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  const missingVariables = []

  if (!user) {
    missingVariables.push('EMAIL_USER')
  }

  if (!pass) {
    missingVariables.push('EMAIL_PASS')
  }

  if (missingVariables.length > 0) {
    console.error(
      `[email] Missing required env variables: ${missingVariables.join(', ')}`
    )
    throw createConfigurationError()
  }

  return { user, pass }
}

const getTransporter = () => {
  if (cachedTransporter) {
    return cachedTransporter
  }

  const { user, pass } = getEmailConfig()

  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = Number(process.env.SMTP_PORT || 465)
  const secure = String(process.env.SMTP_SECURE || 'true') !== 'false'

  console.info(
    `[email] Initializing transporter host=${host} port=${port} secure=${secure}`
  )

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })

  return cachedTransporter
}

const getRecipient = () => process.env.CONTACT_RECIPIENT || FALLBACK_RECIPIENT

const formatPhone = (phone) => (phone ? phone : 'Nu a fost furnizat')

export const sendContactEmail = async ({ name, email, phone, message }) => {
  const { user: emailUser } = getEmailConfig()
  const recipient = getRecipient()

  const transporter = getTransporter()
  const subject = `Mesaj nou de pe site - ${name}`
  const textBody = [
    `Nume: ${name}`,
    `Email: ${email}`,
    `Telefon: ${formatPhone(phone)}`,
    'Mesaj:',
    message,
  ].join('\n')

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #1b2a3c; line-height: 1.6;">
      <h2 style="margin: 0 0 16px; font-size: 22px; color: #0f1b30;">
        Mesaj nou de pe site
      </h2>
      <p style="margin: 0 0 8px;"><strong>Nume:</strong> ${escapeHtml(name)}</p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin: 0 0 16px;"><strong>Telefon:</strong> ${escapeHtml(formatPhone(phone))}</p>
      <p style="margin: 0 0 8px;"><strong>Mesaj:</strong></p>
      <div style="padding: 12px 14px; background: #f5f8fc; border: 1px solid #d9e2ef; border-radius: 8px; white-space: pre-wrap;">
        ${escapeHtml(message)}
      </div>
    </div>
  `

  try {
    console.info(
      `[email] Sending contact email to=${recipient} replyTo=${email}`
    )

    const info = await transporter.sendMail({
      from: `"Website Nechita Iulian" <${emailUser}>`,
      to: recipient,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    })

    console.info(`[email] Contact email sent messageId=${info.messageId}`)

    return {
      messageId: info.messageId,
      accepted: info.accepted || [],
    }
  } catch (error) {
    console.error('[email] SMTP send error:', error)
    throw createDeliveryError()
  }
}
