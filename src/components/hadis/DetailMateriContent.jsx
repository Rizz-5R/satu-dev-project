export function DetailMateriContent({
  content,
  activeIndex,
  setActiveIndex
}) {
  if (activeIndex === null) {
    return (
      <>
        <style>
          {`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(16px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>

        <div className="space-y-3">
          {content.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="
                w-full text-left bg-white rounded-2xl p-4 border-l-4 border-l-blue-600 shadow-sm
                cursor-pointer opacity-0
                animate-[fadeInUp_0.8s_ease-out_forwards]
                hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                transition-all duration-500
              "
              style={{ animationDelay: `${index * 250}ms` }}
            >
              <h3 className="font-bold text-slate-800">
                {item.subTitle}
              </h3>
            </button>
          ))}
        </div>
      </>
    );
  }

  const item = content[activeIndex];

  return (
    <div className="space-y-6">
      <button
        onClick={() => setActiveIndex(null)}
        className="
          text-blue-600 font-semibold cursor-pointer
          hover:text-blue-700 transition-all duration-300
        "
      >
        ← Lihat semua bagian
      </button>

      <div className="bg-blue rounded-2xl p-6 shadow-sm border-l-4 border-l-blue-600">
        <h3 className="text-xl font-bold mb-3">{item.subTitle}</h3>
        <p className="text-slate-600 leading-relaxed">{item.text}</p>
      </div>

<div className="flex justify-between">
  <button
    disabled={activeIndex === 0}
    onClick={() => setActiveIndex(activeIndex - 1)}
    className="
      px-5 py-2.5 rounded-xl
      bg-blue-600 text-white font-bold
      border border-blue-600
      cursor-pointer
      transition-all duration-300
      hover:bg-blue-800 hover:border-blue-800
      hover:shadow-lg hover:-translate-y-0.5
      disabled:opacity-30 disabled:cursor-not-allowed
    "
  >
    Sebelumnya
  </button>

  <button
    disabled={activeIndex === content.length - 1}
    onClick={() => setActiveIndex(activeIndex + 1)}
    className="
      px-5 py-2.5 rounded-xl
      bg-blue-600 text-white font-bold
      border border-blue-600
      cursor-pointer
      transition-all duration-300
      hover:bg-blue-800 hover:border-blue-800
      hover:shadow-lg hover:-translate-y-0.5
      disabled:opacity-30 disabled:cursor-not-allowed
    "
  >
    Selanjutnya
  </button>
</div>
    </div>
  );
}