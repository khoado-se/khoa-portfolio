import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

interface ScrollToTopButtonProps {
    containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollToTopButton({ containerRef }: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  const toggleVisibility = () => {
    if (containerRef.current && containerRef.current.scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    containerRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener('scroll', toggleVisibility);

    return () => {
      container?.removeEventListener('scroll', toggleVisibility);
    };
  }, [containerRef]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors duration-300 z-50 ${theme.button.secondary}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
