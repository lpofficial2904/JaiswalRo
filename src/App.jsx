import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ProductDetailsPage from './components/ProductDetailsPage'
import ProductsPage from './components/ProductsPage'
import ServicesPage from './components/ServicesPage'
import ServiceDetailsPage from './components/ServiceDetailsPage'
import LegalPage from './components/LegalPage'
import FloatingContactActions from './components/FloatingContactActions'
import './App.css'

export default function App() {
  const routerNavigate = useNavigate()
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.key])
  function navigate(destination) {
    const paths = { Home: '/', Products: '/products', Services: '/services', Locations: '/contact', about: '/about', 'About us': '/about', contact: '/contact', 'Contact us': '/contact', Privacy: '/privacy-policy', Terms: '/terms-conditions', 'Refund policy': '/refund-policy', 'Cancellation policy': '/cancellation-policy' }
    if (paths[destination]) { routerNavigate(paths[destination]); return }
    routerNavigate('/')
    window.setTimeout(() => {
      const sections = { 'Water quality': 'water-quality', FAQ: 'faq' }
      if (sections[destination]) document.getElementById(sections[destination])?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }
  const showProduct = slug => routerNavigate(`/products/${slug}`)
  return <><AnimatePresence mode="wait" initial={false}><motion.div key={location.pathname} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }} transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}><Routes location={location}>
    <Route path="/" element={<><Helmet><title>RO Service in Jaipur | Repair, Installation & AMC</title><meta name="description" content="Book doorstep RO service in Jaipur for repair, installation, uninstallation, filter replacement, maintenance and AMC plans. Call Jaiswalro today." /></Helmet><HomePage onNavigate={navigate} onProduct={showProduct} /></>} />
    <Route path="/about" element={<><Helmet><title>About Jaiswalro | RO Service Experts in Jaipur</title><meta name="description" content="Jaiswalro provides dependable RO repair, service, installation, filter replacement and AMC support across Jaipur." /></Helmet><AboutPage onNavigate={navigate} /></>} />
    <Route path="/contact" element={<><Helmet><title>Contact for RO Service in Jaipur | Jaiswalro</title><meta name="description" content="Contact Jaiswalro to book RO service, repair, installation, uninstallation, filter change or an AMC plan anywhere in Jaipur." /></Helmet><ContactPage onNavigate={navigate} /></>} />
    <Route path="/products" element={<ProductsPage onNavigate={navigate} onProduct={showProduct} />} />
    <Route path="/services" element={<ServicesPage onNavigate={navigate} />} />
    <Route path="/privacy-policy" element={<LegalPage page="privacy" onNavigate={navigate} />} />
    <Route path="/terms-conditions" element={<LegalPage page="terms" onNavigate={navigate} />} />
    <Route path="/refund-policy" element={<LegalPage page="refund" onNavigate={navigate} />} />
    <Route path="/cancellation-policy" element={<LegalPage page="cancellation" onNavigate={navigate} />} />
    <Route path="/products/:slug" element={<ProductDetailsPage onNavigate={navigate} onProduct={showProduct} />} />
    <Route path="/services/:slug" element={<ServiceDetailsPage onNavigate={navigate} />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></motion.div></AnimatePresence><FloatingContactActions /></>
}
