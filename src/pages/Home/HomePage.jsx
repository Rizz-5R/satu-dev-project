import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/section/Hero";
import CategoryCard from "../../components/cards/CategoryCard";

import Footer from "../../components/layout/Footer";

 function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">

      <main>
        <Hero />

        <CategoryCard />
      </main >

    </div>
  );
}
export default HomePage;