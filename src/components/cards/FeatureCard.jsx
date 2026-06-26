export default function FeatureCard() {
  const features = [
    {
      icon: "📚",
      title: "Materi Perstruktur",
      desc: "Disusun sistematis dari dasar hingga lanjut",
    },
    {
      icon: "🗺️",
      title: "Visual Interaktif",
      desc: "Dilengkapi timeline, peta konsep, dan infografis menarik",
    },
    {
      icon: "✅",
      title: "Kuis & Evaluasi",
      desc: "Uji pemahaman kapan saja dengan kuis interaktif",
    },
    {
      icon: "📱",
      title: "Akses Dimana Saja",
      desc: "Belajar kapan saja dan di perangkat apa saja",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="text-center group">
            <div
              className="w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center text-2xl"
              style={{ background: "#1B4D3E0D" }}
            >
              {f.icon}
            </div>

            <p className="font-semibold text-gray-800 text-sm mb-1">
              {f.title}
            </p>

            <p className="text-xs text-gray-500 leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}