'use client';
import React, { useEffect } from 'react';
import { Container } from './Container';
import { ROUTES } from '@/routes';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, Code2, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { navbarData } from '@/data';
import Image from 'next/image';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const path = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-slate-200 bg-white/80 py-3 shadow-sm backdrop-blur-md'
          : 'bg-transparent py-5',
      )}
    >
      <Container className="flex justify-between">
        <Link href={ROUTES.home} className="flex items-center gap-1 ">
          <div>
            <Image
              src="/images/logos/Brahmabytelab-logo-1.svg"
              height={60}
              width={60}
              alt="brahmabytelab-logo"
            />
          </div>
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-slate-900">
            BrahmaByteLab
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navbarData.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className={cn(
                'text-slate-600 transition-colors duration-300 hover:text-orange-600',
                path === item.href && 'text-orange-600',
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href={ROUTES.contact}>
            <Button className="bg-orange-600 hover:cursor-pointer">
              Contact Us
            </Button>
          </Link>
        </nav>
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <Menu size={28} />
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="flex w-75 flex-col border-l border-slate-100 bg-white p-6 sm:w-100"
            >
              <SheetTitle className="mb-8 flex items-center justify-between gap-2">
                <section className="flex items-center gap-x-1">
                  <div>
                    <Image
                      src="/images/logos/Brahmabytelab-logo-1.svg"
                      height={60}
                      width={60}
                      alt="brahmabytelab-logo"
                    />
                  </div>
                  <span className="font-display text-xl font-bold tracking-tight text-slate-900">
                     BrahmaByteLab
                  </span>
                </section>
                <SheetClose>
                  <X className="text-stale-600" />
                </SheetClose>
              </SheetTitle>

              <div className="mt-4 flex flex-col gap-2">
                {navbarData.map((item) => {
                  const isActive = path === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-all',
                        isActive
                          ? 'bg-orange-50 text-orange-700'
                          : 'hover:text-primary-600 text-slate-600 hover:bg-slate-50',
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon
                        size={20}
                        className={
                          isActive ? 'text-primary-600' : 'text-slate-400'
                        }
                      />
                      {item.label}
                    </Link>
                  );
                })}
                <Link href={ROUTES.contact}>
                  <Button
                    size={'lg'}
                    className="w-full bg-orange-600 hover:cursor-pointer"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
};
