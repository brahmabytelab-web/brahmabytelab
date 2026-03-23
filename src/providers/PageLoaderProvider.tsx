'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export const PageLoaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // show loader on route change
    const showLoader = setTimeout(() => setLoading(true), 0);
    const hideLoader = setTimeout(() => setLoading(false), 800); // 1.2s
    return () => {
      clearTimeout(showLoader);
      clearTimeout(hideLoader);
    };
  }, [pathname]);

  return (
    <>
      {/* Loader Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-linear-to-br from-white via-gray-50 to-white"
          >
            {/* Logo with subtle scale/fade */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Image
                alt="brahmabytelab-logo"
                width={200}
                height={200}
                src="/images/logos/brahmabytelab-logo.svg"
                className="max-md:h-60 max-md:w-60"
              />
            </motion.div>

            {/* Optional pulsing dots */}
            <div className="mt-4 flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-3 w-3 rounded-full bg-orange-500"
                  animate={{ scale: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.9,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Animated gradient loading bar */}
            <motion.div
              className="mt-6 h-1 w-36 overflow-hidden rounded-full bg-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-linear-to-r from-orange-500 via-pink-500 to-purple-500"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div
        className={loading ? 'pointer-events-none opacity-0' : 'opacity-100'}
      >
        {children}
      </div>
    </>
  );
};
