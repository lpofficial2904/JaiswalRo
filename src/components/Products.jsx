import Icon from './Icon'
import { products } from './productData'
import { motion } from 'framer-motion'

export default function Products({ onView }) {
  return <section id="products" className="products-section page-section" aria-labelledby="products-heading">
    <div className="container">
      <div className="products-heading">
        <div><span className="eyebrow"><span />PURIFIERS FOR EVERY HOME</span><h2 id="products-heading">Choose your perfect RO purifier.</h2></div>
        <p className="section-description">Reliable purification options with features for daily family use. Every model is priced below ₹10,000.</p>
      </div>
      <div className="products-grid">
        {products.map((product, index) => <motion.article className="product-card" key={product.name} onClick={() => onView(product.slug)} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .5, delay: (index % 3) * .08, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -8 }}>
          <div className="product-image-wrap"><img src={product.image} alt={product.name} loading="lazy" /></div>
          <div className="product-content"><h3>{product.name}</h3><p className="product-price">₹{product.price}<span>incl. taxes</span></p>
            <ul>{product.features.map(feature => <li key={feature}><Icon name="check" size={15} />{feature}</li>)}</ul>
            <button className="button button-primary product-book" onClick={event => { event.stopPropagation(); onView(product.slug) }}>Book Now <Icon name="arrow" size={17} /></button>
          </div>
        </motion.article>)}
      </div>
    </div>
  </section>
}
