import { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Stats from './Stats'
import QuickProcess from './QuickProcess'
import Services from './Services'
import Coverage from './Coverage'
import ServiceStandards from './ServiceStandards'
import Products from './Products'
import WaterQuality from './WaterQuality'
import ServiceDialog from './ServiceDialog'
import FAQ from './FAQ'
import BookingBanner from './BookingBanner'
import Footer from './Footer'

export default function HomePage({ onNavigate, onProduct }) {
  const [activeDialog, setActiveDialog] = useState(null)
  function navigate(title) {
    if (title === 'About us') { onNavigate('about'); return }
    if (title === 'Contact us') { onNavigate('contact'); return }
    if (title === 'Services') { onNavigate('Services'); return }
    if (title === 'Home') {
      window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
      return
    }
    const sections = { Products: 'products', 'Water quality': 'water-quality', FAQ: 'faq' }
    if (sections[title]) {
      document.getElementById(sections[title])?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    } else setActiveDialog(title)
  }
  return <div className="site-shell">
    <Navbar onOpen={navigate}/>
    <Hero onOpen={navigate}/>
    <Stats/>
    <QuickProcess/>
    <Services/>
    <Coverage/>
    <ServiceStandards/>
    <Products onView={onProduct}/>
    <WaterQuality onOpen={setActiveDialog}/>
    <FAQ onOpen={setActiveDialog}/>
    <BookingBanner onOpen={setActiveDialog}/>
    <Footer onOpen={navigate}/>
    {activeDialog && <ServiceDialog title={activeDialog} onClose={() => setActiveDialog(null)}/>}
  </div>
}
