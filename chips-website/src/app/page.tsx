'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Star, Award, Users, Zap } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import Header from './components/layout/Header';
import CompanyCard from './components/ui/CompanyCard';
import Scene3D from './components/3d/Scene3D';

export default function HomePage() {
  const { t } = useLanguage();
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const companiesRef = useRef<HTMLElement>(null);

  const scrollToSection = (section: string) => {
    if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'companies' && companiesRef.current) {
      companiesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewCompanyInfo = (company: string) => {
    setSelectedCompany(company);
  };

  const stats = [
    { icon: Star, value: '25+', label: 'Years Experience' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Users, value: '1M+', label: 'Happy Customers' },
    { icon: Zap, value: '100+', label: 'Flavors Created' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-golden via-primary-orange to-primary-red">
      {/* Header */}
      <Header onScrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 chip-pattern"></div>
        
        {/* Floating Particles */}
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 gradient-text">
                {t('mainCompany')}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
                {t('mainCompanySlogan')}
              </p>
              
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {t('mainCompanyDescription')}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  onClick={() => scrollToSection('about')}
                  className="bg-white text-primary-golden px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 glow-hover"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('scrollToAbout')}
                  <ArrowDown size={20} className="animate-bounce" />
                </motion.button>
                
                <motion.button
                  onClick={() => scrollToSection('companies')}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-golden transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('companies')}
                </motion.button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center glass rounded-2xl p-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon size={32} className="text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right 3D Scene */}
          <motion.div
            className="h-96 lg:h-[600px] relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Scene3D showMultiple className="w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Companies Section */}
      <section ref={companiesRef} className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-chip-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('companies')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our specialized brands, each crafted to deliver unique flavors and experiences
            </p>
          </motion.div>

          {/* Company Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {(['dlsoz', 'kido', 'charazo'] as const).map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CompanyCard 
                  company={company} 
                  onViewInfo={handleViewCompanyInfo}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-gradient-to-br from-primary-golden via-primary-orange to-primary-yellow relative overflow-hidden">
        <div className="absolute inset-0 chip-pattern"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {t('aboutTitle')}
              </h2>
            </motion.div>

            <motion.div
              className="glass rounded-3xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
                {t('aboutContent')}
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { title: t('dlsoz'), desc: t('dlsozSlogan'), color: 'bg-dlsoz' },
                  { title: t('kido'), desc: t('kidoSlogan'), color: 'bg-kido' },
                  { title: t('charazo'), desc: t('charazoSlogan'), color: 'bg-charazo' },
                ].map((brand, index) => (
                  <motion.div
                    key={brand.title}
                    className={`${brand.color} rounded-2xl p-6 text-white`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-2xl font-bold mb-3">{brand.title}</h3>
                    <p className="opacity-90">{brand.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="mt-12 bg-white text-primary-golden px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 glow-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('backToTop')}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info Modal */}
      <AnimatePresence>
        {selectedCompany && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCompany(null)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {t(selectedCompany)}
                </h3>
                <p className="text-xl text-gray-600 mb-6">
                  {t(`${selectedCompany}Slogan`)}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t(`${selectedCompany}Description`)}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  {t('availableFlavors')}
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {['spicyPaprika', 'hotChili', 'smokyBBQ', 'jalapenoHeat'].map((flavor) => (
                    <div
                      key={flavor}
                      className="bg-gray-100 rounded-lg p-3 text-center"
                    >
                      <span className="font-medium text-gray-800">
                        {t(`${selectedCompany}Flavors.${flavor}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedCompany(null)}
                className="w-full bg-primary-golden text-white py-3 px-6 rounded-lg font-bold hover:bg-primary-orange transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
