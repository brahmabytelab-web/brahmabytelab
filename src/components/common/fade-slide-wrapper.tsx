import { ReactNode } from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';

interface FadeSlideWrapperinterface {
  children: ReactNode;
  uniqueKey: string | number;
  initial?: MotionProps['initial'];
  animate?: MotionProps['animate'];
  exit?: MotionProps['exit'];
  duration?: number;
  className?: string;
}
export const FadeSlideWrapper: React.FC<FadeSlideWrapperinterface> = ({
  children,
  uniqueKey,
  initial = { opacity: 0, y: 10 },
  animate = { opacity: 1, y: 0 },
  exit = { opacity: 0, y: -10 },
  duration = 0.3,
  className = '',
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={uniqueKey}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={{ duration }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
