import QuizIcon from "../section/QuizIcon";
import GridIcon from "../section/GridIcon";
import ClockIcon from "../section/ClockIcon";

export default function QuizCard() {
  const quizzes = [
    { title: "Sejarah Nuzulul Qur'an", soal: 10, menit: 5 },
    { title: "Musthalah Hadis Dasar", soal: 15, menit: 7 },
    { title: "Metode Kritik Hadis", soal: 10, menit: 5 },
  ];

  return (
    <section className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-1"
              style={{ color: "#D4A853" }}
            >
              Uji Pemahaman
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Quiz Terbaru
            </h2>
          </div>

          <button
            className="text-sm font-medium hover:underline"
            style={{ color: "#1B4D3E" }}
          >
            Lihat semua
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {quizzes.map((q) => (
            <div
              key={q.title}
              className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#1B4D3E15" }}
              >
                <QuizIcon />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-sm">
                  {q.title}
                </p>

                <div className="flex items-center gap-3 mt-0.5 text-[11px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <GridIcon />
                    {q.soal} Soal
                  </span>

                  <span className="flex items-center gap-1">
                    <ClockIcon />
                    {q.menit} Menit
                  </span>
                </div>
              </div>

              <button
                className="text-xs font-bold text-white px-4 py-1.5 rounded-full flex-shrink-0 hover:opacity-90 transition-opacity"
                style={{ background: "#1B4D3E" }}
              >
                Mulai
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}