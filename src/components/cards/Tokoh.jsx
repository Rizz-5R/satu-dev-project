export default function Tokoh() {
  const tokoh = [
    { name: "Al-Tabari", years: "224 – 310 H", field: "Tafsir, Hadis" },
    { name: "Ibn Kathir", years: "701 – 774 H", field: "Tafsir, Sejarah" },
    { name: "Al-Suyuthi", years: "849 – 911 H", field: "Hadis, Fiqih" },
    { name: "Imam Bukhari", years: "194 – 256 H", field: "Hadis, Rijal" },
  ];

  const initials = (name) =>
    name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2);

  return (
    <section className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{ color: "#D4A853" }}
            >
              Ulama & Ilmuwan
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Tokoh Populer
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
          {tokoh.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg shadow-inner group-hover:scale-105 transition-transform"
                style={{
                  background:
                    "linear-gradient(135deg, #1B4D3E, #2D6A4F)",
                }}
              >
                {initials(t.name)}
              </div>

              <p className="font-semibold text-gray-900 text-sm">
                {t.name}
              </p>

              <p className="text-xs text-gray-400 mt-0.5">
                {t.years}
              </p>

              <span
                className="inline-block mt-2 text-[10px] font-medium px-2 py-0.5 rounded-full"
                style={{
                  background: "#1B4D3E15",
                  color: "#1B4D3E",
                }}
              >
                {t.field}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}