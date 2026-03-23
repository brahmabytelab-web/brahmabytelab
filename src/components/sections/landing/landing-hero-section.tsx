'use client';
import { ROUTES } from '@/routes';
import { GlowingHeroSection, ReusableHeroSection } from '@/components/common';
import { LandingHeroImageSection } from './landing-hero-image-section';

export const LandingHeroSection: React.FC = () => {
  return (
    <GlowingHeroSection>
      <ReusableHeroSection
        badge_text="Innovate. Better. Faster"
        heading={[
          'Architecting SaaS Products That ',
          { text: 'Dominate Markets', highlight: true },
        ]}
        text="At Brahmabyte Lab Pvt. Ltd., we empower businesses to create the digital experiences of tomorrow. By blending startup agility with enterprise-level standards and world-class engineering, we help you stay ahead in a fast-evolving digital landscape."
        is_online={true}
        cta_1="Let’s build the future, together."
        cta_1_action={`${ROUTES.contact}#contact-form`}
      >
        <LandingHeroImageSection />
      </ReusableHeroSection>
    </GlowingHeroSection>
  );
};
