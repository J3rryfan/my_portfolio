import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://jerryfan.vercel.app/'),

  title: "Jerry Fan's Portfolio",

  authors: {
    name: 'Jerry Fan',
  },

  description:
    "Based in Vancouver, BC. I'm a Fullstack Developer passionate about building a modern web application that users love.",
  openGraph: {
    title: "Jerry Fan's Portfolio",
    description:
      "Based in Vancouver, BC. I'm a Fullstack Developer passionate about building a modern web application that users love.",
    url: 'https://jerryfan.vercel.app/',
    siteName: "Jerry Fan's Portfolio",
    images: '/project-profile-1.png',
    type: 'website',
  },
  keywords: [
    'Frontend Developer',
    'Jerry Fan',
    'Portfolio',
    'Fullstack Developer',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={SpaceGrotesk.className}>
        {' '}
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
