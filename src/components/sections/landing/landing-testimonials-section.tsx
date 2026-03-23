'use client';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Parallax } from 'swiper/modules';
import { employeesData, internsData } from '@/data';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Container } from '@/components/layout';
import Image from 'next/image';

export const LandingTestimonialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'employees' | 'interns'>(
    'employees',
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const currentData = activeTab === 'employees' ? employeesData : internsData;

  return (
    <section className="relative overflow-hidden bg-slate-950 py-12 lg:py-20">
      <Container>
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center gap-4"
          >
            <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 font-mono text-xs tracking-widest text-orange-500 uppercase">
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display mb-4 text-4xl font-bold tracking-tighter text-white md:text-5xl"
          >
            Voices of <span className="text-orange-500">Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="leading-relaxed text-slate-400 md:text-xl"
          >
            Discover the stories that define our culture, from the architects of
            our vision to the rising stars shaping our future. Hear firsthand
            experiences from our team, clients, and partners as they share the
            impact of our work, our values, and the collaborative spirit that
            drives everything we do. These stories reflect not just what we
            build, but who we are innovators, problem-solvers, and a community
            committed to excellence and growth.
          </motion.p>

          {/* Premium Filter Switcher */}
          <div className="mt-8 max-md:mx-auto md:ml-auto flex  rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-md w-fit">
            <button
              onClick={() => {
                setActiveTab('employees');
                setActiveIndex(0);
              }}
              className={`rounded-full px-8 py-3 font-mono text-sm tracking-widest uppercase transition-all duration-500 ${
                activeTab === 'employees'
                  ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Employees
            </button>
            <button
              onClick={() => {
                setActiveTab('interns');
                setActiveIndex(0);
              }}
              className={`rounded-full px-8 py-3 font-mono text-sm tracking-widest uppercase transition-all duration-500 ${
                activeTab === 'interns'
                  ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Interns
            </button>
          </div>
        </div>

        {/* Swiper Slider Container */}
        <div className="min-h-130 items-center lg:min-h-165 xl:min-h-142 relative flex">
          <Swiper
            key={activeTab} // Re-initialize when tab changes
            modules={[Autoplay, EffectFade, Navigation, Parallax]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            parallax={true}
            loop={true}
            speed={1000}
            watchSlidesProgress={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="h-full w-full"
          >
            {currentData.map((item, idx) => (
              <SwiperSlide key={`${activeTab}-${idx}`}>
                <div className="flex w-full cursor-grab flex-col items-center gap-8 md:gap-12 lg:flex-row lg:gap-24">
                  {/* Image Section - Hidden on Mobile */}
                  <div className="group relative hidden aspect-4/5 w-full cursor-pointer overflow-hidden rounded-2xl shadow-2xl shadow-orange-500/5 md:aspect-video md:rounded-3xl lg:block lg:aspect-4/5 lg:w-1/3">
                    <div
                      className="absolute inset-0"
                      data-swiper-parallax="30%"
                    >
                      <Image
                        fill
                        src={item.image}
                        alt={item.name}
                        className="object-cover object-top grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-40" />

                      {/* Hover Glow Effect */}
                      <div className="pointer-events-none absolute inset-0 bg-orange-500/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                      {/* Floating Metric Badge */}
                      <div
                        className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-2xl md:bottom-8 md:left-8 md:gap-3 md:rounded-2xl md:px-6 md:py-3"
                        data-swiper-parallax="-150"
                      >
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400 md:h-2 md:w-2" />
                        <span className="font-mono text-[10px] tracking-widest text-white uppercase md:text-xs">
                          {item.metric}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="relative flex w-full flex-col justify-center lg:w-2/3">
                    <div className="flex min-h-112.5 flex-col justify-center overflow-hidden md:min-h-100">
                      <div className="space-y-6 md:space-y-8">
                        <div
                          className="flex items-center gap-4"
                          data-swiper-parallax="-100"
                        >
                          <span className="font-mono text-xs tracking-[0.4em] text-orange-500 uppercase md:text-sm">
                            {item.tag}
                          </span>
                          <div className="h-px flex-1 bg-linear-to-r from-orange-500/30 to-transparent" />
                        </div>

                        <div data-swiper-parallax="-200">
                          <Quote className="h-8 w-8 text-orange-500/20 md:h-12 md:w-12" />
                        </div>

                        <h3
                          className="font-serif text-2xl leading-[1.2] tracking-tight text-slate-100 italic md:text-3xl md:leading-[1.15] "
                          data-swiper-parallax="-300"
                        >
                          &quot;{item.quote}&quot;
                        </h3>

                        <div
                          className="flex items-center gap-4 pt-2 md:pt-4"
                          data-swiper-parallax="-400"
                        >
                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-orange-500/30 md:h-16 md:w-16 lg:hidden">
                            <Image
                              fill
                              src={item.image}
                              alt={item.name}
                              className="object-cover object-top"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div>
                            <p className="mb-1 text-lg font-bold tracking-tight text-white md:text-2xl">
                              {item.name}
                            </p>
                            <p className="font-mono text-xs tracking-[0.2em] text-orange-500/60 uppercase md:text-sm">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Integrated Navigation Controls - Positioned outside Swiper but inside container */}
          <div className="absolute right-0 bottom-0 z-20 flex items-center gap-6 pt-4 max-md:w-full max-md:justify-between md:gap-8 lg:right-0 lg:w-2/3 lg:justify-between lg:pl-16">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2 font-mono text-xs tracking-widest md:text-sm">
                <span className="text-base font-bold text-white md:text-lg">
                  0{activeIndex + 1}
                </span>
                <span className="text-slate-600">/</span>
                <span className="text-slate-600">0{currentData.length}</span>
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/5 md:w-32">
                <motion.div
                  key={`${activeTab}-${activeIndex}-progress`}
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 8, ease: 'linear' }}
                  className="h-full bg-orange-500"
                />
              </div>
            </div>
            <div className="flex gap-2 md:gap-3">
              <button className="swiper-button-prev-custom group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 text-white transition-all duration-500 hover:border-orange-500 hover:bg-orange-500 hover:text-black md:h-14 md:w-14">
                <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1 md:h-6 md:w-6" />
              </button>
              <button className="swiper-button-next-custom group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 text-white transition-all duration-500 hover:border-orange-500 hover:bg-orange-500 hover:text-black md:h-14 md:w-14">
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1 md:h-6 md:w-6" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
