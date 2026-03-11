import dotenv from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

let isLoaded = false
let loadError = null

const resolveEnvPath = () => {
  const currentFile = fileURLToPath(import.meta.url)
  const currentDir = path.dirname(currentFile)
  return path.resolve(currentDir, '../../.env')
}

export const loadEnv = () => {
  if (isLoaded) {
    return
  }

  const envPath = resolveEnvPath()
  const result = dotenv.config({ path: envPath })
  loadError = result.error || null
  isLoaded = true

  if (loadError) {
    console.warn(`[env] .env could not be loaded from ${envPath}`)
  } else {
    console.info(`[env] .env loaded from ${envPath}`)
  }
}

export const getEnvStatus = () => ({
  emailUserLoaded: Boolean(process.env.EMAIL_USER),
  emailPassLoaded: Boolean(process.env.EMAIL_PASS),
  envLoaded: isLoaded && !loadError,
})
