import { getEnvStatus } from '../config/env.js'

export const getHealth = (_req, res) => {
  res.status(200).json({ status: 'ok' })
}

export const getEnvHealth = (_req, res) => {
  const status = getEnvStatus()

  res.status(200).json({
    emailUserLoaded: status.emailUserLoaded,
    emailPassLoaded: status.emailPassLoaded,
  })
}
