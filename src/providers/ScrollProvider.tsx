'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from 'next/navigation';

interface ScrollContextType {
  lenis: Lenis | null;
}

const ScrollContext = createContext<ScrollContextType>({
  lenis: null,
});

export const useScroll = () => useContext(ScrollContext);

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenisInstance;
    setLenis(lenisInstance);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Sync AOS with Lenis scroll
    lenisInstance.on('scroll', () => {
      AOS.refresh();
    });

    return () => {
      lenisInstance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return (
    <ScrollContext.Provider value={{ lenis }}>{children}</ScrollContext.Provider>
  );
}
