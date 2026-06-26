import BookIcon from "../section/BookIcon";

export default function LearningCard() {
  const items = [
    { title: "Nuzulul Qur'an", category: "Al-Qur'an", progress: 70 },
    { title: "Pengertian Ulumul Hadis", category: "Hadis", progress: 40 },
    { title: "Metode Tafsir Tahlili", category: "Al-Qur'an", progress: 20 },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-900">Lanjutkan Belajar</h3>
        <button
          className="text-xs font-medium hover:underline"
          style={{ color: "#1B4D3E" }}
        >
          Lihat semua
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center"
              style={{ background: "#1B4D3E15" }}
            >
              <BookIcon />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">
                {item.title}
              </p>

              <p className="text-[11px] text-gray-400">
                {item.category}
              </p>

              <div className="mt-1.5 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${item.progress}%`,
                    background: "#1B4D3E",
                  }}
                />
              </div>
            </div>

            <span className="text-xs font-semibold text-gray-500 flex-shrink-0">
              {item.progress}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}