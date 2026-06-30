import React from 'react';
import { Home } from 'lucide-react'; 
import { Link } from 'react-router-dom';

export function BacktoHome() {
  return (
    <div className="mt-6 flex justify-center">
    
    <Link to={"/"}>
      <button 
        className="hover:cursor-poiter flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-800 transition-all duration-200 group ease-in-out "
        >
        <Home className="w-4 h-4 transition-transform group-hover:scale-110 " />
        <span>Kembali ke Beranda</span>
      </button>
          </Link>
    </div>
  );
}