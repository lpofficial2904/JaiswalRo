export const premiumEase = [0.22, 1, 0.36, 1]
export const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: .09, delayChildren: .08 } } }
export const staggerItem = { hidden: { opacity: 0, y: 24, filter: 'blur(6px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: .58, ease: premiumEase } } }
