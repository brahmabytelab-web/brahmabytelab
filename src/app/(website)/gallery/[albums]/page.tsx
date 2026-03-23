import { GalleryMasonry, Typography } from '@/components/common';
import { Container } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { galleryData } from '@/data/gallery';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
export async function generateMetadata({
  params,
}: {
  params: { albums: string };
}) {
  const { albums } = await params;
  const gallery = galleryData.find((item) => item.albums === albums);
  return {
    title: `Gallery - ${gallery?.title} | Brahmabytelab`,
    description: gallery?.description,
    openGraph: {
      title: `Gallery - ${gallery?.title} | Brahmabytelab`,
      description: gallery?.description,
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: `Gallery - ${gallery?.title} | Brahmabytelab`,
        },
      ],
    },
  };
}
export default async function GalleryAlbumsPage({
  params,
}: {
  params: { albums: string };
}) {
  const { albums } = await params;
  const gallery = galleryData.find((item) => item.albums === albums);
  console.log('albums', albums);
  if (!gallery) {
    return (
      <Container className="pt-32 pb-20">
        <h1 className="text-3xl font-semibold">Gallery Not Found</h1>
      </Container>
    );
  }

  return (
    <Container className="pt-32 pb-20">
      {/* Header */}
      <div className="mb-12">
        <Link href="/gallery">
          <Button variant="outline" className="mb-4 text-left">
            <ArrowLeft />
            Back to gallery
          </Button>
        </Link>
        <Typography variant="h1" className="mb-4 text-center">
          {gallery.title}
        </Typography>
        <Typography
          variant="p"
          className="mx-auto max-w-4xl text-center text-slate-600"
        >
          {gallery.description}
        </Typography>
      </div>

      {/* Masonry Gallery Component */}
      <GalleryMasonry images={gallery.image} />
    </Container>
  );
}
