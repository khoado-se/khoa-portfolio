import type { Experience as ExperienceType } from '../types/portfolio';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeLeft, fadeRight } from '../utils/animations';
import { useTheme } from '../contexts/ThemeContext';

interface ExperienceProps {
  experience: ExperienceType[];
}

interface ExperienceCardProps {
  item: ExperienceType;
  index: number;
}

function ExperienceCard({ item, index }: ExperienceCardProps) {
  const { theme } = useTheme();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative pl-6 sm:pl-8 pb-8 ${theme.border} last:pb-0`}
      variants={isEven ? fadeLeft : fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
    >
      <motion.div
        className={`absolute -left-2 top-0 w-4 h-4 ${theme.border} rounded-full`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
      />
      <motion.div
        className={`${theme.card} rounded-lg shadow-lg p-6 transition-all duration-300`}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          x: 5
        }}
      >
        <div className="mb-3">
          <h3 className={`text-xl font-bold ${theme.text}`}>{item.role}</h3>
          <p className={`text-lg ${theme.highlight} font-semibold`}>{item.company}</p>
          <p className={`text-sm ${theme.textSecondary}`}>{item.period}</p>
        </div>
        <p className={`${theme.textSecondary} leading-relaxed`}>{item.description}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Experience({ experience }: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  return (
    <section className={`${theme.sectionBg}`} id="experience" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${theme.heading}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experience.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
