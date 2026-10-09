export async function sendEmailForm(formType, fields) {
  const response = await fetch('/.netlify/functions/send-booking-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ formType, fields }),
  })

  let result = {}
  try {
    result = await response.json()
  } catch {
    // Keep the friendly fallback below when the host returns a non-JSON error page.
  }

  if (!response.ok) {
    throw new Error(result.error || 'Unable to submit form.')
  }

  return result
}
