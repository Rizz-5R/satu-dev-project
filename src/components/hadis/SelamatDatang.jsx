export function SelamatDatang() {
  return (
    <>
      <style>{`
        @keyframes slideInDot {
          0%   { opacity: 0; transform: rotate(45deg) translateX(-16px); }
          20%  { opacity: 1; transform: rotate(45deg) translateX(0px); }
          70%  { opacity: 1; transform: rotate(45deg) translateX(0px); }
          90%  { opacity: 0; transform: rotate(45deg) translateX(-16px); }
          100% { opacity: 0; transform: rotate(45deg) translateX(-16px); }
        }
      `}</style>

      <div className="flex items-center gap-3.5">
        <div
          className="w-2 h-2 bg-[#B88E2F]"
          style={{ animation: "slideInDot 3s ease-in-out infinite", transform: "rotate(45deg)" }}
        />
        <span
          className="italic text-2xl text-[#B88E2F] tracking-wider whitespace-nowrap"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Selamat Datang
        </span>
        <div
          className="w-2 h-2 bg-[#B88E2F]"
          style={{ animation: "slideInDot 3s ease-in-out infinite reverse", transform: "rotate(45deg)" }}
        />
      </div>
    </>
  );
}