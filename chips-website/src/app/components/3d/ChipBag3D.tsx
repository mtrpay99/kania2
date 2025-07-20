'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface ChipBag3DProps {
  color: string;
  company: string;
  flavor: string;
  position: [number, number, number];
  scale?: number;
  autoRotate?: boolean;
}

export default function ChipBag3D({ 
  color, 
  company, 
  flavor, 
  position, 
  scale = 1,
  autoRotate = false 
}: ChipBag3DProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      if (autoRotate) {
        meshRef.current.rotation.y += delta * 0.5;
      }
      
      if (hovered) {
        meshRef.current.scale.setScalar(scale * 1.1);
        meshRef.current.position.y = position[1] + 0.2;
      } else {
        meshRef.current.scale.setScalar(scale);
        meshRef.current.position.y = position[1];
      }
    }
  });

  return (
    <group position={position}>
      {/* Main bag body */}
      <RoundedBox
        ref={meshRef}
        args={[1.5, 2.2, 0.4]}
        radius={0.1}
        smoothness={4}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={color}
          metalness={0.1}
          roughness={0.7}
          emissive={hovered ? new THREE.Color(color).multiplyScalar(0.1) : new THREE.Color(0x000000)}
        />
      </RoundedBox>

      {/* Top seal */}
      <RoundedBox
        args={[1.6, 0.3, 0.2]}
        position={[0, 1.25, 0]}
        radius={0.05}
        castShadow
      >
        <meshStandardMaterial
          color={new THREE.Color(color).multiplyScalar(0.8)}
          metalness={0.3}
          roughness={0.5}
        />
      </RoundedBox>

      {/* Company name */}
      <Text
        position={[0, 0.5, 0.21]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/arial-bold.woff"
        outlineWidth={0.02}
        outlineColor="black"
      >
        {company}
      </Text>

      {/* Flavor text */}
      <Text
        position={[0, -0.2, 0.21]}
        fontSize={0.18}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/arial.woff"
        outlineWidth={0.01}
        outlineColor="black"
      >
        {flavor}
      </Text>

      {/* Shine effect */}
      <Box
        args={[0.3, 1.5, 0.01]}
        position={[-0.4, 0.2, 0.21]}
        rotation={[0, 0, 0.3]}
      >
        <meshStandardMaterial
          color="white"
          transparent
          opacity={hovered ? 0.3 : 0.1}
          emissive="white"
          emissiveIntensity={hovered ? 0.2 : 0.05}
        />
      </Box>

      {/* Floating particles when hovered */}
      {hovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <Box
              key={i}
              args={[0.05, 0.05, 0.05]}
              position={[
                (Math.random() - 0.5) * 3,
                (Math.random() - 0.5) * 3 + 1,
                (Math.random() - 0.5) * 2
              ]}
            >
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
                transparent
                opacity={0.7}
              />
            </Box>
          ))}
        </>
      )}
    </group>
  );
}