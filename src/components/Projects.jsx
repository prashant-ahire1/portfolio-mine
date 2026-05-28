import { useState } from "react";
import { DATA } from "../data";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const allTags = ["All", ...new Set(DATA.projects.flatMap(p => p.tech))];
  const filtered = filter === "All" ? DATA.projects : DATA.projects.filter(p => p.tech.includes(filter));

  const tilt = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateZ(12px)`;
    el.querySelector(".proj-glow").style.opacity = "1";
  };
  const resetTilt = (e) => {
    e.currentTarget.style.transform = "rotateX(0) rotateY(0) translateZ(0)";
    e.currentTarget.querySelector(".proj-glow").style.opacity = "0";
  };

  return (
    <section id="projects" className="reveal" style={{ padding: "110px 32px", background: "rgba(191,0,255,0.01)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
          <div style={{ width: 3, height: 28, background: "linear-gradient(to bottom, var(--neon3), var(--neon2))", borderRadius: 2 }} />
          <span style={{ color: "var(--neon3)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>Projects</span>
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "0.04em", color: "#fff", marginBottom: 36, lineHeight: 1 }}>
          Things I've <span className="neon-text" style={{ color: "var(--neon3)", textShadow: "0 0 10px var(--neon3)" }}>Shipped</span>
        </h2>

        {/* Filter */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
          {allTags.map(tag => (
            <button key={tag} onClick={() => setFilter(tag)}
              style={{
                background: filter === tag ? "var(--neon)" : "rgba(0,255,240,0.04)",
                color: filter === tag ? "#020408" : "rgba(232,234,240,0.4)",
                border: `1px solid ${filter === tag ? "var(--neon)" : "rgba(0,255,240,0.12)"}`,
                padding: "6px 18px", borderRadius: 100, fontSize: 11,
                fontWeight: 700, cursor: "pointer", letterSpacing: "0.08em",
                textTransform: "uppercase", transition: "all 0.2s",
                boxShadow: filter === tag ? "0 0 14px rgba(0,255,240,0.3)" : "none",
              }}>
              {tag}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {filtered.map(({ title, desc, tech, github, live, color, featured }) => (
            <div key={title}
              className="scanline"
              style={{
                background: "var(--card)",
                border: `1px solid ${featured ? color + "30" : "rgba(255,255,255,0.05)"}`,
                borderRadius: 18, padding: "28px 26px",
                display: "flex", flexDirection: "column", gap: 16,
                transformStyle: "preserve-3d", transition: "transform 0.35s ease, box-shadow 0.35s ease",
                cursor: "default", position: "relative", overflow: "hidden",
              }}
              onMouseMove={tilt} onMouseLeave={resetTilt}
            >
              {/* Glow on hover */}
              <div className="proj-glow" style={{
                position: "absolute", inset: 0, borderRadius: 18,
                background: `radial-gradient(ellipse at 50% 0%, ${color}15, transparent 60%)`,
                opacity: 0, transition: "opacity 0.3s", pointerEvents: "none",
              }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: `${color}15`, border: `1px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" fill="none" stroke={color} strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                {featured && (
                  <span style={{ background: `${color}15`, border: `1px solid ${color}30`, color, fontSize: 9, fontWeight: 800, padding: "3px 10px", borderRadius: 100, letterSpacing: "0.12em", textTransform: "uppercase" }}>Featured</span>
                )}
              </div>

              <div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: "0.04em", color: "#e8eaf0", marginBottom: 8 }}>{title}</h3>
                <p style={{ color: "rgba(232,234,240,0.4)", fontSize: 13, lineHeight: 1.75 }}>{desc}</p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {tech.map(t => (
                  <span key={t} style={{ background: `${color}10`, color, border: `1px solid ${color}25`, fontSize: 10, fontWeight: 600, padding: "3px 10px", borderRadius: 100, letterSpacing: "0.06em" }}>{t}</span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 16, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: "auto" }}>
                <a href={github} target="_blank" rel="noopener noreferrer"
                  style={{ color: "rgba(232,234,240,0.35)", fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 5, letterSpacing: "0.06em", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#e8eaf0"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(232,234,240,0.35)"}
                >
                  <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.1.82-.26.82-.57v-2c-3.34.73-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.68.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  Code
                </a>
                {live && live !== "#" && (
                  <a href={live} target="_blank" rel="noopener noreferrer"
                    style={{ color: "rgba(232,234,240,0.35)", fontSize: 12, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 5, letterSpacing: "0.06em", transition: "color 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = color; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(232,234,240,0.35)"; }}
                  >
                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
