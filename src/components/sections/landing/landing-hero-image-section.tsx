'use client';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import Image from 'next/image';
export const LandingHeroImageSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="relative mx-auto mt-12 max-w-5xl"
    >
      {/* Mobile Glow Effect */}
      <div className="from-primary-500/30 absolute inset-0 rounded-[2.5rem] bg-linear-to-tr to-orange-400/30 blur-2xl sm:hidden"></div>

      <div className="group relative aspect-4/3 w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl sm:aspect-aspect-video sm:rounded-3xl sm:border sm:border-slate-200/50 md:aspect-2.5/1">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt="Brahmabyte Team Collaboration"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          fill
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
        <div className="absolute bottom-6 left-6 pr-6 text-left md:bottom-8 md:left-8">
          <div className="font-display mb-1 text-2xl font-bold text-white md:text-3xl">
            Crafted by Experts
          </div>
          <div className="text-sm font-medium text-slate-200 md:text-base">
            Our elite engineering team in action
          </div>
        </div>
      </div>

      {/* Floating Elements - Hidden on mobile, visible on lg */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="group absolute xl:top-1/4 top-4 -left-8 xl:-left-12 z-20 hidden h-64 w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl lg:block"
      >
        <Image
          fill
          src="/images/landing-page/pooja-budathoki.png"
          alt="Senior Engineer"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/60 to-transparent p-4">
          <span className="text-xs font-bold tracking-wider text-white uppercase">
            Engineering
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="group absolute -right-8 -bottom-12 z-20 hidden h-56 w-56 overflow-hidden rounded-full border-4 border-white shadow-xl lg:block"
      >
        <Image
          fill
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80"
          alt="Product Manager"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="bg-primary-900/10 absolute inset-0 transition-colors duration-300 group-hover:bg-transparent"></div>
      </motion.div>

      {/* Floating Badge - Now visible on mobile too, repositioned */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute -top-4 -right-2 z-30 flex origin-top-right scale-90 items-center gap-3 rounded-xl border border-slate-100 bg-white/95 p-3 shadow-xl backdrop-blur-sm sm:-top-6 sm:right-12 sm:scale-100 sm:gap-4 sm:p-4"
      >
        <div className="bg-primary-100 text-primary-600 flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12">
          <Cpu size={20} className="sm:h-6 sm:w-6" />
        </div>
        <div className="text-left">
          <div className="text-sm font-bold text-slate-900">AI-Powered</div>
          <div className="text-[10px] text-slate-500 sm:text-xs">
            Smart integrations
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
