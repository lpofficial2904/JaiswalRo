import Icon from './Icon'
import heroImage from '../assets/premium-ro.png'
import { motion, useReducedMotion } from 'framer-motion'

export default function Hero({ onOpen }) {
  const reduceMotion = useReducedMotion()
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } }
  return <main className="hero"><div className="container hero-grid">
    <motion.div className="hero-copy" {...reveal} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}>
      <div className="eyebrow"><span/> RO SERVICE IN JAIPUR AT YOUR DOORSTEP</div>
      <h1>Pure water.<br className="desktop-break"/> Expert care.<br className="desktop-break"/> <span>Right at home.</span></h1>
      <p className="hero-description">Jaipur's trusted RO specialists for fast repairs, genuine filter replacement, installation and worry-free maintenance.</p>
      <div className="hero-actions">
        <button className="button button-primary" onClick={() => onOpen('Services')}>Book service now <Icon name="calendar" size={18}/></button>
        <button className="button button-outline" onClick={() => onOpen('Services')}>Explore services <Icon name="arrow" size={19}/></button>
      </div>
      <div className="hero-promises" aria-label="Service benefits">
        <span><Icon name="verified" size={16}/> Verified experts</span>
        <span><Icon name="receipt" size={16}/> Upfront pricing</span>
        <span><Icon name="shield" size={16}/> 45-day warranty</span>
      </div>
      <div className="social-proof"><div className="avatars" aria-hidden="true"><span/><span/><span/><span/></div>
        <div><div className="rating"><span className="stars" aria-label="5 stars">{String.fromCharCode(9733).repeat(5)}</span><strong>4.9</strong></div><p>Trusted RO care for Jaipur households</p></div>
      </div>
    </motion.div>
    <motion.div className="hero-visual" initial={reduceMotion ? false : { opacity: 0, scale: .94, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .8, delay: .12, ease: [0.22, 1, 0.36, 1] }}><div className="hero-product-glow" aria-hidden="true"/><span className="hero-quality-tag"><Icon name="verified" size={13}/> JAIPUR RO EXPERTS</span><motion.img className="hero-image" src={heroImage} alt="RO water purifier service in Jaipur" fetchPriority="high" animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}/>
      <motion.div className="arrival-badge" initial={reduceMotion ? false : { opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .65, duration: .45 }}><span className="clock-icon"><Icon name="clock" size={20}/></span><div>Same-day arrival<small>Slots from 8 AM - 8 PM</small></div></motion.div>
      <motion.div className="hero-warranty-badge" initial={reduceMotion ? false : { opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .78, duration: .45 }}><Icon name="shield" size={18}/><span><strong>45-day</strong> service warranty</span></motion.div>
    </motion.div>
  </div></main>
}
