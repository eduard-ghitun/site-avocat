import { Router } from 'express'
import {
  getBlogPosts,
  getFaqs,
  getPracticeAreas,
  getServices,
  getTestimonials,
} from '../controllers/content.controller.js'

const router = Router()

router.get('/services', getServices)
router.get('/practice-areas', getPracticeAreas)
router.get('/testimonials', getTestimonials)
router.get('/faqs', getFaqs)
router.get('/blog-posts', getBlogPosts)

export default router
