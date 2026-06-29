import { Clock } from "lucide-react";

export function DetailMateriFooter({ animate, baseTransition, visibleState, hiddenState }) {
  return (
    <div className={`${baseTransition} delay-[850ms] ${animate ? visibleState : hiddenState} mt-12 flex items-center justify-center gap-2 text-xs font-medium text-slate-400`}>
      <Clock className="w-4 h-4" />
      Selesai membaca materi ini dalam waktu ±3 menit
    </div>
  );
}