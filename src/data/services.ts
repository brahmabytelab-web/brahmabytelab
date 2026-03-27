import { Smartphone, PenTool, Search, CheckCircle, Server } from 'lucide-react';

export const brahmabyteServicesData = [
    {
        id: "frontend",
        icon: Smartphone,
        title: "Frontend Development",
        description:
            "At Brahmabyte Lab, we specialize in modern frontend development technologies such as HTML, CSS, Tailwind, TypeScript, JavaScript, and React.js, delivering intuitive and responsive user interfaces.",
        features: [
            "React & Next.js",
            "Responsive Design",
            "Performance Optimization",
            "UI Component Systems",
        ],
        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
    },
    {
        id: "backend",
        icon: Server,
        title: "Backend Development",
        description:
            "Our backend services utilize Node.js and Python to build robust, scalable, and efficient server-side applications, seamlessly complementing our cutting-edge frontend solutions to deliver high-performance systems.",
        features: [
            "Node.js & Python",
            "API Development",
            "Database Design",
            "Cloud & DevOps",
        ],
        image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "content",
        icon: PenTool,
        title: "Content Writing",
        description:
            "Brahmabyte Lab’s SEO content writing services help businesses improve rankings, attract organic traffic, and deliver high-quality content that connects with their audience.",
        features: [
            "Blog Posts",
            "Copywriting",
            "Technical Writing",
            "Social Media Content",
        ],
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80"
    },
    {
        id: "seo",
        icon: Search,
        title: "Search Engine Optimization",
        description:
            "We provide data-driven SEO strategies to improve your visibility, rank higher on search engines, and drive targeted traffic that converts.",
        features: [
            "On-Page SEO",
            "Link Building",
            "Keyword Strategy",
            "Technical SEO Audits",
        ],
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "uiux",
        icon: Smartphone,
        title: "UI/UX Design",
        description:
            "We design intuitive and engaging user experiences through research, wireframing, and modern interface design that enhances usability and satisfaction.",
        features: [
            "Wireframing",
            "Prototyping",
            "User Testing",
            "Interaction Design",
        ],
        image:
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "qa",
        icon: CheckCircle,
        title: "Quality Assurance",
        description:
            "We ensure your product performs flawlessly through rigorous testing, identifying issues early and delivering a stable, secure experience.",
        features: [
            "Automated Testing",
            "Manual Testing",
            "Performance Audits",
            "Security Testing",
        ],
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
];

export const sericesFaqsData = {
    heading: [{ text: "Frequently Asked ", highlight: true }, { text: "Questions", highlight: false }],
    description: "Everything you need to know about our services and process. Can't find the answer you're looking for?",
    faqs: [
        {
            question: "What types of frontend development services do you offer?",
            answer: "We offer a comprehensive range of frontend development services, including React & Next.js development, responsive web design, UI component systems, performance optimization, and accessibility implementation. Our team builds fast, scalable, and visually engaging user interfaces tailored to your specific business needs."
        },
        {
            question: "What types of backend development services do you offer?",
            answer: "We offer a comprehensive range of backend development services, including Node.js & Python development, API development, database design, cloud & DevOps, and more. Our team builds secure, scalable, and high-performance backend systems tailored to your specific business needs."
        }, {
            question: "What types of content writing services do you offer?",
            answer: "We offer a comprehensive range of content writing services, including blog posts, copywriting, technical writing, and social media content. Our team creates high-quality, engaging content tailored to your specific business needs."
        }, {
            question: "What types of SEO services do you offer?",
            answer: "We offer a comprehensive range of SEO services, including on-page SEO, link building, keyword strategy, and technical SEO audits. Our team implements data-driven SEO strategies to improve your visibility, rank higher on search engines, and drive targeted traffic that converts."
        }, {
            question: "What types of UI/UX design services do you offer?",
            answer: "We offer a comprehensive range of UI/UX design services, including wireframing, prototyping, user testing, and interaction design. Our team designs intuitive and engaging user experiences tailored to your specific business needs."
        }, {
            question: "What types of QA services do you offer?",
            answer: "We offer a comprehensive range of QA services, including automated testing, manual testing, performance audits, and security testing. Our team ensures your product performs flawlessly through rigorous testing, identifying issues early and delivering a stable, secure experience."
        }
    ]
}