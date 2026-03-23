import { ROUTES } from '@/routes';
import { GlowingHeroSection, ReusableHeroSection } from '@/components/common';

export const AboutHeroSection: React.FC = () => {
  return (
    <GlowingHeroSection>
      <ReusableHeroSection
        badge_text="Empowering Businesses"
        heading={[
          'Innovating the Future,',
          { text: 'One Digital Solution at a Time', highlight: true },
        ]}
        text="At BrahmaByte Lab, we combine technology, creativity, and precision to deliver next-level digital solutions that empower businesses to thrive in a digital-first world."
        cta_1="Learn More"
        cta_1_action={`${ROUTES.about}#leadership`}
        cta_2="Get in Touch"
        cta_2_action={`${ROUTES.contact}#contact-form`}
        is_online={true}
      />
    </GlowingHeroSection>
  );
};
