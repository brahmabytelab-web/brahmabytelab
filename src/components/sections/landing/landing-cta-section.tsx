'use client';
import React from 'react';
import { ReusableCTASection } from '@/components/common';

export const LandingCTASection: React.FC = () => {
  return (
    <ReusableCTASection
      title="Ready to build your next big idea?"
      description="Partner with Brahmabyte to transform your vision into a scalable, high-performance SaaS product. Let's discuss your project today."
      cta_text="Start a Project"
    />
  );
};
