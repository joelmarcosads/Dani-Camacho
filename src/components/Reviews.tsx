import { reviewsData } from '../data';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Reviews() {
  return (
    <section className="py-24 bg-pearl-100 border-t border-pearl-200">
      <div className="max-w-7xl px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-900 mb-4">
              O Que Dizem Nossas Clientes
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <span className="text-4xl font-bold text-gray-800">{reviewsData.overallRating}</span>
              <div className="flex flex-col items-start leading-none">
                <div className="flex text-amber-500 mb-1 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-500">
                  Baseado em {reviewsData.totalReviews} avaliações do Google
                </span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md">
             <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
             </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviewsData.reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-pearl-200 flex flex-col justify-between"
              itemScope itemType="https://schema.org/Review"
            >
              <div>
                <div className="flex items-center gap-4 mb-6" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <div className="w-12 h-12 rounded-full bg-brand-800 text-white flex items-center justify-center font-serif text-xl font-bold">
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900" itemProp="name">{review.name}</h4>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>
                <div className="flex text-amber-500 mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="bestRating" content="5" />
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify md:text-left" itemProp="reviewBody">
                  "{review.text}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 flex items-center gap-2">
                 <svg viewBox="0 0 24 24" className="w-4 h-4 opacity-70">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                 </svg>
                 <span className="text-xs font-semibold text-gray-400">Postado no Google</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
