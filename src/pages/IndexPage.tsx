import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Preloader } from '../components/Preloader';
import { Hero } from '../components/Hero';

export function IndexPage() {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <div data-scroll-container>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      {!showPreloader && (
    <>
      <Navigation />
          <Hero />
    </>
      )}
    </div>
  );
}
