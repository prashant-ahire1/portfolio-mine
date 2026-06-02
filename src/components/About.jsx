import { DATA } from "../data";

const stats = [
  { n: "5+", l: "Projects Built" },
  { n: "3+", l: "Frameworks" },
  { n: "2+", l: "Yrs Learning" },
  { n: "∞", l: "Curiosity" },
];

export default function About() {
  const tilt = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateZ(8px)`;
  };
  const resetTilt = (e) => { e.currentTarget.style.transform = "rotateX(0) rotateY(0) translateZ(0)"; };

  return (
    <section id="about" className="reveal" style={{ padding: "110px 32px", background: "rgba(0,255,240,0.01)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
          <div style={{ width: 3, height: 28, background: "linear-gradient(to bottom, var(--neon), var(--neon2))", borderRadius: 2 }} />
          <span style={{ color: "var(--neon)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>About Me</span>
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 5vw, 60px)", letterSpacing: "0.04em", color: "#fff", marginBottom: 56, lineHeight: 1 }}>
          The Human Behind <span className="neon-text">the Code</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
          {/* Bio card */}
          <div className="card-3d grad-border"
            style={{ background: "var(--card)", borderRadius: 20, padding: "36px 32px", cursor: "default", transformStyle: "preserve-3d" }}
            onMouseMove={tilt} onMouseLeave={resetTilt}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>⚡</div>
            <p style={{ color: "rgba(232,234,240,0.55)", fontSize: 15, lineHeight: 1.9, marginBottom: 24 }}>{DATA.about}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[`📍 ${DATA.location}`, `🎓 ${DATA.degree}`, `🏛 ${DATA.college}`, "💼 Open to Work"].map(item => (
                <span key={item} style={{ background: "rgba(0,255,240,0.06)", border: "1px solid rgba(0,255,240,0.12)", color: "rgba(232,234,240,0.5)", fontSize: 12, padding: "5px 14px", borderRadius: 100 }}>{item}</span>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {stats.map(({ n, l }, i) => {
              const colors = ["var(--neon)", "var(--neon2)", "var(--neon3)", "var(--neon)"];
              return (
                <div key={l} className="card-3d"
                  style={{ background: "var(--card)", border: `1px solid rgba(0,255,240,0.08)`, borderRadius: 16, padding: "28px 20px", textAlign: "center", cursor: "default", transformStyle: "preserve-3d" }}
                  onMouseMove={tilt} onMouseLeave={resetTilt}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 46, color: colors[i], textShadow: `0 0 20px ${colors[i]}80`, lineHeight: 1, marginBottom: 6 }}>{n}</div>
                  <div style={{ color: "rgba(232,234,240,0.35)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>{l}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
