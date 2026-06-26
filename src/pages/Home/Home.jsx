import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/section/Hero";

import CategoryCard from "../../components/cards/CategoryCard";
import LearningCard from "../../components/cards/LearningCard";
import TimeLine from "../../components/cards/TimeLine";
import Tokoh from "../../components/cards/Tokoh";
import Kitab from "../../components/cards/Kitab";
import QuizCard from "../../components/cards/QuizCard";
import FeatureCard from "../../components/cards/FeatureCard";
import CtaBanner from "../../components/cards/CtaBanner";

import Footer from "../../components/layout/Footer";

 function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />

      <main>
        <Hero />

        <CategoryCard />

        {/* Continue Learning sits between categories and timeline */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <LearningCard />
        </section>

        <TimeLine />

        <Tokoh />

        <Kitab />

        <QuizCard />

        <FeatureCard />

        <CtaBanner />
      </main >

      <Footer />
    </div>
  );
}
export default Home;