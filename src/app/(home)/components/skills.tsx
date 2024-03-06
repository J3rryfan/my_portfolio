'use client';

import { HoverEffect } from '@/components/ui/card-hover-effect';
import Title from './title';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export default function Skills() {
  const skills = [
    {
      text: 'React',
      Icon: SiReact,
    },
    {
      text: 'Typescript',
      Icon: SiTypescript,
    },
    {
      text: 'Tailwindcss',
      Icon: SiTailwindcss,
    },
    {
      text: 'Next.js',
      Icon: SiNextdotjs,
    },
    {
      text: 'Tailwindcss',
      Icon: SiTailwindcss,
    },
    {
      text: 'Tailwindcss',
      Icon: SiTailwindcss,
    },
  ];

  return (
    <div className=' max-w-5xl mx-auto px-8'>
      <Title
        text='Skills 🐱'
        className=' flex flex-col items-center justify-center -rotate-6'
      />

      <HoverEffect items={skills} />
    </div>
  );
}
