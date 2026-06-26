import { useState } from "react";
import ChevronLeft from "../section/ChevronLeft";
import ChevronRight from "../section/ChevronRight";

export default function TimeLine() {
  const events = [
    {
      year: "610 M",
      label: "Wahyu Pertama",
      desc: "Turunnya wahyu pertama kepada Nabi Muhammad ﷺ",
    },
    {
      year: "632 M",
      label: "Wafat Nabi ﷺ",
      desc: "Berakhirnya masa kenabian",
    },
    {
      year: "650 M",
      label: "Kodifikasi Mushaf",
      desc: "Kodifikasi mushaf pada masa Khalifah Utsman bin Affan",
    },
    {
      year: "923 M",
      label: "Wafat Al-Tabari",
      desc: "Wafatnya imam Al-Tabari, mufassir besar abad ke-3 H",
    },
    {
      year: "1258 M",
      label: "Perkembangan Tafsir",
      desc: "Masa keemasan tafsir dan berbagai madzhab tafsir",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: "#D4A853" }}
          >
            Sejarah
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Timeline Perkembangan Al-Qur'an & Hadis
          </h2>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setActive(Math.max(0, active - 1))}
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-green-700 hover:text-green-700 transition-colors text-gray-400"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() =>
              setActive(Math.min(events.length - 1, active + 1))
            }
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-green-700 hover:text-green-700 transition-colors text-gray-400"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Timeline bar */}
      <div className="relative">
        {/* Line */}
        <div className="absolute top-5 left-0 right-0 h-px bg-gray-200 z-0" />

        <div
          className="absolute top-5 left-0 h-px bg-green-800 z-0 transition-all duration-500"
          style={{
            width: `${((active + 1) / events.length) * 100}%`,
          }}
        />

        <div className="relative z-10 flex justify-between">
          {events.map((event, i) => (
            <button
              key={event.year}
              onClick={() => setActive(i)}
              className="flex flex-col items-center gap-3 group flex-1"
            >
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  i <= active
                    ? "bg-green-800 border-green-800 text-white scale-110"
                    : "bg-white border-gray-300 text-gray-400"
                }`}
              >
                <span className="text-[10px] font-bold">
                  {i + 1}
                </span>
              </div>

              <div
                className={`text-center transition-opacity ${
                  i === active ? "opacity-100" : "opacity-50"
                }`}
              >
                <p className="text-xs font-bold text-gray-800 whitespace-nowrap">
                  {event.year}
                </p>

                <p className="text-[10px] text-gray-500 max-w-[80px] text-center leading-tight mt-0.5">
                  {event.label}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Active event detail */}
        <div className="mt-6 bg-gray-50 border border-gray-100 rounded-xl p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-green-700 mb-1">
            {events[active].year}
          </p>

          <p className="font-semibold text-gray-900">
            {events[active].label}
          </p>

          <p className="text-sm text-gray-500 mt-1">
            {events[active].desc}
          </p>
        </div>
      </div>
    </section>
  );
}