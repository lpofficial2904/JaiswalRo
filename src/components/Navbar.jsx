import { useState } from "react";
import Icon from "./Icon";
import { useEffect } from "react";
import brandLogo from "../assets/jaiswalRo_logo.png";
import { motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Navbar({ onOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const location = useLocation();
  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);
  const links = [
    { label: "Home", target: "Home" },
    { label: "About Us", target: "About us" },
    { label: "Services", target: "Services" },
    { label: "Products", target: "Products" },
    { label: "Contact", target: "Contact us" },
  ];
  const activeTarget = location.pathname.startsWith('/products') ? 'Products' : location.pathname.startsWith('/services') ? 'Services' : location.pathname === '/about' ? 'About us' : location.pathname === '/contact' ? 'Contact us' : 'Home';
  return (
    <>
      <div className="announcement">
        <div className="container announcement-inner">
          <span>
            <Icon name="shield" size={15} /> Background-verified technicians ·
            45-day service warranty
          </span>
          <span>
            8Am -8Pm daily <span className="separator">·</span>{" "}
            <a href="tel:+919694727871" aria-label="Call support at +91 9694727871">Support: +91 9694727871</a>
          </span>
        </div>
      </div>
      <motion.header className="navbar" initial={reduceMotion ? false : { opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}>
        <div className="container nav-inner">
          <motion.a className="brand" href="/" aria-label="Jaiswal Technologies home" whileHover={reduceMotion ? undefined : { scale: 1.035 }} whileTap={{ scale: .98 }} onClick={event => { event.preventDefault(); onOpen('Home') }}>
            <img className="brand-logo" src={brandLogo} alt="Jaiswal Technologies" />
          </motion.a>
          <nav
            className={menuOpen ? "nav-links is-open" : "nav-links"}
            aria-label="Main navigation"
          >
            <div className="mobile-menu-header">
              <span>Menu</span>
              <button
                className="mobile-menu-close"
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <Icon name="close" />
              </button>
            </div>
            {links.map((link) => (
              <button
                key={link.label}
                className={activeTarget === link.target ? 'is-active' : undefined}
                aria-current={activeTarget === link.target ? 'page' : undefined}
                onClick={() => {
                  onOpen(link.target);
                  setMenuOpen(false);
                }}
              >
                {link.label}{activeTarget === link.target && <motion.span className="nav-active-pill" layoutId="nav-active-pill" transition={{ type: 'spring', stiffness: 380, damping: 34 }} />}
              </button>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="location" onClick={() => onOpen("Locations")}>
              <Icon name="pin" size={18} /> Jaipur
            </button>
            <button
              className="button button-primary nav-book"
              onClick={() => onOpen("Services")}
            >
              Book a service <Icon name="arrow" size={18} />
            </button>
            <button
              className="menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </motion.header>
      <button
        className={menuOpen ? "nav-backdrop is-open" : "nav-backdrop"}
        type="button"
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
