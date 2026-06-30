import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "../cardhome/Icons";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
  { name: "Beranda", path: "/" },
  { name: "Qur'an", path: "/quran" },
  { name: "Hadis", path: "/hadispage" },
  { name: "Quiz", path: "/quizpage"},
  { name: "About", path: "/aboutpage" },
];

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
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
  {navItems.map((item) => (
    <NavLink
      key={item.name}
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-1 transition-colors ${
          isActive
            ? "text-green-800 font-semibold"
            : "text-gray-600 hover:text-green-800"
        }`
      }
    >
      {item.name}

    </NavLink>
  ))}
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
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="text-left hover:text-green-800"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}