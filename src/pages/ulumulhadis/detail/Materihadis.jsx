import { useEffect, useState, useRef } from "react";
import { MateriHero } from "../../../components/hadis/MateriHero";
import { MateriCards } from "../../../components/hadis/MateriCard";
import { InfoBanner } from "../../../components/hadis/InfoBanner";

function useScrollAnimation() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export function Materihadis() {
  const [animate, setAnimate] = useState(false);
  const { ref: sectionRef, visible: sectionVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const baseTransition = "transition-all duration-1000 ease-[cubic-bezier(0.21,1.02,0.43,1.01)] transform";
  const hiddenState = "opacity-0 translate-y-6";
  const visibleState = "opacity-100 translate-y-0";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 flex flex-col">
        <MateriHero
          animate={animate}
          baseTransition={baseTransition}
          visibleState={visibleState}
          hiddenState={hiddenState}
        />
        <MateriCards
          sectionRef={sectionRef}
          sectionVisible={sectionVisible}
        />
        <InfoBanner
          animate={animate}
          baseTransition={baseTransition}
          visibleState={visibleState}
          hiddenState={hiddenState}
        />
      </main>
    </div>
  );
}