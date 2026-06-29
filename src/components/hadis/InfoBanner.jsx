import { Info } from "lucide-react";

export function InfoBanner({ animate, baseTransition, visibleState, hiddenState }) {
  return (
    <section
      className={`mb-16 bg-blue-50/50 border border-blue-100/60 rounded-xl p-4 flex items-start gap-4 ${baseTransition} delay-[1000ms] ${animate ? visibleState : hiddenState}`}
    >
      <div className="p-2 bg-white rounded-full border border-blue-100 shadow-sm shrink-0">
        <Info className="w-5 h-5 text-blue-500" />
      </div>
      <p className="text-xs md:text-sm text-slate-600 leading-relaxed pt-1.5 font-medium">
        Pelajari setiap materi dengan berurutan agar pemahamanmu lebih terstruktur dan menyeluruh.
      </p>
    </section>
  );
}