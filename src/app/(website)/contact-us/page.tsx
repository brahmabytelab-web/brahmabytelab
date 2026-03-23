import { Faqs } from '@/components/common/faq';
import {
  ContactFormSection,
  ContactHeroSection,
} from '@/components/sections/contact-us';
import { contactFaqsData } from '@/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch with Brahmabytelab',
  description:
    'Have a project in mind? Contact the Brahmabytelab team today for consultations, support, or partnership opportunities. Let’s build together',
  openGraph: {
    title: 'Contact Us | Get in Touch with Brahmabytelab',
    description:
      'Have a project in mind? Contact the Brahmabytelab team today for consultations, support, or partnership opportunities. Let’s build together',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Us | Get in Touch with Brahmabytelab',
      },
    ],
  },
};
export default function ContactUsPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
      <Faqs faqsData={contactFaqsData} />
    </>
  );
}
