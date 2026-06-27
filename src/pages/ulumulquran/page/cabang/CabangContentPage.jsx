import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../../../data/qurandb.json";

export default function CabangContentPage() {
  const { id } = useParams();

  const cabang = data.quran.modules.find((m) => m.id === "cabang");

  const item = cabang?.items.find((i) => i.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-slate-800">Materi tidak ditemukan</h2>

        <Link
          to="/quran/cabang"
          className="
            mt-5
            text-[#1B4D3E]
            hover:underline
          "
        >
          Kembali
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-[#FAFAF7] min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-14">
        {/* BACK */}

        <Link
          to="/quran/cabang"
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
          ← Kembali ke Cabang
        </Link>

        {/* HEADER */}

        <header className="mt-10">
          <div
            className="
              inline-flex
              rounded-full
              px-4
              py-1.5
              text-sm
              font-medium
              bg-[#1B4D3E10]
              text-[#1B4D3E]
            "
          >
            Cabang Ilmu
          </div>

          <h1
            className="
              mt-6
              text-5xl
              font-black
              tracking-tight
              leading-tight
              text-slate-900
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
        </header>

        {/* ARTICLE */}

        <article className="mt-14">
          <div>
            <p
              className="
                text-[18px]
                text-slate-700
                leading-[2.1]
                text-justify
              "
            >
              {item.definisi}
            </p>
          </div>
        </article>

        {/* CONTOH */}

        {item.contoh && (
          <section className="mt-20">
            <div className="mb-8">
              <div
                className="
                  inline-flex
                  rounded-full
                  px-4
                  py-1
                  bg-[#D4A85315]
                  text-[#B88B33]
                  text-sm
                "
              >
                Contoh Relevan
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {item.contoh
                .split(",")

                .map((c, i) => (
                  <div
                    key={i}
                    className="
                      px-5
                      py-3
                      rounded-full
                      bg-white
                      border
                      border-slate-200
                      text-slate-700
                      hover:border-[#D4A853]
                      transition
                    "
                  >
                    {c.trim()}
                  </div>
                ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}
