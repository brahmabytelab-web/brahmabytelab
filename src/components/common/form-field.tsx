import { Label } from '@/components/ui/label';
import { Typography } from '@/components/common/typography';
import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

export const FormField = ({
  id,
  label,
  error,
  children,
  className,
}: FormFieldProps) => {
  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={id} className="font-medium text-gray-700">
        {label}
      </Label>
      {children}
      {error && (
        <Typography variant="small" className="mt-1 text-red-500">
          {error}
        </Typography>
      )}
    </div>
  );
};

export const getFormInputStyles = (
  hasError: boolean,
  additionalClasses?: string,
) => {
  return cn(
    'bg-gray-50 border-gray-200 transition-colors shadow-sm',
    hasError
      ? 'border-red-500 focus:border-red-500 focus-visible:ring-red-100 focus:ring-red-100 text-red-900'
      : 'focus:border-orange-500 focus-visible:border-orange-500 focus-visible:ring-orange-100 focus:ring-orange-100',
    additionalClasses,
  );
};
