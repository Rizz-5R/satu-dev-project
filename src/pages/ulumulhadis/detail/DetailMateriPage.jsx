import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Clock, AlertCircle } from "lucide-react";
import { materiData } from "../../../data/materiData";

export function DetailMateriPage() {
  const { slug } = useParams(); 
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const data = materiData[slug];

  useEffect(() => {
    // Reset state animasi setiap kali slug berubah
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 80); // Menaikkan sedikit delay agar browser sempat me-render state awal
    return () => clearTimeout(timer);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <h2 className="text-xl font-bold text-slate-800 mb-2">Materi Tidak Ditemukan</h2>
        <button onClick={() => navigate(-1)} className="text-sm font-semibold text-blue-600 hover:underline cursor-pointer">
          Kembali ke Menu Utama
        </button>
      </div>
    );
  }

  const baseTransition = "transition-all duration-1000 ease-[cubic-bezier(0.21,1.02,0.43,1.01)] transform";
  const hiddenState = "opacity-0 translate-y-6";
  const visibleState = "opacity-100 translate-y-0";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12">
        
        {/* ELEMEN 1: Tombol Kembali */}
        <button 
          onClick={() => navigate(-1)}
          className={`${baseTransition} delay-[50ms] ${animate ? visibleState : hiddenState} flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-8 group cursor-pointer`}
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
          Kembali ke Daftar Materi
        </button>

        {/* ELEMEN 2: Badge Atas */}
        <div className={`${baseTransition} delay-[150ms] ${animate ? visibleState : hiddenState} mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${data.badgeColor || "bg-blue-50 text-blue-600 border-blue-100"}`}>
          <BookOpen className="w-3.5 h-3.5" />
          Pembahasan Autentik
        </div>

        {/* ELEMEN 3: Judul Utama */}
        <h1 className={`${baseTransition} delay-[250ms] ${animate ? visibleState : hiddenState} text-3xl md:text-5xl font-bold text-[#0b2240] tracking-tight mb-3`}>
          {data.title}
        </h1>

        {/* ELEMEN 4: Tagline Deskripsi Pendek */}
        <p className={`${baseTransition} delay-[350ms] ${animate ? visibleState : hiddenState} text-slate-500 text-sm md:text-base mb-10 pb-6 border-b border-slate-100`}>
          {data.tagline}
        </p>

        {/* ELEMEN INTERAKTIF BERURUTAN: Isi Konten Materi */}
        <div className="space-y-8">
          {data.content && data.content.map((item, index) => (
            <div 
              key={index}
              // Memindahkan logika opacity dan translate langsung ke className (Lebih aman untuk Tailwind)
              className={`${baseTransition} bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ 
                // Hanya menyisakan transition delay di dalam inline style
                transitionDelay: `${450 + index * 150}ms` 
              }}
            >
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2.5">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full block"></span>
                {item.subTitle}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* ELEMEN AKHIR: Estimasi Selesai Membaca */}
        <div className={`${baseTransition} delay-[850ms] ${animate ? visibleState : hiddenState} mt-12 flex items-center justify-center gap-2 text-xs font-medium text-slate-400`}>
          <Clock className="w-4 h-4" />
          Selesai membaca materi ini dalam waktu ±3 menit
        </div>

      </main>
    </div>
  );
}