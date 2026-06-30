import React from "react";
import modules from "../../data/ulumulquran/modules.json";
import { Link } from "react-router-dom";

// Memuat daftar semua file JSON materi secara otomatis untuk penghitungan jumlah materi
const lessonFiles = import.meta.glob("../../data/ulumulquran/lesson/**/*.json");

export default function QuranPage() {
  const sorted = [...modules].sort((a, b) => a.order - b.order);

  // Hitung jumlah materi per modul
  const countLessons = (moduleId) => {
    return Object.keys(lessonFiles).filter((path) => path.includes(`/lesson/${moduleId}/`)).length;
  };

  // Hitung total semua materi dari semua modul
  const totalLessons = Object.keys(lessonFiles).length;

  return (
    <main className="min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
          .fade-1 { animation: fadeUp .7s ease forwards; }
          .fade-2 { opacity:0; animation: fadeUp .8s ease .15s forwards; }
          .fade-3 { opacity:0; animation: fadeUp .8s ease .3s forwards; }
          .float { animation: float 6s ease-in-out infinite; }
        `}
      </style>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-r from-[#123524] via-[#1F5A42] to-[#3A6D57] py-20">
        {/* Background Decorative */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] w-80 h-80 rounded-full border border-white" />
          <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full border border-[#D8B96A]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* CONTENT */}
            <div className="flex-1 text-center lg:text-left">
              <div className="fade-1 inline-flex px-4 py-2 rounded-full bg-white/10 text-[#D8B96A] text-xs border border-white/20 uppercase tracking-widest mb-6">✦ Portal Edukasi Ulumul Qur'an</div>
              <h1 className="fade-2 text-4xl md:text-6xl font-black leading-[1.1] text-white">
                Mengenal <span className="block text-[#D8B96A]">Al-Qur'an</span>
              </h1>
              <p className="fade-3 mt-6 text-green-100 leading-relaxed max-w-md mx-auto lg:mx-0">Platform pembelajaran terstruktur dengan pengalaman modern untuk memahami ilmu-ilmu Al-Qur'an secara mendalam.</p>
              <div className="fade-3 mt-8">
                <a href="#modules" className="inline-block px-8 py-4 rounded-2xl bg-[#D8B96A] text-[#123524] font-bold text-sm hover:scale-[1.03] transition-all shadow-xl">
                  Jelajahi Kurikulum
                </a>
              </div>
            </div>

            {/* VISUAL & DATA FLOATING */}
            <div className="hidden lg:flex flex-1 justify-center relative">
              <div className="float relative">
                <div className="w-40 h-40 rounded-[42px] bg-gradient-to-br from-[#D8B96A] to-[#C3A153] shadow-2xl flex items-center justify-center text-[72px] text-white">ق</div>

                {/* Floating Info 1 */}
                <div className="absolute -left-32 top-5 w-48 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-[fadeUp_1s_ease_1s_forwards] opacity-0">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📖</span>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Total Modul</p>
                      <p className="text-xs font-black text-[#123524]">{modules.length} Bab Utama</p>
                    </div>
                  </div>
                </div>

                {/* Floating Info 2 */}
                <div className="absolute -right-32 bottom-5 w-48 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-[fadeUp_1s_ease_1.5s_forwards] opacity-0">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">✨</span>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Total Materi</p>
                      <p className="text-xs font-black text-[#123524]">{totalLessons} Materi Tersedia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES LIST SECTION */}
      <section id="modules" className="max-w-4xl mx-auto px-6 py-16 -mt-10">
        <div className="grid gap-6">
          {sorted.map((m, index) => (
            <Link key={m.id} to={`/modules/${m.slug}`} className="block bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  {/* Angka Bab */}
                  <div className="w-16 h-16 rounded-3xl bg-[#0B6B53]/5 flex items-center justify-center font-black text-[#0B6B53] text-lg group-hover:bg-[#0B6B53] group-hover:text-white transition-all">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-black text-slate-800 text-lg">{m.title}</h3>
                    <p className="text-[11px] text-[#B89446] mt-1 font-bold uppercase tracking-widest">{countLessons(m.id)} Materi Pembelajaran</p>
                  </div>
                </div>
                <div className="text-[#0B6B53] font-black uppercase tracking-widest text-[10px] hidden md:block">Lihat Bab →</div>
              </div>
              <p className="mt-6 text-slate-500 text-sm leading-relaxed pl-0 md:pl-22">{m.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
