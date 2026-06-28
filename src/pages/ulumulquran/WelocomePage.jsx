import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] overflow-hidden">
      {/* animation */}
      <style>
        {`
          @keyframes fadeUp {
            from{
              opacity:0;
              transform:translateY(24px);
            }
            to{
              opacity:1;
              transform:translateY(0);
            }
          }

          @keyframes float {
            0%,100%{
              transform:translateY(0);
            }
            50%{
              transform:translateY(-10px);
            }
          }

          .fade-1{
            animation:fadeUp .7s ease forwards;
          }

          .fade-2{
            opacity:0;
            animation:fadeUp .8s ease .15s forwards;
          }

          .fade-3{
            opacity:0;
            animation:fadeUp .8s ease .3s forwards;
          }

          .fade-4{
            opacity:0;
            animation:fadeUp .8s ease .45s forwards;
          }

          .float{
            animation:float 5s ease infinite;
          }
        `}
      </style>

      {/* HERO */}
      <section
        className=" h-screen
    w-full
    flex
    items-center
    justify-center
    relative
    bg-gradient-to-r
    from-[#123524]
    via-[#1F5A42]
    to-[#3A6D57]"
      >
        {/* bg circle */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute left-10 top-10 w-80 h-80 rounded-full border border-white" />
          <div className="absolute right-10 bottom-10 w-[500px] h-[500px] rounded-full border border-[#D8B96A]" />
        </div>

        <div className="max-w-6xl mx-auto px-8 py-16 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              <div
                className="
                fade-1
                inline-flex
                px-4
                py-2
                rounded-full
                bg-white/10
                text-[#D8B96A]
                text-xs
                border
                border-white/20
              "
              >
                ✦ Platform Pembelajaran Islami
              </div>

              <h1
                className="
                fade-2
                mt-5
                text-3xl
                lg:text-[46px]
                font-black
                leading-[1.15]
                text-white
              "
              >
                Temukan
                <span className="block text-[#D8B96A]">Keindahan</span>
                Ilmu Al-Qur'an
              </h1>

              <p
                className="
                fade-3
                mt-5
                text-base
                text-green-100
                leading-7
                max-w-md
              "
              >
                Belajar dengan materi terstruktur, tampilan nyaman, dan pengalaman belajar yang lebih modern.
              </p>

              {/* button */}
              <div className="fade-4 mt-8 flex gap-3">
                <Link
                  to="/quran"
                  className="
                  px-6
                  py-3
                  rounded-2xl
                  bg-[#D8B96A]
                  text-[#123524]
                  text-sm
                  font-semibold
                  hover:scale-[1.03]
                  transition
                "
                >
                  Mulai Belajar
                </Link>

                <button
                  className="
                  px-6
                  py-3
                  rounded-2xl
                  border
                  border-white/20
                  text-white
                  text-sm
                  hover:bg-white/10
                  transition
                "
                >
                  Jelajahi
                </button>
              </div>

              {/* stats */}
              <div className="fade-4 mt-10 flex gap-8">
                {[
                  ["10+", "Modul"],
                  ["100+", "Materi"],
                  ["Gratis", "Belajar"],
                ].map(([v, t]) => (
                  <div key={t}>
                    <div className="text-[#D8B96A] text-xl font-black">{v}</div>

                    <div className="text-green-100 text-xs">{t}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="hidden lg:flex justify-center">
              <div className="relative float">
                <div className="w-[300px] h-[300px] rounded-full border border-[#D8B96A]/20" />

                <div className="absolute inset-8 rounded-full border border-[#D8B96A]/30" />

                <div
                  className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
                >
                  <div
                    className="
                    w-40
                    h-40
                    rounded-[42px]
                    bg-gradient-to-br
                    from-[#D8B96A]
                    to-[#C3A153]
                    shadow-2xl
                    flex
                    items-center
                    justify-center
                    text-[72px]
                    text-white
                  "
                  >
                    ق
                  </div>
                </div>

                <div
                  className="
                  absolute
                  -left-6
                  top-16
                  bg-white
                  rounded-3xl
                  px-5
                  py-4
                  shadow-lg
                "
                >
                  <div className="text-xl">📖</div>

                  <div className="mt-1 text-sm font-semibold">Materi Lengkap</div>
                </div>

                <div
                  className="
                  absolute
                  -right-4
                  bottom-12
                  bg-white
                  rounded-3xl
                  px-5
                  py-4
                  shadow-lg
                "
                >
                  <div className="text-xl">✨</div>

                  <div className="mt-1 text-sm font-semibold">Interaktif</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
