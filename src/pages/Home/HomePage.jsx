import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/section/Hero";
import CategoryCard from "../../components/cards/CategoryCard";
import QuizCard from "../../components/cards/QuizCard";
import FeatureCard from "../../components/cards/FeatureCard";
import CtaBanner from "../../components/cards/CtaBanner";

import Footer from "../../components/layout/Footer";

 function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">

      <main>
        <Hero />

        <CategoryCard />

        <QuizCard />

        <FeatureCard />

        <CtaBanner />
      </main >

    </div>
  );
}
export default HomePage;