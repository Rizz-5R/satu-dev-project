import { ArrowLeft, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function MateriHero({ animate, baseTransition, visibleState, hiddenState }) {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col justify-start pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

      {/* Kiri */}
      <div className="lg:col-span-7 flex flex-col items-start">
        <button
          onClick={() => navigate(-1)}
          className={`${baseTransition} delay-[150ms] ${animate ? visibleState : hiddenState} flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-6 group cursor-pointer`}
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
          Kembali
        </button>

        <h1
          className={`${baseTransition} delay-[250ms] ${animate ? visibleState : hiddenState} text-3xl md:text-4xl font-bold text-[#0b2240] tracking-tight mb-4`}
        >
          Materi Ulumul Hadis
        </h1>

        <p
          className={`${baseTransition} delay-[350ms] ${animate ? visibleState : hiddenState} text-slate-500 text-sm md:text-base max-w-md leading-relaxed`}
        >
          Pahami dasar-dasar ilmu hadis melalui empat pembahasan utama berikut.
        </p>
      </div>

      {/* Kanan: ilustrasi */}
      <div
        className={`lg:col-span-5 flex justify-center lg:justify-end ${baseTransition} delay-[450ms] ${animate ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}`}
      >
        <div className="relative w-full max-w-[340px] aspect-[4/3] flex items-end justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-indigo-500/10 rounded-full blur-2xl transform translate-y-4" />
          <img
            src="https://images.unsplash.com/photo-1584281723388-be8707945594?q=80&w=400&auto=format&fit=crop"
            alt="Illustration Frame"
            className="w-full h-full object-contain opacity-85 mix-blend-multiply drop-shadow-sm"
          />
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`${baseTransition} delay-[700ms] ${animate ? visibleState : hiddenState} absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2`}
      >
        <span className="text-sm font-medium text-slate-500 tracking-wide">Scroll ke bawah</span>
        <div className="flex flex-col items-center gap-0.5 animate-bounce">
          <ChevronDown className="w-5 h-5 text-blue-400" />
          <ChevronDown className="w-5 h-5 text-blue-300 -mt-2.5" />
        </div>
      </div>
    </section>
  );
}