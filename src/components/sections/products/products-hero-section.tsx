import { GlowingHeroSection, ReusableHeroSection } from '@/components/common';
import { ROUTES } from '@/routes';

export const ProductsHeroSection: React.FC = () => {
  return (
    <GlowingHeroSection>
      <ReusableHeroSection
        badge_text="Our Deliverables"
        heading={[
          'Powerful Tools for ',
          { text: 'Modern Teams', highlight: true },
        ]}
        text="We build flagship SaaS solutions that solve real-world problems. From automation to deep analytics, our products are engineered for scale and performance."
        is_online={true}
        cta_1="Explore Services"
        cta_1_action={ROUTES.services}
        cta_2="Get in Touch"
        cta_2_action={`${ROUTES.contact}#contact-form`}
      />
    </GlowingHeroSection>
  );
};
