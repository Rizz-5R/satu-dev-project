import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BacktoHome } from "../../components/hadis/BacktoHome"
import { OrnamenBackground } from "../../components/hadis/OrnamenBackground";
import { SelamatDatang } from "../../components/hadis/SelamatDatang";
import { HadisButtons } from "../../components/hadis/HadisButtons";
import  hadisData from "../../data/hadis/hadisdb.json"


export function Hadispage() {
  const { id } = useParams();
  const [term, setTerm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    try {
      const found = hadisData.find((item) => String(item.id) === String(id));
      setTerm(found);
    } catch (error) {
      console.error("Error loading detail:", error);
    } finally {
      setLoading(false);
      const timer = setTimeout(() => setAnimate(true), 100);
      return () => clearTimeout(timer);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#F5F1E9]">
        <p className="text-slate-500 font-medium">Loading...</p>
      </div>
    );
  }

  const baseTransition = "transition-all duration-1000 ease-[cubic-bezier(0.21,1.02,0.43,1.01)] transform";
  const hiddenState = "opacity-0 translate-y-6";
  const visibleState = "opacity-100 translate-y-0";

  return (
    <div className="min-h-screen bg-[#F4EFE6] flex flex-col justify-between relative overflow-hidden">
      <OrnamenBackground />

      <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-20 py-16">

        {/* Ikon Buku */}
        <div
          className={`${baseTransition} delay-[100ms] ${animate ? visibleState : hiddenState} relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-8 border border-[#E3DCCE]`}
        >
          <div className="absolute -inset-1.5 rounded-full border border-dashed border-[#B88E2F]/40 animate-[spin_30s_linear_infinite]" />
          <BookOpen className="w-10 h-10 text-[#0b2240]" />
        </div>

        {/* Selamat Datang */}
        <div className={`${baseTransition} delay-[250ms] ${animate ? visibleState : hiddenState}`}>
          <SelamatDatang />
        </div>

        {/* "di" */}
        <span
          className={`${baseTransition} delay-[350ms] ${animate ? visibleState : hiddenState} text-6xl text-slate-400 font-medium tracking-[0.2em] block mb-4`}
        >
          di
        </span>

        {/* Judul */}
        <h1
          className={`${baseTransition} delay-[500ms] ${animate ? visibleState : hiddenState} text-5xl md:text-6xl font-bold text-[#0b2240] tracking-tight mb-6 text-center drop-shadow-[0_1px_0px_rgba(255,255,255,0.8)]`}
        >
          {term?.title || "Ulumul Hadis"}
        </h1>

        {/* Deskripsi */}
        <p
          className={`${baseTransition} delay-[650ms] ${animate ? visibleState : hiddenState} text-sm md:text-base text-slate-600 max-w-xl text-center leading-relaxed mb-12`}
        >
          {term?.desc || "Pelajari ilmu hadis secara mendalam, pahami maknanya, dan amalkan dalam kehidupan sehari-hari."}
        </p>

        {/* Tombol */}
        <HadisButtons
          animate={animate}
          baseTransition={baseTransition}
          visibleState={visibleState}
          hiddenState={hiddenState}
        />
        <div className={`${baseTransition} delay-[900ms] ${animate ? visibleState : hiddenState} mt-6`}>
          <BacktoHome />
        </div>
      </main>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-8 flex justify-between items-end relative z-20 pointer-events-none">
        <div
          className={`transition-all duration-1000 delay-[1000ms] ease-out ${animate ? "opacity-70 scale-100" : "opacity-0 scale-75"} mb-4 mx-auto sm:mx-0 text-[#B88E2F] text-xl`}
        >
          ✦
        </div>
      </div>
    </div>
  );
}