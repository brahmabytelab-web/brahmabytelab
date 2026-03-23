import { Container } from '@/components/layout';
import { Typography, Heading } from '@/components/common';

export const GalleryHeroSection: React.FC = () => {
  const heading = ['Our ', { text: 'Gallery', highlight: true }];
  return (
    <Container className="pt-32 pb-20">
      <div className="text-center">
        <Heading
          heading={heading}
          variant="h1"
          className="font-display mb-6 text-center tracking-tight text-slate-900"
        />
        <Typography variant="p" className="leading-relaxed text-slate-600">
          Step into Brahmabyte through a collection of moments that define us.
          Each photo captures celebrations, milestones, and everyday life,
          reflecting our culture, creativity, and camaraderie. Explore and
          celebrate our journey with us.
        </Typography>
      </div>
    </Container>
  );
};
