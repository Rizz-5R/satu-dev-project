import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import modules from "../../data/ulumulquran/modules.json";

const moduleFiles = import.meta.glob("../../data/ulumulquran/modules/*.json", { eager: true });
const lessonFiles = import.meta.glob("../../data/ulumulquran/lesson/**/*.json", { eager: true });

export default function LessonQuranPage() {
  const { moduleSlug, lessonSlug } = useParams();
  const [lesson, setLesson] = useState(null);
  const [nav, setNav] = useState({ prev: null, next: null, moduleNext: null });

  useEffect(() => {
    const foundModule = modules.find((m) => m.slug === moduleSlug);
    if (!foundModule) return;

    const moduleData = moduleFiles[`../../data/ulumulquran/modules/${foundModule.id}.json`]?.default;
    if (!moduleData) return;

    const currentIndex = moduleData.lessons.findIndex((l) => l.slug === lessonSlug);
    if (currentIndex === -1) return;

    const lessonMeta = moduleData.lessons[currentIndex];
    const lessonData = lessonFiles[`../../data/ulumulquran/lesson/${foundModule.id}/${lessonMeta.id}.json`]?.default;

    if (lessonData) {
      setLesson(lessonData);
      const completed = JSON.parse(localStorage.getItem("completedLessons") || "[]");
      if (!completed.includes(lessonMeta.id)) {
        localStorage.setItem("completedLessons", JSON.stringify([...completed, lessonMeta.id]));
      }
    }

    setNav({
      prev: moduleData.lessons[currentIndex - 1] || null,
      next: moduleData.lessons[currentIndex + 1] || null,
      moduleNext: moduleData.next || null,
    });
  }, [moduleSlug, lessonSlug]);

  if (!lesson) return <div className="min-h-screen flex items-center justify-center text-slate-600">Memuat materi...</div>;

  return (
    <main className="bg-[#FAFAF7] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-14">
        {/* BACK LINK */}
        <Link to={`/modules/${moduleSlug}`} className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#1B4D3E] transition">
          ← Kembali ke Daftar Materi
        </Link>

        {/* HEADER */}
        <header className="mt-10">
          <div className="inline-flex rounded-full px-4 py-1.5 bg-[#1B4D3E10] text-[#1B4D3E] text-sm font-medium">{lesson.id}</div>
          <h1 className="mt-6 text-5xl font-black text-slate-900 tracking-tight leading-tight">{lesson.title}</h1>
          <div className="mt-8 w-20 h-[3px] rounded-full bg-[#D4A853]" />
        </header>

        {/* CONTENT AREA */}
        <article className="mt-14">
          <div className="space-y-8">
            {lesson.content?.map((block, index) => (
              <BlockRenderer key={index} block={block} />
            ))}
          </div>
        </article>

        {/* FOOTER NAVIGASI */}
        <footer className="mt-20 pt-10 border-t border-slate-200 flex justify-between items-center">
          <NavButton to={nav.prev ? `/modules/${moduleSlug}/${nav.prev.slug}` : `/modules/${moduleSlug}`} label={nav.prev ? `← ${nav.prev.title}` : "Kembali"} secondary={true} />

          {nav.next ? (
            <NavButton to={`/modules/${moduleSlug}/${nav.next.slug}`} label={`${nav.next.title} →`} />
          ) : nav.moduleNext ? (
            <NavButton to={`/modules/${nav.moduleNext.slug}`} label={`Bab Selanjutnya →`} />
          ) : (
            <div className="text-slate-400 font-medium text-sm">Selesai</div>
          )}
        </footer>
      </section>
    </main>
  );
}

function BlockRenderer({ block }) {
  switch (block.type) {
    case "heading":
      return <h2 className="text-3xl font-bold text-slate-900 mt-10 mb-4">{block.value}</h2>;
    case "paragraph":
      return <p className="text-[18px] leading-[2.1] text-slate-700 text-justify">{block.value}</p>;
    case "list":
      return (
        <ul className="space-y-4 my-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="mt-2 w-2 h-2 rounded-full bg-[#D4A853] flex-shrink-0" />
              <p className="text-slate-700 leading-8">{item}</p>
            </li>
          ))}
        </ul>
      );
    case "note":
      return (
        <div className="my-10 border-l-4 border-[#D4A853] bg-[#D4A85310] p-6 rounded-r-xl">
          <p className="text-[#1B4D3E] font-medium flex gap-3">
            <span className="font-bold">💡 Catatan:</span> {block.value}
          </p>
        </div>
      );
    default:
      return null;
  }
}

function NavButton({ to, label, secondary = false }) {
  return (
    <Link
      to={to}
      className={`
        px-6 py-3 rounded-full text-sm font-semibold transition-all
        ${secondary ? "border border-slate-300 text-slate-600 hover:border-[#1B4D3E] hover:text-[#1B4D3E]" : "bg-[#1B4D3E] text-white hover:bg-[#153a2f] shadow-md"}
      `}
    >
      {label}
    </Link>
  );
}
