export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white/60 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #1B4D3E, #2D6A4F)",
                }}
              >
                <span className="text-white font-bold text-xs">
                  IQ
                </span>
              </div>

              <span className="font-bold text-white text-sm">
                IlmuQur'an
              </span>
            </div>

            <p className="text-xs leading-relaxed">
              Platform belajar studi Al-Qur'an dan Hadis secara
              sistematis dan terstruktur.
            </p>
          </div>

          {[
            {
              title: "Belajar",
              links: [
                "Al-Qur'an",
                "Hadis",
                "Tafsir",
                "Ulumul Hadis",
              ],
            },
            {
              title: "Jelajahi",
              links: [
                "Tokoh",
                "Kitab",
                "Timeline",
                "Istilah",
              ],
            },
            {
              title: "Lainnya",
              links: [
                "Tentang Kami",
                "Kebijakan Privasi",
                "Syarat & Ketentuan",
                "Hubungi Kami",
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <p className="font-semibold text-white text-sm mb-3">
                {col.title}
              </p>

              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <button className="hover:text-white transition-colors text-xs">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs">
            © 2026 IlmuQur'an. Hak cipta dilindungi.
          </p>

        </div>
      </div>
    </footer>
  );
}