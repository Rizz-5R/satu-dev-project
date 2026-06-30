import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function MateriHero({ animate, baseTransition, visibleState, hiddenState }) {
  const navigate = useNavigate();

  return (
    <section className="relative flex grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-12 pb-6">
      <div
        className="absolute -top-10 -right-10 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, #BFDBFE 0%, #E0E7FF 40%, transparent 70%)",
          opacity: animate ? 0.6 : 0,
          transition: "opacity 1.8s ease",
        }}
      />
      <div
        className="absolute top-20 -left-10 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #DDD6FE 0%, transparent 70%)",
          opacity: animate ? 0.35 : 0,
          transition: "opacity 2.2s ease 0.4s",
        }}
      />

      {/* Kiri */}
      <div className="lg:col-span-7 flex flex-col items-start relative z-10">
        <button
          onClick={() => navigate(-1)}
          className={`${baseTransition} delay-[150ms] ${animate ? visibleState : hiddenState} flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-6 group cursor-pointer`}
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
          Kembali
        </button>

        <div
          className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-wide"
          style={{
            background: "linear-gradient(135deg, #DBEAFE, #EDE9FE)",
            color: "#3730A3",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s cubic-bezier(0.21,1.02,0.43,1.01) 0.2s",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
          Ilmu Hadis
        </div>

        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4"
          style={{
            background: "linear-gradient(135deg, #0b2240 0%, #1e40af 50%, #4f46e5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.9s ease 0.35s, transform 0.9s cubic-bezier(0.21,1.02,0.43,1.01) 0.35s",
          }}
        >
          Materi<br />Ulumul Hadis
        </h1>

        <p
          className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.9s ease 0.5s, transform 0.9s cubic-bezier(0.21,1.02,0.43,1.01) 0.5s",
          }}
        >
          Pahami dasar-dasar ilmu hadis melalui empat pembahasan utama berikut.
        </p>
      </div>
      <div
        className="lg:col-span-5 flex justify-center lg:justify-end relative z-10"
        style={{
          opacity: animate ? 1 : 0,
          transform: animate ? "scale(1) translateY(0)" : "scale(0.92) translateY(16px)",
          transition: "opacity 1.1s ease 0.6s, transform 1.1s cubic-bezier(0.21,1.02,0.43,1.01) 0.6s",
        }}
      >
        <div className="relative w-[180px] h-[180px] flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-3xl"
            style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #DBEAFE 50%, #EDE9FE 100%)" }}
          />
          <div
            className="absolute inset-0 rounded-3xl"
            style={{ background: "linear-gradient(135deg, #BFDBFE33, #C7D2FE55)", border: "1px solid #C7D2FE" }}
          />
          <svg width="90" height="90" viewBox="0 0 60 60" fill="none" className="relative z-10">
            <rect x="8" y="10" width="32" height="40" rx="4" fill="#818CF8" opacity="0.3"/>
            <rect x="14" y="6" width="32" height="40" rx="4" fill="#6366F1" opacity="0.55"/>
            <rect x="20" y="2" width="32" height="40" rx="4" fill="#4338CA" opacity="0.9"/>
            <line x1="26" y1="12" x2="46" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="26" y1="19" x2="46" y2="19" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="26" y1="26" x2="38" y2="26" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}