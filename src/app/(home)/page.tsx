import Image from 'next/image';
import Navbar from './components/navbar';
import HeroSection from './components/heroSection';

export default function Home() {
  return (
    <div className=' min-h-screen bg-black overflow-hidden'>
      <div className=' max-w-7xl mx-auto p-5 '>
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
