import { useEffect, useRef } from 'react'
import Icon from './Icon'
import { services } from './serviceData'


const details = {
  'Chat with an expert': ['Our water-care team is available daily, 7am–9pm.', 'Live chat is not connected yet. Call our team or email jaiswalro@services.com.'],
  'About us': ['Jaiswalro provides doorstep RO service, repair, installation, filter replacement and AMC support across Jaipur.'],
  'Service warranty': ['45-day support on workmanship is included. Contact our team with your visit details for assistance.'],
  'Track a booking': ['Please call our care team with your booking reference to check your visit status. Online tracking is not connected yet.'],
  'Contact us': ['Email jaiswalro@services.com or call +91 9694727871.', '13/884, Deendayal Upadhyay Market, Malviya Nagar, Jaipur.'],
  'Social channels': ['Our social profile links will be available soon. You can reach us at jaiswalro@services.com.'],
  'Sitemap': ['Explore Services, Products, Water quality, Locations and frequently asked questions on this page.'],
  Services: ['RO service and maintenance in Jaipur', 'RO repair and troubleshooting', 'RO installation and uninstallation', 'Filter and membrane replacement', 'RO AMC plans and water-quality checks'],
  'Water quality': ['Book a TDS and water-purifier performance check with our Jaipur RO technicians.'],
  Locations: ['RO service across Jaipur', 'Call our team to confirm doorstep service availability in your locality.'],
  'Book a service': ['Speak to our Jaipur team to arrange your RO service.', 'Available daily, 7am–9pm.'],
}

export default function ServiceDialog({ title, onClose }) {
  const service = services.find(item => item.title === title)
  const content = service ? [service.description, service.note] : (details[title] ?? ['Please contact jaiswalro@services.com for ' + title.toLowerCase() + ' information.'])
  const dialog = useRef(null)
  useEffect(() => {
    dialog.current.showModal()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [])
  return <dialog ref={dialog} className="service-dialog" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose() }} aria-labelledby="dialog-title">
    <button className="dialog-close" aria-label="Close dialog" onClick={onClose}><Icon name="close"/></button>
    <span className="eyebrow">JAISWARLO CARE</span><h2 id="dialog-title">{title}</h2>
    <ul>{content.map(item => <li key={item}>{item}</li>)}</ul>
    <a className="button button-primary" href="tel:+919694727871">Call +91 9694727871 <Icon name="arrow" size={18}/></a>
  </dialog>
}



