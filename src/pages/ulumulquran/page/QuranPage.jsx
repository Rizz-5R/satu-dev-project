
import { Link } from "react-router-dom";
import qurandb from "../../../data/quran/qurandb.json";

export default function QuranPage() {
  const datas = qurandb.quran?.modules ?? [];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden">

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,100%{
            transform:translateY(0);
          }

          50%{
            transform:translateY(-12px);
          }
        }

        .fade{
          opacity:0;
          animation:fadeUp .8s ease forwards;
        }

        .float{
          animation:float 5s ease infinite;
        }

        .card{
          opacity:0;
          animation:fadeUp .8s ease forwards;
        }
      `}</style>

      {/* HERO */}
      <section
        className="
        h-screen
        w-screen
        relative
        overflow-hidden
        flex
        items-center
        bg-gradient-to-r
        from-[#123524]
        via-[#1F5A42]
        to-[#3A6D57]
      "
      >
        <div className="max-w-7xl mx-auto px-8 w-full">

          <div
            className="fade inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 text-sm text-[#D8B96A]"
          >
            ✦ Kurikulum Terstruktur
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center mt-10">

            {/* LEFT */}
            <div
              className="fade"
              style={{
                animationDelay: ".2s",
              }}
            >

              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">

                Belajar

                <span className="block text-[#D8B96A]">
                  {qurandb.quran.title}
                </span>

              </h1>

              <p className="mt-8 text-xl text-green-100 leading-relaxed max-w-2xl">
                {qurandb.quran.description}
              </p>

              <div className="mt-10 flex gap-4">

                <button
                  className="
                  bg-[#D8B96A]
                  hover:scale-105
                  hover:bg-[#e3c67b]
                  text-[#123524]
                  font-bold
                  px-8
                  py-4
                  rounded-2xl
                  transition
                "
                >
                  Mulai Belajar
                </button>

                <button
                  className="
                  border
                  border-white/30
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                  hover:bg-white/10
                  transition
                "
                >
                  Jelajahi Materi
                </button>

              </div>

            </div>

            {/* RIGHT */}
            <div
              className="
              hidden
              lg:flex
              justify-center
              fade
            "
              style={{
                animationDelay: ".4s",
              }}
            >

              <div className="relative w-[430px] h-[430px] float">

                <div className="absolute inset-0 border border-[#D8B96A]/30 rounded-full"/>

                <div
                  className="
                  absolute
                  left-0
                  top-16
                  bg-white
                  rounded-3xl
                  px-8
                  py-6
                  shadow-xl
                  hover:scale-105
                  transition
                "
                >

                  <div className="text-[#C8A958] text-4xl font-black">
                    {datas.length}+
                  </div>

                  <div className="text-slate-500">
                    Modul
                  </div>

                </div>

                <div
                  className="
                  absolute
                  right-0
                  top-40
                  bg-white
                  rounded-3xl
                  px-8
                  py-6
                  shadow-xl
                  hover:scale-105
                  transition
                "
                >

                  <div className="text-[#C8A958] text-4xl font-black">
                    100+
                  </div>

                  <div className="text-slate-500">
                    Materi
                  </div>

                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                  <div
                    className="
                    w-40
                    h-40
                    rounded-[40px]
                    bg-[#C8A958]
                    flex
                    items-center
                    justify-center
                    text-7xl
                    text-white
                    shadow-2xl
                  "
                  >
                    ق
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* MODULE */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="flex items-end justify-between mb-10">

          <div>

            <p className="text-[#2F6B4F] font-semibold">
              Materi Pembelajaran
            </p>

            <h2 className="text-4xl font-black text-slate-900">
              Pilih Modul
            </h2>

          </div>

          <div className="text-slate-500">
            {datas.length} Modul
          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {datas.map((module, index) => (

            <div
              key={module.id}
              className="
                card
                group
                bg-white
                rounded-[32px]
                p-8
                border
                border-slate-100
                hover:-translate-y-2
                hover:scale-[1.02]
                hover:shadow-[0_30px_80px_rgba(18,53,36,0.12)]
                transition
              "
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
            >

              <div className="flex justify-between">

                <div
                  className="
                  w-16
                  h-16
                  rounded-3xl
                  bg-[#EEF6F0]
                  text-[#2F6B4F]
                  flex
                  items-center
                  justify-center
                  font-black
                  text-xl
                  group-hover:bg-[#123524]
                  group-hover:text-white
                  transition
                "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span className="text-[#D8B96A]">
                  ✦
                </span>

              </div>

              <h3 className="mt-8 text-2xl font-black">
                {module.title}
              </h3>

              <p className="mt-4 text-slate-500 leading-8">
                Pelajari konsep inti dan pembahasan lengkap.
              </p>

              <Link
                to={`/quran/${module.slug}`}
                className="
                  mt-10
                  inline-flex
                  w-full
                  justify-center
                  py-4
                  rounded-2xl
                  bg-[#123524]
                  text-white
                  font-semibold
                  hover:bg-[#2F6B4F]
                  transition
                "
              >
                Buka Modul →
              </Link>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}

