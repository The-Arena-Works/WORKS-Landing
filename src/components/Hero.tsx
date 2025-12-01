import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { useState, useEffect } from 'react';

const locations = [
  { coord: '6.5244° N, 3.3792° E', city: 'LAGOS, NG' },
  { coord: '51.5074° N, 0.1278° W', city: 'LONDON, UK' },
  { coord: '38.7223° N, 9.1393° W', city: 'LISBON, PT' },
  { coord: '27.4698° S, 153.0251° E', city: 'BRISBANE, AU' }
];

const Hero = () => {
  const [locationIndex, setLocationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocationIndex((prev) => (prev + 1) % locations.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center px-6"
      style={{ backgroundColor: '#050505' }}
    >
      
      {/* Background Grid - Subtle Engineering Vibe */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />

      {/* Main Typography */}
      <div className="z-10 text-center">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-[12vw] leading-[0.9] font-bold tracking-tighter uppercase"
          style={{ 
            color: '#F2F2F2',
            fontFamily: 'Space Grotesk, sans-serif' 
          }}
        >
          We Engineer <br />
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] to-[#888]"
            style={{
              backgroundImage: 'linear-gradient(to right, #F2F2F2, #888)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Culture
          </span>
        </motion.h1>
      </div>

      {/* Sub-text & Badge */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-12 flex flex-col items-center gap-6 z-10"
      >
        <p 
          className="text-sm md:text-base max-w-md text-center uppercase tracking-widest"
          style={{ 
            color: '#999',
            fontFamily: 'Space Mono, monospace' 
          }}
        >
          // The Product Studio by The Arena
        </p>

        {/* The Action Button */}
        <Button>
            Start a Project
        </Button>
      </motion.div>

      {/* Decorative Technical Elements - Rotating Coordinates */}
      <motion.div 
        key={locationIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute bottom-8 left-8 text-xs hidden md:block"
        style={{ 
          color: '#333333',
          fontFamily: 'Space Mono, monospace' 
        }}
      >
        COORD: {locations[locationIndex].coord} <br/>
        LOC: {locations[locationIndex].city}
      </motion.div>
      
      <div 
        className="absolute bottom-8 right-8 text-xs animate-pulse"
        style={{ 
          color: '#D6FF00',
          fontFamily: 'Space Mono, monospace' 
        }}
      >
        ● SYSTEM: ONLINE
      </div>

    </section>
  );
};

export default Hero;
