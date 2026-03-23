'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { landingProductsData } from '@/data';
import { ROUTES } from '@/routes';
import { Container } from '@/components/layout';

export const LandingProductsSection: React.FC = () => {
  return (
    <section id="products" className="bg-white py-24">
      <Container>
        <div className="mb-8 md:mb-16">
          <div>
            <h2 className="text-primary-600 mb-3 text-sm font-semibold tracking-wide uppercase">
              Our Products
            </h2>
            <h3 className="font-display mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Flagship SaaS Solutions
            </h3>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-2xl text-lg text-slate-600">
                Discover the products we&apos;ve built to help businesses
                streamline operations and drive growth.
              </p>
              <Link href={ROUTES.products}>
                <Button
                  variant={'outline'}
                  className="flex shrink-0 items-center gap-x-2 rounded-full"
                >
                  See all Products
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {landingProductsData.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link href={product.link} className="" target="_blank">
                <Card className="group relative overflow-hidden border-slate-200 py-0 shadow-sm transition-all duration-300 hover:shadow-xl">
                  <div
                    className={`flex h-24 items-center bg-gradient-to-r p-4 md:h-28 ${product.color}`}
                  >
                    <h4 className="font-display text-2xl font-bold text-white lg:text-3xl">
                      {product.name}
                    </h4>
                  </div>
                  <CardContent className="p-4 lg:p-8">
                    <Badge
                      variant="secondary"
                      className={`${product.bgLight} ${product.textColor} hover:bg-opacity-80 mb-2 lg:mb-4`}
                    >
                      {product.tagline}
                    </Badge>
                    <p className="mb-4 line-clamp-3 h-16 text-slate-600 lg:mb-8">
                      {product.description}
                    </p>
                    <ul className="mb-4 space-y-3 lg:mb-8">
                      {product.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-slate-700"
                        >
                          <CheckCircle2
                            size={18}
                            className={product.textColor}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`flex w-full items-center justify-center gap-2 py-6 text-base font-medium lg:text-lg ${product.bgColor} text-white hover:text-white hover:${product.bgLight} hover:bg-opacity-80`}
                    >
                      Visit {product.name}
                      <ArrowRight size={20} />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
