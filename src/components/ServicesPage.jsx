import { Helmet } from 'react-helmet-async'
import Navbar from './Navbar'
import Services from './Services'
import Footer from './Footer'

export default function ServicesPage({ onNavigate }) {
  return <div className="site-shell services-page">
    <Helmet>
      <title>RO Service in Jaipur | Repair, Installation & AMC</title>
      <meta name="description" content="Book RO service in Jaipur for repair, installation, uninstallation, filter replacement, maintenance and AMC plans. Doorstep support across Jaipur." />
    </Helmet>
    <Navbar onOpen={onNavigate} />
    <main>
      <Services />
    </main>
    <Footer onOpen={onNavigate} />
  </div>
}
