import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  loop?: boolean;
  onComplete?: () => void;
  showCursor?: boolean;
}

export default function TypewriterText({ texts, className = '', loop = true, onComplete, showCursor = true }: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];

      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);

        if (currentText === fullText) {
          if (onComplete) {
            onComplete();
          }
          if (loop) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(75);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, loop, onComplete]);

  return (
    <span className={className}>
      {currentText}
      {showCursor && (
        <motion.span
                  className="inline-block w-4 bg-red-500 ml-1 -skew-x-12"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
                />      )}
    </span>
  );
}
