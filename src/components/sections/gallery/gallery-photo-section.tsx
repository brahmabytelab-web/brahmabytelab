import { Container } from '@/components/layout';
import { galleryData } from '@/data/gallery';
import { ROUTES } from '@/routes';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const GalleryPhotoSection: React.FC = () => {
  return (
    <Container className="mb-10 md:mb-20">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {galleryData.map((item) => (
          <Link
            href={`${ROUTES.gallery}/${item.albums}`}
            key={item.id}
            className="group cursor-pointer"
          >
            <div className="relative mb-4 aspect-4/3 overflow-hidden rounded-3xl shadow-sm transition-all duration-300 group-hover:shadow-xl">
              <Image
                src={item.coverImage}
                alt={item.title}
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/20 transition-colors duration-300 group-hover:bg-slate-900/10"></div>
              <div className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm backdrop-blur-sm">
                <ImageIcon size={16} className="text-primary-600" />
                {item.image.length} Photos
              </div>
            </div>
            <h3 className="group-hover:text-primary-600 text-xl font-bold text-slate-900 transition-colors">
              {item.title}
            </h3>
            <p className="font-medium text-slate-500">{item.date}</p>
          </Link>
        ))}
      </section>
    </Container>
  );
};
