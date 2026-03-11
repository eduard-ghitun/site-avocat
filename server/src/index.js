import { getEnvStatus, loadEnv } from './config/env.js'

loadEnv()
const envStatus = getEnvStatus()

console.info(`[env] EMAIL_USER loaded: ${envStatus.emailUserLoaded}`)
console.info(`[env] EMAIL_PASS loaded: ${envStatus.emailPassLoaded}`)

const { default: app } = await import('./app.js')

const PORT = process.env.PORT || 5050

app.listen(PORT, () => {
  console.log(`[server] Server listening on port ${PORT}`)
})
