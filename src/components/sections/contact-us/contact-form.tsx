'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  contactFormDefaults,
  contactFormSchema,
  type ContactFormValues,
} from '@/schemas/contactFormSchemas';
import { Typography, FormField, getFormInputStyles } from '@/components/common';
import { useHandleContactForm } from '@/hooks/useHandleContactForm';
import { useScroll } from '@/providers/ScrollProvider';
import { useEffect, useRef } from 'react';

export const ContactForm: React.FC = () => {
  const { lenis } = useScroll();
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionRefs.current[hash] && lenis) {
        setTimeout(() => {
          lenis.scrollTo(sectionRefs.current[hash]!, {
            offset: -120,
            duration: 1.5,
          });
        }, 100);
      }
    };

    if (lenis) {
      scrollToHash();
    }

    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, [lenis]);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaults,
  });
  const { onSubmit, isSubmitting,isSuccess } = useHandleContactForm();
  useEffect(() => {
  if (isSuccess) {
    reset(); // or just reset()
  }
}, [isSuccess, reset]);
  return (
    <div
      id="contact-form"
      ref={(el) => {
        sectionRefs.current['contact-form'] = el;
      }}
      className="relative h-fit overflow-hidden rounded-xl border border-orange-200 bg-white p-6 shadow-2xl md:rounded-[3rem] md:p-10"
    >
      <div className="pointer-events-none absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-orange-100/40 blur-3xl"></div>

      <div className="relative z-10">
        <Typography variant="h2" className="mb-3 text-orange-600">
          Send us a message
        </Typography>
        <Typography variant="small" className="text-gray-600 md:mb-10">
          Fill out the form below and we&apos;ll get back to you promptly.
        </Typography>

        <form className="mt-4 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            id="fullName"
            label="Full Name"
            error={errors.fullName?.message}
          >
            <Input
              id="fullName"
              placeholder="Enter your full name"
              aria-invalid={!!errors.fullName}
              {...register('fullName')}
              className={getFormInputStyles(
                !!errors.fullName,
                'h-10 rounded-lg md:h-14 md:rounded-2xl',
              )}
              required
            />
          </FormField>

          <FormField
            id="email"
            label="Email Address"
            error={errors.email?.message}
          >
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              aria-invalid={!!errors.email}
              {...register('email')}
              className={getFormInputStyles(
                !!errors.email,
                'h-10 rounded-lg md:h-14 md:rounded-2xl',
              )}
              required
            />
          </FormField>

          <FormField
            id="company"
            label="Company Name"
            error={errors.company?.message}
          >
            <Input
              id="company"
              placeholder="Enter your compnay name"
              aria-invalid={!!errors.company}
              {...register('company')}
              className={getFormInputStyles(
                !!errors.company,
                'h-10 rounded-lg md:h-14 md:rounded-2xl',
              )}
            />
          </FormField>

          <FormField
            id="service"
            label="Service of Interest"
            error={errors.service?.message}
          >
            <Controller
              control={control}
              name="service"
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className={getFormInputStyles(
                      !!errors.service,
                      'focus-visible:border-primary h-10! w-full rounded-lg md:h-14! md:rounded-2xl',
                    )}
                  >
                    <SelectValue placeholder="Select a service..." />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    className="w-[var(--radix-select-trigger-width)] rounded-lg bg-white shadow-lg"
                  >
                    <SelectItem value="sales">Sales & Strategy</SelectItem>
                    <SelectItem value="research-and-development">
                      Research & Development
                    </SelectItem>
                    <SelectItem value="frontend-backend-engineering">
                      Frontend/Backend Engineering
                    </SelectItem>
                    <SelectItem value="graphic-design">
                      Graphic Design
                    </SelectItem>
                    <SelectItem value="content-writing">
                      Content Writing
                    </SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="quality-assurance">
                      Quality Assurance
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </FormField>

          <FormField
            id="message"
            label="Message"
            error={errors.message?.message}
          >
            <Textarea
              id="message"
              placeholder="Tell us about your project goals, timeline, and budget..."
              aria-invalid={!!errors.message}
              {...register('message')}
              className={getFormInputStyles(
                !!errors.message,
                'min-h-[160px] resize-none rounded-2xl',
              )}
            />
          </FormField>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center rounded-2xl bg-orange-600 py-5 text-base text-white shadow-lg transition-all hover:bg-orange-500 hover:shadow-xl disabled:opacity-70 md:py-8"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}{' '}
            <Send size={36} className="ml-2" />
          </Button>
        </form>
      </div>
    </div>
  );
};
