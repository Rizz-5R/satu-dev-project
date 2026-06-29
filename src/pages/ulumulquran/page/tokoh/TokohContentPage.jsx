import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../../../data/quran/qurandb.json";

export default function TokohContentPage() {
  const { id } = useParams();

  const tokoh = data.quran.modules.find((m) => m.id === "tokoh");

  const item = tokoh?.items.find((t) => t.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold text-slate-800">Tokoh tidak ditemukan</h2>

        <Link
          to="/quran/tokoh"
          className="
            mt-4
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
          to="/quran/tokoh"
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
          ← Kembali ke Tokoh
        </Link>

        {/* HEADER */}

        <header className="mt-10">
          <div
            className="
              inline-flex
              rounded-full
              px-4
              py-1.5
              bg-[#1B4D3E10]
              text-[#1B4D3E]
              text-sm
              font-medium
            "
          >
            Tokoh Ulumul Qur'an
          </div>

          <h1
            className="
              mt-6
              text-5xl
              font-black
              text-slate-900
              tracking-tight
              leading-tight
            "
          >
            {item.nama}
          </h1>

          <p
            className="
              mt-4
              text-xl
              text-[#B88B33]
              font-medium
            "
          >
            {item.ttl}
          </p>

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

        {/* BIO */}

        <article className="mt-14">
          <p
            className="
              text-[18px]
              leading-[2.1]
              text-slate-700
              text-justify
            "
          >
            {item.bio}
          </p>
        </article>

        {/* DETAIL */}

        <section className="mt-20 grid md:grid-cols-2 gap-10">
          {/* KONTRIBUSI */}

          <div>
            <div
              className="
                inline-flex
                rounded-full
                px-4
                py-1
                bg-[#1B4D3E10]
                text-[#1B4D3E]
                text-sm
                mb-6
              "
            >
              Kontribusi
            </div>

            <div className="space-y-4">
              {item.kontribusi.map((k, i) => (
                <div
                  key={i}
                  className="
                      flex
                      gap-4
                    "
                >
                  <div
                    className="
                        mt-2
                        w-2
                        h-2
                        rounded-full
                        bg-[#D4A853]
                        shrink-0
                      "
                  />

                  <p
                    className="
                        text-slate-700
                        leading-8
                      "
                  >
                    {k}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* KARYA */}

          <div>
            <div
              className="
                inline-flex
                rounded-full
                px-4
                py-1
                bg-[#D4A85315]
                text-[#B88B33]
                text-sm
                mb-6
              "
            >
              Karya Tulis
            </div>

            <div className="flex flex-wrap gap-3">
              {item.karya.map((k, i) => (
                <div
                  key={i}
                  className="
                      px-5
                      py-3
                      rounded-full
                      bg-white
                      border
                      border-slate-200
                      hover:border-[#D4A853]
                      transition
                      text-slate-700
                    "
                >
                  {k}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
