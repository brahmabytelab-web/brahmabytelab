import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Typography } from './typography';
import { Heading } from './heading';
import { Container } from '../layout';
interface HeadingItem {
  text: string;
  highlight?: boolean;
}
interface FaqsInterface {
  heading: (string | HeadingItem)[];
  description: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const Faqs: React.FC<{ faqsData: FaqsInterface }> = ({ faqsData }) => {
  return (
    <Container className="my-16 md:my-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <Typography
              variant="h6"
              className="text-primary-600 mb-3 font-semibold tracking-wide uppercase"
            >
              FAQ
            </Typography>
            <Heading
              heading={faqsData.heading}
              variant="h2"
              className="font-display mb-6 leading-tight text-slate-900"
            />
            <Typography variant="large" className="text-slate-600">
              {faqsData.description}
            </Typography>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-7">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqsData.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="data-[state=open]:border-primary-200 data-[state=open]:bg-primary-50/50 rounded-2xl border border-slate-200 bg-white px-6 transition-all duration-300 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-medium font-semibold text-slate-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Container>
  );
};
