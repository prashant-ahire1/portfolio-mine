import { DATA } from "../data";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(0,255,240,0.06)", padding: "28px 32px", textAlign: "center" }}>
      <p style={{ color: "rgba(232,234,240,0.18)", fontSize: 12, letterSpacing: "0.06em" }}>
        Designed & built by{" "}
        <span style={{ color: "var(--neon)", fontWeight: 600 }}>{DATA.name}</span>
        {" "}· {new Date().getFullYear()} 
      </p>
    </footer>
  );
}
