'use client';

import { HoverEffect } from '@/components/ui/card-hover-effect';
import Title from './title';
import {
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiFigma,
  SiGithub,
  SiCsharp,
  SiDotnet,
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
      text: 'C#',
      Icon: SiCsharp,
    },
    {
      text: '.NET',
      Icon: SiDotnet,
    },
    {
      text: 'PHP',
      Icon: SiPhp,
    },
    {
      text: 'Laravel',
      Icon: SiLaravel,
    },
    {
      text: 'MySQL',
      Icon: SiMysql,
    },
    {
      text: 'PostgreSQL',
      Icon: SiPostgresql,
    },
    {
      text: 'Figma',
      Icon: SiFigma,
    },
    {
      text: 'Github',
      Icon: SiGithub,
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
