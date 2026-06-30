import { BookOpen, ArrowRight, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export function HadisButtons({ animate, baseTransition, visibleState, hiddenState }) {
  return (
    <div
      className={`${baseTransition} delay-[800ms] ${animate ? visibleState : hiddenState} flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto`}
    >
      <Link to="/materihadis" className="w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-[#0b2240] hover:bg-[#123057] hover:cursor-pointer text-white text-sm font-medium px-8 py-3.5 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#0b2240]/25 hover:shadow-2xl hover:shadow-[#0b2240]/30 active:scale-[0.99]">
          <BookOpen className="w-4 h-4" />
          Mulai Belajar
          <ArrowRight className="w-4 h-4" />
        </button>
      </Link>
    </div>
  );
}