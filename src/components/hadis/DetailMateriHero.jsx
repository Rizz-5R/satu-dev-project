import { ArrowLeft, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function DetailMateriHero({ data, animate, baseTransition, visibleState, hiddenState }) {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className={`${baseTransition} delay-[50ms] ${animate ? visibleState : hiddenState} flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-8 group cursor-pointer`}
      >
        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
        Kembali ke Daftar Materi
      </button>

      <div className={`${baseTransition} delay-[150ms] ${animate ? visibleState : hiddenState} mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${data.badgeColor || "bg-blue-50 text-blue-600 border-blue-100"}`}>
        <BookOpen className="w-3.5 h-3.5" />
        Pembahasan Autentik
      </div>

      <h1 className={`${baseTransition} delay-[250ms] ${animate ? visibleState : hiddenState} text-3xl md:text-5xl font-bold text-[#0b2240] tracking-tight mb-3`}>
        {data.title}
      </h1>

      <p className={`${baseTransition} delay-[350ms] ${animate ? visibleState : hiddenState} text-slate-500 text-sm md:text-base mb-10 pb-6 border-b border-slate-100`}>
        {data.tagline}
      </p>
    </>
  );
}