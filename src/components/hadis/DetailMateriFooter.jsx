import { Clock } from "lucide-react";

export function DetailMateriFooter({ animate, baseTransition, visibleState, hiddenState }) {
  return (
    <div className={`${baseTransition} delay-[850ms] ${animate ? visibleState : hiddenState} mt-12 flex justify-center`}>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium text-blue-500">
        <Clock className="w-3.5 h-3.5" />
        Selesai membaca materi ini dalam waktu ±3 menit
      </div>
    </div>
  );
}