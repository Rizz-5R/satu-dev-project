import {
  BookOpen,
  Bookmark,
  Calendar,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import hadisData from "../../data/hadisdb.json";


export function Hadispage() {
  const { id } = useParams();

  const [allTerms, setAllTerms] = useState([]);
  const [term, setTerm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // ambil semua data dari json
      setAllTerms(hadisData);

      // cari data sesuai id dari URL
      const found = hadisData.find(
        (item) => String(item.id) === String(id)
      );

      setTerm(found);
    } catch (error) {
      console.error("Error loading detail:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  const modules = allTerms;

  return (
    <>
      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <span className="hover:underline cursor-pointer">Home</span>
          <span>&gt;</span>
          <span className="hover:underline cursor-pointer">Learn</span>
          <span>&gt;</span>
          <span className="text-slate-700 font-medium">
            {term?.title || "Ulumul Hadis"}
          </span>
        </div>

        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              {term?.title || "Ulumul Hadis"}
            </h1>

            <p className="text-slate-600 leading-relaxed mb-6 max-w-xl">
              {term?.desc ||
                "Ilmu yang membahas tentang hadis nabi Muhammad ﷺ secara menyeluruh."}
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Link to="/definisi">
              <button className="bg-[#0b2240] hover:bg-[#123057] text-white text-sm font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
                <BookOpen className="w-4 h-4" />
                Mulai Belajar sss
              </button>
              </Link>  

              <button className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                <Bookmark className="w-4 h-4" />
                Simpan
              </button>
            </div>

            <div className="flex items-center gap-6 text-xs text-slate-500 border-t border-slate-200 pt-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Kategori: Ulumul Hadis
              </span>
              <span>Terakhir diperbarui: 10 Mei 2025</span>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-tr from-amber-50 to-orange-100 flex items-center justify-center p-6 shadow-sm border border-orange-100">
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop"
                alt="Islamic Studies Illustration"
                className="w-full h-full object-cover rounded-2xl mix-blend-multiply opacity-80"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent text-white">
                <p className="font-serif text-lg tracking-wide">
                  علوم الحديث
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MODULE CARD */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {modules.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-full bg-slate-100">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-300 tracking-wider">
                    {item.id}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <button className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors flex items-center gap-1 mt-auto group">
                Baca selengkapnya
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </section>

        {/* QUIZ BANNER */}
        <section className="bg-blue-50/70 border border-blue-100/50 rounded-2xl p-6 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full border border-blue-100 shadow-sm">
              <HelpCircle className="w-8 h-8 text-blue-500" />
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-0.5">
                Uji pemahamanmu
              </h3>
              <p className="text-sm text-slate-600">
                Kerjakan kuis interaktif untuk menguji pemahamanmu tentang
                Ulumul Hadis.
              </p>
            </div>
          </div>

          <button className="bg-[#0b2240] hover:bg-[#123057] text-white text-sm font-semibold px-5 py-3 rounded-xl flex items-center gap-2 transition-colors whitespace-nowrap shadow-sm">
            Lanjut Quiz
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </main>
    </>
  );
}