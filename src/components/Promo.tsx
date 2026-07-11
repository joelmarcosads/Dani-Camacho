import { promoData, heroData } from '../data';
import { motion } from 'motion/react';
import { Sparkles, Leaf } from 'lucide-react';

export function Promo() {
  return (
    <section className="py-24 bg-pearl-100 text-brand-900 relative overflow-hidden" id="promo">
      {/* Decorative Leaves mimicking the spa/wellness background */}
      <Leaf className="absolute top-10 left-10 w-24 h-24 text-brand-800/10 -rotate-12" />
      <Leaf className="absolute bottom-10 right-10 w-32 h-32 text-brand-800/10 rotate-12" />
      <Sparkles className="absolute top-1/2 left-1/4 w-12 h-12 text-brand-600/20" />

      <div className="max-w-6xl px-6 mx-auto relative z-10">
        <div className="bg-pearl-50 text-brand-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          <div className="p-10 md:p-14 flex-1 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-brand-600/20 text-brand-800 rounded-full w-fit">
              <Sparkles className="w-4 h-4" />
              {promoData.title}
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-brand-800 leading-tight mb-4">
              {promoData.subtitle}
            </h2>
            <p className="text-lg md:text-xl text-brand-900/70 font-medium italic mb-10 text-justify md:text-left">
              {promoData.description}
            </p>

            <div className="bg-brand-900 text-pearl-100 p-6 rounded-2xl mb-8 transform -rotate-1 shadow-lg relative">
              <div className="absolute -top-3 -right-3 bg-brand-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                <Leaf className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-center font-bold text-xl md:text-2xl mb-1 uppercase tracking-wider">
                {promoData.comboTitle}
              </h3>
              <h4 className="text-center font-black text-2xl md:text-3xl text-brand-600 mb-2">
                {promoData.comboSubtitle}
              </h4>
              <p className="text-center text-sm md:text-base opacity-80 uppercase tracking-widest font-semibold border-t border-brand-800 pt-3 mt-3">
                {promoData.comboDisclaimer}
              </p>
            </div>

            <div className="mb-10 pl-4 border-l-4 border-brand-600">
               <ul className="space-y-3">
                 {promoData.benefits.map((benefit, i) => (
                   <li key={i} className="flex items-center gap-3 text-brand-900/80 font-medium text-justify md:text-left text-sm md:text-base">
                     <Sparkles className="w-5 h-5 text-brand-600 shrink-0" />
                     {benefit}
                   </li>
                 ))}
               </ul>
            </div>

            <div className="text-center bg-brand-100 rounded-2xl p-6 border-2 border-dashed border-brand-600 mb-8">
               <p className="font-bold text-brand-900 text-lg md:text-xl uppercase">
                 {promoData.badges[0]}
               </p>
               <p className="font-serif text-2xl md:text-3xl text-brand-800 italic mt-1">
                 {promoData.badges[1]}
               </p>
            </div>

            <div className="flex flex-col items-center">
              <a
                href={`https://wa.me/${heroData.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-3 md:px-8 md:py-5 text-xs md:text-lg font-bold uppercase tracking-[0.1em] transition-all bg-whatsapp text-white hover:bg-whatsapp-hover rounded-2xl shadow-xl hover:-translate-y-1 hover:shadow-2xl"
              >
                Agendar Minha Sessão
              </a>
              <p className="mt-4 text-sm font-bold text-brand-900 bg-brand-600/10 px-4 py-2 rounded-full flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
                 {promoData.urgency}
              </p>
            </div>
            
          </div>

          <div className="md:w-2/5 relative min-h-[300px] md:min-h-full">
            <img 
              src={promoData.offerImage} 
              alt="Mulher recebendo massagem terapêutica com pedras quentes no Rio de Janeiro" 
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient overlay to blend image nicely */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-pearl-100/10 to-pearl-100/90 md:to-pearl-100/0 hidden"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
