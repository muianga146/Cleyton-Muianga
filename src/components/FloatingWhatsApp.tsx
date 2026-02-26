import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/258849539582"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-brand-orange text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Fale no WhatsApp"
    >
      <MessageCircle size={28} fill="white" className="text-white" />
      <span className="absolute right-full mr-4 bg-white dark:bg-black text-black dark:text-white px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
        Fale Agora
      </span>
    </a>
  );
}
