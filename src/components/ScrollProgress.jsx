import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 28, mass: .25 })
  if (reduceMotion) return null
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
}

