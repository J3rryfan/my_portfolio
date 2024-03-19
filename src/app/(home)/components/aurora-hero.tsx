'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from 'framer-motion';
import { useEffect } from 'react';

import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const COLORS = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

export default function AuroraHero({
  children,
}: {
  children: React.ReactNode;
}) {
  const color = useMotionValue(COLORS[0]);

  const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 0%, #020617 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  return (
    <div>
      {children}
      <div className='absolute inset-0 z-0'>
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </div>
  );
}
