import express from 'express'
import healthRoutes from './routes/health.routes.js'
import contentRoutes from './routes/content.routes.js'
import contactRoutes from './routes/contact.routes.js'
import { notFoundHandler } from './middleware/not-found.middleware.js'
import { errorHandler } from './middleware/error-handler.middleware.js'

const app = express()

app.use(express.json({ limit: '1mb' }))
app.use('/api/health', healthRoutes)
app.use('/api', contentRoutes)
app.use('/api', contactRoutes)

app.use(notFoundHandler)
app.use(errorHandler)

export default app
