import { cn } from '@/lib/utils';
import React from 'react';
interface ContainerInterface {
  children: React.ReactNode;
  className?: string;
}
export const Container: React.FC<ContainerInterface> = ({
  children,
  className,
}) => {
  return (
    <section
      className={cn('container mx-auto w-9/10 max-w-350 xl:w-310', className)}
    >
      {children}
    </section>
  );
};
