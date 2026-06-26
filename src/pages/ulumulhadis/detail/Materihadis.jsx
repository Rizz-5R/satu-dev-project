import {
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Globe,
  Share2,
  Info,
  User,
  ChevronDown
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export function Materihadis() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Memicu trigger animasi sesaat setelah komponen dimuat di layar
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Data 4 pembahasan utama sesuai dengan gambar ChatGPT Image Jun 26, 2026, 08_06_46 AM.png
  const listMateri = [
    {
      id: "01",
      title: "Definisi Ulumul Hadis",
      desc: "Pengertian Ulumul Hadis secara bahasa dan istilah, serta kedudukannya dalam ilmu Islam.",
      link: "/materi/definisi",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      iconBg: "bg-blue-50",
      numBg: "bg-blue-50 text-blue-600",
      lineColor: "bg-blue-600"
    },
    {
      id: "02",
      title: "Sejarah Ulumul Hadis",
      desc: "Perkembangan ilmu hadis sejak masa Nabi ﷺ hingga menjadi disiplin ilmu yang mandiri.",
      link: "/materi/sejarah",
      icon: <Calendar className="w-6 h-6 text-emerald-600" />,
      iconBg: "bg-emerald-50",
      numBg: "bg-emerald-50 text-emerald-600",
      lineColor: "bg-emerald-600"
    },
    {
      id: "03",
      title: "Ruang Lingkup",
      desc: "Hal-hal yang dibahas dalam Ulumul Hadis mencakup hadis, sanad, matan, dan kaidah penilaiannya.",
      link: "/materi/ruang-lingkup",
      icon: <Globe className="w-6 h-6 text-purple-600" />,
      iconBg: "bg-purple-50",
      numBg: "bg-purple-50 text-purple-600",
      lineColor: "bg-purple-600"
    },
    {
      id: "04",
      title: "Cabang Ilmu",
      desc: "Cabang-cabang ilmu yang berkaitan dengan kajian hadis dan metodologinya.",
      link: "/materi/cabang-ilmu",
      icon: <Share2 className="w-6 h-6 text-orange-600" />,
      iconBg: "bg-orange-50",
      numBg: "bg-orange-50 text-orange-600",
      lineColor: "bg-orange-600"
    }
  ];

  // Menggunakan Kurva Bezier Kustom (Fluid Motion Physics) agar transisinya sangat berkelas
  const baseTransition = "transition-all duration-1000 ease-[cubic-bezier(0.21,1.02,0.43,1.01)] transform";
  const hiddenState = "opacity-0 translate-y-6";
  const visibleState = "opacity-100 translate-y-0";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      
      {/* ─── ELEMEN 1: HEADER / NAVBAR ATAS ─── */}
      <header 
        className={`${baseTransition} delay-[50ms] ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"} bg-white border-b border-slate-100 sticky top-0 z-50 px-6 py-4`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
              <BookOpen className="w-6 h-6 text-[#0b2240]" />
            </div>
            <span className="font-bold text-xl text-[#0b2240] tracking-tight">
              Ulumul Hadis
            </span>
          </div>

          <button className="flex items-center gap-2 hover:bg-slate-50 px-3 py-2 rounded-xl transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
              <User className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-slate-700">Profil</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </header>

      {/* ─── KONTEN UTAMA ─── */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-10 flex flex-col justify-between gap-12">
        
        {/* HERO HEADER SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* Sisi Kiri Konten Teks */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* ELEMEN 2: Tombol Kembali */}
            <button 
              onClick={() => navigate(-1)}
              className={`${baseTransition} delay-[150ms] ${animate ? visibleState : hiddenState} flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-6 group cursor-pointer`}
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
              Kembali
            </button>

            {/* ELEMEN 3: Judul Utama Halaman */}
            <h1 
              className={`${baseTransition} delay-[250ms] ${animate ? visibleState : hiddenState} text-3xl md:text-4xl font-bold text-[#0b2240] tracking-tight mb-4`}
            >
              Materi Ulumul Hadis
            </h1>

            {/* ELEMEN 4: Deskripsi Sub-judul */}
            <p 
              className={`${baseTransition} delay-[350ms] ${animate ? visibleState : hiddenState} text-slate-500 text-sm md:text-base max-w-md leading-relaxed`}
            >
              Pahami dasar-dasar ilmu hadis melalui empat pembahasan utama berikut.
            </p>
          </div>

          {/* Sisi Kanan: ELEMEN 5: Ilustrasi Buku & Lentera */}
          <div 
            className={`lg:col-span-5 flex justify-center lg:justify-end ${baseTransition} delay-[450ms] ${animate ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}`}
          >
            <div className="relative w-full max-w-[340px] aspect-[4/3] flex items-end justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-indigo-500/10 rounded-full blur-2xl transform translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1584281723388-be8707945594?q=80&w=400&auto=format&fit=crop" 
                alt="Illustration Frame"
                className="w-full h-full object-contain opacity-85 mix-blend-multiply drop-shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* SECTION: GRID KARTU MATERI BERURUTAN (ELEMEN 6 s.d 9) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {listMateri.map((materi, index) => (
            <div
              key={materi.id}
              className={`${baseTransition} bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group`}
              // Delay dihitung dinamis: Kartu 1 (550ms), Kartu 2 (650ms), Kartu 3 (750ms), Kartu 4 (850ms)
              style={{ 
                transitionDelay: `${550 + index * 100}ms`,
                transform: animate ? 'translateY(0)' : 'translateY(24px)',
                opacity: animate ? 1 : 0
              }}
            >
              <div>
                {/* Atas Kartu: Ikon & Badge Nomor */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3.5 rounded-full ${materi.iconBg} text-slate-800`}>
                    {materi.icon}
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-md tracking-wide ${materi.numBg}`}>
                    {materi.id}
                  </span>
                </div>

                {/* Judul Materi */}
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {materi.title}
                </h3>

                {/* Garis Aksen Warna Pendek */}
                <div className={`w-6 h-[3px] ${materi.lineColor} rounded-full mb-4`}></div>

                {/* Deskripsi Materi */}
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-8">
                  {materi.desc}
                </p>
              </div>

              {/* Tombol Aksi Tautan */}
              <Link to={materi.link} className="mt-auto block">
                <button className="text-xs md:text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors group/btn cursor-pointer">
                  Lihat Materi
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          ))}
        </section>

        {/* ─── ELEMEN 10: BANNER ALERT INFO PALING AKHIR ─── */}
        <section 
          className={`bg-blue-50/50 border border-blue-100/60 rounded-xl p-4 flex items-start gap-4 ${baseTransition} delay-[1000ms] ${animate ? visibleState : hiddenState}`}
        >
          <div className="p-2 bg-white rounded-full border border-blue-100 shadow-sm shrink-0">
            <Info className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed pt-1.5 font-medium">
            Pelajari setiap materi dengan berurutan agar pemahamanmu lebih terstruktur dan menyeluruh.
          </p>
        </section>

      </main>
    </div>
  );
}