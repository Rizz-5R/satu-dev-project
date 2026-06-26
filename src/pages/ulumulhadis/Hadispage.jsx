import {
  BookOpen,
  ArrowRight,
  Trophy
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import hadisData from "../../data/hadisdb.json";

export function Hadispage() {
  const { id } = useParams();

  const [term, setTerm] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // State untuk memicu urutan animasi setelah komponen dimuat
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    try {
      const found = hadisData.find(
        (item) => String(item.id) === String(id)
      );
      setTerm(found);
    } catch (error) {
      console.error("Error loading detail:", error);
    } finally {
      setLoading(false);
      // Memicu animasi sedikit setelah loading selesai agar transisi mulus
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

  // Helper class untuk menyatukan transisi fade-in-up yang smooth
  const baseTransition = "transition-all duration-1000 ease-[cubic-bezier(0.21,1.02,0.43,1.01)] transform";
  const hiddenState = "opacity-0 translate-y-6";
  const visibleState = "opacity-100 translate-y-0";

  return (
    <div className="min-h-screen bg-[#F4EFE6] flex flex-col justify-between relative overflow-hidden">
      
      {/* ─── 1. GRADASI LATAR BELAKANG UNTUK KONTRAS ELEGAN (VIGNETTE) ─── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FCFBF9_0%,#EFEAE0_100%)] pointer-events-none" />

      {/* ─── 2. MOTIF ORNAMEN DENGAN KONTRAS YANG DIOPTIMALKAN ─── */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.07] pointer-events-none mix-blend-multiply"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1609599006353-e629abacfeae?q=80&w=1200&auto=format&fit=crop')` 
        }}
      />

      {/* ─── 3. FRAME KUBAH DENGAN WARNA EMAS PASIR (SAND GOLD) YANG LEBIH TEGAS ─── */}
      <div className="absolute inset-x-6 top-6 bottom-6 border border-[#DFD8C9] rounded-t-[120px] md:rounded-t-[240px] pointer-events-none opacity-80 z-10"></div>
      <div className="absolute inset-x-10 top-10 bottom-10 border border-[#E3DCCE]/60 rounded-t-[100px] md:rounded-t-[220px] pointer-events-none opacity-50 z-10"></div>

      {/* KONTEN TENGAH */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-20 py-16">
        
        {/* ELEMEN 1: Ikon Buku Utama */}
        <div 
          className={`${baseTransition} delay-[100ms] ${animate ? visibleState : hiddenState} relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-8 border border-[#E3DCCE]`}
        >
          <div className="absolute -inset-1.5 rounded-full border border-dashed border-[#B88E2F]/40 animate-[spin_30s_linear_infinite]"></div>
          <BookOpen className="w-10 h-10 text-[#0b2240]" />
        </div>

        {/* ELEMEN 2: Teks "Selamat Datang" */}
        <div 
          className={`${baseTransition} delay-[250ms] ${animate ? visibleState : hiddenState} flex items-center gap-4 mb-1`}
        >
          <div className="w-1.5 h-1.5 rotate-45 bg-[#B88E2F]"></div>
          <p className="font-serif italic text-2xl md:text-3xl text-[#B88E2F] tracking-wide font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
            Selamat Datang
          </p>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#B88E2F]"></div>
        </div>

        {/* ELEMEN 3: Kata "di" */}
        <span 
          className={`${baseTransition} delay-[350ms] ${animate ? visibleState : hiddenState} text-[10px] text-slate-400 font-medium tracking-[0.2em] block mb-4 text-6xl`}
        >
          di
        </span>

        {/* ELEMEN 4: Judul Utama (Deep Navy) */}
        <h1 
          className={`${baseTransition} delay-[500ms] ${animate ? visibleState : hiddenState} text-5xl md:text-6xl font-bold text-[#0b2240] tracking-tight mb-6 text-center drop-shadow-[0_1px_0px_rgba(255,255,255,0.8)]`}
        >
          {term?.title || "Ulumul Hadis"}
        </h1>

        {/* ELEMEN 5: Deskripsi */}
        <p 
          className={`${baseTransition} delay-[650ms] ${animate ? visibleState : hiddenState} text-sm md:text-base text-slate-600 max-w-xl text-center leading-relaxed mb-12 font-medium/normal`}
        >
          {term?.desc ||
            "Pelajari ilmu hadis secara mendalam, pahami maknanya, dan amalkan dalam kehidupan sehari-hari."}
        </p>

        {/* ELEMEN 6: Barisan Tombol */}
        <div 
          className={`${baseTransition} delay-[800ms] ${animate ? visibleState : hiddenState} flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto`}
        >
          {/* Mulai Belajar */}
          <Link to="/materihadis" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#0b2240] hover:bg-[#123057] hover:cursor-pointer text-white text-sm font-medium px-8 py-3.5 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#0b2240]/25 hover:shadow-2xl hover:shadow-[#0b2240]/30 active:scale-[0.99]">
              <BookOpen className="w-4 h-4" />
              Mulai Belajar
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>

          {/* Mulai Quiz */}
          <button className="w-full sm:w-auto bg-white hover:bg-slate-50 hover:cursor-pointer text-slate-800 text-sm font-medium px-8 py-3.5 rounded-xl flex items-center justify-center gap-3 transition-all border border-[#DFD8C9] shadow-sm active:scale-[0.99]">
            <Trophy className="w-4 h-4 text-[#B88E2F]" />
            Mulai Quiz
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </main>

      {/* ELEMEN DEKORASI BAWAH */}
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