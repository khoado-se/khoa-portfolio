import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa'; // Assuming react-icons is installed

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

interface HeaderProps {
  containerRef?: React.RefObject<HTMLDivElement>; // Made optional for now, as it wasn't used inside Header
  isScrolled: boolean;
  onHeaderHeightChange?: (height: number) => void;
}

export default function Header({ isScrolled, onHeaderHeightChange }: HeaderProps) {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset'; // Clean up on unmount
    };
  }, [isOpen]);

  // Measure header height and report to parent
  useEffect(() => {
    if (headerRef.current && onHeaderHeightChange) {
      onHeaderHeightChange(headerRef.current.offsetHeight);
    }
  }, [onHeaderHeightChange, headerRef]); // Rerun if onHeaderHeightChange or headerRef changes

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <motion.header
      ref={headerRef} // Attach ref to the header element
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? `${theme.background} shadow-lg` : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-3 sm:px-6 sm:py-4 flex justify-between items-center">
        <motion.div
          className={`font-bold text-xl ${isScrolled ? theme.highlight : 'text-white'}`}
          whileHover={{ scale: 1.05 }}
        >
          Do Dang Khoa
        </motion.div>
        <div className="flex items-center">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? theme.text : 'text-white'} focus:outline-none`}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center space-x-4 md:space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <motion.a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`font-semibold transition-colors duration-300`}
                  animate={{ color: isScrolled ? theme.textColorValue : '#ffffff' }}
                  whileHover={{ color: theme.highlightColor, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
            <li>
              <ThemeSwitcher />
            </li>
          </ul>

        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 right-0 h-full w-full ${theme.background} bg-opacity-100 md:hidden flex flex-col items-center justify-center space-y-8 z-999`}
        >
          <button onClick={() => setIsOpen(false)} className={`absolute top-6 right-6 ${theme.text} focus:outline-none`}>
            <FaTimes size={24} />
          </button>
          <ul className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <motion.a
                  href={link.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    scrollTo(e, link.href);
                  }}
                  className={`text-3xl font-bold ${theme.text} hover:${theme.highlightColor} transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
}