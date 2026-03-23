'use client';
import { Typography } from '@/components/common';
import { Container } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { productsData } from '@/data';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll } from '@/providers/ScrollProvider';
import { useEffect, useRef } from 'react';

export const ProductsListingSection: React.FC = () => {
  const { lenis } = useScroll();
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionRefs.current[hash] && lenis) {
        setTimeout(() => {
          lenis.scrollTo(sectionRefs.current[hash]!, {
            offset: -100,
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
    <div
      id="products"
      ref={(el) => {
        sectionRefs.current['products'] = el;
      }}
    >
      <Container className="my-10 space-y-10 md:my-20 md:space-y-24">
        {productsData.map((product, idx) => (
          <div
            id={product.id}
            key={product.id}
            className={cn(
              'flex flex-col items-center gap-8 lg:flex-row',
              product.dir === 'rtl' ? 'lg:flex-row-reverse' : '',
            )}
            ref={(el: HTMLDivElement | null) => {
              sectionRefs.current[product.id] = el;
            }}
          >
            <div className="group relative hidden aspect-4/3 overflow-hidden rounded-2xl shadow-2xl lg:block xl:h-80 xl:w-2/5">
              <Image
                src={product.image}
                alt={product.name}
                height={400}
                width={400}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div
                className={`absolute inset-0 bg-linear-to-br ${product.color} opacity-20 transition-opacity duration-500 group-hover:opacity-10`}
              ></div>
              <div className="absolute top-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 shadow-lg backdrop-blur-md">
                <Image
                  src={product.logo}
                  alt={product.name}
                  height={50}
                  width={50}
                  className=""
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div
              className="flex-1 space-y-6"
              data-aos="fade-up"
              data-aos-delay={300 + idx * 100}
            >
              <div className="mb-6 flex items-center gap-4">
                <Badge
                  variant="outline"
                  className="border-primary-200 text-primary-700 px-3 py-1 font-bold"
                >
                  {product.category}
                </Badge>
                <div className="h-px flex-1 bg-slate-200"></div>
              </div>
              <Typography variant="h2" className="font-display">
                {product.name}
              </Typography>
              <div className="group relative block aspect-4/3 w-full overflow-hidden rounded-2xl shadow-2xl lg:hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  height={400}
                  width={400}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div
                  className={`absolute inset-0 bg-linear-to-br ${product.color} opacity-20 transition-opacity duration-500 group-hover:opacity-10`}
                ></div>
                <div className="absolute top-6 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 shadow-lg backdrop-blur-md">
                  <Image
                    src={product.logo}
                    alt={product.name}
                    height={30}
                    width={30}
                    className=""
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <Typography variant="p">{product.description}</Typography>
              <Typography variant="p" className="text-slate-600 italic">
                {product.note}
              </Typography>
              <Link href={product.link} target='_blank'>
                <Button
                  size="lg"
                  className="shadow-primary-600/20 rounded-full bg-orange-500 px-8 shadow-lg hover:bg-orange-600"
                >
                  Get Started <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};
