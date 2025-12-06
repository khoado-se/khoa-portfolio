import React, { createContext, useState, useContext, useMemo } from 'react';

export const themes = {
  default: {
    name: 'default',
    background: 'bg-white',
    heroBg: 'bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800',
    aboutBg: 'bg-gray-100',
    skillsBg: 'bg-gray-200',
    projectsBg: 'bg-gray-100',
    experienceBg: 'bg-white',
    certificatesBg: 'bg-gray-100',
    contactBg: 'bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900',
    text: 'text-gray-800',
    textColorValue: '#1f2937',
    textSecondary: 'text-gray-600',
    heading: 'text-gray-800',
    contactHeading: 'text-white',
    border: 'border-blue-600',
    card: 'bg-white/80 backdrop-blur-sm',
    highlight: 'text-blue-700',
    highlightColor: '#2563eb',
    project: {
        cardHeader: 'bg-gradient-to-r from-blue-600 to-indigo-600',
        short: 'text-blue-100',
        role: 'text-blue-200',
        tech: 'bg-blue-100 text-blue-700',
        demoButton: 'bg-blue-600 text-white',
    },
    motion: {
        primary: 'bg-blue-400/20',
        secondary: 'bg-indigo-400/20',
    },
    button: {
      primary: 'bg-white text-blue-700',
      secondary: 'bg-blue-500 text-white',
      tertiary: 'bg-transparent border-2 border-white text-white',
    },
  },
  tet: {
    name: 'tet',
    background: 'bg-red-900',
    heroBg: 'bg-gradient-to-br from-red-700 via-red-800 to-yellow-600',
    aboutBg: 'bg-red-800/50',
    skillsBg: 'bg-red-800/50',
    projectsBg: 'bg-red-800/50',
    experienceBg: 'bg-red-800/50',
    certificatesBg: 'bg-red-800/50',
    contactBg: 'bg-red-800/50',
    text: 'text-yellow-200',
    textColorValue: '#fef08a',
    textSecondary: 'text-yellow-300',
    heading: 'text-yellow-300',
    contactHeading: 'text-yellow-300',
    border: 'border-yellow-400',
    card: 'bg-red-800/80 backdrop-blur-sm',
    highlight: 'text-yellow-400',
    highlightColor: '#facc15',
    project: {
        cardHeader: 'bg-gradient-to-r from-red-700 to-yellow-600',
        short: 'text-yellow-100',
        role: 'text-yellow-200',
        tech: 'bg-yellow-100 text-yellow-700',
        demoButton: 'bg-yellow-600 text-red-800',
    },
    motion: {
        primary: 'bg-red-400/20',
        secondary: 'bg-yellow-400/20',
    },
    button: {
      primary: 'bg-yellow-400 text-red-800',
      secondary: 'bg-red-600 text-white',
      tertiary: 'bg-transparent border-2 border-yellow-400 text-yellow-400',
    },
  },
};

export type Theme = typeof themes.default;

interface ThemeContextType {
  theme: Theme;
  setTheme: (themeName: 'default' | 'tet') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeName, setThemeName] = useState<'default' | 'tet'>('default');

  const setTheme = (themeName: 'default' | 'tet') => {
    setThemeName(themeName);
  };

  const theme = useMemo(() => themes[themeName], [themeName]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
