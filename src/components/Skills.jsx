import { useEffect, useRef } from "react";
import { DATA } from "../data";

const colorMap = {
  Frontend: { pill: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20", head: "text-cyan-400", hover: "hover:border-cyan-400/30" },
  Tools:    { pill: "bg-indigo-400/10 text-indigo-300 border-indigo-400/20", head: "text-indigo-400", hover: "hover:border-indigo-400/30" },
  Languages:{ pill: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20", head: "text-emerald-400", hover: "hover:border-emerald-400/30" },
  Learning: { pill: "bg-amber-400/10 text-amber-300 border-amber-400/20", head: "text-amber-400", hover: "hover:border-amber-400/30" },
};

export default function Skills() {
  // const barRefs = useRef([]);

  // useEffect(() => {
  //   const obs = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         const bar = entry.target;
  //         const level = bar.dataset.level;
  //         setTimeout(() => { bar.style.width = level + "%"; }, 100);
  //         obs.unobserve(bar);
  //       }
  //     });
  //   }, { threshold: 0.2 });

  //   barRefs.current.forEach(b => b && obs.observe(b));
  //   return () => obs.disconnect();
  // }, []);

  return (
    <section id="skills" className="reveal" style={{ padding: "110px 32px" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">Skills & Tools</p>
        <h2 className="font-['Syne'] font-extrabold text-white mb-14"
          style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
          What I Work With
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DATA.skills.map(({ category, items }) => {
            const c = colorMap[category] || colorMap.Frontend;
            return (
              <div key={category}
                className={`bg-white/2 border border-white/6 ${c.hover} rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1`}>
                <h3 className={`font-['Syne'] font-bold text-sm uppercase tracking-widest mb-5 ${c.head}`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill}
                      className={`text-xs font-medium px-3 py-1 rounded-full border ${c.pill}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
