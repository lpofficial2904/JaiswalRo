import Icon from './Icon'
export default function BookingBanner({ onOpen }) {
  return <section className="booking-section" aria-labelledby="booking-heading"><div className="container"><div className="booking-banner"><div><p className="booking-eyebrow">RO SERVICE AT HOME IN JAIPUR</p><h2 id="booking-heading">Book a Jaipur RO technician today.</h2><p className="booking-description">RO repair · Installation · Filter replacement · AMC plans</p></div><div className="booking-banner-actions"><button className="button button-white" onClick={() => onOpen('Services')}>Book RO service<Icon name="arrow" size={18}/></button><a href="tel:+919694727871">Or call +91 9694727871</a></div></div></div></section>
}
