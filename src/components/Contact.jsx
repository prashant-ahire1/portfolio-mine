import { useState } from "react";
import { DATA } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(DATA.email); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  const socials = [
    { name: "GitHub", href: DATA.github, color: "var(--neon)" },
    { name: "LinkedIn", href: DATA.linkedin, color: "var(--neon2)" },

  ];

  return (
    <section id="contact" className="reveal" style={{ padding: "110px 32px 80px", background: "rgba(0,255,240,0.01)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
          <div style={{ width: 3, height: 28, background: "linear-gradient(to bottom, var(--neon), var(--neon2))", borderRadius: 2 }} />
          <span style={{ color: "var(--neon)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>Contact</span>
          <div style={{ width: 3, height: 28, background: "linear-gradient(to bottom, var(--neon2), var(--neon))", borderRadius: 2 }} />
        </div>

        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "0.04em", color: "#fff", lineHeight: 0.95, marginBottom: 20 }}>
          Let's Build the<br />
          <span className="neon-text">Future Together</span>
        </h2>
        <p style={{ color: "rgba(232,234,240,0.4)", fontSize: 15, lineHeight: 1.8, marginBottom: 52, maxWidth: 480, margin: "0 auto 52px" }}>
          Open to work, collaborations & freelance projects. If you have an idea or opportunity — let's talk.
        </p>

        {/* Email card */}
        <div className="grad-border" style={{ background: "rgba(0,255,240,0.03)", borderRadius: 18, padding: "32px 28px", marginBottom: 32 }}>
          <p style={{ color: "rgba(232,234,240,0.25)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>Reach me at</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <span className="neon-text" style={{fontSize: 20, letterSpacing: "0.12em", textTransform: "lowercase" }}>{DATA.email}</span>
            <button onClick={copy}
              style={{
                background: copied ? "rgba(52,211,153,0.12)" : "rgba(0,255,240,0.08)",
                border: `1px solid ${copied ? "rgba(52,211,153,0.3)" : "rgba(0,255,240,0.2)"}`,
                color: copied ? "#34d399" : "var(--neon)",
                fontSize: 11, fontWeight: 700, padding: "7px 16px",
                borderRadius: 8, cursor: "pointer", letterSpacing: "0.08em",
                textTransform: "uppercase", transition: "all 0.2s",
              }}
            >{copied ? "✓ Copied" : "Copy"}</button>
          </div>
        </div>

        {/* Socials */}
        <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 44 }}>
          {socials.map(({ name, href, color }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "rgba(232,234,240,0.45)",
                fontSize: 12, fontWeight: 600, padding: "10px 24px",
                borderRadius: 10, textDecoration: "none",
                letterSpacing: "0.08em", textTransform: "uppercase",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = color; e.currentTarget.style.borderColor = `${color}40`; e.currentTarget.style.background = `${color}08`; e.currentTarget.style.boxShadow = `0 0 16px ${color}25`; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(232,234,240,0.45)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
            >{name} ↗</a>
          ))}
        </div>

        {/* Resume */}
        <a href={DATA.resume} download
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, var(--neon), var(--neon2))",
            color: "#020408", fontWeight: 800, fontSize: 13, padding: "16px 40px",
            borderRadius: 12, textDecoration: "none", letterSpacing: "0.1em",
            textTransform: "uppercase",
            boxShadow: "0 0 30px rgba(0,255,240,0.3)",
            transition: "all 0.25s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,255,240,0.45)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 30px rgba(0,255,240,0.3)"; }}
        >
          ↓ Download Resume
        </a>
      </div>
    </section>
  );
}
