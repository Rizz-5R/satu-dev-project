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
  const [activeIndex, setActiveIndex] = useState(null);

  const data = DetailMateri[slug];

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 80);
    return () => clearTimeout(timer);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <AlertCircle className="w-12 h-12 text-red-500" />
        <button onClick={() => navigate(-1)}>Kembali</button>
      </div>
    );
  }

  const baseTransition =
    "transition-all duration-1000 ease-[cubic-bezier(0.21,1.02,0.43,1.01)] transform";

  const hiddenState = "opacity-0 translate-y-6";
  const visibleState = "opacity-100 translate-y-0";

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <DetailMateriHero
          data={data}
          animate={animate}
          baseTransition={baseTransition}
          visibleState={visibleState}
          hiddenState={hiddenState}
        />

        <DetailMateriContent
          content={data.content}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
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