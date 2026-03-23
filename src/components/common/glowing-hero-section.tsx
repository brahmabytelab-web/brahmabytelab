import React from 'react';

export const GlowingHeroSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      <div className="pointer-events-none absolute top-0 left-1/2 h-100 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[120px]"></div>
      <div className="relative z-10">{children}</div>
    </section>
  );
};
