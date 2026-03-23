import {
  GalleryHeroSection,
  GalleryPhotoSection,
} from '@/components/sections/gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | A Visual Celebrations of Our Team Members',
  description:
    ' Step inside Brahmabytelab. View our office culture, and the events we celebrate as a team.',
  openGraph: {
    title: 'Gallery | A Visual Celebrations of Our Team Members',
    description:
      ' Step inside Brahmabytelab. View our office culture, and the events we celebrate as a team.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gallery | A Visual Celebrations of Our Team Members',
      },
    ],
  },
};
export default function GalleryPage() {
  return (
    <>
      <GalleryHeroSection />
      <GalleryPhotoSection />
    </>
  );
}
