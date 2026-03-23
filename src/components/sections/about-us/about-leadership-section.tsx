'use client';
import { Typography } from '@/components/common';
import { Container } from '@/components/layout';
import { leadershipData } from '@/data';
import Image from 'next/image';
import { useScroll } from '@/providers/ScrollProvider';
import { useEffect, useRef } from 'react';

export const AboutLeadershipSection: React.FC = () => {
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
    <Container className="my-10 space-y-8 md:my-20 md:space-y-16">
      <div
        id="leadership"
        ref={(el) => {
          sectionRefs.current['leadership'] = el;
        }}
        className="space-y-2 md:space-y-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Typography variant={'h5'} className="text-primary-600">
          Leadership
        </Typography>
        <Typography
          variant={'h2'}
          className="font-display text-slate-900 md:max-w-lg"
        >
          Meet the Minds Behind Brahmabyte
        </Typography>
        <Typography variant={'p'} className="text-slate-600">
          Our leadership team brings together a diverse blend of technical
          expertise, strategic vision, and industry experience to drive
          innovation at every level of our organization. With a deep
          understanding of modern software architecture, scalable systems, and
          emerging technologies, they guide Brahmabyte toward building robust,
          future-ready digital solutions. Their commitment to excellence,
          continuous improvement, and customer-centric thinking ensures that
          every product we deliver is engineered with precision, performance,
          and long-term value in mind. By fostering a culture of collaboration,
          accountability, and technical rigor, our leaders empower teams to
          solve complex challenges and consistently deliver exceptional results.
        </Typography>
      </div>
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {leadershipData.map((leader, idx) => (
          <div
            key={leader.name}
            data-aos="fade-up"
            data-aos-delay={300 + idx * 50}
          >
            <div className="group relative mb-4 aspect-4/5 overflow-hidden rounded-3xl">
              <Image
                src={leader.image}
                alt={leader.name}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                width={300}
                height={300}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>

            <Typography
              variant={'h5'}
              className="font-display mb-1 text-slate-900"
            >
              {leader.name}
            </Typography>
            <Typography variant={'p'} className="text-primary-600">
              {leader.role}
            </Typography>
          </div>
        ))}
      </section>
    </Container>
  );
};
