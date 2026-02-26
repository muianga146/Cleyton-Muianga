import { motion } from 'framer-motion';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black z-10" />
        <img 
          src="https://picsum.photos/seed/tech/1920/1080?grayscale&blur=2" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-orange/10 via-transparent to-transparent opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm text-xs font-mono uppercase tracking-widest">
            Maputo, Moçambique
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-black text-5xl md:text-7xl lg:text-9xl tracking-tighter leading-[0.9] mb-6"
        >
          CLEYTON <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-orange/80">MUIANGA</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-mono text-lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mb-10"
        >
          WebDesigner & Developer. Criando sites profissionais em <span className="text-brand-orange font-bold">tempo recorde</span>.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
        >
          <a 
            href="#contact"
            className="group relative px-8 py-4 bg-brand-orange text-white rounded-full font-bold uppercase tracking-wider overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Entre em Contacto <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          
          <a 
            href="https://wa.me/258849539582"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border border-black/10 dark:border-white/10 rounded-full font-bold uppercase tracking-wider hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-black/20 to-transparent dark:from-white/20" />
      </motion.div>
    </section>
  );
}
