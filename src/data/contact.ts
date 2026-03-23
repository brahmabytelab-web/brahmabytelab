import { Globe, Mail, MapPin, Phone } from "lucide-react";
export const contactFaqsData = {
  heading: [{
    text: "Frequently Asked ", highlight: true
  }, { text: "Questions", highlight: false }],
  description: "Can't find the answer you're looking for? Reach out to our customer support team.",
  faqs: [
    {
      question: "What is your typical response time?",
      answer: "We aim to respond to all inquiries within 24-48 business hours. If your request is urgent, please note it in your message, and we'll do our best to prioritize it."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer an initial free consultation to discuss your project, understand your goals, and determine how we can best assist you. Reach out via the contact form to schedule a call!"
    },
    {
      question: "What information should I include in my message?",
      answer: "To help us get back to you with the most accurate information or proposal, please include a brief overview of your project, timeline, budget expectations, and any specific requirements or references you have."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We work with clients all over the world. Our team is comfortable managing projects across different time zones and utilizing modern communication tools to ensure seamless collaboration."
    },
    {
      question: "Can I visit your office in person?",
      answer: "Yes, our headquarters is located at Sifal, Chabahil-07, Kathmandu, Nepal. We’d love to host you for a conversation. If you'd like to drop by, please let us know in advance so we can schedule a meeting."
    },
    {
      question: "How do you handle project pricing and estimates?",
      answer: "Our pricing structure varies depending on the scope, timeline, and complexity of the project. Once we understand your requirements through our initial consultation, we will provide a detailed proposal and estimate tailored to your specific needs."
    }
  ]
};

export const contactInformationData = [
  {
    icon: Mail,
    title: "Email Us",
    desc: "Our friendly team is always ready to assist you with any questions or inquiries.",
    link: "mailto:career@brahmabytelab.com",
    label: "career@brahmabytelab.com"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    desc: "Stop by our office and connect with us in person at our Kathmandu headquarters.",
    link: null,
    label: "Sifal, Kathmandu"
  },
  {
    icon: Phone,
    title: "Call Us",
    desc: "Reach our team Monday to Friday, 8am–5pm for prompt and reliable support.",
    link: "tel:014533034",
    label: "014533034"
  },
  {
    icon: Globe,
    title: "Global Support",
    desc: "We collaborate with clients across the globe, ensuring seamless communication wherever you are.",
    link: null,
    label: "Multi-timezone availability."
  }
];