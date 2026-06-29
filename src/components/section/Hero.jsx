import SearchIcon from "../section/Icons";

export default function Hero() {

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0F2D20 0%, #1B4D3E 50%, #2D6A4F 100%)",
      }}
    >
      {/* Decorative arabic pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, #D4A853 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, #D4A853 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-xs font-medium text-amber-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Platform Belajar Qur'an & Hadis Terlengkap
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              SUQURA
              <br />
              <span style={{ color: "#D4A853" }}>Studi Al-Qur'an</span>{" "}
              <span className="text-white/80">&</span>{" "}
              <span style={{ color: "#D4A853" }}>Hadis</span>
            </h1>

            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Media Pembelajaran Ilmu Al-Qur'an dan Hadis secara sistematis,
              terstruktur, dan interaktif berdasarkan kurikulum yang telah disusun oleh para pakar dan ulama.
            </p>

            {/* Search Bar */}
            <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-lg mb-4 max-w-md">
              <SearchIcon />

              <input
                type="text"
                placeholder="Cari tokoh, kitab, materi, metode…"
                className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
              />

              <button
                className="text-white text-xs font-semibold px-3 py-1.5 rounded-lg"
                style={{ background: "#1B4D3E" }}
              >
                Cari
              </button>
            </div>
      </div>

            

          {/* Right: Illustration placeholder */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative">
              <div
                className="w-72 h-80 rounded-t-full border-2 border-amber-400/30 flex items-end justify-center pb-8 relative"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(212,168,83,0.08) 0%, rgba(212,168,83,0.02) 100%)",
                }}
              >
                <div className="absolute -left-12 top-10 bg-white rounded-xl p-3 shadow-xl text-center min-w-22.5">
                  <p className="text-xl font-bold text-green-800">ULUMUL QUR'AN</p>
                </div>

                <div className="absolute -right-12 top-20 bg-white rounded-xl p-3 shadow-xl text-center min-w-[90px]">
                  <p className="text-xl font-bold text-green-800">ULUMUL HADIS</p>
                </div>

                <div className="absolute -left-8 bottom-16 bg-white rounded-xl p-3 shadow-xl text-center min-w-[90px]">
                  <p
                    className="text-xl font-bold"
                    style={{ color: "#D4A853" }}
                  >
                   QUIZ
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-20 h-28 rounded-lg flex items-center justify-center shadow-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #D4A853, #B8860B)",
                    }}
                  >
                    <span
                      className="text-white text-3xl font-bold"
                      style={{ fontFamily: "serif" }}
                    >
                    SQH
                    </span>
                  </div>

                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-8 rounded shadow-md"
                        style={{
                          background: `rgba(212,168,83,${
                            0.3 + i * 0.2
                          })`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}