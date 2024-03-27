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
    Link: 'https://pictok.vercel.app/',
    cover: '/pictokCover.webp',
    background: 'bg-indigo-500',
  },

  {
    title: 'Discord Clone',
    tech: [SiReact, SiTailwindcss, SiNextdotjs, SiTypescript, SiFigma],
    Link: 'https://github.com/J3rryfan/discord-clone',
    cover: '/Busy_Bites_Cover.jpeg',
    background: 'bg-green-500',
  },

  {
    title: 'BusyBites',
    tech: [SiReact, SiTailwindcss, SiNextdotjs, SiTypescript, SiFigma],
    Link: 'https://busy-bites.vercel.app/',
    cover: '/Busy_Bites_Cover.jpeg',
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
    title: 'Email Guard',
    tech: [SiReact, SiTailwindcss, SiNextdotjs, SiTypescript],
    Link: 'http://localhost:3000',
    cover: '/emailGuard.jpeg',
    background: 'bg-indigo-500',
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
        {projects.map((project, index) => (
          <>
            <div>
              <Link href={project.Link} key={index}>
                <div className={cn('p-5 rounded-xl', project.background)}>
                  <DirectionAwareHover
                    imageUrl={project.cover}
                    className='w-full space-y-5 cursor-pointer rounded-xl'
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
              <div>
                <div className='flex items-center justify-center flex-1 gap-x-6 mt-2'>
                  <Link href={project.Link}>
                    <button>Live Demo</button>
                  </Link>
                  <button>Github</button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
