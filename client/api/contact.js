import nodemailer from 'nodemailer'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const parseBody = (body) => {
  if (!body) return {}
  if (typeof body === 'string') {
    try {
      return JSON.parse(body)
    } catch {
      return {}
    }
  }
  if (Buffer.isBuffer(body)) {
    try {
      return JSON.parse(body.toString('utf8'))
    } catch {
      return {}
    }
  }
  return body
}

const sendJson = (res, statusCode, payload) => {
  Object.entries(corsHeaders).forEach(([key, value]) => res.setHeader(key, value))
  return res.status(statusCode).json(payload)
}

const validate = ({ name, email, phone, message }) => {
  const errors = []
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!name?.trim()) errors.push('Numele este obligatoriu.')
  if (!email?.trim()) errors.push('Emailul este obligatoriu.')
  if (email?.trim() && !emailRegex.test(email.trim())) {
    errors.push('Adresa de email nu este validă.')
  }
  if (!phone?.trim()) errors.push('Telefonul este obligatoriu.')
  if (!message?.trim()) errors.push('Mesajul este obligatoriu.')

  return errors
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    Object.entries(corsHeaders).forEach(([key, value]) =>
      res.setHeader(key, value)
    )
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return sendJson(res, 405, {
      success: false,
      message: 'Metoda nu este permisă.',
    })
  }

  const emailUser = process.env.CONTACT_EMAIL_USER
  const emailPass = process.env.CONTACT_EMAIL_APP_PASSWORD
  const emailTo = process.env.CONTACT_EMAIL_TO

  if (!emailUser || !emailPass || !emailTo) {
    return sendJson(res, 500, {
      success: false,
      message: 'Serviciul de contact nu este configurat corect.',
    })
  }

  const body = parseBody(req.body)
  const name = body?.name?.trim?.() || ''
  const email = body?.email?.trim?.() || ''
  const phone = body?.phone?.trim?.() || ''
  const message = body?.message?.trim?.() || ''

  const validationErrors = validate({ name, email, phone, message })
  if (validationErrors.length > 0) {
    return sendJson(res, 400, {
      success: false,
      message: validationErrors[0],
    })
  }

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(phone)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${emailUser}>`,
      to: emailTo,
      replyTo: email,
      subject: `Mesaj nou de pe site - ${name}`,
      text: `Nume: ${name}
Email: ${email}
Telefon: ${phone}
Mesaj:
${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f2937;">
          <h2 style="margin:0 0 16px;">Mesaj nou de pe site</h2>
          <p style="margin:0 0 8px;"><strong>Nume:</strong> ${safeName}</p>
          <p style="margin:0 0 8px;"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin:0 0 8px;"><strong>Telefon:</strong> ${safePhone}</p>
          <p style="margin:12px 0 4px;"><strong>Mesaj:</strong></p>
          <p style="margin:0;">${safeMessage}</p>
        </div>
      `,
    })

    return sendJson(res, 200, {
      success: true,
      message: 'Mesajul a fost trimis cu succes. Veți fi contactat în curând.',
    })
  } catch (error) {
    console.error('Email send failed:', error)
    return sendJson(res, 500, {
      success: false,
      message:
        'Mesajul nu a putut fi trimis momentan. Te rugăm să încerci din nou.',
    })
  }
}
