import { Container } from '@/components/layout';
import { ContactForm } from './contact-form';
import { ContactInformation } from './contact-information';

export const ContactFormSection = () => {
  return (
    <Container className="relative">
      <section className="absolute -top-24">
        <ContactInformation />
      </section>
      <section className="grid grid-cols-1 gap-10 pt-290 md:pt-140 xl:grid-cols-2 xl:pt-80">
        <div className="flex h-full flex-col">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
            Share your <span className="text-orange-500">vision </span>with us
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            Whether you&apos;re launching a new product, scaling your platform,
            or refining your digital presence, we partner with you to turn ideas
            into high-impact solutions.
          </p>

          <p className="my-4">
            Tell us about your vision, we’ll help you bring it to life with
            precision and creativity.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7643.743545543562!2d85.33595499396458!3d27.713365402822728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1971009588ad%3A0x413d72dbcbe936fe!2sSiphal%2C%20Kathmandu%2044600!5e1!3m2!1sen!2snp!4v1747732187355!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Brahma Byte Lab Location"
            className="h-60 w-full md:h-100 xl:h-full xl:w-full"
          ></iframe>
        </div>
        <ContactForm />
      </section>
    </Container>
  );
};
