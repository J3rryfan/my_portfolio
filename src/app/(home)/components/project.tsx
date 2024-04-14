"use client";

import {
  SiFigma,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import Title from './title';
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const projects = [
  {
    title: 'Pictok',
    tech: [SiReact, SiTailwindcss, SiNextdotjs, SiTypescript, SiFigma],
    description: '',
    Link: 'https://pictok.vercel.app/',
    GithubLink: 'https://github.com/pictok/web-app',
    cover: '/pictokCover.png',
    background: 'bg-indigo-500',
  },

  {
    title: 'Discord Clone',
    tech: [SiReact, SiTailwindcss, SiNextdotjs, SiTypescript, SiFigma],
    description: '',
    Link: 'https://github.com/J3rryfan/discord-clone',
    GithubLink: 'https://github.com/J3rryfan/discord-clone',
    cover: '/Busy_Bites_Cover.png',
    background: 'bg-green-500',
  },

  {
    title: 'BusyBites',
    tech: [SiReact, SiTailwindcss, SiNextdotjs, SiTypescript, SiFigma],
    description: '',
    Link: 'https://busy-bites.vercel.app/',
    GithubLink: 'https://github.com/busy-bites/busy-bites',
    cover: '/Busy_Bites_Cover.png',
    background: 'bg-indigo-500',
  },

  {
    title: 'WishList',
    tech: [SiReact, SiTailwindcss, SiVite, SiTypescript],
    Link: 'https://dpcgasqvo69t1.cloudfront.net/',
    description: 'Upload your wishlist to the cloud and never lose it again.',
    GithubLink: 'https://github.com/J3rryfan/aws-lambda-my-wishlist-app',
    cover: '/wishlist.png',
    background: 'bg-green-500',
  },

  {
    title: 'Email Guard',
    tech: [SiReact, SiTailwindcss, SiNextdotjs, SiTypescript],
    description: '',
    Link: 'https://email-guard.vercel.app/',
    GithubLink: 'https://github.com/Email-Phising-Guard/email-guard',
    cover: '/emailGuard.jpeg',
    background: 'bg-indigo-500',
  },
];

export default function Project() {
  return (
    <div className=' py-10 p-5 sm:p-0'>
      <Title
        text='Projects 🎨'
        className=' flex flex-col items-center justify-center rotate-6 text-white'
      />

      <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
          {projects.map((project, index) => (
          <div key={index}>
            <CardContainer className="inter-var" >
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.cover}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className='flex items-center justify-start gap-2 mt-3'>
              {project.tech.map((Icon, index) => {
                  return <Icon key={index} className='w-5 h-5 text-white' />;
                })}
              </div>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.Link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Live Demo
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.GithubLink}
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  GitHub
                </CardItem>
              </div>
            </CardBody>
            </CardContainer>
          </div>
          ))}
         </div>
      </div>
  );
}



 {/* <div className=' grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
        {projects.map((project, index) => (
          <>
            <div>
              <Link href={project.Link} key={index}>
                <div className={cn('p-3 rounded-md', project.background)}>
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
                    <Button variant='secondary' className='w-full'>
                      Live Demo
                    </Button>
                  </Link>
                  <Link href={project.GithubLink}>
                    <Button variant='secondary'>GitHub</Button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div> */}
