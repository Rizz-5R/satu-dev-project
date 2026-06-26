export default function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div
        className="rounded-3xl p-10 text-center text-white relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0F2D20, #1B4D3E)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #D4A853 0%, transparent 50%), radial-gradient(circle at 80% 50%, #D4A853 0%, transparent 50%)",
          }}
        />

        <div className="relative">
          <p className="text-amber-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Mulai Sekarang
          </p>

          <h2 className="text-3xl font-bold mb-3">
            Siap Memperdalam Ilmu?
          </h2>

          <p className="text-white/60 text-sm max-w-md mx-auto mb-8">
            Bergabunglah bersama ribuan penuntut ilmu yang telah belajar
            Al-Qur'an dan Hadis secara sistematis.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button
              className="px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
              style={{
                background: "#D4A853",
                color: "#1A1A1A",
              }}
            >
              Daftar Gratis
            </button>

            <button className="px-6 py-3 rounded-full font-semibold text-sm bg-white/10 hover:bg-white/20 transition-colors border border-white/20">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}