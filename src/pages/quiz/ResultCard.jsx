/**
 * ResultCard.jsx
 * Shown after a level is completed.
 * Displays score, pass/fail status, and appropriate action buttons.
 */

const ScoreRing = ({ score, total }) => {
  const pct     = (score / total) * 100;
  const radius  = 40;
  const circ    = 2 * Math.PI * radius;
  const dash    = (pct / 100) * circ;
  const isPerfect = score === total;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
        {/* Track */}
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#f1f5f9" strokeWidth="8" />
        {/* Progress */}
        <circle
          cx="50" cy="50" r={radius}
          fill="none"
          stroke={isPerfect ? '#10b981' : score >= total / 2 ? '#f59e0b' : '#ef4444'}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circ}`}
          style={{ transition: 'stroke-dasharray 0.8s ease' }}
        />
      </svg>
      {/* Center text */}
      <div className="absolute flex flex-col items-center">
        <span className={`text-2xl font-bold ${isPerfect ? 'text-emerald-600' : 'text-slate-700'}`}>
          {score}
        </span>
        <span className="text-xs text-slate-400 font-medium">/{total}</span>
      </div>
    </div>
  );
};

const StatPill = ({ label, value, color }) => (
  <div className={`flex-1 rounded-xl py-3 px-4 text-center ${color}`}>
    <p className="text-xl font-bold">{value}</p>
    <p className="text-xs font-medium mt-0.5 opacity-80">{label}</p>
  </div>
);

export default function ResultCard({
  level,
  score,
  total,
  isPassed,
  isLastLevel,
  onNextLevel,
  onRetry,
  onHome,
}) {
  const wrongCount = total - score;

  return (
    <div className="w-full text-center">
      {/* Level badge */}
      <div className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
        Level {level} selesai
      </div>

      {/* Score ring */}
      <div className="flex justify-center mb-4">
        <ScoreRing score={score} total={total} />
      </div>

      {/* Score label */}
      <h2 className="text-lg font-bold text-slate-800 mb-1">Skor</h2>
      <p className={`text-3xl font-extrabold mb-6 ${isPassed ? 'text-emerald-600' : 'text-amber-500'}`}>
        {score} / {total}
      </p>

      {/* Stat pills */}
      <div className="flex gap-3 mb-6">
        <StatPill label="Benar" value={score}      color="bg-emerald-50 text-emerald-700" />
        <StatPill label="Salah" value={wrongCount} color="bg-red-50 text-red-500" />
      </div>

      {/* Pass or fail messaging */}
      {isPassed ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6 text-left">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-sm font-semibold text-emerald-700">
              {isLastLevel ? 'Luar biasa! Semua level selesai.' : `Level ${level + 1} telah terbuka!`}
            </p>
          </div>
          <p className="text-xs text-emerald-600 pl-7">
            {isLastLevel
              ? 'Kamu telah menguasai seluruh materi quiz Suqura.'
              : 'Jawab semua soal dengan benar untuk membuka level berikutnya.'
            }
          </p>
        </div>
      ) : (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-left">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-sm font-semibold text-amber-700">Level belum terbuka</p>
          </div>
          <p className="text-xs text-amber-600 pl-7">
            Jawablah seluruh soal dengan benar untuk membuka level berikutnya.
          </p>
        </div>
      )}

      {/* Action buttons */}
      <div className="space-y-3">
        {isPassed && !isLastLevel && (
          <button
            onClick={onNextLevel}
            className="
              w-full py-3 rounded-xl text-sm font-semibold
              bg-emerald-500 text-white
              hover:bg-emerald-600 active:bg-emerald-700
              shadow-sm hover:shadow-md
              transition-all duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
              flex items-center justify-center gap-2
            "
          >
            Lanjut ke Level {level + 1}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        )}

        <button
          onClick={onRetry}
          className="
            w-full py-3 rounded-xl text-sm font-semibold
            bg-white text-slate-700
            border-2 border-slate-200
            hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700
            transition-all duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2
          "
        >
          Ulangi Level {level}
        </button>

        <button
          onClick={onHome}
          className="
            w-full py-3 rounded-xl text-sm font-medium
            text-slate-500
            hover:text-slate-700
            transition-colors duration-150
            focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2
          "
        >
          Kembali ke Pilihan Level
        </button>
      </div>
    </div>
  );
}
