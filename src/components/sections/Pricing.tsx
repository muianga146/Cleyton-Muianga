import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: "Básico",
    price: "7.000",
    desc: "Ideal para quem está a começar.",
    features: ["Até 5 Páginas", "Design Personalizado", "Botão WhatsApp", "Integração Redes Sociais", "2 Revisões", "Entrega: 7-10 dias"],
    highlight: false
  },
  {
    name: "Intermédio",
    price: "10.500",
    desc: "O mais popular para pequenas empresas.",
    features: ["Até 8 Páginas", "Galeria de Fotos", "SEO Inicial (Google)", "Formulário Contacto", "3 Revisões", "Entrega: 12-15 dias"],
    highlight: true
  },
  {
    name: "Premium",
    price: "15.000",
    desc: "Solução completa e profissional.",
    features: ["Hospedagem Incluída (1 ano)", "Certificado SSL (Segurança)", "Suporte Prioritário", "Blog / Notícias", "Revisões Ilimitadas", "Entrega: 18-22 dias"],
    highlight: false
  }
];

const addons = [
  { name: "SEO Avançado", price: "+2.500 MZN" },
  { name: "Manutenção Mensal", price: "1.500 MZN/mês" },
  { name: "Treinamento Gestão", price: "1.000 MZN" },
  { name: "Fotografia & Texto", price: "Sob Consulta" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Investimento <span className="text-brand-orange">Transparente</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pacotes acessíveis desenvolvidos para a realidade do mercado moçambicano, sem custos escondidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative p-8 rounded-3xl border flex flex-col",
                plan.highlight 
                  ? "bg-white/10 border-brand-orange shadow-2xl shadow-brand-orange/20 scale-105 z-10" 
                  : "bg-white/5 border-white/10 hover:border-white/20"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> Mais Popular
                </div>
              )}
              
              <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-gray-400">MZN</span>
              </div>
              <p className="text-sm text-gray-400 mb-8 pb-8 border-b border-white/10">{plan.desc}</p>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-brand-orange shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={cn(
                  "w-full py-4 rounded-xl font-bold text-center uppercase tracking-wider transition-all",
                  plan.highlight 
                    ? "bg-brand-orange hover:bg-brand-orange/90 text-white" 
                    : "bg-white text-black hover:bg-gray-200"
                )}
              >
                Escolher Pacote
              </a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
          <h3 className="font-display font-bold text-2xl mb-8 text-center">Extras & Complementos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {addons.map((addon, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-black/20 border border-white/5">
                <h4 className="font-bold mb-2">{addon.name}</h4>
                <p className="text-brand-orange font-mono text-sm">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
