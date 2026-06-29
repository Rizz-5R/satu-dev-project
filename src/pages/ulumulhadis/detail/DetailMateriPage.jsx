import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import DetailMateri from "../../../data/hadis/DetailMateri.json";
import { DetailMateriHero } from "../../../components/hadis/DetailMateriHero";
import { DetailMateriContent } from "../../../components/hadis/DetailMateriContent";
import { DetailMateriFooter } from "../../../components/hadis/DetailMateriFooter";

export function DetailMateriPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const data = DetailMateri[slug];

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 80);
    return () => clearTimeout(timer);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <h2 className="text-xl font-bold text-slate-800 mb-2">Materi Tidak Ditemukan</h2>
        <button onClick={() => navigate(-1)} className="text-sm font-semibold text-blue-600 hover:underline cursor-pointer">
          Kembali ke Menu Utama
        </button>
      </div>
    );
  }

  const baseTransition = "transition-all duration-1000 ease-[cubic-bezier(0.21,1.02,0.43,1.01)] transform";
  const hiddenState = "opacity-0 translate-y-6";
  const visibleState = "opacity-100 translate-y-0";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12">
        <DetailMateriHero
          data={data}
          animate={animate}
          baseTransition={baseTransition}
          visibleState={visibleState}
          hiddenState={hiddenState}
        />
        <DetailMateriContent
          content={data.content}
          animate={animate}
          baseTransition={baseTransition}
        />
        <DetailMateriFooter
          animate={animate}
          baseTransition={baseTransition}
          visibleState={visibleState}
          hiddenState={hiddenState}
        />
      </main>
    </div>
  );
}