import { Container } from '@/components/layout';
import { contactInformationData } from '@/data';
import Link from 'next/link';

export const ContactInformation: React.FC = () => {
  return (
    <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 xl:grid-cols-4">
      {contactInformationData.map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={300 + index * 100}
          className="group relative block overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/20 transition-all hover:shadow-2xl hover:shadow-slate-200/40"
        >
          <div className="bg-primary-50 absolute top-0 right-0 -mt-16 -mr-16 h-32 w-32 rounded-full blur-2xl transition-transform group-hover:scale-150"></div>
          <div className="bg-primary-50 text-primary-600 group-hover:bg-primary-600 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors group-hover:text-white">
            <item.icon size={24} />
          </div>
          <h3 className="mb-2 text-lg font-bold text-slate-900">
            {item.title}
          </h3>
          <p className="mb-6 text-sm text-slate-500">{item.desc}</p>
          {item.link ? (
            <Link
              href={item.link}
              className="text-primary-600 flex items-center gap-2 font-medium transition-all group-hover:gap-3"
            >
              {item.label}
            </Link>
          ) : (
            <p className="text-slate-500">{item.label}</p>
          )}
        </div>
      ))}
    </Container>
  );
};
