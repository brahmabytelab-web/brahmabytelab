import { ROUTES } from "@/routes";

export const companyData = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Products", href: ROUTES.products },
  { label: "Services", href: ROUTES.services },
  { label: "Gallery", href: ROUTES.gallery },
  {label:"ISPS Policy Statement",href:ROUTES.isps}
];
export const footerServicesData = [
  { label: "Frontend Development", href: ROUTES.servicesSections.frontend },
  { label: "Backend Development", href: ROUTES.servicesSections.backend },
  { label: "Content Writing", href: ROUTES.servicesSections.content },
  { label: "SEO", href: ROUTES.servicesSections.seo },
  { label: "UI/UX Design", href: ROUTES.servicesSections.uiux },
  { label: "Quality Assurance", href: ROUTES.servicesSections.qa },
];

export const footerProductsData=[
  {label:"Chatboq",href:ROUTES.productsSections.chatboq},
  {label:"Zippy Plan",href:ROUTES.productsSections.zippy_plan},
  {label:"NexuxLabs",href:ROUTES.productsSections.nexuslabs}
]
export const socialLinksData = [
  {
    label: "facebook",
    icon: "/images/logos/facebook.svg",
    links: "https://www.facebook.com/share/1E5WXigi2u/",
  },
  {
    label: "LinkedIn",
    icon: "/images/logos/linkedin.svg",
    links: "https://www.linkedin.com/company/brahmabytelab/",
  },
  {
    label: "Tiktok",
    icon: "/images/logos/tiktok.svg",
    links: "https://www.tiktok.com/@brahmabyte.lab?_r=1&_t=ZS-94kg29FFTz0",
  },
];
export const footerContentData = [
  { label: "Company", content: companyData },
  { label: "Services", content: footerServicesData },
  { label: "Products", content: footerProductsData },
];
