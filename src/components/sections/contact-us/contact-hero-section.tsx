import { GlowingHeroSection, ReusableHeroSection } from '@/components/common';

export const ContactHeroSection: React.FC = () => {
  return (
    <GlowingHeroSection>
      <ReusableHeroSection
        badge_text="We're online and ready to help"
        heading={[
          "Let's build something ",
          { text: 'extraordinary', highlight: true },
        ]}
        text="Ready to transform your ideas into reality? Contact our team of experts to discuss your next big project, request a consultation, or just say hello!"
        is_online={true}
      />
    </GlowingHeroSection>
  );
};
