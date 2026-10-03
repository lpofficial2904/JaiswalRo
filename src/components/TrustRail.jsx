import { motion, useReducedMotion } from 'framer-motion'
import Icon from './Icon'
import { premiumEase } from './motionConfig'

const promises = [
  ['verified', 'Verified specialists', 'Background-checked professionals'],
  ['receipt', 'Clear estimates', 'Approve pricing before work'],
  ['timer', 'Fast doorstep care', 'Convenient Jaipur time slots'],
  ['shield', '45-day support', 'Workmanship warranty included'],
]

export default function TrustRail() {
  const reduceMotion = useReducedMotion()
  return <section className="trust-rail" aria-label="Why Jaipur trusts Jaiswalro">
    <motion.div className="container trust-rail-inner" initial={reduceMotion ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: .55 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: .08 } } }}>
      {promises.map(([icon, title, copy], index) => <motion.article key={title} variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: .5, ease: premiumEase } } }}>
        <span className="trust-rail-icon"><Icon name={icon} size={19}/></span>
        <span><strong>{title}</strong><small>{copy}</small></span>
        {index < promises.length - 1 && <i aria-hidden="true" />}
      </motion.article>)}
    </motion.div>
  </section>
}

