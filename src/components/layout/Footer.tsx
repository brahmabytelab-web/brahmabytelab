import React from 'react';
import { Container } from './Container';
import { footerContentData, socialLinksData } from '@/data';
import Link from 'next/link';
import { ArrowRight, Code2 } from 'lucide-react';
import { ROUTES } from '@/routes';
import Image from 'next/image';
import { Typography } from '../common';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-10 text-slate-300 md:py-16">
      <Container className="space-y-20">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="col-span-1">
            <Link href={ROUTES.home} className="mb-6 flex items-center gap-1">
              <div className="">
                <Image
                  src="/images/logos/Brahmabytelab-logo-1.svg"
                  height={60}
                  width={60}
                  alt="brahmabytelab-logo"
                />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white md:text-2xl">
                BrahmaByteLab
              </span>
            </Link>
            <Typography variant={'small'} className="max-w-md text-slate-400">
              Engineering the future of SaaS. We build scalable, intuitive, and
              high-performance software solutions for modern businesses
              worldwide.
            </Typography>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {footerContentData.map((item) => (
              <section key={item.label}>
                <Typography
                  variant={'h5'}
                  className="font-display mb-2 text-white"
                >
                  {item.label}
                </Typography>
                <ul className="space-y-2 text-sm">
                  {item.content.map((data) => (
                    <li key={data.label}>
                      <Link
                        href={data.href}
                        className="group flex items-center gap-2 text-slate-400 transition-colors duration-300 hover:text-orange-400"
                      >
                        <ArrowRight
                          size={14}
                          className="-ml-4 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100"
                        />
                        {data.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            <section>
              <Typography
                variant={'h5'}
                className="font-display mb-2 text-white"
              >
                Follow us on:
              </Typography>
              <div className="flex gap-x-2">
                {socialLinksData.map((socialLink) => (
                  <Link
                    key={socialLink.label}
                    href={socialLink.links}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full"
                  >
                    <Image
                      width={30}
                      height={30}
                      alt={socialLink.label}
                      src={socialLink.icon}
                    />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </section>
        <section className="flex items-center justify-center">
          <Typography variant={'small'} className="text-slate-500">
            &copy; {new Date().getFullYear()} BrahmabyteLab Inc. All rights
            reserved.
          </Typography>
        </section>
      </Container>
    </footer>
  );
};
