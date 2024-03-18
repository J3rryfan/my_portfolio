import {
  SiFigma,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import Title from './title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

const projects = [
  {
    title: 'Pictok',
    tech: [SiReact, SiTailwindcss, SiNextdotjs, SiTypescript, SiFigma],
    Link: 'http://localhost:3000',
    cover: '/project-profile-1.png',
    background: 'bg-indigo-500',
  },

  {
    title: 'Discord Clone',
    tech: [SiReact, SiTailwindcss, SiNextdotjs, SiTypescript, SiFigma],
    Link: 'http://localhost:3000',
    cover: '/project-profile-1.png',
    background: 'bg-green-500',
  },

  {
    title: 'TradeSqaure',
    tech: [SiReact, SiTailwindcss, SiNextdotjs, SiTypescript],
    Link: 'http://localhost:3000',
    cover: '/project-profile-2.png',
    background: 'bg-indigo-500',
  },

  {
    title: 'kotion',
    tech: [SiReact, SiTailwindcss, SiNextdotjs, SiTypescript],
    Link: 'http://localhost:3000',
    cover: '/project-profile-2.png',
    background: 'bg-green-500',
  },

  {
    title: 'WishList',
    tech: [SiReact, SiTailwindcss, SiNextdotjs, SiTypescript],
    Link: 'http://localhost:3000',
    cover: '/project-profile-2.png',
    background: 'bg-green-500',
  },
];

export default function Project() {
  return (
    <div className=' py-10 p-5 sm:p-0'>
      <Title
        text='Projects 🎨'
        className=' flex flex-col items-center justify-center rotate-6'
      />

      <div className=' grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
        {projects.map((project, index) => {
          return (
            <Link href={project.Link} key={index}>
              <div className={cn('p-5 rounded-md', project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className='w-full space-y-5 cursor-pointer'
                >
                  <div className='space-y-5'>
                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                    <div className='flex items-center gap-5'>
                      {project.tech.map((Icon, index) => {
                        return <Icon key={index} className='w-5 h-5' />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
