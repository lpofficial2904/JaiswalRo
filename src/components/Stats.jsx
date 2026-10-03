const stats = [
  ["48k+", "Homes served"],
  ["4.975", "Average rating"],
  ["90 min", "Typical arrival"],
  ["45 days", "Service warranty"],
  ["100%", "Genuine parts"],
];

import { motion } from 'framer-motion'
import Icon from './Icon'

export default function Stats() {
  return (
    <section className="stats" aria-label="Our service in numbers">
      <div className="container stats-inner">
        {stats.map(([value, label], index) => (
          <motion.div className="stat" key={label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .6 }} transition={{ duration: .4, delay: index * .07 }}>
            <span className="stat-icon"><Icon name={['water', 'verified', 'timer', 'shield', 'package'][index]} size={18}/></span><div><strong>{value}</strong><p>{label}</p></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
