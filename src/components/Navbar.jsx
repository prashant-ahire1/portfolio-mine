import { useState, useEffect } from "react";
import { DATA } from "../data";

const LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    setActive(id);
  };

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrolled ? "rgba(2,4,8,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,255,240,0.08)" : "1px solid transparent",
      transition: "all 0.4s ease",
      padding: "0 32px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, letterSpacing: "0.06em", color: "var(--neon)", textShadow: "0 0 10px var(--neon), 0 0 30px rgba(0,255,240,0.3)", cursor: "default" }}>
          {DATA.name.split(" ")[0]}<span style={{ color: "#fff", textShadow: "none" }}> Ahire</span>
          
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(link => (
            <button key={link} onClick={() => go(link)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 500,
                color: active === link ? "var(--neon)" : "rgba(232,234,240,0.55)",
                letterSpacing: "0.08em", textTransform: "uppercase",
                transition: "color 0.2s",
                textShadow: active === link ? "0 0 8px var(--neon)" : "none",
              }}
              onMouseEnter={e => { e.target.style.color = "var(--neon)"; e.target.style.textShadow = "0 0 8px var(--neon)"; }}
              onMouseLeave={e => { if (active !== link) { e.target.style.color = "rgba(232,234,240,0.55)"; e.target.style.textShadow = "none"; } }}
            >{link}</button>
          ))}
          <a href={DATA.resume} download
            style={{
              background: "transparent",
              border: "1px solid rgba(0,255,240,0.4)",
              color: "var(--neon)",
              padding: "7px 20px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.2s",
              boxShadow: "0 0 10px rgba(0,255,240,0.1)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,255,240,0.1)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,240,0.25)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.boxShadow = "0 0 10px rgba(0,255,240,0.1)"; }}
          >Resume ↓</a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--neon)" }}>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "rgba(2,4,8,0.97)", borderTop: "1px solid rgba(0,255,240,0.1)", padding: "20px 32px", display: "flex", flexDirection: "column", gap: 18 }}>
          {LINKS.map(link => (
            <button key={link} onClick={() => go(link)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(232,234,240,0.7)", fontSize: 14, fontWeight: 500, textAlign: "left", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {link}
            </button>
          ))}
          <a href={DATA.resume} download style={{ color: "var(--neon)", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em" }}>Download Resume</a>
        </div>
      )}
    </nav>
  );
}
