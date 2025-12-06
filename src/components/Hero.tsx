import { useState } from 'react';
import TypewriterText from './TypewriterText';
import type { Meta } from '../types/portfolio';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations';
import { useTheme } from '../contexts/ThemeContext';
import Firework from './Firework';

interface HeroProps {
  meta: Meta;
}

export default function Hero({ meta }: HeroProps) {
  const { theme } = useTheme();
  const [showLine1, setShowLine1] = useState(true);
  const [showLine2, setShowLine2] = useState(false);

  const handleLine1Complete = () => {
    setShowLine2(true);
  };

  const handleLine2Complete = () => {
    setTimeout(() => {
      setShowLine1(false);
      setShowLine2(false);
      setTimeout(() => {
        setShowLine1(true);
      }, 1000); // Restart after 1 second
    }, 2000); // Wait 2 seconds before disappearing
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${theme.textColor}`}>
      {theme.name === 'tet' && <Firework />}
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full blur-3xl ${theme.motion.primary}`}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl ${theme.motion.secondary}`}
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 py-20 text-center relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp} className="italic text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent pb-4 min-h-[12rem]">
          {showLine1 && (
            <div>
              <TypewriterText
                texts={["Hello, I'm Do Dang Khoa."]}
                loop={false}
                onComplete={handleLine1Complete}
                showCursor={true}
              />
            </div>
          )}
          {showLine2 && (
            <div>
              <TypewriterText
                texts={["A Software Engineer"]}
                loop={false}
                onComplete={handleLine2Complete}
                showCursor={true}
              />
            </div>
          )}
        </motion.div>
        <motion.p
          className="text-lg mb-8 text-blue-200"
          variants={fadeUp}
        >
          {meta.location}
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          variants={staggerContainer}
        >
          <motion.a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${theme.button.primary} flex items-center`}
            variants={staggerItem}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${theme.button.secondary} flex items-center`}
            variants={staggerItem}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href={`mailto:${meta.email}`}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${theme.button.tertiary} flex items-center`}
            variants={staggerItem}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)",
              boxShadow: "0 10px 30px rgba(255,255,255,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-center text-white">
          <p className="text-sm mb-2">Scroll Down</p>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </motion.div>
    </section>
  );
}
