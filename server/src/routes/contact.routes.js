import { Router } from 'express'
import { postContact } from '../controllers/contact.controller.js'
import { contactRateLimit } from '../middleware/contact-rate-limit.middleware.js'
import { validateContactPayload } from '../middleware/validate-contact.middleware.js'

const router = Router()

router.post('/contact', contactRateLimit, validateContactPayload, postContact)

export default router
