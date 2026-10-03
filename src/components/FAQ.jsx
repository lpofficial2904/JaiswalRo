import { useState } from 'react'
import Icon from './Icon'
import SectionLabel from './SectionLabel'
import { AnimatePresence, motion } from 'framer-motion'
import MotionReveal from './MotionReveal'
const questions = [
  ['Which RO services are available in Jaipur?', 'We provide RO service, repair, installation, uninstallation, filter replacement, TDS testing, membrane checks and RO AMC plans across Jaipur.'],
  ['Do you service all RO purifier brands in Jaipur?', 'We service most major domestic RO and water purifier brands. Share your brand and model with our Jaipur team to confirm parts and service support before booking.'],
  ['Are spare parts genuine and covered?', 'We use brand-compatible sealed parts with invoices. Your technician will explain the applicable parts warranty and estimate before work begins.'],
  ['What happens if the issue returns?', 'Our service includes 45-day support on workmanship. Contact our care team with your visit details if the same issue returns.'],
  ['Do you provide RO service in my Jaipur area?', 'We serve Malviya Nagar, Mansarovar, Vaishali Nagar, Jagatpura, Pratap Nagar and other Jaipur areas. Enter your PIN code or call us to confirm availability.'],
  ['When should I replace my RO filters?', 'Filter life depends on water quality and usage. Our technician checks TDS, filters and membrane condition before recommending an RO filter replacement.'],
]
export default function FAQ({ onOpen }) {
  const [openIndex, setOpenIndex] = useState(0)
  return <section id="faq" className="faq-section page-section"><div className="container faq-grid"><MotionReveal className="faq-intro" direction="right"><SectionLabel>JAIPUR RO SERVICE FAQS</SectionLabel><h2>Questions,<br/>answered clearly.</h2><p className="section-description">Need help choosing RO repair, service or an AMC plan? Our Jaipur water-care team is available daily from 7am to 9pm.</p><button className="button button-outline" onClick={() => onOpen('Chat with an expert')}>Chat with an expert<Icon name="chat" size={19}/></button></MotionReveal>
    <MotionReveal className="faq-list" direction="left" delay={.1}>{questions.map(([question, answer], index) => <article className="faq-item" key={question}><h3><button id={`faq-question-${index}`} aria-expanded={openIndex === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpenIndex(openIndex === index ? null : index)}>{question}<motion.span aria-hidden="true" animate={{ rotate: openIndex === index ? 180 : 0 }}>{openIndex === index ? '−' : '+'}</motion.span></button></h3><AnimatePresence initial={false}>{openIndex === index && <motion.div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .28, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: 'hidden' }}><p>{answer}</p></motion.div>}</AnimatePresence></article>)}</MotionReveal>
  </div></section>
}
