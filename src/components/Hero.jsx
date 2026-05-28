import { useState, useEffect, useRef } from "react";
import { DATA } from "../data";
import ThreeScene from "./ThreeScene";

const roles = ["Software Engineer", "Software Testing", "AI Enthusiast", "CS Student", "Open Source Contributor"];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [blink, setBlink] = useState(true);
  const idxRef = useRef(0);
  const charRef = useRef(0);
  const delRef = useRef(false);

  useEffect(() => {
    const tick = () => {
      const cur = roles[idxRef.current];
      if (!delRef.current) {
        setTyped(cur.slice(0, charRef.current + 1));
        charRef.current++;
        if (charRef.current === cur.length) { delRef.current = true; setTimeout(tick, 1800); return; }
      } else {
        setTyped(cur.slice(0, charRef.current - 1));
        charRef.current--;
        if (charRef.current === 0) { delRef.current = false; idxRef.current = (idxRef.current + 1) % roles.length; }
      }
      setTimeout(tick, delRef.current ? 48 : 85);
    };
    const t = setTimeout(tick, 600);
    const b = setInterval(() => setBlink(v => !v), 530);
    return () => { clearTimeout(t); clearInterval(b); };
  }, []);

  return (
    <section style={{ minHeight: "96vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "60px 32px" }}>
      {/* Radial gradient bg */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,255,240,0.04) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 10% 80%, rgba(191,0,255,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", position: "relative", zIndex: 2 }}>

        {/* LEFT — Text */}
        <div>
          {/* Status badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,255,240,0.05)", border: "1px solid rgba(0,255,240,0.15)", borderRadius: 100, padding: "6px 16px", marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--neon)", boxShadow: "0 0 8px var(--neon)", display: "inline-block", animation: "pulse 2s infinite" }} />
            <span style={{ color: "var(--neon)", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Available for Hire</span>
          </div>

          {/* Glitch name */}
          <h1 className="glitch" data-text={DATA.name}
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(52px, 7vw, 90px)", letterSpacing: "0.04em", lineHeight: 0.95, color: "#fff", margin: "0 0 6px" }}>
            {DATA.name}
          </h1>

          {/* Typewriter role */}
          <div style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 300, color: "rgba(232,234,240,0.5)", marginBottom: 24, minHeight: 40, letterSpacing: "0.02em" }}>
            <span style={{ color: "var(--neon)", fontWeight: 500 }}>{typed}</span>
            <span style={{ opacity: blink ? 1 : 0, color: "var(--neon)", transition: "opacity 0.1s" }}>|</span>
          </div>

          <p style={{ color: "rgba(232,234,240,0.45)", fontSize: 16, lineHeight: 1.8, maxWidth: 480, marginBottom: 36 }}>
            {DATA.about}
          </p>

          {/* CTA row */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 44 }}>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "linear-gradient(135deg, var(--neon), var(--neon2))",
                color: "#020408", fontWeight: 700, fontSize: 13, padding: "13px 28px",
                borderRadius: 8, border: "none", cursor: "pointer",
                letterSpacing: "0.06em", textTransform: "uppercase",
                boxShadow: "0 0 25px rgba(0,255,240,0.25)",
                transition: "all 0.25s",
              }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 8px 35px rgba(0,255,240,0.4)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 0 25px rgba(0,255,240,0.25)"; }}
            >View Projects →</button>

            <a href={`mailto:${DATA.email}`}
              style={{
                background: "transparent",
                border: "1px solid rgba(0,255,240,0.25)",
                color: "rgba(232,234,240,0.7)",
                fontSize: 13, fontWeight: 500, padding: "13px 28px",
                borderRadius: 8, textDecoration: "none",
                letterSpacing: "0.06em", textTransform: "uppercase",
                transition: "all 0.25s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,255,240,0.5)"; e.currentTarget.style.color = "var(--neon)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,255,240,0.25)"; e.currentTarget.style.color = "rgba(232,234,240,0.7)"; }}
            >Get in Touch</a>
          </div>

          {/* Social row */}
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <span style={{ color: "rgba(232,234,240,0.2)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>Connect</span>
            <div style={{ height: 1, width: 28, background: "rgba(0,255,240,0.2)" }} />
            {[{ l: "GitHub", h: DATA.github }, { l: "LinkedIn", h: DATA.linkedin }, { l: "Twitter", h: DATA.twitter }].map(({ l, h }) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer"
                style={{ color: "rgba(232,234,240,0.35)", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "color 0.2s, text-shadow 0.2s" }}
                onMouseEnter={e => { e.target.style.color = "var(--neon)"; e.target.style.textShadow = "0 0 8px var(--neon)"; }}
                onMouseLeave={e => { e.target.style.color = "rgba(232,234,240,0.35)"; e.target.style.textShadow = "none"; }}
              >{l}</a>
            ))}
          </div>
        </div>

        {/* RIGHT — 3D Scene */}
        <div className="float hidden md:block" style={{ position: "relative", height: 480 }}>
          <ThreeScene />
          {/* Glow beneath */}
          <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 240, height: 40, background: "radial-gradient(ellipse, rgba(0,255,240,0.2), transparent 70%)", borderRadius: "50%", filter: "blur(10px)", pointerEvents: "none" }} />
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.35 }}>
        <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--neon)" }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--neon), transparent)" }} />
      </div>
    </section>
  );
}
