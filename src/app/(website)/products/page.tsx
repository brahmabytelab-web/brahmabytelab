import { Faqs } from '@/components/common/faq';
import {
  ProductsCTASection,
  ProductsHeroSection,
  ProductsListingSection,
} from '@/components/sections/products';
import { productsFaqsData } from '@/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products | Innovative Tech Tools by Brahmabytelab',
  description:
    'Browse the exclusive suite of digital products developed by Brahmabytelab. High-performance software designed to streamline your workflow.',
  openGraph: {
    title: 'Our Products | Innovative Tech Tools by Brahmabytelab',
    description:
      'Browse the exclusive suite of digital products developed by Brahmabytelab. High-performance software designed to streamline your workflow.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Our Products | Innovative Tech Tools by Brahmabytelab',
      },
    ],
  },
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHeroSection />
      <ProductsListingSection />
      <ProductsCTASection />
      <Faqs faqsData={productsFaqsData} />
    </>
  );
}
