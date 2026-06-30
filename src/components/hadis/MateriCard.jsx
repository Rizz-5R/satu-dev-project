import { ArrowRight, BookOpen, Calendar, Globe, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import listMateri from "../../data/hadis/ListMateri.json";

const iconMap = { BookOpen, Calendar, Globe, Share2 };

const accentColors = [
  { border: "#3B82F6", numBg: "bg-blue-100 text-blue-700", hoverGradient: "linear-gradient(135deg, #EFF6FF 0%, #EEF2FF 100%)" },
  { border: "#6366F1", numBg: "bg-indigo-100 text-indigo-700", hoverGradient: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)" },
  { border: "#8B5CF6", numBg: "bg-violet-100 text-violet-700", hoverGradient: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)" },
  { border: "#60A5FA", numBg: "bg-sky-100 text-sky-700", hoverGradient: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)" },
];

function AnimatedCard({ materi, index, accent }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  const Icon = iconMap[materi.iconName];

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl px-5 cursor-pointer overflow-hidden"
      style={{
        borderLeft: `4px solid ${accent.border}`,
        background: hovered ? accent.hoverGradient : "white",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        filter: visible ? "blur(0px)" : "blur(3px)",
        transition: `opacity 0.65s ease, transform 0.65s cubic-bezier(0.21,1.02,0.43,1.01), filter 0.65s ease, background 0.4s ease, box-shadow 0.4s ease`,
        boxShadow: hovered
          ? "0 8px 28px rgba(99,102,241,0.12), 0 2px 8px rgba(59,130,246,0.08)"
          : "0 1px 4px rgba(0,0,0,0.05)",
      }}
    >
      <div className="block md:hidden py-5">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2.5 rounded-xl ${materi.iconBg} shrink-0`}>
            <Icon className={`w-4 h-4 ${materi.iconColor}`} />
          </div>
          <h3 className="font-bold text-slate-900 text-base flex-1">{materi.title}</h3>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-lg ${accent.numBg}`}>
            {materi.id}
          </span>
        </div>
        <p className="text-sm text-slate-500 leading-relaxed mb-4">{materi.desc}</p>
        <Link to={materi.link}>
          <button className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer">
            Lihat Materi <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
      <div className="hidden md:block">
        <div
          className="flex items-center gap-4"
          style={{
            paddingTop: hovered ? "1.25rem" : "1rem",
            paddingBottom: hovered ? "0" : "1rem",
            transition: "padding 400ms cubic-bezier(0.21,1.02,0.43,1.01)",
          }}
        >
          <div
            className={`p-2.5 rounded-xl ${materi.iconBg} shrink-0`}
            style={{
              transform: hovered ? "scale(1.12)" : "scale(1)",
              transition: "transform 300ms cubic-bezier(0.21,1.02,0.43,1.01)",
            }}
          >
            <Icon className={`w-4 h-4 ${materi.iconColor}`} />
          </div>
          <h3 className="font-bold text-slate-900 text-base flex-1">{materi.title}</h3>
          <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${accent.numBg} shrink-0`}>
            {materi.id}
          </span>
          <ArrowRight
            className="w-4 h-4 shrink-0"
            style={{
              color: hovered ? accent.border : "#cbd5e1",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 300ms ease, color 300ms ease",
            }}
          />
        </div>
        <div
          style={{
            maxHeight: hovered ? "100px" : "0px",
            opacity: hovered ? 1 : 0,
            overflow: "hidden",
            paddingBottom: hovered ? "1.25rem" : "0",
            transition: "max-height 400ms cubic-bezier(0.21,1.02,0.43,1.01), opacity 250ms ease, padding 400ms ease",
          }}
        >
          <p className="text-sm text-slate-500 leading-relaxed mb-3 pl-12">{materi.desc}</p>
          <div className="pl-12">
            <Link to={materi.link}>
              <button
                className="flex items-center gap-1.5 text-sm font-bold transition-colors cursor-pointer"
                style={{ color: accent.border }}
              >
                Lihat Materi <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MateriCards() {
  const [labelVisible, setLabelVisible] = useState(false);
  const labelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setLabelVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (labelRef.current) observer.observe(labelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col gap-3 pb-8">
      <p
        ref={labelRef}
        className="text-xs font-bold uppercase tracking-widest mb-1"
        style={{
          opacity: labelVisible ? 1 : 0,
          transform: labelVisible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
          background: "linear-gradient(90deg, #3B82F6, #6366F1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        4 Pembahasan Utama
      </p>

      {listMateri.map((materi, index) => (
        <AnimatedCard
          key={materi.id}
          materi={materi}
          index={index}
          accent={accentColors[index % accentColors.length]}
        />
      ))}
    </section>
  );
}