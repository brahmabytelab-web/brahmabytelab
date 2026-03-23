import { Typography } from '@/components/common';
import { Container } from '@/components/layout';
import { missionVisionData } from '@/data';
import Image from 'next/image';

export const AboutMissionVisionSection: React.FC = () => {
  return (
    <Container className="my-10 flex flex-col items-center gap-4 md:my-20 xl:flex-row">
      <section className="flex-1 flex-row gap-8 space-y-6 lg:flex xl:flex-col">
        {missionVisionData.map((item, i) => (
          <div
            key={item.heading}
            className="space-y-4"
            data-aos="fade-up"
            data-aos-delay={200 + i * 50}
          >
            <div className="flex items-center gap-x-4">
              <div className="bg-primary-100 text-primary-600 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                <item.icon size={24} />
              </div>
              <Typography
                variant="h2"
                className="font-display font-bold text-slate-900"
              >
                {item.heading}
              </Typography>
            </div>

            <Typography variant="p" className="leading-relaxed text-slate-600">
              {item.description}
            </Typography>
          </div>
        ))}
      </section>
      <section className="relative aspect-4/3 flex-1 overflow-hidden rounded-[2.5rem] border-8 border-slate-50 shadow-2xl lg:aspect-auto xl:h-150">
        <Image
          data-aos="fade-up"
          data-aos-delay={1000}
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
          alt="Team collaboration"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
          width={1200}
          height={600}
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
        <div className="absolute right-8 bottom-8 left-8">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-md">
            <div className="mb-1 text-3xl font-bold">4+ Years</div>
            <div className="font-medium text-slate-200">
              Of Engineering Excellence
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};
