import { motion } from 'framer-motion'
import Icon from './Icon'

const steps = [
  ['calendar', '01', 'Book your slot', 'Choose the service and a convenient time.'],
  ['wrench', '02', 'Expert doorstep visit', 'A verified technician inspects and explains the fix.'],
  ['shield', '03', 'Relax with support', 'Get a service report and 45-day workmanship support.'],
]

export default function QuickProcess() {
  return <section className="quick-process" aria-labelledby="quick-process-title">
    <div className="container quick-process-shell">
      <div className="quick-process-intro">
        <span>HOW IT WORKS</span>
        <h2 id="quick-process-title">Expert RO care,<br />without the hassle.</h2>
        <p>From booking to clean water in three simple steps.</p>
      </div>
      <div className="quick-process-steps">
        {steps.map(([icon, number, title, copy], index) => <motion.article key={title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .48, delay: index * .1, ease: [0.22, 1, 0.36, 1] }}>
          <div className="quick-step-top"><span className="quick-step-icon"><Icon name={icon} size={21} /></span><span className="quick-step-number">{number}</span></div>
          <h3>{title}</h3>
          <p>{copy}</p>
        </motion.article>)}
      </div>
    </div>
  </section>
}
