
import { User, Code2, FolderGit2, Briefcase, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  { id: "about", icon: User },
  { id: "skills", icon: Code2 },
  { id: "projects", icon: FolderGit2 },
  { id: "experience", icon: Briefcase },
  { id: "contact", icon: Mail },
];

export default function FloatingDock() {

  const [showDock, setShowDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      // Show only when user reaches bottom
      if (scrollTop + windowHeight >= fullHeight - 100) {
        setShowDock(true);
      } else {
        setShowDock(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`
    fixed bottom-1 left-1/2 -translate-x-1/2 z-50

    transition-all duration-500

    ${showDock
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20 pointer-events-none"
        }
  `}
    >
      <div className="mb-14 flex items-center gap-3 bg-[#08101f]/80 backdrop-blur-xl border border-cyan-400/20 rounded-2xl px-4 py-2 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
        {items.map(({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
            className="p-3 rounded-xl hover:bg-cyan-400/10 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
          >
            <Icon className="w-5 h-5 text-cyan-300" />
          </button>
        ))}
      </div>
    </div>
  );
}
