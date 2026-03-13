import { useMemo, useState } from 'react'
import PortraitImage from '@/components/PortraitImage.jsx'
import SectionTitle from '@/components/SectionTitle.jsx'
import { contactInfo } from '@/data/contactInfo.js'
import { siteImages } from '@/data/siteImages.js'
import { submitContactForm } from '@/services/contactApi.js'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const contactIconById = {
  telefon: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8a15.8 15.8 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.7.7 4.1.7.7 0 1.3.6 1.3 1.3V21c0 .7-.6 1.3-1.3 1.3C10.8 22.3 1.7 13.2 1.7 2.3 1.7 1.6 2.3 1 3 1h4.1c.7 0 1.3.6 1.3 1.3 0 1.4.3 2.8.7 4.1.1.4 0 .9-.3 1.2l-2.2 2.2z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.3 4H3.7A2.7 2.7 0 0 0 1 6.7v10.6A2.7 2.7 0 0 0 3.7 20h16.6a2.7 2.7 0 0 0 2.7-2.7V6.7A2.7 2.7 0 0 0 20.3 4zm-.6 2L12 11.5 4.3 6h15.4zM3.7 18a.7.7 0 0 1-.7-.7V7.2l8.4 6a1 1 0 0 0 1.2 0l8.4-6v10.1a.7.7 0 0 1-.7.7H3.7z" />
    </svg>
  ),
  adresa: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.3a7.6 7.6 0 0 0-7.6 7.6c0 5.4 7.6 11.9 7.6 11.9s7.6-6.5 7.6-11.9A7.6 7.6 0 0 0 12 2.3zm0 10.3a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4z" />
    </svg>
  ),
}

const validateContactForm = (values) => {
  const errors = {}
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^\+?[0-9\-()\s]{9,20}$/

  if (values.name.trim().length < 2) {
    errors.name = 'Numele trebuie să aibă cel puțin 2 caractere.'
  }

  if (!emailRegex.test(values.email.trim())) {
    errors.email = 'Te rugăm să introduci o adresă de email validă.'
  }

  if (!phoneRegex.test(values.phone.trim())) {
    errors.phone = 'Te rugăm să introduci un număr de telefon valid.'
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Mesajul trebuie să aibă cel puțin 10 caractere.'
  }

  return errors
}

