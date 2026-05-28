import { DATA } from "../data";

const typeConfig = {
  edu:  { color: "var(--neon)",  label: "Education", icon: "🎓" },
  work: { color: "var(--neon3)", label: "Work",      icon: "💼" },
  oss:  { color: "var(--neon2)", label: "Open Source", icon: "🌐" },
};

export default function Experience() {
  return (
    <section id="experience" className="reveal" style={{ padding: "110px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
          <div style={{ width: 3, height: 28, background: "linear-gradient(to bottom, var(--neon), var(--neon3))", borderRadius: 2 }} />
          <span style={{ color: "var(--neon)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>Experience</span>
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "0.04em", color: "#fff", marginBottom: 60, lineHeight: 1 }}>
          My <span className="neon-text">Journey</span>
        </h2>

        <div style={{ position: "relative", paddingLeft: 48 }}>
          {/* Neon line */}
          <div style={{ position: "absolute", left: 10, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, var(--neon), var(--neon2), rgba(0,255,240,0.05))" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {DATA.experience.map(({ title, org, period, type, desc }, i) => {
              const c = typeConfig[type] || typeConfig.edu;
              return (
                <div key={i} style={{ position: "relative" }}>
                  {/* Node */}
                  <div style={{
                    position: "absolute", left: -44, top: 22,
                    width: 20, height: 20, borderRadius: "50%",
                    background: c.color,
                    boxShadow: `0 0 0 4px #020408, 0 0 0 6px ${c.color}50, 0 0 20px ${c.color}60`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 9,
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#020408" }} />
                  </div>

                  <div
                    style={{
                      background: "var(--card)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: 16, padding: "26px 28px",
                      transformStyle: "preserve-3d",
                      transition: "transform 0.3s ease, border-color 0.3s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${c.color}30`; e.currentTarget.style.transform = "translateX(6px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateX(0)"; }}
                  >
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: "0.04em", color: "#e8eaf0" }}>{title}</h3>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <span style={{ background: `${c.color}12`, border: `1px solid ${c.color}25`, color: c.color, fontSize: 9, fontWeight: 800, padding: "3px 10px", borderRadius: 100, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          {c.label}
                        </span>
                        <span style={{ color: "rgba(232,234,240,0.25)", fontSize: 11, background: "rgba(255,255,255,0.04)", padding: "3px 12px", borderRadius: 100 }}>{period}</span>
                      </div>
                    </div>
                    <p style={{ color: c.color, fontSize: 13, fontWeight: 600, marginBottom: 8, letterSpacing: "0.02em" }}>{org}</p>
                    <p style={{ color: "rgba(232,234,240,0.4)", fontSize: 14, lineHeight: 1.75 }}>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
