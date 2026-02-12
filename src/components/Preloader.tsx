import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate wordmark fade in with blur-to-clear
    tl.to('.preloader-wordmark', {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Simulate progress loading
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
      }
      setProgress(Math.min(currentProgress, 100));
    }, 100);

    // Animate progress bar
    tl.to('.preloader-progress-bar', {
      width: '100%',
      duration: 2,
      ease: 'power2.inOut',
    }, '-=1.5');

    // Wordmark subtle scale
    tl.to('.preloader-wordmark', {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    }, '-=0.5');

    // Complete animation
    tl.to('.preloader-container', {
      opacity: 0,
      scale: 0.98,
      duration: 0.6,
      ease: 'power3.in',
      onComplete: () => {
        onComplete();
      },
    }, '+=0.3');

    return () => {
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="preloader-container fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0B0F1C] via-[#0F1624] to-[#0B0F1C]">
      <div className="preloader-wordmark text-white text-6xl md:text-8xl font-black tracking-tight opacity-0 filter blur-[15px] scale-[0.95]">
        FINZARC
      </div>
      <div className="mt-8 w-64 md:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div 
          className="preloader-progress-bar h-full bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 text-white/60 text-sm font-medium tracking-wider">
        {Math.round(progress)}%
      </div>
    </div>
  );
}

