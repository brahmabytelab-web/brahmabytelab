'use client';
import { Container } from '@/components/layout';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/routes';
import Link from 'next/link';

export const ReusableCTASection: React.FC<{
  title: string;
  description: string;
  cta_text: string;
}> = ({ title, description, cta_text }) => {
  return (
    <Container className="my-10 space-y-10 md:my-20 md:space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-6 text-center md:p-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-10" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="bg-primary-600/20 mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl">
            <Rocket size={40} className="text-primary-400" />
          </div>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            {title}
          </h2>
          <p className="mb-10 text-slate-400 md:text-lg">{description}</p>
          <Link
            href={`${ROUTES.contact}#contact-form`}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 shadow-primary-600/20 rounded-full px-10 py-6 text-lg font-semibold text-white shadow-xl"
            >
              {cta_text}
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </motion.div>
    </Container>
  );
};
