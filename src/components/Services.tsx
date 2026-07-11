import { servicesData } from '../data';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function Services() {
  return (
    <section className="py-32 bg-pearl-100" id="servicos">
      <div className="max-w-7xl px-6 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-brand-900 mb-6">
            Serviços de Massoterapia em Itaboraí - RJ
          </h2>
          <div className="w-24 h-1 bg-brand-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-10 transition-all duration-300 bg-pearl-50 border border-pearl-300 hover:border-brand-600/50 hover:shadow-xl group rounded-3xl"
              itemScope itemType="https://schema.org/Service"
            >
              <meta itemProp="serviceType" content="Massoterapia" />
              <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
                <div className="bg-brand-600/10 p-4 rounded-full md:p-0 md:bg-transparent md:rounded-none">
                  <Sparkles className="w-8 h-8 md:w-6 md:h-6 text-brand-600 shrink-0 md:mt-1" strokeWidth={1.5} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-serif font-bold text-brand-900 mb-4 group-hover:text-brand-800 transition-colors" itemProp="name">
                    {service.title}
                  </h3>
                  <p className="text-brand-900/80 leading-relaxed font-light text-justify md:text-left" itemProp="description">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
