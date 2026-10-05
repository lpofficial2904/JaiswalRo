import { useState } from 'react'
import Icon from './Icon'
import SectionLabel from './SectionLabel'
import { AnimatePresence, motion } from 'framer-motion'
import MotionReveal from './MotionReveal'
export const faqItems = [
  ['Where can I get RO service in Jaipur?', 'Jaiswalro provides doorstep RO service across Jaipur, including inspection, cleaning, TDS testing, filter care and routine maintenance.'],
  ['Do you provide RO repair at home in Jaipur?', 'Yes. Our RO technicians provide home visits in Jaipur for water leakage, low flow, pump, SMPS, taste and other water purifier repair concerns.'],
  ['Do you provide RO service in Mansarovar Jaipur?', 'Yes. We provide RO repair, servicing, installation, filter replacement and technician home visits in Mansarovar and nearby Jaipur areas.'],
  ['Do you provide RO installation and uninstallation?', 'Yes. We handle RO installation, safe uninstallation for shifting, and reinstallation at your new water point in Jaipur.'],
  ['Do you replace RO filters and membranes?', 'Yes. Our technician checks filter and membrane condition, then recommends compatible RO filter replacement only when needed.'],
  ['Do you provide RO AMC service in Jaipur?', 'Yes. Our RO AMC service in Jaipur includes scheduled maintenance, filter care and priority doorstep support, based on your purifier model.'],
  ['How can I book an RO technician in Jaipur?', 'Choose a service on the website or call our team to book an RO technician home visit in Jaipur. We will confirm availability before the visit.'],
  ['Are spare parts genuine and covered?', 'We use brand-compatible sealed parts with invoices. Your technician will explain the applicable parts warranty and estimate before work begins.'],
  ['What happens if the issue returns?', 'Our service includes 45-day support on workmanship. Contact our care team with your visit details if the same issue returns.'],
]
export default function FAQ({ onOpen }) {
  const [openIndex, setOpenIndex] = useState(0)
  return <section id="faq" className="faq-section page-section"><div className="container faq-grid"><MotionReveal className="faq-intro" direction="right"><SectionLabel>JAIPUR RO SERVICE FAQS</SectionLabel><h2>Questions,<br/>answered clearly.</h2><p className="section-description">Need help choosing RO repair, service or an AMC plan? Our Jaipur water-care team is available daily from 7am to 9pm.</p><button className="button button-outline" onClick={() => onOpen('Chat with an expert')}>Chat with an expert<Icon name="chat" size={19}/></button></MotionReveal>
    <MotionReveal className="faq-list" direction="left" delay={.1}>{faqItems.map(([question, answer], index) => <article className="faq-item" key={question}><h3><button id={`faq-question-${index}`} aria-expanded={openIndex === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpenIndex(openIndex === index ? null : index)}>{question}<motion.span aria-hidden="true" animate={{ rotate: openIndex === index ? 180 : 0 }}>{openIndex === index ? '−' : '+'}</motion.span></button></h3><AnimatePresence initial={false}>{openIndex === index && <motion.div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .28, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: 'hidden' }}><p>{answer}</p></motion.div>}</AnimatePresence></article>)}</MotionReveal>
  </div></section>
}
