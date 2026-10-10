const requestTimeoutMs = 60000
const defaultRequestError = 'We could not send your request. Please try again.'
const serviceUnavailableError = 'Email service is temporarily unavailable. Please call us.'

export async function submitForm(path, formType, fields) {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), requestTimeoutMs)

  try {
    const response = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formType, fields }),
      signal: controller.signal,
    })

    let result = {}
    try {
      result = await response.json()
    } catch {
      // Use the normal API error message if the host returns a non-JSON response.
    }

    if (!response.ok) {
      if (response.status >= 500) {
        throw new Error(result.error || serviceUnavailableError)
      }
      throw new Error(result.error || defaultRequestError)
    }

    return result
  } catch (error) {
    if (controller.signal.aborted) {
      throw new Error('The server did not respond. Please try again or call us.')
    }
    if (error instanceof TypeError) {
      throw new Error('We could not connect to the server. Please check your internet connection and try again.')
    }
    throw error
  } finally {
    window.clearTimeout(timeout)
  }
}
