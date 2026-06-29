const ProgressBar = ({ current, total }) => {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-slate-500">Progress</span>
        <span className="text-xs font-semibold text-emerald-600">{current}/{total} soal</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
        />
      </div>
    </div>
  );
};

export default function QuizCard({
  level,
  currentQuestion,   // 0-indexed
  totalQuestions,
  phase,             // 'question' | 'feedback' | 'result'
  children,
  onBack,
}) {
  const displayQuestion = currentQuestion + 1; // human-readable

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Back button + level tag */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="
            inline-flex items-center gap-1.5
            text-sm text-slate-500 font-medium
            hover:text-emerald-600
            transition-colors duration-150
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-1 rounded-lg px-1
          "
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Keluar
        </button>

        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Level {level}
        </span>
      </div>

      {/* Progress bar — only during question/feedback phase */}
      {phase !== 'result' && (
        <ProgressBar
          current={phase === 'feedback' ? displayQuestion : displayQuestion - 1}
          total={totalQuestions}
        />
      )}

      {/* Main card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
        {children}
      </div>
    </div>
  );
}
