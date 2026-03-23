import { Faqs } from '@/components/common/faq';
import {
  AboutCoreValueSection,
  AboutEventsSection,
  AboutHeroSection,
  AboutLeadershipSection,
  AboutMissionVisionSection,
} from '@/components/sections/about-us';
import { aboutFaqsData } from '@/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | The Visionaries Behind Brahmabytelab',
  description:
    'Learn about Brahmabytelab’s mission to redefine technology. Meet the team driving innovation through expert engineering and creative strategy',
  openGraph: {
    title: 'About Us | The Visionaries Behind Brahmabytelab',
    description:
      'Learn about Brahmabytelab’s mission to redefine technology. Meet the team driving innovation through expert engineering and creative strategy',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Us | The Visionaries Behind Brahmabytelab',
      },
    ],
  },
};
export default function AboutUsPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutMissionVisionSection />
      <AboutCoreValueSection />
      <AboutLeadershipSection />
      <AboutEventsSection />
      <Faqs faqsData={aboutFaqsData} />
    </>
  );
}
