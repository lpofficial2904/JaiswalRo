import { submitForm } from './formApi'
import { apiBaseUrl } from '../apiBaseUrl'

export function sendEmailForm(formType, fields) {
  return submitForm(`${apiBaseUrl}/api/forms/email`, formType, fields)
}
