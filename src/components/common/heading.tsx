import React from 'react'; // or your typography import
import { Typography } from './typography';

interface HeadingItem {
  text: string;
  highlight?: boolean;
}

interface HeadingProps {
  heading: (string | HeadingItem)[];
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  heading,
  variant = 'h1',
  className = '',
}) => {
  return (
    <Typography variant={variant} className={`font-display ${className}`}>
      {heading.map((item, index) => {
        if (typeof item === 'string') {
          return <span key={index}>{item}</span>;
        }
        return (
          <span
            key={index}
            className={
              item.highlight
                ? 'from-primary-500 to-primary-600 bg-linear-to-r bg-clip-text text-transparent'
                : ''
            }
          >
            {item.text}
          </span>
        );
      })}
    </Typography>
  );
};
