import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Icon from './Icon'
import ProductBookingDialog from './ProductBookingDialog'
import BookingSuccessPopup from './BookingSuccessPopup'
import { getProduct, products } from './productData'

export default function ProductDetailsPage({ onNavigate, onProduct }) {
  const { slug } = useParams()
  const product = getProduct(slug)
  const [bookingProduct, setBookingProduct] = useState(null)
  const [successProduct, setSuccessProduct] = useState('')
  if (!product) return null
  const related = products.filter(item => item.slug !== product.slug).slice(0, 3)
  return <div className="site-shell product-details-page">
    <Helmet><title>{product.name} RO Purifier in Jaipur | Jaiswalro</title><meta name="description" content={`${product.name} RO water purifier in Jaipur for ₹${product.price}. Explore features and book installation support with Jaiswalro.`} /></Helmet>
    <Navbar onOpen={onNavigate} />
    <main>
      <section className="product-detail-hero"><div className="container"><button className="product-back" onClick={() => onNavigate('Products')}><Icon name="arrow" size={17} />All purifiers</button><div className="product-detail-grid"><div className="product-detail-image"><img src={product.image} alt={product.name} /><span>READY FOR HOME INSTALLATION</span></div><div className="product-detail-copy"><p className="product-detail-kicker">JAISWARLO RECOMMENDS</p><h1>{product.name}</h1><p className="product-detail-description">{product.description}</p><div className="product-detail-price"><span>Starting at</span><strong>₹{product.price}</strong><small>Inclusive of taxes</small></div><div className="product-detail-actions"><button className="button button-primary" onClick={() => setBookingProduct(product.name)}>Book this purifier <Icon name="arrow" size={18} /></button><a className="button button-outline" href="tel:+919694727871">Talk to an expert <Icon name="chat" size={18} /></a></div><p className="product-detail-note"><Icon name="verified" size={17} />Clear pricing · Installation support · Expert guidance</p></div></div></div></section>
      <section className="product-features page-section"><div className="container"><div className="product-feature-heading"><div><span className="eyebrow"><span />WHAT YOU GET</span><h2>Purification that fits your everyday life.</h2></div><p>Designed for reliable daily use with the water-care features your home needs.</p></div><div className="product-feature-grid">{product.features.map((feature, index) => <article key={feature}><span>0{index + 1}</span><h3>{feature}</h3><p>Built into the {product.name} for dependable, convenient water care.</p></article>)}</div></div></section>
      <section className="related-products page-section"><div className="container"><div className="related-heading"><div><span className="eyebrow"><span />EXPLORE MORE</span><h2>Related purifiers you may like.</h2></div><button className="button button-outline" onClick={() => onNavigate('Products')}>View all products <Icon name="arrow" size={17} /></button></div><div className="related-grid">{related.map(item => <article className="related-card" key={item.slug} onClick={() => onProduct(item.slug)}><div><img src={item.image} alt={item.name} loading="lazy" /></div><h3>{item.name}</h3><p>₹{item.price}</p><button onClick={event => { event.stopPropagation(); onProduct(item.slug) }}>View details <Icon name="arrow" size={16} /></button></article>)}</div></div></section>
    </main>
    <Footer onOpen={onNavigate} />
    {bookingProduct && <ProductBookingDialog product={bookingProduct} onClose={() => setBookingProduct(null)} onSuccess={() => { setSuccessProduct(bookingProduct); setBookingProduct(null) }} />}
    <BookingSuccessPopup open={Boolean(successProduct)} title="Booking request confirmed" message={`Thanks for choosing ${successProduct || 'Jaiswalro'}. Our team will contact you shortly.`} onDone={() => { setSuccessProduct(''); onNavigate('Home') }} />
  </div>
}
