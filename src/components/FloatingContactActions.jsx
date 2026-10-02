import Icon from './Icon'

export default function FloatingContactActions() {
  return <div className="floating-contact-actions"><a className="floating-whatsapp" href="https://wa.me/919694727871" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp"><Icon name="whatsapp" size={23}/><span>WhatsApp</span></a><a className="floating-phone" href="tel:+919694727871" aria-label="Call Jaiswalro Services"><Icon name="phone" size={22}/><span>Call us</span></a></div>
}
