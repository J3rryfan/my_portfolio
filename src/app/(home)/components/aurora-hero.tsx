'use client';

// import {
//   motion,
//   useMotionTemplate,
//   useMotionValue,
//   animate,
// } from 'framer-motion';
// import { useEffect } from 'react';

import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const COLORS = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

export default function AuroraHero({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className='absolute inset-0 z-0'>
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      {children}
    </div>
  );
}
