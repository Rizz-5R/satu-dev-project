import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function DetailMateriHero({ data, animate, baseTransition, visibleState, hiddenState }) {
  const navigate = useNavigate();

  // "Definisi Ulumul Hadis" -> eyebrow: "Definisi", judul: "Ulumul Hadis"
  // Kalau mau kontrol manual, tambahkan field `eyebrow` di JSON.
  const words = data.title.trim().split(" ");
  const eyebrow = data.eyebrow ?? words[0];
  const mainTitle = data.eyebrow ? data.title : words.slice(1).join(" ") || data.title;

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className={`${baseTransition} delay-[50ms] ${animate ? visibleState : hiddenState} flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-8 group cursor-pointer`}
      >
        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
        Kembali ke Daftar Materi
      </button>

      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-6 mb-10 pb-8 border-b border-slate-100">
        <div className="flex-1">
          <div
            className={`${baseTransition} delay-[150ms] ${animate ? visibleState : hiddenState} inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${
              data.badgeColor || "bg-blue-50 text-blue-600 border-blue-100"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Pembahasan Autentik
          </div>

          <div className={`${baseTransition} delay-[200ms] ${animate ? visibleState : hiddenState} flex items-center gap-2 mb-1`}>
            <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="font-serif text-lg md:text-xl text-blue-500">{eyebrow}</span>
            <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
          </div>

          <h1 className={`${baseTransition} delay-[250ms] ${animate ? visibleState : hiddenState} text-3xl md:text-5xl font-extrabold text-[#0b2240] tracking-tight mb-4`}>
            {mainTitle}
          </h1>

          <div className={`${baseTransition} delay-[300ms] ${animate ? visibleState : hiddenState} flex items-center gap-3 w-36 mb-4`}>
            <span className="h-px flex-1 bg-slate-200" />
            <span className="w-2 h-2 rotate-45 bg-blue-500 rounded-sm" />
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <p className={`${baseTransition} delay-[350ms] ${animate ? visibleState : hiddenState} text-slate-500 text-sm md:text-base`}>
            {data.tagline}
          </p>
        </div>

        <div className={`${baseTransition} delay-[200ms] ${animate ? visibleState : hiddenState} mx-auto md:mx-0 shrink-0`}>
          <HeroIllustration />
        </div>
      </div>
    </>
  );
}

function HeroIllustration() {
  return (
    <div className="relative w-44 h-44 md:w-52 md:h-52 flex items-center justify-center">
      <div className="absolute inset-0 bg-blue-300/30 rounded-full blur-2xl" />
      <div className="absolute inset-x-6 top-0 bottom-8 bg-gradient-to-b from-white/80 to-blue-100/70 rounded-t-full border border-white" />

      <div className="relative z-10 -translate-y-3 -rotate-6">
        <div className="w-16 h-20 md:w-20 md:h-24 bg-gradient-to-br from-blue-700 to-[#0b2240] rounded-md shadow-xl flex items-center justify-center">
          <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-white/90" />
        </div>
      </div>

      <div className="absolute bottom-6 w-28 h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full shadow-md" />
      <div className="absolute bottom-3 w-36 h-3 bg-blue-200/70 rounded-full blur-[2px]" />

      <Sparkles className="absolute top-3 left-3 w-4 h-4 text-blue-300" />
      <Sparkles className="absolute bottom-16 right-2 w-3 h-3 text-blue-300" />
    </div>
  );
}