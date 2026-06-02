# 🚀 Portfolio 

A next-level, **3D immersive** portfolio that stands out from every other developer portfolio.

## ✨ What Makes This Different

| Feature | Description |
|---|---|
| 🌐 **Three.js 3D Hero** | Rotating icosahedron with wireframe, orbiting rings & floating dots |
| 🎆 **Particle System** | Interactive canvas particles that react to your mouse |
| 🖱️ **Custom Cursor** | Glowing neon cursor with lagging ring effect |
| ⚡ **Glitch Effect** | Cyberpunk-style glitch animation on your name |
| 🃏 **3D Card Tilt** | Mouse-tracking 3D perspective tilt on every card |
| 📡 **Scan Line Effect** | CRT scan line sweep on project cards |
| 📊 **Animated Skill Bars** | Progress bars that animate on scroll into view |
| 🎨 **Neon Gradient Theme** | Cyan / Purple / Pink neon on deep dark background |
| 🌊 **Scroll Reveal** | Sections fade+slide up as you scroll |
| 📱 **Fully Responsive** | Adapts perfectly to mobile & desktop |

## 🛠️ Setup

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## ✏️ How to Personalize

Open **`src/data.js`** and fill in your details:

```js
export const DATA = {
  name: "Your Name",
  email: "your.email@gmail.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  skills: [...],   // Add your skills with proficiency level
  projects: [...], // Add your projects
  experience: [...], // Education + work experience
};
```

**Add resume:** Drop `resume.pdf` in the `/public` folder.

## 🌐 Deploy Free

**Vercel (best):**
1. Push to GitHub
2. Import at vercel.com
3. Done — live link in 60 seconds!

**Netlify:**
```bash
npm run build
# Drag /dist folder to netlify.com/drop
```

## 📁 Structure

```
src/
├── components/
│   ├── ParticleCanvas.jsx  ← Interactive particle background
│   ├── ThreeScene.jsx      ← Three.js 3D model
│   ├── Navbar.jsx
│   ├── Hero.jsx            ← Glitch title + typewriter + 3D scene
│   ├── About.jsx           ← 3D tilt cards + stats
│   ├── Skills.jsx          ← Animated progress bars
│   ├── Projects.jsx        ← Filter + 3D tilt + scan line
│   ├── Experience.jsx      ← Neon timeline
│   ├── Contact.jsx         ← Email copy + social links
│   └── Footer.jsx
├── data.js    ← ✏️ Edit your details here!
├── App.jsx    ← Custom cursor + scroll reveal orchestration
├── main.jsx
└── index.css  ← All 3D effects, animations, custom cursor CSS
```

Built with ❤️ · React + Three.js + Tailwind CSS + Vite
