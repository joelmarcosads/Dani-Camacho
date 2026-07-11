import { faqData } from '../data';
import { motion } from 'motion/react';

export function Faq() {
  return (
    <section className="py-32 bg-pearl-100">
      <div className="max-w-4xl px-6 mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-6">
            Dúvidas Frequentes
          </h2>
          <div className="w-24 h-1 bg-brand-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8" itemScope itemType="https://schema.org/FAQPage">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-pearl-50 p-8 md:p-10 shadow-sm border border-pearl-200 rounded-3xl hover:border-brand-600/30 transition-colors"
              itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
            >
              <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-900 mb-4 pr-8 text-left" itemProp="name">
                {faq.question}
              </h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p className="text-brand-900/80 font-light leading-relaxed text-base md:text-lg text-justify md:text-left" itemProp="text">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
