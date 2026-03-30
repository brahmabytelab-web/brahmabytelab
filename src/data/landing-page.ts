import { Smartphone, Cloud, Palette, Globe } from 'lucide-react';

export const featuresdata = [
  {
    icon: Smartphone,
    title: 'iOS App Development',
    description:
      'We design and build robust, secure, and highly engaging iOS applications that offer superior user experiences. From conception to deployment, we ensure that each app is optimized for performance, stability, and scalability, making it ready for the App Store and your customers.',
    className: 'text-gray-900',
  },
  {
    icon: Smartphone,
    title: 'Android App Development',
    description:
      'Our Android development services focus on creating apps that deliver an intuitive, seamless experience across all Android devices. We leverage the latest technologies to develop apps that are responsive, reliable, and user-friendly, designed to boost user engagement and satisfaction.',
    className: 'text-green-500',
  },
  {
    icon: Globe,
    title: 'Web Application Development',
    description:
      'Our web development team creates responsive, scalable, and feature-rich web applications tailored to meet your business needs. We focus on delivering web applications that work flawlessly across different browsers and devices, ensuring a smooth user experience and high-performance functionality.',
    className: 'text-blue-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'We design intuitive and engaging user interfaces that prioritize user experience. Our UX team ensures every design is backed by thorough user research and testing to create products that are not only aesthetically appealing but also easy to use and navigate.',
    className: 'text-pink-500',
  },
  {
    icon: Cloud,
    title: 'SaaS In-House Product Development',
    description:
      'We specialize in developing powerful SaaS (Software as a Service) solutions designed to streamline operations, enhance productivity, and scale with your business. From concept to execution, we create customized SaaS products that are secure, scalable, and deliver exceptional user experiences.',
    className: 'text-purple-500',
  },
];
export const stepsData = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description:
      'We begin by understanding your business needs and creating a clear roadmap with actionable milestones.',
  },
  {
    number: '02',
    title: 'Agile Development',
    description:
      'We work iteratively, delivering continuous updates and adapting to feedback.',
  },
  {
    number: '03',
    title: 'User-Centered Design',
    description:
      'We focus on intuitive, user-friendly designs that solve real problems and enhance the experience.',
  },
  {
    number: '04',
    title: 'High-Performance Engineering',
    description:
      'We build secure, scalable solutions using the latest technologies, optimized for speed and reliability.',
  },
  {
    number: '05',
    title: 'Continuous Support & Optimization',
    description:
      'We provide ongoing support, ensuring your product evolves and grows with your business needs.',
  },
];

export const landingProductsData = [
  {
    name: 'Chatboq',
    tagline: 'SaaS Chatbot Platform',
    description:
      'Chatboq is an all-in-one customer communication platform that combines live chat, chatbot automation, omnichannel inbox, and real-time visitors analytics. Our smart chat widget helps businesses monitor website visitors in real-time, identify engagement opportunities, and convert clicks into customers through intelligent conversations.',
    features: [
      'Live Chat',
      'Multi-channel Inbox',
      'Chatbots & Automation',
      'Ticketing System',
    ],
    color: 'from-purple-500 to-purple-900',
    bgLight: 'bg-purple-50',
    bgColor: 'bg-purple-500',
    textColor: 'text-purple-600',
    link: 'https://chatboq.com/',
  },
  {
    name: 'Zippy Plan',
    tagline: 'Appointment Scheduling System',
    description:
      'ZippyPlan is an online appointment scheduling software which offers easy scheduling solutions for industries and professionals. By using ZippyPlan, both businesses and customers can schedule meetings at a time that favors both.',
    features: [
      'Online Appointment Scheduling',
      'Calendar Integration',
      'Automated Reminders',
      'Online Payments',
    ],
    color: 'from-blue-500 to-blue-900',
    bgLight: 'bg-blue-50',
    bgColor: 'bg-blue-500',
    textColor: 'text-blue-600',
    link: 'https://zippyplan.com/',
  },
];

export const employeesData = [
  {
    name: 'Aryan',
    role: 'Full Stack Developer',
    quote:
      'Working at Brahmabytelab has been a transformative experience. I applied my theoretical knowledge to real-world engineering challenges, which accelerated my learning and helped me develop technical expertise and problem-solving skills.',
    image: '/images/landing-page/testimonials/Aryan.png',
    metric: '6+ Projects Led',
    tag: 'Leadership',
  },
  // {
  //   name: 'Parinita',
  //   role: 'Quality Assurance',
  //   quote:
  //     'It was a really nice experience working at Brahmabyte, and I learned a lot of things during my time here. The environment was good and helped me grow in my role.',
  //   image: '/images/landing-page/testimonials/parinita.jpg',
  //   metric: 'Quality Improvement',
  //   tag: 'QA & Testing',
  // },

  {
    name: 'Madan',
    role: 'Frontend Developer',
    quote:
      'Brahmabytelab has been pivotal in advancing my career. I have enhanced my frontend skills while improving collaboration and teamwork, allowing me to grow professionally and contribute meaningfully to the team’s success.',
    image: '/images/landing-page/testimonials/madan-golay-tamang.jpg',
    metric: 'Skills Enhancement',
    tag: 'Professional Growth',
  },
  {
    name: 'Jackson',
    role: 'Graphic Designer',
    quote:
      'At Brahmabytelab, I bring brands’ stories to life through creative visuals. By combining design, strategy, and storytelling, I craft experiences that engage audiences and reflect each brand’s essence.',
    image: '/images/landing-page/testimonials/Jackson.png',
    metric: 'Creative Storytelling',
    tag: 'Brand & Design',
  },
];

export const internsData = [
  {
    name: 'Binit',
    role: 'Backend Intern',
    quote:
      'During my time at Brahmabytelab, I gained a strong understanding of core foundations like SOLID principles and clean code practices. The experience has been highly valuable and greatly enriched my technical skills.',
    image: '/images/landing-page/testimonials/Binit.jpeg',
    metric: 'Full-time Offer',
    tag: 'Growth',
  },
  {
    name: 'Nakhul',
    role: 'Research and Development Intern',
    quote:
      'I enjoy collaborating with my team in R&D to transform creative ideas into practical results, constantly experimenting with new approaches and technologies to drive innovation and solve complex challenges.',
    image: '/images/landing-page/testimonials/Nakhul.png',
    metric: 'Innovative Solutions',
    tag: 'Research & Innovation',
  },

  {
    name: 'Birat',
    role: 'SEO Intern',
    quote:
      'Starting as an SEO Intern provided a solid foundation in search fundamentals. I gained hands-on experience with SEO strategies and site architecture, which equipped me to handle complex projects and develop a long-term strategic mindset.',
    image: '/images/landing-page/testimonials/Birat.png',
    metric: 'SEO & Strategic Growth',
    tag: 'Digital Marketing',
  },
  {
    name: 'Kyurosh',
    role: 'QA Intern',
    quote:
      'Working at Brahmabytelab has been a fantastic learning experience. The team is supportive and encourages growth, allowing me to work on real-world projects that improved my practical skills and prepared me for a strong start in the tech industry.',
    image: '/images/landing-page/testimonials/Kyurosh.png',
    metric: 'Practical Skills & Growth',
    tag: 'Teamwork & Learning',
  },
];
