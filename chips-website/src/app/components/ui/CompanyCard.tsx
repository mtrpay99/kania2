'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Package, Sparkles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Scene3D from '../3d/Scene3D';

interface CompanyCardProps {
  company: 'dlsoz' | 'kido' | 'charazo';
  onViewInfo: (company: string) => void;
}

const companyData = {
  dlsoz: {
    colors: {
      primary: '#DC3545',
      secondary: '#FF6B6B',
      accent: '#FFA8A8',
    },
    gradient: 'from-dlsoz-primary via-dlsoz-secondary to-dlsoz-accent',
    flavors: ['spicyPaprika', 'hotChili', 'smokyBBQ', 'jalapenoHeat'],
  },
  kido: {
    colors: {
      primary: '#007BFF',
      secondary: '#4DABF7',
      accent: '#A5D8FF',
    },
    gradient: 'from-kido-primary via-kido-secondary to-kido-accent',
    flavors: ['cheeseBurst', 'sweetCorn', 'pizzaFusion', 'chickenDelight'],
  },
  charazo: {
    colors: {
      primary: '#28A745',
      secondary: '#51CF66',
      accent: '#8CE99A',
    },
    gradient: 'from-charazo-primary via-charazo-secondary to-charazo-accent',
    flavors: ['seaSalt', 'herbGarden', 'lemonPepper', 'oliveTyme'],
  },
};

export default function CompanyCard({ company, onViewInfo }: CompanyCardProps) {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [showFlavors, setShowFlavors] = useState(false);
  const data = companyData[company];

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="perspective-1000">
        <motion.div
          className={`relative bg-gradient-to-br ${data.gradient} rounded-2xl shadow-2xl overflow-hidden preserve-3d`}
          whileHover={{ 
            rotateY: 5, 
            rotateX: 5, 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          {/* 3D Scene Background */}
          <div className="absolute inset-0 opacity-30">
            <Scene3D company={company} className="w-full h-full" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 h-96 flex flex-col justify-between">
            {/* Header */}
            <div className="text-center">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4"
                animate={{ 
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ duration: 0.8 }}
              >
                <Package size={32} className="text-white" />
              </motion.div>
              
              <motion.h3 
                className="text-3xl font-bold text-white mb-2"
                animate={{ y: isHovered ? -5 : 0 }}
              >
                {t(company)}
              </motion.h3>
              
              <motion.p 
                className="text-white/90 text-lg"
                animate={{ y: isHovered ? -3 : 0 }}
              >
                {t(`${company}Slogan`)}
              </motion.p>
            </div>

            {/* Flavors Preview */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/90">
                <Sparkles size={16} />
                <span className="text-sm font-medium">{t('availableFlavors')}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {data.flavors.slice(0, 4).map((flavor, index) => (
                  <motion.div
                    key={flavor}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: isHovered ? -2 : 0
                    }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.3
                    }}
                  >
                    <span className="text-white text-sm font-medium">
                      {t(`${company}Flavors.${flavor}`)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <motion.button
                onClick={() => setShowFlavors(!showFlavors)}
                className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 px-4 rounded-lg font-medium hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={16} />
                {t('viewFlavors')}
              </motion.button>

              <motion.button
                onClick={() => onViewInfo(company)}
                className="flex-1 bg-white text-gray-800 py-3 px-4 rounded-lg font-medium hover:bg-white/90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('learnMore')}
              </motion.button>
            </div>
          </div>

          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Floating particles */}
          <AnimatePresence>
            {isHovered && (
              <>
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/40 rounded-full"
                    initial={{ 
                      x: Math.random() * 300,
                      y: Math.random() * 400,
                      opacity: 0 
                    }}
                    animate={{ 
                      y: -50,
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Expanded Flavors Modal */}
      <AnimatePresence>
        {showFlavors && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute top-full left-0 right-0 mt-4 z-20 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-6"
          >
            <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
              {t('flavors')} - {t(company)}
            </h4>
            
            <div className="grid grid-cols-1 gap-3">
              {data.flavors.map((flavor, index) => (
                <motion.div
                  key={flavor}
                  className={`p-3 rounded-lg bg-gradient-to-r ${data.gradient} text-white`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="font-medium">
                    {t(`${company}Flavors.${flavor}`)}
                  </span>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => setShowFlavors(false)}
              className="mt-4 w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}