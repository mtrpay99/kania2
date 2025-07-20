'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import ChipBag3D from './ChipBag3D';

interface Scene3DProps {
  company?: 'kaniamazn' | 'dlsoz' | 'kido' | 'charazo';
  showMultiple?: boolean;
  className?: string;
}

const companyColors = {
  kaniamazn: '#FFD700',
  dlsoz: '#DC3545',
  kido: '#007BFF',
  charazo: '#28A745',
};

const companyFlavors = {
  kaniamazn: ['Original', 'Classic', 'Premium', 'Golden'],
  dlsoz: ['Spicy Paprika', 'Hot Chili', 'Smoky BBQ', 'Jalapeño Heat'],
  kido: ['Cheese Burst', 'Sweet Corn', 'Pizza Fusion', 'Chicken Delight'],
  charazo: ['Sea Salt', 'Herb Garden', 'Lemon Pepper', 'Olive Thyme'],
};

function Scene3DContent({ company, showMultiple }: Scene3DProps) {
  if (showMultiple) {
    return (
      <>
        {/* Kaniamazn - Center */}
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <ChipBag3D
            color={companyColors.kaniamazn}
            company="Kaniamazn"
            flavor="Premium"
            position={[0, 0, 0]}
            scale={1.2}
            autoRotate
          />
        </Float>

        {/* Dlsoz - Left */}
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.3}>
          <ChipBag3D
            color={companyColors.dlsoz}
            company="Dlsoz"
            flavor="Spicy"
            position={[-4, -1, -2]}
            scale={0.9}
          />
        </Float>

        {/* Kido - Right */}
        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.4}>
          <ChipBag3D
            color={companyColors.kido}
            company="Kido"
            flavor="Fun"
            position={[4, -0.5, -1]}
            scale={0.9}
          />
        </Float>

        {/* Charazo - Back */}
        <Float speed={1.3} rotationIntensity={0.6} floatIntensity={0.2}>
          <ChipBag3D
            color={companyColors.charazo}
            company="Charazo"
            flavor="Natural"
            position={[0, 1, -4]}
            scale={0.8}
          />
        </Float>

        {/* Additional flavor bags */}
        {company && companyFlavors[company].map((flavor, index) => (
          <Float 
            key={flavor} 
            speed={1 + index * 0.2} 
            rotationIntensity={0.2} 
            floatIntensity={0.3}
          >
            <ChipBag3D
              color={companyColors[company]}
              company={company}
              flavor={flavor}
              position={[
                (index - 1.5) * 2.5,
                -2 - index * 0.5,
                -3 - index
              ]}
              scale={0.6}
            />
          </Float>
        ))}
      </>
    );
  }

  if (company) {
    return (
      <>
        {companyFlavors[company].map((flavor, index) => (
          <Float 
            key={flavor} 
            speed={1.5 + index * 0.1} 
            rotationIntensity={0.5} 
            floatIntensity={0.5}
          >
            <ChipBag3D
              color={companyColors[company]}
              company={company}
              flavor={flavor}
              position={[
                (index % 2) * 4 - 2,
                Math.floor(index / 2) * 3 - 1,
                -index * 0.5
              ]}
              scale={0.8 + (index === 0 ? 0.4 : 0)}
              autoRotate={index === 0}
            />
          </Float>
        ))}
      </>
    );
  }

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <ChipBag3D
        color="#FFD700"
        company="Kaniamazn"
        flavor="Premium"
        position={[0, 0, 0]}
        scale={1.2}
        autoRotate
      />
    </Float>
  );
}

export default function Scene3D({ company, showMultiple, className }: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFD700" />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#007BFF" />

          {/* Environment */}
          <Environment preset="sunset" />
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1}
          />

          {/* 3D Content */}
          <Scene3DContent company={company} showMultiple={showMultiple} />

          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={15}
            autoRotate={!company}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}