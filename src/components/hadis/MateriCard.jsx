import { ArrowRight, BookOpen, Calendar, Globe, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import listMateri from "../../data/hadis/ListMateri.json";

const iconMap = {
  BookOpen,
  Calendar,
  Globe,
  Share2,
};

export function MateriCards({ sectionRef, sectionVisible }) {
  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-16"
    >
      {listMateri.map((materi, index) => {
        const Icon = iconMap[materi.iconName];
        return (
          <div
            key={materi.id}
            className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md group"
            style={{
              transitionProperty: "opacity, transform, filter",
              transitionDuration: "600ms",
              transitionTimingFunction: "cubic-bezier(0.21,1.02,0.43,1.01)",
              transitionDelay: `${index * 150}ms`,
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(40px)",
              filter: sectionVisible ? "blur(0px)" : "blur(4px)",
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3.5 rounded-full ${materi.iconBg}`}>
                  <Icon className={`w-6 h-6 ${materi.iconColor}`} />
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-md tracking-wide ${materi.numBg}`}>
                  {materi.id}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-lg mb-2">
                {materi.title}
              </h3>

              <div className={`w-6 h-[3px] ${materi.lineColor} rounded-full mb-4`} />

              <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-8">
                {materi.desc}
              </p>
            </div>

            <Link to={materi.link} className="mt-auto block">
              <button className="text-xs md:text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors group/btn cursor-pointer">
                Lihat Materi
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        );
      })}
    </section>
  );
}