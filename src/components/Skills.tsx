import type { Skills as SkillsType } from '../types/portfolio';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations';
import { useTheme } from '../contexts/ThemeContext';

interface SkillsProps {
  skills: SkillsType;
}

interface SkillCategoryProps {
  title: string;
  items: string[];
  delay?: number;
}

function SkillCategory({ title, items, delay = 0 }: SkillCategoryProps) {
  const { theme } = useTheme();
  return (
    <motion.div
      className={`${theme.card} rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
    >
      <h3 className={`text-xl font-semibold mb-4 ${theme.highlight}`}>{title}</h3>
      <motion.div
        className="flex flex-wrap gap-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item, index) => (
          <motion.span
            key={index}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 cursor-default ${theme.sectionBg} ${theme.textSecondary}`}
            variants={staggerItem}
            whileHover={{ scale: 1.1, backgroundColor: "rgb(219, 234, 254)" }}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills({ skills }: SkillsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  return (
    <section className={`${theme.sectionBg}`} id="skills" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${theme.heading}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SkillCategory
            title="Languages"
            items={skills.languages}
            delay={0}
          />
          <SkillCategory
            title="Frameworks"
            items={skills.frameworks}
            delay={0.1}
          />
          <SkillCategory
            title="Frontend"
            items={skills.frontend}
            delay={0.2}
          />
          <SkillCategory
            title="Databases"
            items={skills.databases}
            delay={0.3}
          />
          <SkillCategory
            title="Cloud & DevOps"
            items={skills.cloud_devops}
            delay={0.4}
          />
          <SkillCategory
            title="Architecture & Tools"
            items={skills.architecture_tools}
            delay={0.5}
          />
          <SkillCategory
            title="Soft Skills"
            items={skills.soft_skills}
            delay={0.6}
          />
        </motion.div>
      </div>
    </section>
  );
}
