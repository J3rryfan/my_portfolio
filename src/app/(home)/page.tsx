import Navbar from './components/navbar';
import HeroSection from './components/heroSection';
import Skills from './components/skills';
import Project from './components/project';
import Footer from './components/footer';
import AuroraHero from './components/aurora-hero';

export default function Home() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <AuroraHero>
        <div>
          <div className=' max-w-7xl mx-auto p-5 '>
            <Navbar />
            <HeroSection />
          </div>
          <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full '>
            {' '}
          </div>
        </div>
      </AuroraHero>

      <div className='max-w-7xl mx-auto p-5 mt-20'>
        <Skills />
        <Project />
        <Footer />
      </div>
    </div>
  );
}

// dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2]relative
