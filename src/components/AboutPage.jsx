import Navbar from './Navbar'
import Footer from './Footer'
import Icon from './Icon'
import purifier from '../assets/about-ro-service.png'
import { motion, useReducedMotion } from 'framer-motion'
import MotionReveal from './MotionReveal'
import { staggerContainer, staggerItem } from './motionConfig'

export default function AboutPage({ onNavigate }) {
  const reduceMotion = useReducedMotion()
  return <div className="site-shell about-page">
    <Navbar onOpen={onNavigate} />
    <main>
      <section className="about-hero"><div className="container about-hero-grid"><motion.div initial={reduceMotion ? false : { opacity: 0, x: -34 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}><span className="eyebrow"><span />ABOUT JAISWARLO JAIPUR</span><h1>Local RO experts for Jaipur homes.</h1><p>Jaiswarlo provides doorstep RO service, repair, installation, uninstallation, filter replacement and annual maintenance plans across Jaipur.</p><button className="button button-primary" onClick={() => onNavigate('Services')}>Explore our services <Icon name="arrow" size={18} /></button></motion.div><motion.div className="about-product-visual" initial={reduceMotion ? false : { opacity: 0, scale: .92, x: 32 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .8, delay: .12, ease: [0.22, 1, 0.36, 1] }}><motion.img src={purifier} alt="RO technician servicing a water purifier in Jaipur" animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} /><span className="about-visual-note"><Icon name="verified" size={18} />Jaipur doorstep service</span></motion.div></div></section>
      <section className="about-story page-section"><div className="container about-story-grid"><MotionReveal direction="right"><span className="eyebrow"><span />OUR PROMISE</span><h2>Reliable water purifier service in Jaipur.</h2></MotionReveal><MotionReveal direction="left" delay={.1}><p className="about-lead">We make RO purifier care simple, from the first call to the final water-quality check.</p><p>Our technicians diagnose the issue, explain the work and test your purifier after service. Whether you need routine RO maintenance, urgent repair, a new installation or filter change in Jaipur, you receive clear guidance before work begins.</p></MotionReveal></div></section>
      <section className="about-values"><div className="container"><MotionReveal className="about-values-heading"><span className="eyebrow"><span />THE JAISWARLO WAY</span><h2>Built around trust at every visit.</h2></MotionReveal><motion.div className="about-values-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }}>{[
        ['Transparent pricing', 'Approve a clear estimate before any work begins.', 'receipt'],
        ['Skilled technicians', 'Trained professionals for RO care at your doorstep.', 'verified'],
        ['Genuine care', 'The right recommendation for your purifier and water needs.', 'water'],
        ['Service support', 'Help is available every day, from 7am to 9pm.', 'clock'],
      ].map(([title, copy, icon]) => <motion.article variants={staggerItem} whileHover={{ y: -8 }} key={title}><span><Icon name={icon} size={23} /></span><h3>{title}</h3><p>{copy}</p></motion.article>)}</motion.div></div></section>
      <section className="about-cta page-section"><div className="container"><div><span>READY WHEN YOU NEED US</span><h2>Better RO care starts with one booking.</h2></div><button className="button button-white" onClick={() => onNavigate('Services')}>Book a service <Icon name="arrow" size={18} /></button></div></section>
    </main>
    <Footer onOpen={onNavigate} />
  </div>
}