function ContactSection() {
  const [formData, setFormData] = useState(initialFormData)
  const [fieldErrors, setFieldErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitFeedback, setSubmitFeedback] = useState({
    type: 'idle',
    message: '',
  })

  const hasErrors = useMemo(() => Object.keys(fieldErrors).length > 0, [fieldErrors])
  const contactPhone = contactInfo.cards.find((item) => item.id === 'telefon')?.text
  const contactEmail = contactInfo.cards.find((item) => item.id === 'email')?.text
  const contactAddress = contactInfo.cards.find((item) => item.id === 'adresa')?.text
  const mapEmbedSrc = 'https://www.google.com/maps?q=Bucuresti&output=embed'

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isSubmitting) return
    setSubmitFeedback({ type: 'idle', message: '' })

    const validationErrors = validateContactForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors)
      return
    }

    setFieldErrors({})
    setIsSubmitting(true)

    try {
      const result = await submitContactForm({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
      })

      setSubmitFeedback({
        type: 'success',
        message: result.message,
      })
      setFormData(initialFormData)
    } catch (error) {
      const serverErrors = {}
      if (Array.isArray(error.details)) {
        error.details.forEach((detail) => {
          if (detail?.field && !serverErrors[detail.field]) {
            serverErrors[detail.field] = detail.message
          }
        })
      }

      if (Object.keys(serverErrors).length > 0) {
        setFieldErrors(serverErrors)
      }

      setSubmitFeedback({
        type: 'error',
        message:
          error.message ||
          'Mesajul nu a putut fi trimis. Te rugăm să încerci din nou.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="page-section contact-section reveal-section"
      aria-labelledby="contact-section-title"
    >
      <div className="container">
        <SectionTitle
          id="contact-section-title"
          title="Contact"
          subtitle="Cabinet de avocat în București. Programează o consultație juridică pentru evaluarea rapidă a situației tale."
        />
      </div>

      <div className="contact-map-layout">
        <div className="contact-map-stage">
          <iframe
            title="Locație Cabinet de Avocat Nechita Iulian - București"
            src={mapEmbedSrc}
            className="contact-map-iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="contact-map-overlay" aria-hidden="true" />
        </div>

        <div className="container contact-overlay-wrap">
          <article className="contact-overlay-card">
            <header className="contact-overlay-header">
              <PortraitImage
                src={siteImages.contactPortrait}
                alt="Consultatie juridica cu avocat in Bucuresti"
                className="contact-overlay-portrait"
                fallbackLabel="Nechita"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 900px) 100px, 130px"
              />
              <div>
                <p className="contact-overlay-label">Cabinet de Avocat</p>
                <h3>Nechita Iulian</h3>
                <p className="contact-overlay-subtitle">
                  Consultanță juridică și reprezentare profesională în București.
                </p>
              </div>
            </header>

            <div className="contact-overlay-grid reveal-stagger">
              <aside className="contact-overlay-info" aria-label="Date de contact">
                <p className="contact-overlay-info-title">Date de contact</p>
                <ul className="contact-overlay-list">
                  {contactPhone ? (
                    <li>
                      <span className="contact-line-icon">{contactIconById.telefon}</span>
                      <div className="contact-line-content">
                        <span>Telefon</span>
                        <a href={contactInfo.actions.phoneHref}>{contactPhone}</a>
                      </div>
                    </li>
                  ) : null}
                  {contactEmail ? (
                    <li>
                      <span className="contact-line-icon">{contactIconById.email}</span>
                      <div className="contact-line-content">
                        <span>Email</span>
                        <a href={contactInfo.actions.emailHref}>{contactEmail}</a>
                      </div>
                    </li>
                  ) : null}
                  {contactAddress ? (
                    <li>
                      <span className="contact-line-icon">{contactIconById.adresa}</span>
                      <div className="contact-line-content">
                        <span>Locație</span>
                        <strong>{contactAddress}</strong>
                      </div>
                    </li>
                  ) : null}
                </ul>
                <p className="contact-overlay-note">
                  Completează formularul și revenim în cel mai scurt timp.
                </p>
              </aside>

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-field">
                  <label htmlFor="contact-name">Nume</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Numele tău complet"
                    autoComplete="name"
                    aria-invalid={Boolean(fieldErrors.name)}
                  />
                  {fieldErrors.name ? (
                    <p className="field-error">{fieldErrors.name}</p>
                  ) : null}
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="exemplu@email.ro"
                      autoComplete="email"
                      aria-invalid={Boolean(fieldErrors.email)}
                    />
                    {fieldErrors.email ? (
                      <p className="field-error">{fieldErrors.email}</p>
                    ) : null}
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-phone">Telefon</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0753861494"
                      autoComplete="tel"
                      aria-invalid={Boolean(fieldErrors.phone)}
                    />
                    {fieldErrors.phone ? (
                      <p className="field-error">{fieldErrors.phone}</p>
                    ) : null}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">Mesaj</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descrie pe scurt situația juridică pentru care dorești consultanță."
                    aria-invalid={Boolean(fieldErrors.message)}
                  />
                  {fieldErrors.message ? (
                    <p className="field-error">{fieldErrors.message}</p>
                  ) : null}
                </div>

                <div className="contact-form-actions">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Se trimite...' : 'Trimite mesaj'}
                  </button>
                  <p className="form-hint">
                    Te contactăm în cel mai scurt timp posibil.
                  </p>
                </div>

                {submitFeedback.type !== 'idle' ? (
                  <p
                    className={`form-feedback ${
                      submitFeedback.type === 'success'
                        ? 'is-success'
                        : 'is-error'
                    }`}
                    role="status"
                  >
                    {submitFeedback.message}
                  </p>
                ) : null}

                {hasErrors && submitFeedback.type !== 'error' ? (
                  <p className="form-feedback is-error">
                    Te rugăm să corectezi câmpurile marcate.
                  </p>
                ) : null}
              </form>
            </div>
          </article>
          <p className="contact-local-seo-text">
            Oferim consultanță juridică în București, cu asistență și
            reprezentare în fața instanțelor de judecată pentru cauze civile,
            comerciale, penale și de dreptul muncii. Consultațiile sunt
            disponibile în regim programat, la cabinet sau online.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
