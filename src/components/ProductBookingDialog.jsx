import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import { mobileFieldProps } from './formValidation'

export default function ProductBookingDialog({ product, onClose }) {
  const dialog = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  useEffect(() => { dialog.current.showModal(); const previous = document.body.style.overflow; document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = previous } }, [])
  function submit(event) { event.preventDefault(); setSubmitted(true) }
  return <dialog ref={dialog} className="service-dialog product-booking-dialog" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose() }} aria-labelledby="product-booking-title">
    <button className="dialog-close" aria-label="Close booking form" onClick={onClose}><Icon name="close" /></button>
    {submitted ? <div className="booking-success"><span className="booking-success-icon"><Icon name="check" size={28} /></span><h2 id="product-booking-title">Booking request received</h2><p>Thanks for choosing {product}. Our team will contact you shortly.</p><button className="button button-primary" onClick={onClose}>Done</button></div> : <>
      <span className="eyebrow"><span />BOOKING REQUEST</span><h2 id="product-booking-title">Book {product}</h2><p className="booking-form-intro">Share your details and we’ll contact you to confirm availability.</p>
      <form className="product-booking-form" onSubmit={submit}>
        <label>Name<input name="name" autoComplete="name" required minLength="2" placeholder="Your full name" /></label>
        <label>Phone number<input name="phone" {...mobileFieldProps} /></label>
        <label>Location<input name="location" autoComplete="address-level2" required minLength="2" placeholder="Area, city" /></label>
        <label>Message<textarea name="message" rows="3" required minLength="10" placeholder="Any question or preferred installation time?" /></label>
        <button className="button button-primary" type="submit">Send booking request <Icon name="arrow" size={18} /></button>
      </form>
    </>}
  </dialog>
}
