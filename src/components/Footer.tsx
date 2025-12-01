
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full min-h-[80vh] bg-void-black text-paper-white flex flex-col justify-between overflow-hidden pt-24">
      
      <div className="px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12 z-10">
        <div className="flex flex-col gap-8">
            <h2 className="text-5xl md:text-8xl font-display font-bold uppercase leading-[0.8]">
                Ready to <br/>
                <span className="text-signal-yellow">Build?</span>
            </h2>
            <a href="mailto:hello@thearena.works" className="text-xl md:text-2xl hover:text-signal-yellow transition-colors duration-300">
                hello@thearena.works
            </a>
        </div>

        <div className="flex flex-col gap-4 text-lg md:text-xl font-mono uppercase">
            <a href="#" className="flex items-center gap-2 hover:text-signal-yellow transition-colors duration-300">
                Twitter <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-signal-yellow transition-colors duration-300">
                Instagram <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-signal-yellow transition-colors duration-300">
                LinkedIn <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center gap-2 text-signal-yellow hover:text-white transition-colors duration-300 mt-4">
                The Arena (Main) <ArrowUpRight className="w-4 h-4" />
            </a>
        </div>
      </div>

      <div className="relative w-full py-12 md:py-24 border-t border-white/10 mt-12 bg-signal-yellow text-void-black overflow-hidden">
        <div className="flex whitespace-nowrap">
            <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="flex gap-8 items-center"
            >
                {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-[10vw] md:text-[12vw] font-display font-bold uppercase leading-none tracking-tighter">
                        The Arena WORKS! — 
                    </span>
                ))}
            </motion.div>
            <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="flex gap-8 items-center"
            >
                {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-[10vw] md:text-[12vw] font-display font-bold uppercase leading-none tracking-tighter">
                        The Arena WORKS! — 
                    </span>
                ))}
            </motion.div>
        </div>
      </div>

      <div className="absolute bottom-4 left-6 md:left-12 text-xs font-mono text-black/50 z-20">
        © 2025 THE ARENA WORKS. ALL RIGHTS RESERVED.
      </div>

    </footer>
  );
};

export default Footer;
