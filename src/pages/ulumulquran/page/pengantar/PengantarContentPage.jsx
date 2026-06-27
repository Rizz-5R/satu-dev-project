import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../../../data/qurandb.json";

export default function PengantarContentPage() {
  const { id } = useParams();

  const pengantar = data.quran.modules.find((m) => m.id === "pengantar");

  const item = pengantar?.items.find((i) => i.id === id);

  if (!item) {
    return <div className="min-h-screen flex items-center justify-center text-slate-400">Materi tidak ditemukan</div>;
  }

  return (
    <main className="bg-[#FAFAF7] min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-14">
        {/* BACK */}
        <Link
          to="/quran/pengantar"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-slate-500
            hover:text-[#1B4D3E]
            transition
          "
        >
          ← Kembali ke Pengantar
        </Link>

        {/* HEADER */}

        <div className="mt-10">
          <div
            className="
            inline-flex
            items-center
            rounded-full
            px-4
            py-1.5
            text-sm
            bg-[#1B4D3E10]
            text-[#1B4D3E]
            font-medium
          "
          >
            Materi Pengantar
          </div>

          <h1
            className="
              mt-6
              text-5xl
              font-black
              tracking-tight
              text-slate-900
              leading-tight
            "
          >
            {item.title}
          </h1>

          <div
            className="
              mt-8
              w-20
              h-[3px]
              rounded-full
              bg-[#D4A853]
            "
          />
        </div>

        {/* ARTICLE */}

        <article
          className="
            mt-14
            space-y-8
          "
        >
          {item.content?.map((text, i) => (
            <p
              key={i}
              className="
                text-[18px]
                leading-[2.1]
                text-slate-700
                text-justify
              "
            >
              {text}
            </p>
          ))}
        </article>

        {/* NAMA LAIN */}

        {item.nama_lain && (
          <section className="mt-20">
            <h2
              className="
                text-2xl
                font-black
                text-slate-900
                mb-8
              "
            >
              Nama-Nama Al-Qur'an
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {item.nama_lain.map((n, i) => (
                <div
                  key={i}
                  className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    hover:border-[#D4A853]
                    transition
                  "
                >
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-[#1B4D3E]
                    "
                  >
                    {n.nama}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-slate-500
                      leading-7
                    "
                  >
                    {n.arti}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}
