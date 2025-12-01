import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Origin = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-paper-white text-void-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        
        {/* Sticky Headline */}
        <div className="relative h-fit md:sticky md:top-24">
          <motion.h2 
            style={{ opacity, scale }}
            className="text-[12vw] md:text-[8rem] leading-[0.85] font-bold tracking-tighter uppercase font-display break-words"
          >
            From <br/>
            Coverage <br/>
            To Code.
          </motion.h2>
        </div>

        {/* Narrative Content */}
        <div className="flex flex-col gap-12 pt-12 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl font-sans leading-relaxed text-tech-grey">
              For years, <span className="font-bold text-black">The Arena</span> has curated the sound of the continent. 
              We realized the ecosystem needed more than just coverage—it needed tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl font-sans leading-relaxed text-tech-grey">
              <span className="font-bold text-black">WORKS!</span> is our answer. We combine editorial taste with engineering rigor 
              to build brands, platforms, and products that move at the speed of Afrobeats.
            </p>
          </motion.div>

          {/* Visual Metaphor: Magazine to Blueprint */}
          <motion.div 
            className="w-full aspect-video bg-void-black mt-12 relative overflow-hidden group"
            initial={{ clipPath: 'inset(10% 10% 10% 10%)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 1, ease: "circOut" }}
          >
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" />
             <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(214,255,0,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />
             <div className="absolute bottom-4 left-4 text-signal-yellow font-mono text-xs">
                FIG. 01 — ARCHITECTURE
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Origin;
