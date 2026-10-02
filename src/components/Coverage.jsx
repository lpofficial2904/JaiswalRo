import { useState } from 'react'
import Icon from './Icon'
import SectionLabel from './SectionLabel'

export default function Coverage() {
  const [pin, setPin] = useState('')
  const [message, setMessage] = useState('')
  function checkAvailability(event) {
    event.preventDefault()
    setMessage(`To confirm availability for ${pin}, call +91 9694727871. Live availability is not connected yet.`)
  }
  return <section id="locations" className="coverage-section page-section"><div className="container coverage-grid">
    <div className="coverage-copy"><SectionLabel>RO SERVICE ACROSS JAIPUR</SectionLabel><h2>Doorstep RO service<br/>in all Jaipur areas.</h2><p className="section-description">Book RO repair and maintenance in Malviya Nagar, Mansarovar, Vaishali Nagar, Jagatpura, Pratap Nagar and other Jaipur localities.</p>
      <form className="pin-form" onSubmit={checkAvailability}><Icon name="pin"/><label className="visually-hidden" htmlFor="coverage-pin">Enter your PIN code</label><input id="coverage-pin" value={pin} onChange={event => { setPin(event.target.value.replace(/\D/g, '').slice(0, 6)); setMessage('') }} type="text" inputMode="numeric" autoComplete="postal-code" pattern="[1-9][0-9]{5}" maxLength={6} required title="Enter a valid 6-digit Indian PIN code" placeholder="Enter your PIN code"/><button className="button button-primary" type="submit">Check availability</button></form>
      <p className="availability-message" role="status">{message}</p><p className="technician-status"><span/>Jaipur doorstep service available daily</p>
    </div>
    <div className="coverage-map" role="img" aria-label="RO service coverage across major Jaipur localities"><span className="map-caption">JAIPUR · DOORSTEP SERVICE</span><div className="map-oval"><span className="city city-delhi">Vaishali Nagar</span><span className="city city-mumbai">Mansarovar</span><span className="city city-hyderabad">Malviya Nagar</span><span className="city city-bengaluru">Jagatpura</span><span className="city city-chennai">Pratap Nagar</span></div></div>
  </div></section>
}
