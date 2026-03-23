import { Container } from '@/components/layout';
import { Typography } from '@/components/common/typography';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { Heading } from './heading';

type HeadingItem =
  | string
  | {
      text: string;
      highlight?: boolean;
    };

export interface HeroSectionLayoutInterface {
  badge_text: string;
  heading: HeadingItem[];
  text: string;
  cta_1?: string;
  cta_1_action?: string;
  cta_2?: string;
  cta_2_action?: string;
  is_online?: boolean;
  children?: React.ReactNode;
}

export const ReusableHeroSection: React.FC<HeroSectionLayoutInterface> = ({
  badge_text,
  heading,
  text,
  cta_1,
  cta_1_action,
  cta_2,
  cta_2_action,
  is_online,
  children,
}) => {
  return (
    <section data-aos="fade-up" data-aos-delay="500">
      <Container className="text-center">
        <Badge className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-5 text-sm font-medium text-slate-700 shadow-sm">
          {is_online && (
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
          )}
          {!is_online && (
            <span className="bg-primary-500 flex h-2 w-2 rounded-full"></span>
          )}
          {badge_text}
        </Badge>
        <Heading
          heading={heading}
          variant="h1"
          className="mx-auto my-8 max-w-4xl leading-[1.1] tracking-tight"
        />

        <Typography
          variant={'large'}
          className="mx-auto mb-12 text-slate-600 md:w-3/4 xl:w-2/4"
        >
          {text}
        </Typography>
        {(cta_1 && cta_1_action) || (cta_2 && cta_2_action) ? (
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {cta_1 && cta_1_action && (
              <Link href={cta_1_action || '#'}>
                <Button className="flex gap-x-2 rounded-full bg-orange-600 p-6 hover:bg-orange-600/80 hover:shadow-lg">
                  <Typography variant={'p'}>{cta_1}</Typography>
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </Link>
            )}

            {cta_2 && cta_2_action && (
              <Link href={cta_2_action || '#'}>
                <Button
                  className="flex gap-x-2 rounded-full p-6"
                  variant={'outline'}
                >
                  <Typography variant={'p'}>{cta_2}</Typography>
                </Button>
              </Link>
            )}
          </div>
        ) : (
          ''
        )}
        <div className="text-start">{children}</div>
      </Container>
    </section>
  );
};
