'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { locales, localeConfig } from '../../i18n/config';

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe size={18} />
        <span className="text-sm font-medium">
          {localeConfig[locale].flag} {localeConfig[locale].name}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 w-48 bg-white/90 backdrop-blur-md rounded-lg border border-white/30 shadow-xl overflow-hidden z-50"
          >
            {locales.map((loc) => (
              <motion.button
                key={loc}
                onClick={() => {
                  setLocale(loc);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors duration-200 ${
                  locale === loc
                    ? 'bg-primary-golden/20 text-primary-golden'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                whileHover={{ backgroundColor: locale === loc ? 'rgba(255, 215, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)' }}
              >
                <span className="text-lg">{localeConfig[loc].flag}</span>
                <div>
                  <div className="font-medium">{localeConfig[loc].name}</div>
                  <div className="text-xs text-gray-600 capitalize">{loc}</div>
                </div>
                {locale === loc && (
                  <motion.div
                    layoutId="activeLanguage"
                    className="ml-auto w-2 h-2 bg-primary-golden rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}