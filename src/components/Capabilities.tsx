import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Brand Identity & Strategy",
    description: "Visual systems for artists & labels",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2727&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Web & Platform Development",
    description: "Headless CMS, React, WebGL",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Creative Direction",
    description: "Campaign rollouts, asset creation",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Fan Data Infrastructure",
    description: "CRM setup, mailing list architecture",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
  }
];

const Capabilities = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="w-full bg-void-black text-paper-white py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
            <h3 className="text-signal-yellow font-mono text-sm uppercase tracking-widest mb-4">// Capabilities</h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">Agency Services</h2>
        </div>

        <div className="flex flex-col">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative border-t border-white/20 py-12 transition-colors duration-300 hover:border-signal-yellow cursor-pointer"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 z-10 relative">
                <h3 className="text-3xl md:text-5xl font-display font-medium group-hover:text-signal-yellow transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="flex items-center gap-4">
                    <p className="text-tech-grey font-mono text-sm md:text-base group-hover:text-white transition-colors duration-300">
                    {service.description}
                    </p>
                    <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-signal-yellow transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/20" />
        </div>
      </div>

      {/* Floating Image on Hover */}
      <AnimatePresence>
        {hoveredService && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="fixed pointer-events-none z-20 w-[300px] h-[400px] hidden md:block"
            style={{ 
                top: '20%', 
                right: '10%',
                backgroundImage: `url(${services.find(s => s.id === hoveredService)?.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-signal-yellow/20 mix-blend-overlay" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Capabilities;
