import Icon from './Icon'
import brandLogo from '../assets/jaisawalRoo-logoo.png'
const columns = [
  { title: 'JAIPUR RO SERVICES', links: [['RO service', 'Services'], ['RO repair', 'Services'], ['RO filter replacement', 'Services'], ['RO installation', 'Services'], ['RO uninstallation', 'Services'], ['RO AMC plans', 'Services']] },
  { title: 'JAISWARLO', links: [['About us', 'About us'], ['How it works', 'Services'], ['Service pricing', 'Services'], ['Customer stories', 'Customer stories'], ['Careers', 'Careers']] },
]
export default function Footer({ onOpen }) {
  return <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand-block"><a className="brand" href="/" aria-label="Jaiswal Technologies home" onClick={event => { event.preventDefault(); onOpen('Home') }}><img className="footer-brand-logo" src={brandLogo} alt="Jaiswal Technologies" /></a><p>Doorstep RO service, repair, installation, filter replacement and AMC support across Jaipur.</p><span className="footer-availability"><span />Available daily · 8Am -8Pm</span></div>
      {columns.map(column => <nav className="footer-column" key={column.title} aria-label={column.title}><h3>{column.title}</h3>{column.links.map(([label, destination]) => <button key={label} onClick={() => onOpen(destination)}>{label}</button>)}</nav>)}
      <div className="footer-support"><h3>SUPPORT</h3><nav aria-label="Support links"><button onClick={() => onOpen('Contact us')}>Contact us</button></nav><div className="support-contact"><a href="tel:+919694727871"><Icon name="chat" size={16}/><span>+91 9694727871</span></a><a href="mailto:jaiswalro@services.com"><Icon name="arrow" size={16}/><span>jaiswalro@services.com</span></a><p><Icon name="pin" size={16}/><span>13/884, Deendayal Upadhyay Market, Malviya Nagar, Jaipur</span></p></div><div className="social-links" aria-label="Social links">{['instagram', 'linkedin', 'youtube'].map(name => <button key={name} aria-label={`Jaiswarlo ${name}`} onClick={() => onOpen('Social channels')}><Icon name={name} size={17}/></button>)}</div></div>
    </div><div className="footer-bottom"><span>© 2026 Jaiswalro Services.</span><nav aria-label="Legal">{['Privacy', 'Terms', 'Refund policy', 'Cancellation policy'].map(label => <button key={label} onClick={() => onOpen(label)}>{label}</button>)}</nav></div></div></footer>
}
