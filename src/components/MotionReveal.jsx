import { motion, useReducedMotion } from 'framer-motion'
import { premiumEase } from './motionConfig'

const directions = { up: { y: 34 }, down: { y: -28 }, left: { x: 34 }, right: { x: -34 }, scale: { scale: .94, y: 12 } }
export default function MotionReveal({ as = 'div', children, className, direction = 'up', delay = 0, amount = .2, once = true, ...props }) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as] || motion.div
  const offset = directions[direction] || directions.up
  return <Component className={className} initial={reduceMotion ? false : { opacity: 0, filter: 'blur(8px)', ...offset }} whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0, scale: 1 }} viewport={{ once, amount }} transition={{ duration: reduceMotion ? 0 : .68, delay: reduceMotion ? 0 : delay, ease: premiumEase }} {...props}>{children}</Component>
}

