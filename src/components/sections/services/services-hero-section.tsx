import { GlowingHeroSection, ReusableHeroSection } from '@/components/common';
import { ROUTES } from '@/routes';

export const ServicesHeroSection: React.FC = () => {
  return (
    <GlowingHeroSection>
      <ReusableHeroSection
        badge_text="Empowering Businesses"
        heading={[
          'Powerful Tools for ',
          { text: 'Modern Teams', highlight: true },
        ]}
        text="We deliver end-to-end technology and business solutions designed to scale your operations, drive digital transformation, and elevate your brand."
        cta_1="Explore Products"
        cta_1_action={`${ROUTES.products}#products`}
        cta_2="Get in Touch"
        cta_2_action={`${ROUTES.contact}#contact-form`}
        is_online={true}
      />
    </GlowingHeroSection>
  );
};
