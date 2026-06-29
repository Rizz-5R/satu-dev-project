export function DetailMateriContent({ content, animate, baseTransition }) {
  return (
    <div className="space-y-8">
      {content && content.map((item, index) => (
        <div
          key={index}
          className={`${baseTransition} bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: `${450 + index * 150}ms` }}
        >
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2.5">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full block" />
            {item.subTitle}
          </h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}