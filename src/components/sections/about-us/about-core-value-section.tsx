import { Typography } from '@/components/common';
import { Container } from '@/components/layout';
import { coreValueData } from '@/data';

export const AboutCoreValueSection: React.FC = () => {
  return (
    <section className="my-10 bg-slate-900 py-10 text-white md:my-25 md:py-20">
      <Container>
        <section data-aos="fade-up" data-aos-delay="300">
          <div className="mx-auto mb-6 max-w-3xl text-center md:mb-16">
            <Typography
              variant="h5"
              className="mb-3 font-semibold tracking-wide text-orange-400 uppercase"
            >
              Our
            </Typography>
            <Typography variant="h2" className="font-display mb-3 font-bold">
              Core Values
            </Typography>
            <Typography variant="p" className="text-lg text-slate-400">
              The principles that guide every decision we make and every line of
              code we write.
            </Typography>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
            {coreValueData.map((value, i) => (
              <div
                key={i}
                className="rounded-3xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm transition-colors hover:bg-slate-800"
              >
                <div className="text-primary-400 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-700">
                  <value.icon size={28} />
                </div>
                <Typography variant="h6" className="mb-3 font-bold">
                  {value.title}
                </Typography>
                <Typography
                  variant="small"
                  className="leading-relaxed text-slate-400"
                >
                  {value.desc}
                </Typography>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
};
