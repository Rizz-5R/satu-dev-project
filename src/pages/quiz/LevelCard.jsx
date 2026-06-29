const LEVEL_META = {
  1: {
    title: 'Level 1',
    subtitle: 'Ulumul Qur\'an — Dasar',
    description: 'Pengertian, tokoh, dan metode tafsir',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    accent: 'emerald',
  },
  2: {
    title: 'Level 2',
    subtitle: 'Studi Hadis — Dasar',
    description: 'Sanad, matan, dan klasifikasi hadis',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    accent: 'sky',
  },
  3: {
    title: 'Level 3',
    subtitle: 'Studi Hadis — Lanjutan',
    description: 'Kutub al-Sittah, kritik hadis, dan Imam Al-Bukhari',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    accent: 'amber',
  },
};

const accentClasses = {
  emerald: {
    iconBg:   'bg-emerald-100 text-emerald-600',
    badge:    'bg-emerald-100 text-emerald-700',
    button:   'bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white shadow-sm hover:shadow-md',
    border:   'border-emerald-200',
    ring:     'focus-visible:ring-emerald-400',
    completed:'text-emerald-600',
  },
  sky: {
    iconBg:   'bg-sky-100 text-sky-600',
    badge:    'bg-sky-100 text-sky-700',
    button:   'bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white shadow-sm hover:shadow-md',
    border:   'border-sky-200',
    ring:     'focus-visible:ring-sky-400',
    completed:'text-sky-600',
  },
  amber: {
    iconBg:   'bg-amber-100 text-amber-600',
    badge:    'bg-amber-100 text-amber-700',
    button:   'bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white shadow-sm hover:shadow-md',
    border:   'border-amber-200',
    ring:     'focus-visible:ring-amber-400',
    completed:'text-amber-600',
  },
};

export default function LevelCard({ level, isUnlocked, isCompleted, onStart }) {
  const meta = LEVEL_META[level];
  const ac   = accentClasses[meta.accent];

  return (
    <div className={`
      relative rounded-2xl border-2 bg-white p-5
      transition-all duration-200
      ${isUnlocked
        ? `${ac.border} shadow-sm hover:shadow-md hover:-translate-y-0.5`
        : 'border-slate-100 opacity-60'
      }
    `}>
      {/* Completed ribbon */}
      {isCompleted && (
        <div className={`
          absolute -top-2.5 -right-2.5
          flex items-center gap-1
          ${ac.badge}
          text-xs font-semibold
          px-2.5 py-1 rounded-full
          border border-white shadow-sm
        `}>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Selesai
        </div>
      )}

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={`
          w-12 h-12 rounded-xl flex-shrink-0
          flex items-center justify-center
          ${isUnlocked ? ac.iconBg : 'bg-slate-100 text-slate-400'}
        `}>
          {isUnlocked ? meta.icon : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          )}
        </div>

        {/* Text content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="text-sm font-bold text-slate-800">{meta.title}</h3>
            {!isUnlocked && (
              <span className="text-xs text-slate-400 font-medium">🔒 Terkunci</span>
            )}
          </div>
          <p className="text-xs font-semibold text-slate-500 mb-1">{meta.subtitle}</p>
          <p className="text-xs text-slate-400 leading-relaxed">{meta.description}</p>
          <p className="text-xs text-slate-400 mt-1.5">3 soal pilihan ganda</p>
        </div>
      </div>

      {/* Action button */}
      {isUnlocked && (
        <button
          onClick={onStart}
          className={`
            mt-4 w-full py-2.5 rounded-xl text-sm font-semibold
            transition-all duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
            ${ac.button} ${ac.ring}
          `}
        >
          {isCompleted ? 'Ulangi Level' : 'Mulai'}
        </button>
      )}

      {!isUnlocked && (
        <div className="mt-4 w-full py-2.5 rounded-xl text-sm font-medium text-center text-slate-400 bg-slate-50 border border-slate-100">
          Selesaikan level sebelumnya
        </div>
      )}
    </div>
  );
}
