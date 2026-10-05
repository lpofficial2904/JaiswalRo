import Icon from "./Icon";
import SectionLabel from "./SectionLabel";
import { services } from "./serviceData";
import { Link } from "react-router-dom";
import serviceImage from "../assets/services/ro-service.jpg";
import repairImage from "../assets/services/ro-repair.webp";
import installImage from "../assets/services/ro-install.png";
import uninstallImage from "../assets/services/ro-uninstall.webp";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

const serviceImages = {
  service: serviceImage,
  repair: repairImage,
  installation: installImage,
  uninstallation: uninstallImage,
  "filter-replacement": repairImage,
  "amc-plan": installImage,
};

export default function Services() {
  return (
    <section id="services" className="services-section page-section">
      <div className="container">
        <SectionLabel>COMPLETE RO SERVICES IN JAIPUR</SectionLabel>
        <div className="services-heading">
          <div>
            <h2>
              Jaipur RO services,
              <br />
              made simple.
            </h2>
            <p className="section-description">
              From regular RO service and urgent water purifier repair to installation,
              uninstallation, filter change and AMC—book doorstep support across Jaipur.
            </p>
          </div>
          <p className="estimate-note">
            <Icon name="verified" />
            <span>
              Upfront estimates before any
              <br />
              work begins
            </span>
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => {
            return (
              <MotionLink
                to={`/services/${service.slug}`}
                className="service-card"
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .18 }}
                transition={{ duration: .5, delay: (index % 3) * .08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
              >
                <div className="service-image-wrap">
                  <img src={serviceImages[service.slug] ?? serviceImage} alt={`${service.title} service in Jaipur by a technician`} loading="lazy" />
                  <span className="service-kicker">{service.kicker}</span>
                  <span className="tile-icon"><Icon name={service.icon} size={20} /></span>
                </div>
                <div className="service-card-content">
                  <div className="service-card-meta"><span>0{index + 1}</span><small>Doorstep care</small></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <p className="service-note">{service.note}</p>
                  <div className="service-card-actions">
                    <span className="service-details">Details <Icon name="diagonal" size={16} /></span>
                    <span className="service-book">View plans <Icon name="arrow" size={16} /></span>
                  </div>
                </div>
              </MotionLink>
            );
          })}
        </div>
        <p className="service-swipe-hint" aria-hidden="true"><span>Swipe to explore</span><Icon name="arrow" size={16}/></p>
      </div>
    </section>
  );
}
