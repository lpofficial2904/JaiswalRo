import { useState } from 'react'
import Icon from './Icon'
import SectionLabel from './SectionLabel'
import { motion, useReducedMotion } from 'framer-motion'
import MotionReveal from './MotionReveal'

export default function Coverage() {
  const reduceMotion = useReducedMotion()
  const [pin, setPin] = useState('')
  const [message, setMessage] = useState('')
  function checkAvailability(event) {
    event.preventDefault()
    setMessage(`To confirm availability for ${pin}, call +91 9694727871. Live availability is not connected yet.`)
  }
  return <section id="locations" className="coverage-section page-section"><div className="container coverage-grid">
    <MotionReveal className="coverage-copy" direction="right"><SectionLabel>RO SERVICE ACROSS JAIPUR</SectionLabel><h2>Doorstep RO service<br/>in all Jaipur areas.</h2><p className="section-description">Book RO repair and maintenance in Malviya Nagar, Mansarovar, Vaishali Nagar, Jagatpura, Pratap Nagar and other Jaipur localities.</p>
      <form className="pin-form" onSubmit={checkAvailability}><Icon name="pin"/><label className="visually-hidden" htmlFor="coverage-pin">Enter your PIN code</label><input id="coverage-pin" value={pin} onChange={event => { setPin(event.target.value.replace(/\D/g, '').slice(0, 6)); setMessage('') }} type="text" inputMode="numeric" autoComplete="postal-code" pattern="[1-9][0-9]{5}" maxLength={6} required title="Enter a valid 6-digit Indian PIN code" placeholder="Enter your PIN code"/><button className="button button-primary" type="submit">Check availability</button></form>
      <p className="availability-message" role="status">{message}</p><p className="technician-status"><span/>Jaipur doorstep service available daily</p>
    </MotionReveal>
    <MotionReveal className="coverage-map" direction="left" delay={.1} role="img" aria-label="RO service coverage across major Jaipur localities"><span className="map-caption">JAIPUR · DOORSTEP SERVICE</span><div className="map-oval">{['Vaishali Nagar','Mansarovar','Malviya Nagar','Jagatpura','Pratap Nagar'].map((city, index) => <motion.span key={city} className={`city ${['city-delhi','city-mumbai','city-hyderabad','city-bengaluru','city-chennai'][index]}`} animate={reduceMotion ? undefined : { y: [0, -5, 0] }} transition={{ duration: 2.8 + index * .25, delay: index * .18, repeat: Infinity, ease: 'easeInOut' }}>{city}</motion.span>)}</div></MotionReveal>
  </div></section>
}
