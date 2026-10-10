import { submitForm } from './formApi'
import { apiBaseUrl } from '../apiBaseUrl'

export function sendWhatsAppForm(formType, fields) {
  return submitForm(`${apiBaseUrl}/api/forms/whatsapp`, formType, fields)
}
