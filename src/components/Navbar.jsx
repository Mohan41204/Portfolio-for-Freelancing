import { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";

const links = [
  { href: "#home", label: "Home", sectionId: "home" },
  { href: "#skills", label: "Skills", sectionId: "skills" },
  { href: "#services", label: "Services", sectionId: "services" },
  { href: "#pricing", label: "Pricing", sectionId: "pricing" },
  { href: "#contact", label: "Contact", sectionId: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = links
        .map((link) => document.getElementById(link.sectionId))
        .filter(Boolean);

      const offset = 140;
      const currentSection = sections
        .map((section) => ({
          id: section.id,
          distance: Math.abs(section.getBoundingClientRect().top - offset),
        }))
        .sort((a, b) => a.distance - b.distance)[0];

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const close = () => setOpen(false);

  const isHeroActive = activeSection === "home";

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${isHeroActive ? "nav--hero" : "nav--section"}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__logo" onClick={close}>
          <img src={logo} alt="Team MK logo" className="nav__logo-image" />
          <span className="nav__brand-text">
            <span className="nav__brand-name">Team MK</span>
            <span className="nav__brand-role">Developer Studio</span>
          </span>
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map((l) => {
            const isActive = activeSection === l.sectionId;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => {
                  setActiveSection(l.sectionId);
                  close();
                }}
                className={`nav__link ${isActive ? "is-active" : ""}`}
              >
                <span>{l.label}</span>
              </a>
            );
          })}
          {/* <a
            href="#contact"
            className="btn btn-primary nav__cta"
            onClick={close}
          >
            Hire Me
          </a> */}
        </nav>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
