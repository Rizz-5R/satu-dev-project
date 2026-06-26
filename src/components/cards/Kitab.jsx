export default function Kitab() {
  const kitab = [
    { title: "Tafsir Al-Tabari", color: "#1B4D3E", letter: "ط" },
    { title: "Sahih Bukhari", color: "#162D40", letter: "ب" },
    { title: "Al-Itqan fi Ulumil Qur'an", color: "#3D2B1F", letter: "ق" },
    { title: "Riyadhus Shalihin", color: "#2D1F3D", letter: "ر" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: "#D4A853" }}
          >
            Referensi
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Kitab Populer
          </h2>
        </div>

        <button
          className="text-sm font-medium hover:underline"
          style={{ color: "#1B4D3E" }}
        >
          Lihat semua
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kitab.map((k) => (
          <div
            key={k.title}
            className="group cursor-pointer hover:-translate-y-1 transition-transform duration-200"
          >
            <div
              className="rounded-xl aspect-[3/4] flex items-center justify-center shadow-md relative overflow-hidden mb-3"
              style={{
                background: `linear-gradient(160deg, ${k.color}, ${k.color}99)`,
              }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-3 rounded-l-xl opacity-40"
                style={{ background: "rgba(255,255,255,0.3)" }}
              />

              <span
                className="text-white text-5xl font-bold"
                style={{
                  fontFamily: "serif",
                  textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                {k.letter}
              </span>
            </div>

            <p className="text-sm font-semibold text-gray-800 leading-snug">
              {k.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}