import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight ',
      h2: 'scroll-m-20 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
      h3: 'scroll-m-20 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl md:text-2xl lg:text-3xl font-medium',
      h5: 'text-lg md:text-xl lg:text-2xl font-medium',
      h6: 'text-base md:text-lg lg:text-xl font-normal',

      p: 'text-base md:text-lg leading-7',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-medium',
      small: 'text-sm font-normal leading-none',
      muted: 'text-sm text-muted-foreground',

      blockquote: 'mt-6 border-l-2 pl-6 italic text-muted-foreground',

      inlineCode:
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm',

      list: 'my-6 ml-6 list-disc [&>li]:mt-2',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

type Variant = Exclude<
  VariantProps<typeof typographyVariants>['variant'],
  null | undefined
>;

const defaultElements: Record<Variant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  lead: 'p',
  large: 'p',
  small: 'span',
  muted: 'p',
  blockquote: 'blockquote',
  inlineCode: 'code',
  list: 'ul',
};

export interface TypographyProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

export const Typography: React.FC<TypographyProps> = ({
  className,
  variant = 'p',
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : defaultElements[variant as Variant];

  return (
    <Comp
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  );
};
