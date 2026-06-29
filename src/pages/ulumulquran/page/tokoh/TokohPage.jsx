import React from "react";
import { Link } from "react-router-dom";
import data from "../../../../data/quran/qurandb.json";

export default function TokohPage() {
  const tokoh = data.quran.modules.find((m) => m.id === "tokoh");

  if (!tokoh) {
    return <div className="min-h-screen flex items-center justify-center text-slate-400">Data tokoh tidak ditemukan</div>;
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
            ✦ Tokoh Ulumul Qur'an
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
                {tokoh.title}
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
                Mengenal para ulama dan tokoh besar yang memberikan kontribusi penting dalam perkembangan ilmu Al-Qur'an.
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
                  <div className="text-4xl font-black text-[#C8A958]">{tokoh.items.length}</div>

                  <div className="text-slate-500">Tokoh</div>
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

                  <div className="text-slate-500">Warisan Ilmu</div>
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
                    text-5xl
                    shadow-2xl
                  "
                  >
                    👳
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
          {tokoh.items.map((item, index) => (
            <Link
              key={item.id}
              to={`/quran/tokoh/${item.id}`}
              className="
                relative
                overflow-hidden
                rounded-[30px]
                p-7
                text-white
                shadow-lg
                group
                hover:scale-[1.02]
                transition
              "
              style={{
                background: index % 2 === 0 ? "#1B4D3E" : "#16344A",
              }}
            >
              {/* GLOW */}

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
                      w-16
                      h-16
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      font-bold
                    "
                    style={{
                      background: index % 2 === 0 ? "#D4A85322" : "#4A9EBF22",

                      color: index % 2 === 0 ? "#D4A853" : "#4A9EBF",
                    }}
                  >
                    👤
                  </div>

                  <div>
                    <h2
                      className="
                      text-2xl
                      font-bold
                    "
                    >
                      {item.nama}
                    </h2>

                    <p
                      className="
                      text-[#D8B96A]
                      text-sm
                      mt-1
                    "
                    >
                      {item.ttl}
                    </p>
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
                  {item.bio}
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
                    Lihat Profil →
                  </span>

                  <div
                    className="
                    text-5xl
                    opacity-10
                  "
                  >
                    ✦
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
