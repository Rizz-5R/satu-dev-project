import React from "react";
import { Link } from "react-router-dom";
import data from "../../../../data/qurandb.json";

export default function PengantarPage() {
  const pengantar = data.quran.modules.find((m) => m.id === "pengantar");

  if (!pengantar) {
    return <div className="min-h-screen flex items-center justify-center text-slate-400">Data tidak ditemukan</div>;
  }

  return (
    <main className="bg-[#F8FAFC] min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#123524] via-[#1F5A42] to-[#3A6D57]">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#D8B96A] border border-white/20 rounded-full px-5 py-2 mb-8">✦ Modul Dasar</div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight">{pengantar.title}</h1>

              <p className="mt-6 text-xl text-green-100 max-w-2xl leading-relaxed">Pelajari landasan teoretis dan historis Ulumul Qur'an sebelum menyelami cabang ilmu yang lebih dalam.</p>
            </div>

            {/* RIGHT */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-[380px] h-[380px]">
                <div className="absolute inset-0 border border-[#D8B96A]/30 rounded-full" />

                <div className="absolute left-0 top-20 bg-white rounded-3xl px-8 py-6 shadow-xl">
                  <div className="text-4xl font-black text-[#C8A958]">{pengantar.items.length}</div>

                  <div className="text-slate-500">Materi</div>
                </div>

                <div className="absolute right-0 top-44 bg-white rounded-3xl px-8 py-6 shadow-xl">
                  <div className="text-4xl font-black text-[#C8A958]">∞</div>

                  <div className="text-slate-500">Pembelajaran</div>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-40 h-40 rounded-[40px] bg-[#D8B96A] flex items-center justify-center text-white text-6xl shadow-2xl">ق</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-[#2F6B4F] font-semibold">Daftar Materi</p>

            <h2 className="text-4xl font-black text-slate-900">Mulai Belajar</h2>
          </div>

          <div className="text-slate-500">{pengantar.items.length} Topik</div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {pengantar.items.map((item, index) => (
            <Link
              key={item.id}
              to={`/quran/pengantar/${item.id}`}
              className="
        rounded-[28px]
        p-7
        text-white
        relative
        overflow-hidden
        group
        transition-all
        duration-300
        hover:scale-[1.02]
        shadow-lg
      "
              style={{
                background: index % 2 === 0 ? "#1B4D3E" : "#16344A",
              }}
            >
              {/* Glow */}
              <div
                className="
          absolute
          top-0
          right-0
          w-52
          h-52
          rounded-full
          opacity-10
          group-hover:opacity-20
          transition
        "
                style={{
                  background: index % 2 === 0 ? "#D4A853" : "#4A9EBF",
                  transform: "translate(40%,-40%)",
                }}
              />

              <div className="relative">
                {/* HEADER */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="
              w-14
              h-14
              rounded-2xl
              flex
              items-center
              justify-center
              text-lg
              font-bold
              flex-shrink-0
            "
                    style={{
                      background: index % 2 === 0 ? "#D4A85322" : "#4A9EBF22",

                      color: index % 2 === 0 ? "#D4A853" : "#4A9EBF",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>

                    <p className="text-white/50 text-xs mt-1">Ulumul Qur'an • Materi Dasar</p>
                  </div>
                </div>

                {/* DESC */}
                {/* <p
                  className="
          text-white/70
          leading-7
          text-sm
          line-clamp-3
          min-h-[88px]
        "
                >
                  {item.content?.[0] ?? "Materi belum tersedia"}
                </p> */}

                {/* FOOTER */}
                <div
                  className="
          mt-6
          flex
          items-center
          justify-between
        "
                >
                  <button
                    className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              border
              border-white/25
              hover:bg-white/10
              rounded-full
              px-5
              py-2
              transition
            "
                  >
                    Pelajari →
                  </button>

                  <div
                    className="
              text-5xl
              font-black
              opacity-[0.08]
              select-none
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
