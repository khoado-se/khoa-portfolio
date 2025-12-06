import type { Certificate } from '../types/portfolio';

interface CertificatesProps {
  certificates: Certificate[];
}

interface CertificateCardProps {
  certificate: Certificate;
}

function CertificateCard({ certificate }: CertificateCardProps) {
  const content = (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4">
        <div className="text-3xl">📜</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{certificate.name}</h3>
          <p className="text-gray-600 text-sm">{certificate.issuer}</p>
        </div>
      </div>
    </div>
  );

  if (certificate.link) {
    return (
      <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}

export default function Certificates({ certificates }: CertificatesProps) {
  if (!certificates || certificates.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white" id="certificates">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Certificates & Achievements</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
