import { neuromarketingData, heroData } from '../data';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export function WhyMe() {
  return (
    <section className="py-32 bg-pearl-100 text-brand-900 overflow-hidden relative" id="sobre">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-50"></div>
      <div className="max-w-7xl px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
               <img 
                 src={neuromarketingData.image} 
                 alt="Daniele Camacho - Especialista em Massoterapia e Ventosas no Rio de Janeiro" 
                 className="absolute inset-0 w-full h-full object-cover"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pearl-200 rounded-full mix-blend-multiply opacity-50 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full mix-blend-multiply opacity-50 -z-10 bg-brand-800/10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
            itemScope itemType="https://schema.org/Person"
          >
            <div className="inline-block px-5 py-1.5 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-brand-800 border border-brand-800/30 rounded-full bg-white/50 backdrop-blur-sm">
              Quem é <span itemProp="name">Daniele Camacho</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-brand-900" itemProp="jobTitle">
              Especialista em Massagem e Ventosas em Itaboraí
            </h2>
            
            <div className="w-16 h-1 bg-brand-800"></div>
            
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-brand-900/80 text-justify md:text-left" itemProp="description">
              <p className="font-semibold text-brand-900">
                {neuromarketingData.authorityText}
              </p>
              <p>
                {neuromarketingData.authorityText2}
              </p>
              <p>
                {neuromarketingData.authorityText3}
              </p>
            </div>
            
            <div className="pt-6">
              <a
                href={`https://wa.me/${heroData.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Agendar horário com Daniele Camacho"
                className="inline-flex justify-center items-center gap-3 px-5 py-3 md:px-8 md:py-5 text-xs md:text-base font-bold uppercase tracking-[0.1em] transition-all bg-whatsapp text-white hover:bg-whatsapp-hover rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                Agende seu Horário via WhatsApp
              </a>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
