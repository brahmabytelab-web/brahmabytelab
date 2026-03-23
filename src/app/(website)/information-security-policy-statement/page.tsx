import { Container } from '@/components/layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Information Security Policy Statement | Brahmabytelab',
};
export default function ISPSPage() {
  return (
    <section className="pt-32 pb-20">
      <Container>
        <h1 className="mb-4 text-4xl font-bold text-slate-900">
          Information Security Policy Statement
        </h1>
        <div className="space-y-8 leading-relaxed text-slate-700">
          <section>
            <p className="mb-4">
              We at BrahmaByte are committed to ensuring the confidentiality,
              integrity, and availability of information to support our business
              consulting, digital solutions, and client services.
            </p>
            <p className="mb-4">
              As a company providing consulting, security audit, AI/ML
              solutions, and business services, we recognize the importance of
              protecting both organizational and client data from potential
              risks and cyber threats.
            </p>
            <p>
              To uphold this commitment, BrahmaByte implements appropriate
              security measures, processes, and best practices aligned with
              modern business and technology standards.
            </p>
          </section>

          <section>
            <h3 className="mb-4 border-b pb-2 text-xl font-bold text-slate-900">
              Our Commitments
            </h3>
            <p className="mb-4 font-medium">
              To maintain a strong information security posture, we will:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Implement appropriate technologies, tools, and secure
                infrastructure to protect business operations
              </li>
              <li>
                Ensure compliance with applicable legal, regulatory, and
                contractual requirements
              </li>
              <li>
                Protect client and organizational data from unauthorized access,
                disclosure, or loss
              </li>
              <li>
                Conduct security audits and continuously improve governance and
                risk management practices
              </li>
              <li>
                Promote information security awareness among employees and
                stakeholders
              </li>
              <li>
                Identify, report, and resolve security incidents and
                vulnerabilities in a timely manner
              </li>
              <li>
                Apply secure practices in consulting, architecture, and digital
                solution delivery
              </li>
              <li>
                Maintain the reliability and trustworthiness of all services
                provided to clients
              </li>
            </ul>
          </section>

          <section>
            <h3 className="mb-4 border-b pb-2 text-xl font-bold text-slate-900">
              Continuous Improvement
            </h3>
            <p className="mb-4">
              BrahmaByte is committed to continuously enhancing its information
              security practices by:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Adopting industry best practices</li>
              <li>Improving internal processes and infrastructure</li>
              <li>Strengthening security governance across all services</li>
            </ul>
            <p className="mt-6 font-medium">
              Our goal is to build a secure, reliable, and trustworthy
              environment for our clients and partners.
            </p>
          </section>

          <footer className="mt-12 border-t pt-12 font-mono text-sm text-slate-500">
            Date: 3 Oct 2025
          </footer>
        </div>
      </Container>
    </section>
  );
}
