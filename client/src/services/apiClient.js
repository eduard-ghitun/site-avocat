const DEFAULT_HEADERS = {
  Accept: 'application/json',
}

const parseJsonSafely = async (response) => {
  try {
    return await response.json()
  } catch {
    return null
  }
}

const requestJson = async (path, options = {}) => {
  const response = await fetch(path, {
    ...options,
    headers: {
      ...DEFAULT_HEADERS,
      ...(options.headers || {}),
    },
  })

  const payload = await parseJsonSafely(response)

  if (!response.ok) {
    const error = new Error(
      payload?.message || `Request failed: ${response.status} ${response.statusText}`
    )
    error.status = response.status
    error.details = payload?.errors || null
    throw error
  }

  return payload
}

export const getJson = async (path, options = {}) =>
  requestJson(path, {
    method: 'GET',
    ...options,
  })

export const postJson = async (path, body, options = {}) =>
  requestJson(path, {
    method: 'POST',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    body: JSON.stringify(body),
  })
