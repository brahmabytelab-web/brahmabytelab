'use client';
import React, { useEffect, useRef } from 'react';
import { Container } from '@/components/layout';
import { brahmabyteServicesData } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useScroll } from '@/providers/ScrollProvider';

export const ServicesListingSection: React.FC = () => {
  const { lenis } = useScroll();
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionRefs.current[hash] && lenis) {
        setTimeout(() => {
          lenis.scrollTo(sectionRefs.current[hash]!, {
            offset: -120,
            duration: 1.5,
          });
        }, 100);
      }
    };

    if (lenis) {
      scrollToHash();
    }

    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, [lenis]);

  return (
    <Container className="my-10 space-y-10 md:my-20 md:space-y-24">
      {brahmabyteServicesData.map((service, idx) => {
        const Icon = service.icon;
        const isEven = idx % 2 === 0;

        return (
          <div
            key={service.id}
            id={service.id}
            ref={(el: HTMLDivElement | null) => {
              sectionRefs.current[service.id] = el;
            }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} scroll-mt-24 items-center gap-8 lg:gap-20`}
          >
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2"
            >
              <div className="group relative hidden aspect-4/3 cursor-pointer overflow-hidden rounded-[2.5rem] shadow-2xl xl:block">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/10 transition-colors duration-500 group-hover:bg-slate-900/0"></div>
                <div className="absolute top-6 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 shadow-lg backdrop-blur-md">
                  <Icon size={28} className="text-primary-600" />
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="text-primary-600 text-lg font-bold tracking-widest uppercase">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="h-px flex-1 bg-slate-200"></div>
              </div>
              <h2 className="font-display mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
                {service.title}
              </h2>
              <div className="group relative mb-4 hidden aspect-4/3 cursor-pointer overflow-hidden rounded-[2.5rem] shadow-2xl max-xl:block">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/10 transition-colors duration-500 group-hover:bg-slate-900/0"></div>
                <div className="absolute top-6 left-6 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 shadow-lg backdrop-blur-md">
                  <Icon size={16} className="text-primary-600" />
                </div>
              </div>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                {service.description}
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:mb-10">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <div className="bg-primary-500 h-2 w-2 rounded-full" />
                    <span className="font-medium text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        );
      })}
    </Container>
  );
};
