
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    client: "Rema / Mavin Records",
    project: "Global Tour Digital Experience",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2670&auto=format&fit=crop",
    size: "large"
  },
  {
    id: 2,
    client: "Spotify Africa",
    project: "Playlist Data Visualization",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 3,
    client: "Native Mag",
    project: "Interactive Editorial Platform",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    size: "tall"
  },
  {
    id: 4,
    client: "Odunsi (The Engine)",
    project: "Merch Drop E-commerce",
     image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop",
    size: "small"
  }
];

const Work = () => {
  return (
    <section className="w-full bg-paper-white text-void-black py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
                <h3 className="text-tech-grey font-mono text-sm uppercase tracking-widest mb-4">// Selected Works</h3>
                <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">Case Studies</h2>
            </div>
            <div className="text-right hidden md:block">
                <p className="font-mono text-sm">2023 — 2025</p>
                <p className="font-mono text-sm">LAGOS / LONDON / LISBON</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((item, index) => (
                <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group relative cursor-pointer ${item.size === 'tall' ? 'md:row-span-2' : ''}`}
                >
                    <div className="relative overflow-hidden w-full h-full aspect-[4/3] md:aspect-auto">
                        <img 
                            src={item.image} 
                            alt={item.project}
                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.size === 'tall' ? 'md:h-[800px]' : 'md:h-[400px]'}`}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    
                    <div className="mt-4 flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-bold uppercase">{item.client}</h3>
                            <p className="text-tech-grey">{item.project}</p>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-signal-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
