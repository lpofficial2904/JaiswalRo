import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Icon from './Icon'

export default function BookingSuccessPopup({
  open,
  title = 'Booking confirmed',
  message = 'Your request has been received. Our team will contact you shortly.',
  onDone,
}) {
  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => {
      onDone?.()
    }, 3000)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onDone])

  if (!open) return null

  return createPortal(
    <div className="booking-popup-backdrop" role="status" aria-live="polite">
      <div className="booking-popup-card">
        <span className="booking-popup-icon">
          <Icon name="check" size={34} />
        </span>
        <p className="booking-popup-kicker">REQUEST SENT</p>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="booking-popup-redirect">
          <span>Returning to home page</span>
          <strong>3s</strong>
        </div>
        <span className="booking-popup-progress" />
      </div>
    </div>,
    document.body,
  )
}
