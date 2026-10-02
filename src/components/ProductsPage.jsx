import { Helmet } from 'react-helmet-async'
import Navbar from './Navbar'
import Products from './Products'
import Footer from './Footer'

export default function ProductsPage({ onNavigate, onProduct }) {
  return <div className="site-shell products-page">
    <Helmet>
      <title>RO Water Purifiers in Jaipur | Jaiswalro</title>
      <meta name="description" content="Explore RO water purifiers for Jaipur homes, compare features and get expert installation and after-sales service from Jaiswalro." />
    </Helmet>
    <Navbar onOpen={onNavigate} />
    <main>
      <Products onView={onProduct} />
    </main>
    <Footer onOpen={onNavigate} />
  </div>
}
