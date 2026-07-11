import { Hero } from '../components/Hero';
import { Promo } from '../components/Promo';
import { Services } from '../components/Services';
import { WhyMe } from '../components/WhyMe';
import { Reviews } from '../components/Reviews';
import { Faq } from '../components/Faq';

export function Home() {
  return (
    <main>
      <Hero />
      <Promo />
      <Services />
      <WhyMe />
      <Reviews />
      <Faq />
    </main>
  );
}
