import React from 'react';
import { Hexagon, Triangle, Circle, Square, Box, Octagon } from 'lucide-react';

const companies = [
  { name: 'Acme Corp', icon: Hexagon },
  { name: 'GlobalTech', icon: Triangle },
  { name: 'Nexus Industries', icon: Circle },
  { name: 'Quantum Data', icon: Square },
  { name: 'Stellar Dynamics', icon: Box },
  { name: 'Horizon Cloud', icon: Octagon },
];

export const LandingTrustedBySection: React.FC = () => {
  const duplicatedCompanies = [...companies, ...companies, ...companies];
  return (
    <section className="overflow-hidden border-b border-slate-100 bg-white py-12">
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold tracking-wider text-slate-400 uppercase">
          Trusted by innovative teams worldwide
        </p>
      </div>

      <div className="group relative flex overflow-hidden">
        {/* Gradient Masks for smooth fade on edges */}
        <div className="absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent"></div>

        <div className="animate-marquee flex items-center whitespace-nowrap">
          {duplicatedCompanies.map((company, index) => {
            const Icon = company.icon;
            return (
              <div
                key={index}
                className="hover:text-primary-500 mx-12 flex cursor-pointer items-center gap-3 text-slate-400 opacity-60 grayscale transition-colors duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <Icon size={28} strokeWidth={1.5} />
                <span className="font-display text-xl font-semibold tracking-tight">
                  {company.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
