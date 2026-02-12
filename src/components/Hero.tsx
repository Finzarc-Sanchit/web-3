import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import { Button } from '@/components/ui/button-1';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const [splineLoaded, setSplineLoaded] = useState(false);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);

  useEffect(() => {
    if (!heroRef.current) return;

    // Initialize Locomotive Scroll after a short delay to ensure DOM is ready
    const initScroll = setTimeout(() => {
      const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;
      if (scrollContainer && !scrollRef.current) {
        scrollRef.current = new LocomotiveScroll({
          el: scrollContainer,
          smooth: true,
        } as any);
      }
    }, 100);

    return () => {
      clearTimeout(initScroll);
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }
    };
  }, []);

  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  // Animation variants
  const headlineVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const supportingTextVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const ctaVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const splineVariants = {
    hidden: {
      opacity: 0,
      scale: 1.05,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div
      ref={heroRef}
      style={{ scale }}
      className="relative min-h-svh w-screen bg-gradient-to-br from-black via-[#05070a] to-[#0a0f12] text-white flex flex-col items-center justify-center px-6"
    >
      {/* Full Screen Spline 3D Model */}
      <motion.div
        ref={splineRef}
        variants={splineVariants}
        initial="hidden"
        animate={splineLoaded ? 'visible' : 'hidden'}
        transition={{
          duration: 1.6,
          delay: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 w-full h-full opacity-80 z-0"
      >
        <iframe
          src="https://my.spline.design/orb-aRkKa7Ql8AdztyLi9DwqSaVE/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Spline 3D Model"
          className="absolute inset-0 w-full h-full"
          onLoad={handleSplineLoad}
        />
      </motion.div>

      {/* Subtle top and bottom fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-0" />

      {/* Improve text-to-background separation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_85%)] pointer-events-none z-0" />

      {/* Cinematic radial glow behind headline */}
      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-purple-600/20 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* Main content container */}
      <div className="w-full max-w-6xl relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center justify-center flex-col">
          {/* Focused spotlight glow behind headline */}
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-white/10 blur-[140px] rounded-full pointer-events-none z-0" />

          {/* Headline */}
          <motion.h1
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] leading-[1.05] max-w-4xl mb-6 bg-gradient-to-b from-white via-white to-white/70 text-transparent bg-clip-text drop-shadow-[0_0_40px_rgba(255,255,255,0.18)]"
          >
            Can Your Website Generate
            <br />
            More Revenue?
          </motion.h1>

          {/* Supporting Statement */}
          <motion.p
            variants={supportingTextVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative z-10 text-base md:text-lg text-white/60 max-w-xl leading-relaxed mb-8 md:mb-10"
          >
            Ultra-premium digital experiences that elevate perception and convert attention into measurable growth.
          </motion.p>

          {/* CTA Section with button-1 UI Components */}
          <motion.div
            variants={ctaVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="relative z-10 flex flex-col sm:flex-row gap-4 items-center"
          >
            <Button
              variant="primary"
              size="lg"
              className="h-12 px-8 md:px-10 text-sm md:text-base font-medium rounded-xl bg-white text-black shadow-[0_15px_40px_rgba(0,0,0,0.45)] hover:shadow-[0_22px_70px_rgba(0,0,0,0.65)] hover:-translate-y-1.5 active:translate-y-0 transition-all duration-300 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/70 before:to-transparent before:opacity-50 relative"
            >
              Build My Premium Website
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 md:px-10 text-sm md:text-base font-medium rounded-xl bg-white/5 text-white border-white/15 backdrop-blur-xl hover:bg-white/12 hover:border-white/30 hover:-translate-y-1.5 transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
