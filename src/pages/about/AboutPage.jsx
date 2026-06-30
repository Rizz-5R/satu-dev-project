import teamData from './comp/teamData.json';
import Developercard from './comp/Developercard';
import Missionitem from './comp/Missionitem';

const IconBook = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const IconUsers = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8zm6 3c0-1.657-2.686-3-6-3s-6 1.343-6 3" />
  </svg>
);

const IconDevice = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconCheck = (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// ── Static content (could be moved to JSON later if it needs to scale) ─────
const MISSION_ITEMS = [
  {
    icon: IconBook,
    text: 'Menyajikan materi Ulumul Qur\'an dan Ulumul Hadis secara terstruktur, ringkas, dan mudah dipahami oleh berbagai kalangan.',
  },
  {
    icon: IconUsers,
    text: 'Menjembatani kajian akademis dengan kebutuhan belajar mandiri mahasiswa, santri, dan masyarakat umum.',
  },
  {
    icon: IconDevice,
    text: 'Menghadirkan pengalaman belajar digital yang interaktif melalui modul bacaan, ensiklopedia tokoh & kitab, serta evaluasi quiz bertingkat.',
  },
  {
    icon: IconCheck,
    text: 'Menjaga akurasi keilmuan dengan merujuk pada sumber-sumber klasik dan kitab-kitab muktabar dalam tradisi keilmuan Islam.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ── 1. Hero: Nama Website */}
        <section className="text-center mb-16 sm:mb-20">
          <div
            className="
              inline-flex items-center gap-2
              bg-primary-50 text-primary-700
              text-xs font-medium
              px-3 py-1.5 rounded-full
              mb-5
            "
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Tentang Suqura
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-secondary-900 tracking-tight mb-4">
            Suqura
          </h1>

          <p className="font-body text-lg text-secondary-600 leading-relaxed max-w-2xl mx-auto">
            Media Pembelajaran <span className="font-semibold text-secondary-800">Ulumul Qur'an</span> dan{' '}
            <span className="font-semibold text-secondary-800">Ulumul Hadis</span> secara sistematis,
            terstruktur, dan interaktif berdasarkan kurikulum yang telah disusun oleh para pakar dan ulama{' '}
          </p>
        </section>

        {/* ── 2. Visi & Misi ─────────────────────────────────────────── */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-secondary-700 mb-2">
              Visi &amp; Misi
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Visi Card */}
            <div className="bg-white rounded-2xl border border-secondary-200 shadow-card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary-900">Visi</h3>
              </div>
              <p className="font-body text-sm text-secondary-700 leading-relaxed">
                Menjadi platform belajar digital terpercaya yang menghadirkan kajian
                Ulumul Qur'an dan Ulumul Hadis secara ringkas, terstruktur, dan mudah
                diakses oleh siapa pun, kapan pun, dan di mana pun.
              </p>
            </div>

            {/* Misi Card */}
            <div className="bg-white rounded-2xl border border-secondary-200 shadow-card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary-900">Misi</h3>
              </div>
              <ul className="space-y-4">
                {MISSION_ITEMS.map((item, i) => (
                  <Missionitem key={i} icon={item.icon} text={item.text} />
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* ── 3. Profil Pengembang  */}
        <section>
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-secondary-700 mb-2">
              Profil Pengembang
            </h2>
            <p className="font-body text-sm text-secondary-400 max-w-md mx-auto">
              Tim yang membangun dan mengembangkan Suqura.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamData.team.map((dev) => (
              <Developercard
                key={dev.id}
                name={dev.name}
                role={dev.role}
                initials={dev.initials}
                bio={dev.bio}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}