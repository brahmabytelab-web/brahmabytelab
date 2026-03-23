import { Faqs } from '@/components/common/faq';
import {
  LandingCTASection,
  LandingExpertiseSection,
  LandingHeroSection,
  LandingMethodologySection,
  LandingProductsSection,
  LandingTestimonialsSection,
  LandingTrustedBySection,
} from '@/components/sections/landing';
import { aboutFaqsData } from '@/data';

export default function Home() {
  return (
    <>
      <LandingHeroSection />
      <LandingTrustedBySection />
      <LandingExpertiseSection />
      <LandingMethodologySection />
      <LandingProductsSection />
      <LandingTestimonialsSection />
      <Faqs faqsData={aboutFaqsData} />
      <LandingCTASection />
    </>
  );
}
