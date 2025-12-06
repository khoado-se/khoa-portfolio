import type { Contact as ContactType } from '../types/portfolio';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations';
import { useTheme } from '../contexts/ThemeContext';

interface ContactProps {
  contact: ContactType;
}

export default function Contact({ contact }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  return (
    <section className={`relative py-20 ${theme.background} ${theme.text} overflow-hidden`} id="contact" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className={`absolute top-1/4 -left-10 sm:-left-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 ${theme.motion.primary} rounded-full blur-3xl`}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-1/4 -right-10 sm:-right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 ${theme.motion.secondary} rounded-full blur-3xl`}
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className={`text-3xl sm:text-4xl font-bold mb-12 text-center ${theme.contactHeading}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className={`${theme.card} rounded-lg shadow-2xl p-8 mb-8 border ${theme.border}`}
            whileHover={{ scale: 1.01, borderColor: "rgba(255,255,255,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className={`text-xl text-center mb-8 ${theme.textSecondary}`}
              variants={fadeUp}
            >
              {contact.message}
            </motion.p>

            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.a
                href={`mailto:${contact.email}`}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transition-all border border-transparent"
                variants={staggerItem}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.25)",
                  borderColor: "rgba(255,255,255,0.3)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className={`text-sm ${theme.textSecondary} break-all`}>{contact.email}</p>
              </motion.a>

              <motion.a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transition-all border border-transparent"
                variants={staggerItem}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.25)",
                  borderColor: "rgba(255,255,255,0.3)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-3">💻</div>
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className={`text-sm ${theme.textSecondary}`}>View my code</p>
              </motion.a>

              <motion.a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center transition-all border border-transparent"
                variants={staggerItem}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.25)",
                  borderColor: "rgba(255,255,255,0.3)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-3">👔</div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className={`text-sm ${theme.textSecondary}`}>Connect with me</p>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.footer
            className={`text-center ${theme.textSecondary}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p>&copy; {new Date().getFullYear()} Do Dang Khoa. All rights reserved.</p>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
}
