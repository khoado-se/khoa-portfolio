import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import './ThemeSwitcher.css';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { name: 'default', label: 'Default', icon: '🌙' },
    { name: 'tet', label: 'Tết', icon: '🧨' },
  ];

  const selectedTheme = themes.find(t => t.name === theme.name);

  return (
    <div className="theme-switcher">
      <motion.button
        className={`theme-switcher-button ${theme.button.secondary}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{selectedTheme?.icon}</span>
        <span>{selectedTheme?.label}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`theme-switcher-menu ${theme.card}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {themes.map((t) => (
              <div
                key={t.name}
                className={`theme-switcher-item ${theme.textSecondary} hover:${theme.highlight}`}
                onClick={() => {
                  setTheme(t.name as 'default' | 'tet');
                  setIsOpen(false);
                }}
              >
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
