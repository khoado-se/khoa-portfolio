import type { Certificate } from '../types/portfolio';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { staggerContainer, staggerItem } from '../utils/animations';
import { useTheme } from '../contexts/ThemeContext';

interface CertificatesProps {
  certificates: Certificate[];
}

interface CertificateCardProps {
  certificate: Certificate;
}

function CertificateCard({ certificate }: CertificateCardProps) {
  const { theme } = useTheme();

  const content = (
    <motion.div
      className={`${theme.card} rounded-lg shadow-lg p-6 transition-all duration-300`}
      variants={staggerItem}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
        y: -5
      }}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="text-3xl"
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          📜
        </motion.div>
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${theme.text} mb-1`}>{certificate.name}</h3>
          <p className={`${theme.textSecondary} text-sm`}>{certificate.issuer}</p>
        </div>
      </div>
    </motion.div>
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  if (!certificates || certificates.length === 0) {
    return null;
  }

  return (
    <section className={`${theme.sectionBg}`} ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${theme.heading}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Certificates & Achievements
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {certificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
