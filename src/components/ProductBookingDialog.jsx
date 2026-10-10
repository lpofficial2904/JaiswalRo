import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import { mobileFieldProps, pincodeFieldProps } from './formValidation'
import { sendEmailForm } from './emailForm'

export default function ProductBookingDialog({ product, onClose, onSuccess }) {
  const dialog = useRef(null)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    dialog.current.showModal()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  async function submit(event) {
    event.preventDefault()
    setError('')
    setSending(true)
    const fields = Object.fromEntries(new FormData(event.currentTarget))
    fields.product = product

    try {
      await sendEmailForm('product', fields)
      onSuccess?.()
    } catch (submitError) {
      setError(submitError.message || 'We could not send your booking request. Please call us.')
    } finally {
      setSending(false)
    }
  }

  return (
    <dialog
      ref={dialog}
      className="service-dialog product-booking-dialog"
      onCancel={onClose}
      onClick={event => {
        if (event.target === event.currentTarget) onClose()
      }}
      aria-labelledby="product-booking-title"
    >
      <button className="dialog-close" aria-label="Close booking form" onClick={onClose}>
        <Icon name="close" />
      </button>
      <span className="eyebrow"><span />BOOKING REQUEST</span>
      <h2 id="product-booking-title">Book {product}</h2>
      <p className="booking-form-intro">Share your details and we will contact you to confirm availability.</p>
      <form className="product-booking-form" onSubmit={submit}>
        <label>Name<input name="name" autoComplete="name" required minLength="2" placeholder="Your full name" /></label>
        <label>Phone number<input name="phone" {...mobileFieldProps} /></label>
        <label>Email address (optional)<input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label>
        <label>Location<input name="location" autoComplete="address-level2" required minLength="2" placeholder="Area, city" /></label>
        <label>Pincode<input name="pincode" {...pincodeFieldProps} /></label>
        <label>Message<textarea name="message" rows="3" required minLength="10" placeholder="Any question or preferred installation time?" /></label>
        <input className="form-honeypot" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
        {error && <p className="form-error" role="alert">{error}</p>}
        <button disabled={sending} className="button button-primary" type="submit">
          {sending ? 'Sending...' : 'Send booking request'} {!sending && <Icon name="arrow" size={18} />}
        </button>
      </form>
    </dialog>
  )
}
