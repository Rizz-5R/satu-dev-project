import { Link } from "react-router-dom";
import qurandb from "../../../data/qurandb.json";

export default function QuranPage() {
  const datas = qurandb.quran?.modules ?? [];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Header Section dengan Gradient Subtle */}
      <section className="relative px-8 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50 rounded-l-full blur-3xl opacity-50 -z-10" />

        <div className="max-w-4xl">
          <span className="text-green-600 font-semibold tracking-wider uppercase text-sm">Ulumul Qur'an</span>
          <h1 className="text-6xl font-extrabold text-slate-900 mt-2 tracking-tight">{qurandb.quran.title}</h1>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl leading-relaxed">Jelajahi kedalaman ilmu Al-Qur'an melalui kurikulum yang terstruktur. Mulai dari pengantar dasar hingga pemahaman cabang ilmu yang mendalam.</p>
        </div>
      </section>

      {/* Grid Content */}
      <section className="px-8 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {datas.map((module, index) => (
            <div key={module.id} className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:border-green-100 transition-all duration-300">
              {/* Icon / Number Indicator */}
              <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-6 font-bold text-xl group-hover:bg-green-600 group-hover:text-white transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">{module.title}</h2>

              <p className="text-slate-500 leading-relaxed mb-8">Pelajari dasar-dasar dan substansi penting dari {module.title.toLowerCase()} secara komprehensif.</p>

              <Link
                to={`/quran/${module.slug}`}
                className="inline-flex items-center justify-center w-full py-4 rounded-2xl bg-slate-900 text-white font-medium hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-200"
              >
                Mulai Belajar
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
