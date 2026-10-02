const stats = [
  ["48k+", "Homes served"],
  ["4.9 / 5", "Average rating"],
  ["90 min", "Typical arrival"],
  ["45 days", "Service warranty"],
  ["100%", "Genuine parts"],
];

import { motion } from 'framer-motion'

export default function Stats() {
  return (
    <section className="stats" aria-label="Our service in numbers">
      <div className="container stats-inner">
        {stats.map(([value, label], index) => (
          <motion.div className="stat" key={label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .6 }} transition={{ duration: .4, delay: index * .07 }}>
            <div>{value}</div>
            <p>{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
