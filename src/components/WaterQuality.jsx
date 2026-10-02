import Icon from './Icon'
import waterImage from '../assets/water-quality.jpg'
import SectionLabel from './SectionLabel'
export default function WaterQuality({ onOpen }) {
  return <section id="water-quality" className="water-section page-section"><div className="container water-grid">
    <div className="water-visual"><img src={waterImage} alt="Fresh drinking water in a clear glass" loading="lazy"/>
      <div className="water-report"><div className="report-heading">Water health report<span>OPTIMAL</span></div><span className="report-label">OUTPUT TDS</span><div className="report-reading">86 <small>ppm</small><span>↓ 11 ppm</span></div><div className="report-meter"/><p>Membrane health 92% · Next filter check<br/>in 74 days</p></div>
    </div>
    <div className="water-copy"><SectionLabel>WATER TESTING IN JAIPUR</SectionLabel><h2>RO service decisions backed by water data.</h2><p className="section-description">Our Jaipur RO technician checks input and output TDS, membrane performance and filter condition—so you replace only the parts your water purifier needs.</p>
      <dl className="water-facts"><div><dt>50–150 ppm</dt><dd>Ideal drinking-water TDS range</dd></div><div><dt>&lt; 10 min</dt><dd>For a complete on-site water check</dd></div><div><dt>Digital record</dt><dd>Before-and-after readings in your account</dd></div></dl>
      <button className="button button-outline" onClick={() => onOpen('Water quality')}>Explore water diagnostics<Icon name="arrow" size={18}/></button>
    </div>
  </div></section>
}

