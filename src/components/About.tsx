import type { About as AboutType, Goals, Education, Background } from '../types/portfolio';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations';
import { useTheme } from '../contexts/ThemeContext';

interface AboutProps {
  about: AboutType;
  goals: Goals;
  education: Education;
  background: Background;
}

export default function About({ about, goals, education, background }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  return (
    <section className={`py-20 ${theme.sectionBg}`} id="about">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2
          className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${theme.heading}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className={`${theme.card} rounded-lg shadow-lg p-8 mb-8 transition-all duration-300 hover:shadow-xl`}
            variants={fadeUp}
          >
            <p className={`text-base sm:text-lg ${theme.textSecondary} mb-6 leading-relaxed`}>
              {about.long}
            </p>
            <div className="border-t pt-6">
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${theme.text}`}>Background</h3>
              <p className={`${theme.textSecondary}`}>From: {background.from}</p>
              <p className={`${theme.textSecondary}`}>{background.current_region}</p>
            </div>
          </motion.div>

          <motion.div
            className={`${theme.card} rounded-lg shadow-lg p-8 mb-8 transition-all duration-300 hover:shadow-xl`}
            variants={fadeUp}
          >
            <h3 className={`text-xl sm:text-2xl font-semibold mb-6 ${theme.text}`}>Education</h3>
            <div className={`border-l-4 ${theme.border} pl-4`}>
              <h4 className={`text-lg sm:text-xl font-semibold ${theme.text}`}>{education.degree}</h4>
              <p className={`${theme.textSecondary}`}>{education.school}</p>
              <p className={`${theme.textSecondary}`}>{education.location}</p>
              <p className={`${theme.textSecondary}`}>Graduation: {education.graduation_year}</p>
            </div>
          </motion.div>

          <motion.div
            className={`${theme.card} rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl`}
            variants={fadeUp}
          >
            <h3 className={`text-xl sm:text-2xl font-semibold mb-6 ${theme.text}`}>Career Goals</h3>
            <motion.div
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div variants={staggerItem}>
                <h4 className={`font-semibold ${theme.highlight} mb-2`}>Short-term</h4>
                <p className={`${theme.textSecondary}`}>{goals.career_short_term}</p>
              </motion.div>
              <motion.div variants={staggerItem}>
                <h4 className={`font-semibold ${theme.highlight} mb-2`}>Long-term</h4>
                <p className={`${theme.textSecondary}`}>{goals.career_long_term}</p>
              </motion.div>
              <motion.div variants={staggerItem}>
                <h4 className={`font-semibold ${theme.highlight} mb-2`}>English Learning</h4>
                <p className={`${theme.textSecondary}`}>{goals.english_learning}</p>
              </motion.div>
              <motion.div variants={staggerItem}>
                <h4 className={`font-semibold ${theme.highlight} mb-2`}>Future Plan</h4>
                <p className={`${theme.textSecondary}`}>{goals.future_plan}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
