'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout';
import { stepsData } from '@/data/landing-page';

export const LandingMethodologySection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-12 text-white md:py-24">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden opacity-20">
        <div className="bg-primary-600 absolute -top-24 -right-24 h-96 w-96 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-orange-400 blur-[100px]"></div>
      </div>
      <Container className="relative z-10">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-primary-500 mb-3 text-sm font-semibold tracking-wide uppercase">
              Our Methodology
            </h2>
            <h3 className="font-display mb-4 text-4xl font-bold text-white md:text-5xl">
              How we build the future
            </h3>
            <p className="text-lg text-slate-400">
              At Brahma Byte Lab, we follow an agile, collaborative approach to
              deliver scalable and high-performance digital solutions that align
              with your business goals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {stepsData.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Connecting Line (Desktop) */}
              {index !== stepsData.length - 1 && (
                <div className="absolute top-8 left-full -z-10 hidden h-[1px] w-full bg-slate-800 lg:block">
                  <div className="bg-primary-500 h-full w-0 transition-all duration-700 ease-in-out group-hover:w-full"></div>
                </div>
              )}

              <div className="font-display group-hover:text-primary-500/20 mb-6 text-6xl font-bold text-slate-800 transition-colors duration-500">
                {step.number}
              </div>
              <h4 className="mb-3 text-xl font-bold text-white">
                {step.title}
              </h4>
              <p className="text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
