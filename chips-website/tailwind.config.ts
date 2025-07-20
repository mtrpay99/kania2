import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main brand colors - chip bag inspired
        primary: {
          golden: '#FFD700',
          yellow: '#FFC107',
          orange: '#FF8C00',
          red: '#DC3545',
          blue: '#007BFF',
          green: '#28A745',
        },
        // Company specific colors
        kaniamazn: {
          primary: '#FFD700',
          secondary: '#FF8C00',
          accent: '#FFC107',
        },
        dlsoz: {
          primary: '#DC3545',
          secondary: '#FF6B6B',
          accent: '#FFA8A8',
        },
        kido: {
          primary: '#007BFF',
          secondary: '#4DABF7',
          accent: '#A5D8FF',
        },
        charazo: {
          primary: '#28A745',
          secondary: '#51CF66',
          accent: '#8CE99A',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 215, 0, 0.8)' },
        },
      },
      fontFamily: {
        'arabic': ['Noto Sans Arabic', 'sans-serif'],
        'kurdish': ['Noto Sans', 'sans-serif'],
        'english': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'chip-pattern': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FFD700" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      transform: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [
    function({ addUtilities }: any) {
      const newUtilities = {
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-2000': {
          perspective: '2000px',
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.rotate-x-12': {
          transform: 'rotateX(12deg)',
        },
        '.rotate-y-12': {
          transform: 'rotateY(12deg)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};

export default config;