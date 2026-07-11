import { heroData } from '../data';
import { motion } from 'motion/react';
import { useGeoLocation } from '../hooks/useGeoLocation';

export function Hero() {
  const whatsappLink = `https://wa.me/${heroData.whatsappNumber}`;
  const city = useGeoLocation("Itaboraí");
  
  // Dynamic Text Replacement for the H1
  const locationPrefix = city === "Itaboraí" ? "em Itaboraí - RJ" : `em ${city}`;
  const dynamicH1 = heroData.h1.replace("em Itaboraí - RJ", locationPrefix);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-pearl-100">
      <div className="absolute inset-0 z-0 opacity-50">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
          alt={heroData.imageAlt}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-pearl-100/20 via-pearl-100/60 to-pearl-100 z-0"></div>

      <div className="relative z-10 w-full max-w-5xl px-6 mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="space-y-8"
        >
          <header className="space-y-8">
            <div className="inline-block px-5 py-1.5 mb-2 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-brand-900 border border-brand-800/10 bg-pearl-50/70 backdrop-blur-md rounded-full shadow-sm">
              Massoterapia & Ventosas Premium
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-900 leading-tight">
              {dynamicH1}
            </h1>
            
            <p className="max-w-3xl mx-auto text-base md:text-2xl text-brand-900/80 font-light leading-relaxed text-justify md:text-center">
              {heroData.subtitle}
            </p>

            <div className="flex justify-center pt-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Agende seu atendimento de massagem via WhatsApp"
                className="inline-flex items-center justify-center px-5 py-3 md:px-10 md:py-5 text-xs md:text-lg font-bold uppercase tracking-widest text-white transition-all shadow-xl rounded-full bg-whatsapp hover:bg-whatsapp-hover"
              >
                {heroData.ctaText}
              </motion.a>
            </div>
          </header>
        </motion.div>
      </div>
    </section>
  );
}
