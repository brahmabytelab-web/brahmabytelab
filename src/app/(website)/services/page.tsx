import { Faqs } from '@/components/common/faq';
import {
  ServicesCTASection,
  ServicesHeroSection,
  ServicesListingSection,
} from '@/components/sections/services';
import { sericesFaqsData } from '@/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Custom Software & AI Solutions',
  description:
    'Explore Brahmabytelab’s services, from full-stack development to AI integration. We build scalable tools tailored to your specific business needs',
  openGraph: {
    title: 'Our Services | Custom Software & AI Solutions',
    description:
      'Explore Brahmabytelab’s services, from full-stack development to AI integration. We build scalable tools tailored to your specific business needs',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Our Services | Custom Software & AI Solutions',
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesListingSection />
      <Faqs faqsData={sericesFaqsData} />
      <ServicesCTASection />
    </>
  );
}
