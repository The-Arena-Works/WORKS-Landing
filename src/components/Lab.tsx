import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "SoundCheck™",
    desc: "Automated metadata cleaning for DSP uploads.",
    status: "Beta",
    version: "v0.9.2"
  },
  {
    id: 2,
    name: "Arena Pass",
    desc: "Web3-ready fan loyalty and ticketing protocol.",
    status: "Live",
    version: "v1.0.4"
  },
  {
    id: 3,
    name: "PressKit.bio",
    desc: "Dynamic, auto-updating EPKs for emerging talent.",
    status: "In Dev",
    version: "v0.1.0"
  },
  {
    id: 4,
    name: "RoyaltyFlow",
    desc: "Transparent split sheet management on-chain.",
    status: "Concept",
    version: "v0.0.1"
  }
];

const Lab = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-void-black text-paper-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <div className="absolute top-12 left-6 md:left-12 z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-2">The Lab</h2>
            <p className="font-mono text-tech-grey text-sm uppercase tracking-widest">// Internal Product Studio</p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative h-[50vh] w-[80vw] md:w-[40vw] flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:border-signal-yellow/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div className="font-mono text-xs text-signal-yellow border border-signal-yellow/30 px-2 py-1 rounded">
                        {product.status}
                    </div>
                    <div className="font-mono text-xs text-tech-grey">
                        {product.version}
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">{product.name}</h3>
                    <p className="text-tech-grey text-lg">{product.desc}</p>
                </div>

                <div className="flex justify-between items-end">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-signal-yellow group-hover:border-signal-yellow transition-all duration-300">
                        <ArrowRight className="w-5 h-5 group-hover:text-black transition-colors duration-300" />
                    </div>
                    <div className="font-mono text-xs text-white/20">
                        ID: P-{product.id.toString().padStart(3, '0')}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Lab;
