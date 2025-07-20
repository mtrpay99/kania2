# Kaniamazn Chips Website

A modern, responsive, and interactive website for Kaniamazn chips company featuring 3D elements, multi-language support, and premium user experience.

## 🌟 Features

### Core Functionality
- **Single-page design** - All content accessible on one scrollable page
- **Multi-language support** - English, Arabic, and Kurdish with proper RTL/LTR text direction
- **Fully responsive** - Perfect experience on desktop, tablet, and mobile devices
- **3D Interactive Elements** - Rotating chip bags, floating animations, and immersive 3D scenes

### Companies & Brands
- **Kaniamazn** - Main company with premium quality chips
- **Dlsoz** - Bold and spicy flavors
- **Kido** - Fun snacks for families
- **Charazo** - Natural and healthy options

### Technical Features
- **Fast Performance** - Optimized for speed and low RAM usage
- **Modern Animations** - Smooth transitions and micro-interactions
- **3D Chip Bag Models** - Interactive 3D representations using React Three Fiber
- **Centralized Color System** - Easy theme customization
- **SEO Optimized** - Meta tags, structured data, and accessibility features

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chips-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Color System
The website uses a centralized color system defined in `tailwind.config.ts`. To change the main colors:

```typescript
colors: {
  kaniamazn: {
    primary: '#FFD700',    // Golden yellow
    secondary: '#FF8C00',  // Orange
    accent: '#FFC107',     // Light yellow
  },
  // ... other company colors
}
```

### Languages
Add new languages by:
1. Adding the locale to `src/app/i18n/config.ts`
2. Adding translations to `src/app/i18n/translations.ts`
3. Updating the `localeConfig` with language details

### 3D Models
3D chip bags are customizable in `src/app/components/3d/ChipBag3D.tsx`:
- Colors and materials
- Animations and interactions
- Text and branding

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🌐 Multi-Language Support

### Supported Languages
- **English** (en) - LTR
- **Arabic** (ar) - RTL
- **Kurdish** (ku) - RTL

### RTL Support
- Automatic text direction switching
- Mirrored layouts for RTL languages
- Proper font loading for Arabic/Kurdish scripts

## 🎯 Performance Optimizations

### Speed Optimizations
- **Code Splitting** - Automatic chunking for faster loads
- **Image Optimization** - WebP/AVIF formats with responsive sizing
- **Font Optimization** - Preloaded Google Fonts
- **Bundle Optimization** - Tree shaking and minification

### Memory Optimizations
- **Lazy Loading** - 3D components load on demand
- **Efficient Animations** - GPU-accelerated transforms
- **Optimized Dependencies** - Selective imports from large libraries

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### 3D Graphics
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers and abstractions

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **SWC** - Fast TypeScript/JavaScript compiler

## 📁 Project Structure

```
chips-website/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── 3d/           # 3D components
│   │   │   ├── layout/       # Layout components
│   │   │   └── ui/           # UI components
│   │   ├── contexts/         # React contexts
│   │   ├── i18n/            # Internationalization
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main page
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Design System

### Colors
- **Golden Yellow** (#FFD700) - Primary brand color
- **Orange** (#FF8C00) - Secondary brand color
- **Red** (#DC3545) - Dlsoz brand
- **Blue** (#007BFF) - Kido brand
- **Green** (#28A745) - Charazo brand

### Typography
- **Inter** - Primary font for English
- **Noto Sans Arabic** - Arabic text
- **Noto Sans** - Kurdish text

### Animations
- **Floating** - Subtle up/down movement
- **Glow Effects** - Hover interactions
- **3D Transforms** - Depth and perspective
- **Smooth Transitions** - 300ms ease timing

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Customization Points
- **Colors**: `tailwind.config.ts`
- **Translations**: `src/app/i18n/translations.ts`
- **3D Settings**: `src/app/components/3d/Scene3D.tsx`
- **Performance**: `next.config.ts`

## 📊 Performance Metrics

Target performance metrics:
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for Kaniamazn company.

## 🆘 Support

For technical support or questions:
- Create an issue in the repository
- Contact the development team

---

**Built with ❤️ for Kaniamazn - Premium Quality Chips Since 1995**
