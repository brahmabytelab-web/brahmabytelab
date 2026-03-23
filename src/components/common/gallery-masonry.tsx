'use client';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';
import { Masonry } from '@mui/lab';
import Image from 'next/image';

interface GalleryMasonryProps {
  images: string[];
}

export const GalleryMasonry: React.FC<GalleryMasonryProps> = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {/* Masonry Grid */}
      <Masonry columns={{ xs: 2, sm: 3 }} spacing={2}>
        {images.map((src, index) => (
          <div
            key={index}
            className="relative cursor-zoom-in overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            onClick={() => {
              setCurrentIndex(index);
              setLightboxOpen(true);
            }}
          >
            <Image
              height={500}
              width={500}
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="h-auto w-full object-cover"
            />
            <div className="bg-primary/25 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </div>
        ))}
      </Masonry>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          index={currentIndex}
          close={() => setLightboxOpen(false)}
          slides={images.map((src) => ({ src }))}
          animation={{ fade: 200 }}
        />
      )}
    </>
  );
};
