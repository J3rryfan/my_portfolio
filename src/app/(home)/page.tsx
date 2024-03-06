import Image from 'next/image';
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';

export default function Home() {
  return (
    <div className=' min-h-screen bg-black overflow-hidden'>
      <div className='dark:bg-grid-white/[0.05] bg-grid-black/[0.2]'>
        <div className=' max-w-7xl mx-auto p-5 '>
          <Navbar />
          <HeroSection />
        </div>
      </div>
    </div>
  );
}
