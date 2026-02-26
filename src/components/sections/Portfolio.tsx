import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Clínica Saúde Maputo",
    category: "Site Corporativo",
    image: "https://picsum.photos/seed/clinic/800/600",
    techs: ["React", "Tailwind", "SEO"]
  },
  {
    title: "MozTech Store",
    category: "E-commerce",
    image: "https://picsum.photos/seed/techstore/800/600",
    techs: ["Shopify", "Custom CSS"]
  },
  {
    title: "Advocacia Silva",
    category: "Institucional",
    image: "https://picsum.photos/seed/lawyer/800/600",
    techs: ["Next.js", "Framer Motion"]
  },
  {
    title: "Restaurante Sabor",
    category: "Landing Page",
    image: "https://picsum.photos/seed/food/800/600",
    techs: ["HTML", "CSS", "JS"]
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-display font-black text-4xl md:text-6xl mb-2">
              Projetos <br />
              <span className="text-brand-orange">Selecionados</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 text-sm font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Todos</button>
            <button className="px-4 py-2 rounded-full border border-transparent hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium transition-colors">Corporativos</button>
            <button className="px-4 py-2 rounded-full border border-transparent hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium transition-colors">Lojas</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand-orange text-xs font-mono uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-white font-display font-bold text-2xl mb-2">{project.title}</h3>
                <div className="flex gap-2 mb-4">
                  {project.techs.map(t => (
                    <span key={t} className="text-xs text-white/70 border border-white/20 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider">
                  Ver Projeto <ExternalLink size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
