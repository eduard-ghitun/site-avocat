import { Router } from 'express'
import { getEnvHealth, getHealth } from '../controllers/health.controller.js'

const router = Router()

router.get('/', getHealth)
router.get('/env', getEnvHealth)

export default router
