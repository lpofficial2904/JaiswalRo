const configuredApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim()
const productionApiBaseUrl = 'https://api.jaiswalro.services'
const isLocalApiBaseUrl = configuredApiBaseUrl
  ? /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(configuredApiBaseUrl)
  : false

export const apiBaseUrl = (
  import.meta.env.PROD && isLocalApiBaseUrl
    ? productionApiBaseUrl
    : configuredApiBaseUrl || productionApiBaseUrl
).replace(/\/+$/, '')
