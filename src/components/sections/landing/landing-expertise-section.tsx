'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/layout';
import { featuresdata } from '@/data/landing-page';

export const LandingExpertiseSection: React.FC = () => {
  return (
    <section id="services" className="bg-slate-50 py-12 md:py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-primary-600 mb-3 text-sm font-semibold tracking-wide uppercase">
            Our Expertise
          </h2>
          <h3 className="font-display mx-auto mb-4 max-w-3xl text-4xl font-bold text-slate-900 md:text-5xl">
            Everything you need to build a modern SaaS
          </h3>
          <p className="text-md mx-auto max-w-5xl text-slate-600">
            At Brahma Byte Lab, we specialize in creating high-performance,
            scalable, and user-centric digital solutions. We begin every project
            by understanding your business challenges and objectives. Whether
            you have existing code that needs optimization or you’re looking to
            build an entirely new product, we tailor our approach to suit your
            specific requirements. Our experienced team works closely with you,
            ensuring that every phase of development from planning to deployment
            meets your business goals and exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresdata.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-slate-100 shadow-sm transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
                    <feature.icon size={24} className={feature.className} />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
