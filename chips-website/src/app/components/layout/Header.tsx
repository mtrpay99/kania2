'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSelector from '../ui/LanguageSelector';

interface HeaderProps {
  onScrollToSection: (section: string) => void;
}

export default function Header({ onScrollToSection }: HeaderProps) {
  const { t, dir } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width and add resize listener
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToAbout = () => {
    onScrollToSection('about');
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-kaniamazn-primary/90 via-primary-orange/90 to-kaniamazn-accent/90 backdrop-blur-lg border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-kaniamazn-primary">K</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-red rounded-full animate-pulse"></div>
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold tracking-tight">{t('mainCompany')}</h1>
              <p className="text-sm opacity-90">{t('mainCompanySlogan')}</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <motion.button
              onClick={scrollToTop}
              className="text-white hover:text-kaniamazn-accent transition-colors duration-300 font-medium"
              whileHover={{ y: -2 }}
            >
              {t('home')}
            </motion.button>
            
            <motion.button
              onClick={scrollToAbout}
              className="flex items-center gap-1 text-white hover:text-kaniamazn-accent transition-colors duration-300 font-medium"
              whileHover={{ y: -2 }}
            >
              {t('scrollToAbout')}
              <ArrowDown size={16} className="animate-bounce" />
            </motion.button>

            <motion.button
              onClick={() => onScrollToSection('companies')}
              className="text-white hover:text-kaniamazn-accent transition-colors duration-300 font-medium"
              whileHover={{ y: -2 }}
            >
              {t('companies')}
            </motion.button>
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center gap-4">
            <LanguageSelector />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-kaniamazn-accent transition-colors p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pt-4 border-t border-white/20"
            >
              <div className="flex flex-col gap-4">
                <motion.button
                  onClick={scrollToTop}
                  className="text-left text-white hover:text-kaniamazn-accent transition-colors duration-300 font-medium py-2"
                  whileHover={{ x: dir === 'rtl' ? -10 : 10 }}
                >
                  {t('home')}
                </motion.button>
                
                <motion.button
                  onClick={scrollToAbout}
                  className="text-left flex items-center gap-2 text-white hover:text-kaniamazn-accent transition-colors duration-300 font-medium py-2"
                  whileHover={{ x: dir === 'rtl' ? -10 : 10 }}
                >
                  {t('scrollToAbout')}
                  <ArrowDown size={16} className="animate-bounce" />
                </motion.button>

                <motion.button
                  onClick={() => {
                    onScrollToSection('companies');
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-white hover:text-kaniamazn-accent transition-colors duration-300 font-medium py-2"
                  whileHover={{ x: dir === 'rtl' ? -10 : 10 }}
                >
                  {t('companies')}
                </motion.button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {windowWidth > 0 && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            initial={{
              x: Math.random() * windowWidth,
              y: Math.random() * 100,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </header>
  );
}