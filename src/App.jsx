import { useState } from "react";
import { Hadispage } from "./pages/ulumulhadis/Hadispage";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailMateriPage } from "./pages/ulumulhadis/detail/DetailMateriPage";
import { Materihadis } from "./pages/ulumulhadis/detail/Materihadis";
import QuranPage from "./pages/ulumulquran/page/QuranPage";
import PengantarPage from "./pages/ulumulquran/page/pengantar/PengantarPage";
import PengantarContentPage from "./pages/ulumulquran/page/pengantar/PengantarContentPage";
import CabangPage from "./pages/ulumulquran/page/cabang/CabangPage";
import CabangContentPage from "./pages/ulumulquran/page/cabang/CabangContentPage";
import TokohPage from "./pages/ulumulquran/page/tokoh/TokohPage";
import TokohContentPage from "./pages/ulumulquran/page/tokoh/TokohContentPage";
import WelcomePage from "./pages/ulumulquran/WelocomePage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hadispage" element={<Hadispage />} />
        <Route path="/materihadis" element={<Materihadis />} />
        <Route path="/materi/:slug" element={<DetailMateriPage />} />
        {/* halam quran */}
        <Route path="/quranpage" element={<WelcomePage />} />
        <Route path="/quran" element={<QuranPage />} />
        <Route path="/quran/pengantar" element={<PengantarPage />} />
        <Route path="/quran/pengantar/:id" element={<PengantarContentPage />} />
        <Route path="/quran/cabang" element={<CabangPage />} />
        <Route path="/quran/cabang/:id" element={<CabangContentPage />} />
        <Route path="quran/tokoh" element={<TokohPage />} />
        <Route path="quran/tokoh/:id" element={<TokohContentPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
