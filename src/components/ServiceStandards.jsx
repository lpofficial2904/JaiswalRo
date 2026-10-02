import Icon from './Icon'
import SectionLabel from './SectionLabel'
const benefits = [
  ['receipt', 'Transparent pricing', 'Approve a clear estimate before work begins.'],
  ['verified', 'Certified technicians', 'Trained, verified and rated after every visit.'],
  ['package', 'Genuine parts', 'Brand-compatible sealed parts with invoices.'],
  ['timer', 'Fast arrival', 'Live slot visibility and technician tracking.'],
  ['shield', 'Service warranty', '45-day support on workmanship, included.'],
]
export default function ServiceStandards() {
  return <section className="standards-section page-section"><div className="container">
    <SectionLabel>TRUSTED RO TECHNICIANS IN JAIPUR</SectionLabel>
    <div className="standards-heading"><h2>Clarity at every step.<br/>Quality in every detail.</h2><p className="section-description">Get transparent RO repair and maintenance in Jaipur with clear estimates, trained technicians and a service record for your purifier.</p></div>
    <div className="benefit-grid">{benefits.map(([icon, title, description], index) => <article className={`benefit-card ${index === 1 ? 'benefit-featured' : ''}`} key={title}>
      <div className="benefit-card-top"><span className="benefit-icon"><Icon name={icon} size={24}/></span><span className="benefit-number">0{index + 1}</span></div>
      <div className="benefit-copy"><h3>{title}</h3><p>{description}</p></div>
    </article>)}</div>
    <div className="tds-banner"><strong><Icon name="scan" size={22}/>Every visit includes pre- and post-service TDS readings</strong><span>Digital service report delivered instantly</span></div>
  </div></section>
}
