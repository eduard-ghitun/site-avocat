const WINDOW_MS = 1 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 5

const requestsByIp = new Map()

const pruneOldRequests = (timestamps, now) =>
  timestamps.filter((timestamp) => now - timestamp <= WINDOW_MS)

export const contactRateLimit = (req, res, next) => {
  const now = Date.now()
  const ip = req.ip || req.socket?.remoteAddress || 'unknown'
  const existingTimestamps = requestsByIp.get(ip) || []
  const validTimestamps = pruneOldRequests(existingTimestamps, now)

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      success: false,
      message:
        'Ai trimis prea multe mesaje într-un interval scurt. Te rugăm să încerci din nou în câteva minute.',
    })
  }

  validTimestamps.push(now)
  requestsByIp.set(ip, validTimestamps)
  return next()
}
