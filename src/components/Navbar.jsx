import { useState } from "react";
import Icon from "./Icon";
import { useEffect } from "react";
import brandLogo from "../assets/jaiswalRo_logo.png";

export default function Navbar({ onOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="/" aria-label="Jaiswal Technologies home" onClick={event => { event.preventDefault(); onOpen('Home') }}>
            <img className="brand-logo" src={brandLogo} alt="Jaiswal Technologies" />
          </a>
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
                onClick={() => {
                  onOpen(link.target);
                  setMenuOpen(false);
                }}
              >
                {link.label}
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
      </header>
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
