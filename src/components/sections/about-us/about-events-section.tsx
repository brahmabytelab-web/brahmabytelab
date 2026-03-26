'use client';
import { FadeSlideWrapper, Typography } from '@/components/common';
import { Container } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { eventsData } from '@/data';
import { ROUTES } from '@/routes';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const AboutEventsSection: React.FC = () => {
  const [activeEventTab, setActiveEventTab] = React.useState(eventsData[0].id);

  const activeEvent =
    eventsData.find((e) => e.id === activeEventTab) || eventsData[0];

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-24">
      <Container>
        {/* Section header */}
        <section className="space-y-2 md:space-y-6">
          <Typography
            variant={'h5'}
            className="text-primary-600"
            data-aos="fade-up"
          >
            Life at Brahmabyte
          </Typography>
          <Typography
            variant={'h2'}
            className="font-display mb-1 text-slate-900 md:max-w-lg"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Celebrating Together
          </Typography>
          <div
            className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <Typography variant={'p'} className="text-slate-600">
              We believe in working hard and celebrating harder. Here are some
              of our favorite moments from past festivals and events.
            </Typography>
            <Link href={ROUTES.gallery}>
              <Button
                variant={'outline'}
                className="flex shrink-0 items-center gap-x-2 rounded-full"
              >
                See all Events
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </section>

        {/* Mobile select */}
        <section className="relative mb-8 md:hidden">
          <select
            value={activeEventTab}
            onChange={(e) => setActiveEventTab(Number(e.target.value))}
            className="focus:ring-primary-500 focus:border-primary-500 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 font-medium text-slate-900 shadow-sm focus:ring-2 focus:outline-none"
            data-aos="fade-up"
          >
            {eventsData.map((event) => (
              <option key={event.id} value={event.id}>
                {event.heading}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </section>

        {/* Desktop buttons */}
        <section className="mb-8 hidden flex-wrap gap-3 pb-6 md:flex">
          {eventsData.map((event) => (
            <button
              key={event.id}
              onClick={() => setActiveEventTab(event.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-300 hover:cursor-pointer ${
                activeEventTab === event.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {event.button_label}
            </button>
          ))}
        </section>

        {/* Event content */}

        <section
          data-aos="fade-up"
          data-aos-delay="200"
          className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl md:p-8"
        >
          <FadeSlideWrapper uniqueKey={activeEventTab}>
            <div className="mb-8 flex flex-col items-center gap-8 md:flex-row">
              <div className="flex-1">
                <h4 className="mb-3 text-2xl font-bold text-slate-900">
                  {activeEvent.heading}
                </h4>
                <p className="leading-relaxed text-slate-600">
                  {activeEvent.text}
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-2 text-sm font-medium text-slate-500">
                    <Calendar size={16} className="text-primary-500" />
                    {activeEvent.time}
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-2 text-sm font-medium text-slate-500">
                    <MapPin size={16} className="text-primary-500" />
                    Chabahil, Kathmandu
                  </div>
                </div>
              </div>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-1 gap-4 md:h-150 md:grid-cols-2">
              {/* Main photo */}
              <div className="group relative aspect-4/3 overflow-hidden rounded-2xl md:aspect-auto md:h-full">
                <Image
                  height={400}
                  width={400}
                  src={activeEvent.images[0]}
                  alt={`${activeEvent.heading} main photo`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/10 transition-colors duration-300 group-hover:bg-slate-900/0"></div>
              </div>

              {/* 4 small photos */}
              <div className="grid grid-cols-2 gap-4">
                {activeEvent.images.slice(1, 5).map((photo, idx) => (
                  <div
                    key={idx}
                    className="group relative aspect-square overflow-hidden rounded-2xl"
                  >
                    <Image
                      height={300}
                      width={300}
                      src={photo}
                      alt={`${activeEvent.heading} photo ${idx + 2}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 transition-colors duration-300 group-hover:bg-slate-900/0"></div>
                  </div>
                ))}
              </div>
            </div>
          </FadeSlideWrapper>
        </section>
      </Container>
    </section>
  );
};
