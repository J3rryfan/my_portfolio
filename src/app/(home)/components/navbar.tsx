import { cn } from '@/lib/utils';
import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      Link: 'https://www.linkedin.com/in/jerryfaan/',
      Label: 'Linkedin',
      Icon: SiLinkedin,
    },
    {
      Link: 'https://github.com/J3rryfan',
      Label: 'Github',
      Icon: SiGithub,
    },
    // {
    //   Link: '',
    //   Label: 'Resume',
    // },
  ];

  return (
    <nav
      className={cn(
        ' py-10 flex items-center justify-between animate-move-down',
        className
      )}
    >
      <h1 className=' text-2xl font-bold underline underline-offset-8 decoration-green-600 -rotate-2'>
        Jerry Fan
      </h1>
      <div className=' flex items-center gap-5'>
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.Link} key={index} aria-label={social.Label}>
              <Icon className='w-5 h-5 hover:scale-125 transition-all' />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
