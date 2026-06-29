import { useState } from "react";
import SearchIcon from "../cardhome/Icons";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #1B4D3E, #2D6A4F)" }}
            >
              <span className="text-white font-bold text-sm">SQH</span>
            </div>
            <div className="leading-tight">
              <p className="font-bold text-gray-900 text-sm">SUQURA</p>
              
            </div>
          </div>

          {/* Nav Links - desktop */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            {["Beranda", "Belajar", "Jelajahi", "Quiz", "About"].map(
              (item, i) => (
                <button
                  key={item}
                  className={`flex items-center gap-1 hover:text-green-800 transition-colors ${
                    i === 0 ? "text-green-800 font-semibold" : ""
                  }`}
                >
                  {item}
                  {(i === 1 || i === 2) && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="w-3 h-3 mt-0.5"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              )
            )}
          </div>

          {/* Right section */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 text-sm text-gray-400 w-48">
              <SearchIcon />
              <span>Cari materi, tokoh...</span>
            </div>

            <button
              className="text-sm font-semibold text-white px-4 py-1.5 rounded-full transition-opacity hover:opacity-90"
              style={{ background: "#1B4D3E" }}
            >
              Login
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-500"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-3 text-sm font-medium text-gray-700">
          {["Beranda", "Belajar", "Jelajahi", "Timeline", "Quiz"].map((item) => (
            <button
              key={item}
              className="text-left hover:text-green-800"
            >
              {item}
            </button>
          ))}

          <div className="flex gap-2 pt-2">
            <button
              className="flex-1 text-white rounded-full py-1.5 text-sm font-semibold"
              style={{ background: "#1B4D3E" }}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}