import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Icon from "./Icon";
import { mobileFieldProps } from "./formValidation";
import { sendEmailForm } from "./emailForm";

export default function ContactPage({ onNavigate }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  async function submit(event) {
    event.preventDefault();
    setError("");
    setSending(true);
    try {
      await sendEmailForm(
        "contact",
        Object.fromEntries(new FormData(event.currentTarget)),
      );
      setSent(true);
    } catch (submitError) {
      setError(submitError.message || "We could not send your request. Please try again.");
    } finally {
      setSending(false);
    }
  }
  return (
    <div className="site-shell contact-page">
      <Navbar onOpen={onNavigate} />
      <main>
        <section className="contact-hero">
          <div className="container">
            <span className="eyebrow">
              <span />
              CONTACT JAISWARLO JAIPUR
            </span>
            <h1>Book RO service in Jaipur.</h1>
            <p>
              Call or message us for RO repair, installation, uninstallation,
              filter replacement, maintenance or AMC plans across Jaipur.
            </p>
          </div>
        </section>
        <section className="contact-section page-section">
          <div className="container contact-grid">
            <aside className="contact-details">
              <p className="contact-kicker">SPEAK WITH OUR TEAM</p>
              <h2>Clear answers, every day.</h2>
              <p>Our water-care team is available daily from 7am to 9pm.</p>
              <a className="contact-item" href="tel:+919694727871"/>
              <a className="contact-item" href="tel:+919694721254">

                <span>
                  <Icon name="chat" size={20} />
                </span>
                <div>
                  <small>Call us</small>
                  <strong>+91 9694727871</strong>
                  <strong>+91 9694721254</strong>
                </div>
              </a>
              <a className="contact-item" href="mailto:jaiswalroservices@gmail.com">
                <span>
                  <Icon name="arrow" size={20} />
                </span>
                <div>
                  <small>Email us</small>
                  <strong>jaiswalroservices@gmail.com</strong>
                </div>
              </a>
              <div className="contact-item">
                <span>
                  <Icon name="pin" size={20} />
                </span>
                <div>
                  <small>Visit us</small>
                  <strong>
                    13/884, Deendayal Upadhyay Market, Malviya Nagar, Jaipur
                  </strong>
                </div>
              </div>
            </aside>
            <div className="contact-form-card">
              {sent ? (
                <div className="contact-sent">
                  <span>
                    <Icon name="check" size={30} />
                  </span>
                  <h2>Message sent</h2>
                  <p>
                    Thanks for getting in touch. Our team will reply shortly.
                  </p>
                  <button
                    className="button button-primary"
                    onClick={() => setSent(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <p className="contact-kicker">SEND A MESSAGE</p>
                  <h2>How can we help?</h2>
                  <form onSubmit={submit}>
                    <label>
                      Name
                      <input
                        required
                        name="name"
                        minLength="2"
                        autoComplete="name"
                        placeholder="Your full name"
                      />
                    </label>
                    <label>
                      Phone number
                      <input name="phone" {...mobileFieldProps} />
                    </label>
                    <label>
                      Email address
                      <input
                        required
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                      />
                    </label>
                    <label>
                      Enquiry type
                      <select required name="subject" defaultValue="">
                        <option value="" disabled>
                          Select an enquiry
                        </option>
                        <option>General enquiry</option>
                        <option>Product enquiry</option>
                        <option>Service enquiry</option>
                        <option>Complaint / support</option>
                      </select>
                    </label>
                    <label>
                      Message
                      <textarea
                        required
                        name="message"
                        minLength="10"
                        rows="4"
                        placeholder="Tell us what you need help with"
                      />
                    </label>
                    <input
                      className="form-honeypot"
                      name="website"
                      tabIndex="-1"
                      autoComplete="off"
                      aria-hidden="true"
                    />
                    {error && <p className="form-error" role="alert">{error}</p>}
                    <button
                      disabled={sending}
                      className="button button-primary"
                      type="submit"
                    >
                      {sending ? "Sending..." : "Send message"}{" "}
                      {!sending && <Icon name="arrow" size={18} />}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer onOpen={onNavigate} />
    </div>
  );
}
