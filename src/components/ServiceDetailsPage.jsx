import { useCallback, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Icon from "./Icon";
import { getService } from "./serviceData";
import { mobileFieldProps, pincodeFieldProps } from "./formValidation";
import serviceImage from "../assets/services/ro-service.jpg";
import repairImage from "../assets/services/ro-repair.webp";
import installImage from "../assets/services/ro-install.png";
import uninstallImage from "../assets/services/ro-uninstall.webp";
import { sendEmailForm } from "./emailForm";
import BookingSuccessPopup from "./BookingSuccessPopup";

const serviceImages = {
  service: serviceImage,
  repair: repairImage,
  installation: installImage,
  uninstallation: uninstallImage,
  "filter-replacement": repairImage,
  "amc-plan": installImage,
};

const minVisitDate = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });

export default function ServiceDetailsPage({ onNavigate }) {
  const { slug } = useParams();
  const service = getService(slug);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const goHomeAfterSuccess = useCallback(() => {
    onNavigate("Home");
  }, [onNavigate]);

  if (!service) return <Navigate to="/" replace />;

  function selectPlan(plan) {
    setSelectedPlan(plan);
    setSubmitted(false);
    setError("");
  }

  async function submitBooking(event) {
    event.preventDefault();
    setError("");
    setSending(true);
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    Object.assign(fields, { service: service.title, plan: selectedPlan.name, price: `INR ${selectedPlan.price}` });
    try { await sendEmailForm("service", fields); setSubmitted(true); }
    catch (submitError) { setError(submitError.message || "We could not send your booking request. Please call us."); }
    finally { setSending(false); }
  }

  return (
    <div className="site-shell service-details-page">
      <Helmet>
        <title>{service.title} in Jaipur | Jaiswalro</title>
        <meta
          name="description"
          content={`Book ${service.title.toLowerCase()} in Jaipur with clear pricing and doorstep water purifier support from Jaiswalro.`}
        />
      </Helmet>
      <Navbar onOpen={onNavigate} />
      <main>
        <section className="service-detail-hero">
          <div className="container">
            <button
              className="product-back"
              onClick={() => onNavigate("Services")}
            >
              <Icon name="arrow" size={17} />
              All services
            </button>
            <div className="service-detail-grid">
              <div className="service-detail-image">
                <img
                  src={serviceImages[service.slug]}
                  alt={`${service.title} in Jaipur by a Jaiswalro technician`}
                />
                <span className="service-detail-image-tag">
                  <Icon name={service.icon} size={16} />
                  {service.kicker}
                </span>
              </div>
              <div className="service-detail-copy">
                <p className="product-detail-kicker">JAIPUR RO SERVICE AT HOME</p>
                <h1>{service.title}</h1>
                <p className="product-detail-description">
                  {service.description} Book a doorstep visit with clear upfront pricing.
                </p>
                <p className="service-detail-promise">
                  <Icon name="verified" size={18} />
                  Clear estimate before work begins · 45-day workmanship support
                </p>
                <button
                  className="button button-primary"
                  onClick={() =>
                    document
                      .getElementById("service-plans")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View service <Icon name="arrow" size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="service-plans"
          className="service-plans-section page-section"
          aria-labelledby="service-plans-heading"
        >
          <div className="container">
            <div className="service-plans-heading">
              <span className="eyebrow">
                <span />
                {service.slug === "amc-plan" ? "ANNUAL MAINTENANCE PLAN" : "ONE-TIME SERVICE PLANS"}
              </span>
              <h2 id="service-plans-heading">
                Book {service.title.toLowerCase()} in Jaipur.
              </h2>
              <p>
                Select the service plan, then share your details below. Our team
                will confirm your Jaipur service visit before arriving.
              </p>
            </div>
            <div className="service-plans-grid" role="group" aria-label={`${service.title} plans`}>
              {service.plans.map((plan) => {
                const isSelected = selectedPlan?.name === plan.name;
                return (
                  <button
                    type="button"
                    className={`service-plan-option${plan.popular ? " is-popular" : ""}${isSelected ? " is-selected" : ""}`}
                    key={plan.name}
                    aria-pressed={isSelected}
                    onClick={() => selectPlan(plan)}
                  >
                    {plan.popular && (
                      <span className="service-plan-badge">MOST CHOSEN</span>
                    )}
                    <span className="service-plan-title">{plan.name}</span>
                    <span className="service-plan-subtitle">{plan.subtitle}</span>
                    <span className="service-plan-price">
                      ₹{plan.price}
                      <small> / {plan.unit ?? 'visit'}</small>
                    </span>
                    <span className="service-plan-divider" />
                    <span className="service-plan-features">
                      {plan.features.map((feature, index) => (
                        <span key={`${feature}-${index}`}>
                          <Icon name="check" size={15} />
                          {feature}
                        </span>
                      ))}
                    </span>
                    <span className="service-plan-select">
                      {isSelected ? (
                        <>
                          <Icon name="check" size={15} /> Selected
                        </>
                      ) : (
                        "Book now"
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
            {selectedPlan && !submitted && (
              <section className="service-booking-form-card" aria-live="polite">
                {submitted ? (
                  <div className="booking-success">
                    <span className="booking-success-icon"><Icon name="check" size={28} /></span>
                    <h3>Booking request received</h3>
                    <p>Thanks for choosing {selectedPlan.name}. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <>
                    <div className="service-booking-form-heading">
                      <div><span className="eyebrow"><span />CLIENT DETAILS</span><h3>Complete your booking</h3></div>
                      <p>{selectedPlan.name} · ₹{selectedPlan.price}</p>
                    </div>
                    <form className="service-booking-form" onSubmit={submitBooking}>
                      <label>Name<input name="name" autoComplete="name" required minLength="2" placeholder="Your full name" /></label>
                      <label>Mobile number<input name="mobile" {...mobileFieldProps} /></label>
                      <label className="service-form-full">Full address<textarea name="fullAddress" autoComplete="street-address" required minLength="8" rows="3" placeholder="House / flat, street, area, landmark" /></label>
                      <label>Pincode<input name="pincode" {...pincodeFieldProps} /></label>
                      <label>Preferred visit date<input name="preferredDate" type="date" min={minVisitDate} required /></label>
                      <label className="service-form-full">RO problem / notes<textarea name="problem" rows="3" required minLength="5" placeholder="RO issue, brand or any special instructions" /></label>
                      <input className="form-honeypot" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
                      {error && <p className="form-error" role="alert">{error}</p>}
                      <button disabled={sending} className="button button-primary service-form-full" type="submit">{sending ? 'Sending...' : 'Confirm booking'} {!sending && <Icon name="arrow" size={18} />}</button>
                    </form>
                  </>
                )}
              </section>
            )}
          </div>
        </section>
      </main>
      <Footer onOpen={onNavigate} />
      <BookingSuccessPopup
        open={submitted}
        title="Booking request confirmed"
        message={`Thanks for choosing ${selectedPlan?.name ?? "Jaiswalro"}. Our team will contact you shortly.`}
        onDone={goHomeAfterSuccess}
      />
    </div>
  );
}
