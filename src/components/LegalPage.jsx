import { Helmet } from 'react-helmet-async'
import Navbar from './Navbar'
import Footer from './Footer'

const contact = <p className="legal-contact">For any request, contact us at <a href="mailto:jaiswalro@services.com">jaiswalro@services.com</a>, <a href="tel:+919694727871">+91 9694727871</a>, or 13/884, Deendayal Upadhyay Market, Malviya Nagar, Jaipur.</p>

const pages = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'We value your privacy and are committed to protecting your personal information.',
    sections: [
      ['Information We Collect', ['Name, address, mobile number, and email address', 'RO model and issue details', 'Payment-related information in case of online payment']],
      ['How We Use Your Information', ['Confirming service bookings', 'Providing customer support', 'Sending invoices and service updates', 'Improving our services', 'Internal record-keeping']],
      ['Data Security', ['Your data is stored securely.', 'We do not sell or share your information with third parties, except when required by law.', 'We ensure the confidentiality of your personal data.']],
      ['Cookies', ['Cookies may be used to enhance user experience, analytics, and website performance.']],
      ['Third-Party Services', ['We may use third-party services such as payment gateways.', 'Their privacy policies apply separately.']],
    ],
    closingTitle: 'Customer Rights',
    closing: <>You may request access, update, or deletion of your personal information by contacting us.</>,
  },
  terms: {
    title: 'Terms & Conditions',
    intro: <>These Terms & Conditions govern the use of services provided by <strong>Jaiswalro Services</strong>. By booking or using our services, you agree to comply with these terms.</>,
    sections: [
      ['Services', ['We provide RO Repair, Installation, Uninstallation, and Maintenance services.', 'Service availability depends on location, technician availability, and booking slots.', 'Final service charges depend on the issue diagnosed by the technician.']],
      ['Booking & Confirmation', ['Bookings can be made via phone, website, or email.', 'Our team will contact you to confirm your appointment.', 'After on-site inspection, the technician will inform you of the final cost before starting the work.']],
      ['Pricing & Payments', ['All charges are subject to the company’s pricing policy and applicable taxes.', 'Payments can be made via Cash, UPI, Bank Transfer, or Online payment.', 'Prices for parts replacement will be informed before installation.']],
      ['Warranty', ['Repair work may come with up to 45 days service warranty, depending on the issue.', 'Warranty is applicable only to the services or parts specified at the time of service.', 'Warranty does not cover misuse, physical damage, water damage, third-party tampering, or pre-existing issues.']],
      ['Customer Responsibilities', ['Provide accurate details of the issue.', 'Ensure proper access to the appliance for the technician.', 'Ensure safeguarding of personal belongings during service.']],
      ['Liability', ['We are not liable for any indirect damages including data loss or business loss.', 'We are responsible only for damages caused due to our direct negligence.']],
      ['Policy Updates', ['The company reserves the right to update these Terms & Conditions at any time.', 'Updates will be posted on our website.']],
    ],
  },
  refund: {
    title: 'Refund Policy',
    intro: 'Our refund policy explains when a refund may be requested after a booking or service.',
    sections: [
      ['Refund Eligibility', ['Technician is unavailable after booking.', 'Advance payment made but service has not started.', 'A defective part installed by us cannot be repaired or replaced.']],
      ['Non-Refundable Cases', ['After the service is completed.', 'Visiting/Inspection charges are non-refundable.', 'Incorrect details or wrong appliance information shared by the customer.', 'Damage caused by third-party tampering or pre-existing issues.']],
      ['Refund Process', ['Refund will be processed within 5–7 working days after verification.', 'Refund will be issued to the original mode of payment.']],
    ],
  },
  cancellation: {
    title: 'Cancellation Policy',
    intro: 'This policy explains how service bookings can be cancelled or rescheduled.',
    sections: [
      ['Customer Cancellation', ['A booking can be cancelled up to 2 hours before the scheduled service time.', 'If the technician is already on the way or has reached the location, visiting charges will apply.']],
      ['Company Cancellation', ['We reserve the right to cancel the booking due to technician unavailability, incorrect address or details, weather conditions, safety concerns, or any unforeseen circumstances.', 'Customers will be notified in such cases.']],
      ['Rescheduling', ['Customers can reschedule their service once at no extra cost.', 'Additional rescheduling may involve extra charges.']],
    ],
  },
}

export default function LegalPage({ page, onNavigate }) {
  const content = pages[page]
  return <div className="site-shell legal-page"><Helmet><title>{content.title} | Jaiswalro Services</title><meta name="description" content={`${content.title} for Jaiswalro Services.`} /></Helmet><Navbar onOpen={onNavigate} /><main><section className="legal-hero"><div className="container"><span className="eyebrow"><span />JAISWALRO SERVICES</span><h1>{content.title}</h1><p>{content.intro}</p></div></section><section className="legal-content page-section"><div className="container legal-layout"><article>{content.sections.map(([heading, items]) => <section key={heading}><h2>{heading}</h2><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></section>)}{content.closingTitle && <section><h2>{content.closingTitle}</h2><p>{content.closing}</p></section>}</article><aside><h2>Contact us</h2>{contact}</aside></div></section></main><Footer onOpen={onNavigate} /></div>
}
