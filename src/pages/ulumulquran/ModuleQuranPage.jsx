import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import modules from "../../data/ulumulquran/modules.json";

export default function ModuleQuranPage() {
  const { moduleSlug } = useParams();
  const [module, setModule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadModule() {
      try {
        const meta = modules.find((item) => item.slug === moduleSlug);
        if (!meta) return;
        const data = await import(`../../data/ulumulquran/modules/${meta.id}.json`);
        setModule(data.default);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    loadModule();
  }, [moduleSlug]);

  const currentIndex = modules.findIndex((m) => m.slug === moduleSlug);
  const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;

  if (loading) return <div className="min-h-screen flex items-center justify-center text-slate-400">Memuat...</div>;

  return (
    <main className="bg-[#F8FAFC] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#123524] via-[#1F5A42] to-[#3A6D57]">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <Link to="/" className="inline-flex items-center gap-2 bg-white/10 text-[#D8B96A] border border-white/20 rounded-full px-5 py-2 mb-8 hover:bg-white/20 transition">
            ✦ Kembali ke Beranda
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#D8B96A] font-bold tracking-[0.2em] uppercase text-xs mb-4">Modul {module.id.toUpperCase()}</div>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight">{module.title}</h1>
              <p className="mt-6 text-xl text-green-100 max-w-2xl leading-relaxed">{module.description}</p>
            </div>

            {/* VISUAL KANAN */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-[380px] h-[380px]">
                <div className="absolute inset-0 border border-[#D8B96A]/30 rounded-full" />

                <div className="absolute left-0 top-20 bg-white rounded-3xl px-8 py-6 shadow-xl">
                  <div className="text-4xl font-black text-[#C8A958]">{module.lessons.length}</div>
                  <div className="text-slate-500">Materi</div>
                </div>

                <div className="absolute right-0 top-44 bg-white rounded-3xl px-8 py-6 shadow-xl">
                  <div className="text-4xl font-black text-[#C8A958]">✓</div>
                  <div className="text-slate-500">Terstruktur</div>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-40 h-40 rounded-[40px] bg-[#D8B96A] flex items-center justify-center text-white text-6xl shadow-2xl">ق</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST MATERI - VERSI PREMIUM */}
      {/* LIST MATERI - VERSI SOLID & PREMIUM */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 gap-6">
          {module.lessons.map((lesson, index) => (
            <Link
              key={lesson.id}
              to={`/modules/${moduleSlug}/${lesson.slug}`}
              className="group relative bg-[#1B4D3E] p-8 rounded-3xl transition-all duration-300 hover:bg-[#153a2f] hover:-translate-y-1 shadow-xl hover:shadow-2xl border-b-4 border-[#123524]"
            >
              {/* Dekorasi tipis tanpa opacity yang mengganggu */}
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-black text-white">ق</span>
              </div>

              <div className="relative flex flex-col h-full justify-between">
                <div className="flex gap-6 items-start">
                  {/* Angka yang solid dan tegas */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl bg-[#D4A853] text-[#1B4D3E] shrink-0">{String(index + 1).padStart(2, "0")}</div>

                  <div className="pt-1">
                    <h2 className="text-xl font-bold text-white leading-snug mb-2">{lesson.title}</h2>
                    <span className="inline-block px-3 py-1 rounded-md bg-[#123524] text-[#D4A853] text-[10px] font-bold uppercase tracking-widest">{lesson.id}</span>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#D4A853] uppercase tracking-widest group-hover:gap-4 transition-all">
                    Mulai Belajar <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="max-w-7xl mx-auto px-6 pb-20 flex justify-between">
        {prevModule ? (
          <Link to={`/modules/${prevModule.slug}`} className="text-sm font-bold text-[#1B4D3E] hover:underline">
            ← Bab Sebelumnya
          </Link>
        ) : (
          <div />
        )}

        {module.next && (
          <Link to={`/modules/${module.next.slug}`} className="text-sm font-bold text-[#1B4D3E] hover:underline">
            Bab Selanjutnya →
          </Link>
        )}
      </section>
    </main>
  );
}
