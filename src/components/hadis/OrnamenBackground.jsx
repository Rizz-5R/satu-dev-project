export function OrnamenBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FCFBF9_0%,#EFEAE0_100%)] pointer-events-none" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.07] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1609599006353-e629abacfeae?q=80&w=1200&auto=format&fit=crop')`
        }}
      />
      <div className="absolute inset-x-6 top-6 bottom-6 border border-[#DFD8C9] rounded-t-[120px] md:rounded-t-[240px] pointer-events-none opacity-80 z-10" />
      <div className="absolute inset-x-10 top-10 bottom-10 border border-[#E3DCCE]/60 rounded-t-[100px] md:rounded-t-[220px] pointer-events-none opacity-50 z-10" />
    </>
  );
}