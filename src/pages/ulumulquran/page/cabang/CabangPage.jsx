import React from "react";
import { Link } from "react-router-dom";
import data from "../../../../data/quran/qurandb.json";

export default function CabangPage() {
  const cabang = data.quran.modules.find((m) => m.id === "cabang");

  if (!cabang) {
    return <div className="min-h-screen flex items-center justify-center text-slate-400">Data cabang tidak ditemukan</div>;
  }

  return (
    <main className="bg-[#F8FAFC] min-h-screen">
      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-r from-[#123524] via-[#1F5A42] to-[#3A6D57]">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div
            className="
              inline-flex
              items-center
              gap-2
              bg-white/10
              text-[#D8B96A]
              border
              border-white/20
              rounded-full
              px-5
              py-2
              mb-8
            "
          >
            ✦ Cabang Ilmu
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}

            <div>
              <h1
                className="
                  text-5xl
                  lg:text-6xl
                  font-black
                  text-white
                  leading-tight
                "
              >
                {cabang.title}
              </h1>

              <p
                className="
                  mt-6
                  text-xl
                  text-green-100
                  max-w-2xl
                  leading-relaxed
                "
              >
                Jelajahi berbagai cabang disiplin ilmu dalam Ulumul Qur'an yang membantu memahami wahyu secara lebih mendalam.
              </p>
            </div>

            {/* RIGHT */}

            <div className="hidden lg:flex justify-center">
              <div className="relative w-[380px] h-[380px]">
                <div className="absolute inset-0 border border-[#D8B96A]/30 rounded-full" />

                <div
                  className="
                  absolute
                  left-0
                  top-20
                  bg-white
                  rounded-3xl
                  px-8
                  py-6
                  shadow-xl
                "
                >
                  <div className="text-4xl font-black text-[#C8A958]">{cabang.items.length}</div>

                  <div className="text-slate-500">Cabang Ilmu</div>
                </div>

                <div
                  className="
                  absolute
                  right-0
                  top-44
                  bg-white
                  rounded-3xl
                  px-8
                  py-6
                  shadow-xl
                "
                >
                  <div className="text-4xl font-black text-[#C8A958]">∞</div>

                  <div className="text-slate-500">Pembelajaran</div>
                </div>

                <div
                  className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                "
                >
                  <div
                    className="
                      w-40
                      h-40
                      rounded-[40px]
                      bg-[#D8B96A]
                      flex
                      items-center
                      justify-center
                      text-white
                      text-6xl
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

      {/* CARDS */}

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-5">
          {cabang.items.map((item, index) => (
            <Link
              key={item.id}
              to={`/quran/cabang/${item.id}`}
              className="
                rounded-[30px]
                p-7
                text-white
                relative
                overflow-hidden
                group
                hover:scale-[1.02]
                transition
                duration-300
                shadow-lg
              "
              style={{
                background: index % 2 === 0 ? "#1B4D3E" : "#16344A",
              }}
            >
              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-44
                  h-44
                  rounded-full
                  opacity-10
                  group-hover:opacity-20
                "
                style={{
                  background: index % 2 === 0 ? "#D4A853" : "#4A9EBF",

                  transform: "translate(40%,-40%)",
                }}
              />

              <div className="relative">
                <div className="flex gap-4 mb-5">
                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      font-bold
                      text-lg
                    "
                    style={{
                      background: index % 2 === 0 ? "#D4A85322" : "#4A9EBF22",

                      color: index % 2 === 0 ? "#D4A853" : "#4A9EBF",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">{item.title}</h2>

                    <p className="text-white/50 text-xs mt-1">Ulumul Qur'an</p>
                  </div>
                </div>

                <p
                  className="
                  text-white/70
                  leading-8
                  line-clamp-3
                  min-h-[90px]
                "
                >
                  {item.definisi}
                </p>

                <div
                  className="
                  mt-8
                  flex
                  justify-between
                  items-center
                "
                >
                  <span
                    className="
                    border
                    border-white/20
                    rounded-full
                    px-5
                    py-2
                    text-sm
                    font-semibold
                    group-hover:bg-white/10
                  "
                  >
                    Pelajari →
                  </span>

                  <div
                    className="
                    text-5xl
                    opacity-10
                    font-black
                  "
                  >
                    ق
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
