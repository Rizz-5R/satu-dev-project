import { Link } from "react-router-dom";
import ChevronRight from "../section/ChevronRight";

export default function CategoryCards() {
  const cards = [
    {
      title: "Al-Qur'an",
      to: "quranpage",
      subtitle: "10 Materi  •  10 Tokoh  •  10 Kitab",
      desc: "Pelajari sejarah, ilmu, tafsir, tokoh dan kitab terkait Al-Qur'an.",
      bg: "#1B4D3E",
      accent: "#D4A853",
      icon: "ق",
    },
    {
      title: "Hadis",
      to: "hadispage",
      subtitle: "10 Materi  •  10 Tokoh  •  10 Kitab",
      desc: "Pelajari ulumul hadis, riwayah, dirayah, kritik hadis dan lainnya.",
      bg: "#162D40",
      accent: "#4A9EBF",
      icon: "ح",
    },
    {
      title: "Quiz",
      to: "quizpage",
      subtitle: "10 Materi  •  10 Tokoh  •  10 Kitab",
      desc: "Uji pengetahuanmu tentang Al-Qur'an dan Hadis.",
      bg: "#5A3E2B",
      accent: "#4A9EBF",
      icon: "Q",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-40 relative z-10">
      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((card) => (
          <div key={card.title} className="rounded-2xl p-6 text-white relative overflow-hidden group cursor-pointer hover:scale-[1.01] transition-transform duration-200 shadow-lg" style={{ background: card.bg }}>
            {/* Background glow */}
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 transition-opacity group-hover:opacity-20"
              style={{
                background: card.accent,
                transform: "translate(40%, -40%)",
              }}
            />

            <div className="relative flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold"
                    style={{
                      background: card.accent + "33",
                      color: card.accent,
                    }}
                  >
                    {card.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">{card.title}</h3>
                    <p className="text-white/50 text-[11px]">{card.subtitle}</p>
                  </div>
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-5">{card.desc}</p>
                <Link to={`/${card.to}`}>
                  <button className="inline-flex items-center gap-1.5 text-sm font-semibold border border-white/30 hover:bg-white/10 transition-colors rounded-full px-4 py-1.5">
                    Jelajahi <ChevronRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
