import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations';
import { useTheme } from '../contexts/ThemeContext';
// Import react-icons after installing: npm install react-icons
import { FaGithub } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const buttonStyle = "px-4 py-2 rounded transition-all text-sm font-medium flex items-center justify-center gap-2 w-full";

interface ProjectsProps {
  projects: Project[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`${theme.card} rounded-lg shadow-lg overflow-hidden transition-all duration-300`}
      variants={staggerItem}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className={`${theme.project.cardHeader} p-6 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-white/10 transform -skew-y-12"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{project.year}</span>
          </div>
          <p className={`${theme.project.short} mb-2`}>{project.short}</p>
          <p className={`text-sm ${theme.project.role}`}>{project.role}</p>
        </div>
      </div>

      <div className="p-6 flex flex-col">
        <p className={`${theme.textSecondary} mb-4 leading-relaxed flex-grow`}>{project.description}</p>

        {project.features && (
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: "auto" }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h4 className={`font-semibold ${theme.text} mb-2`}>Key Features:</h4>
            <ul className="list-disc list-inside space-y-1">
              {project.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  className={`${theme.textSecondary} text-sm`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        <div className="mb-4">
          <h4 className={`font-semibold ${theme.text} mb-2`}>Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <motion.span
                key={idx}
                className={`px-2 py-1 rounded text-xs font-medium ${theme.project.tech}`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t">
          {project.links.repo && (
            <motion.a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonStyle} bg-gray-800 hover:bg-gray-700 text-white`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              View Code
            </motion.a>
          )}
          {project.links.demo && (
            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonStyle} ${theme.project.demoButton}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          )}
          {project.links.playstore && (
            <motion.a
              href={project.links.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonStyle} bg-green-600 hover:bg-green-700 text-white`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoLogoGooglePlaystore />
              Google Play
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  return (
    <section className={`py-20 ${theme.sectionBg}`} id="projects" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className={`text-4xl font-bold mb-12 text-center ${theme.heading}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
