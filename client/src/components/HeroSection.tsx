import { PERSONAL_INFO } from '@/lib/constants';
import { UserCircle } from 'lucide-react';

export default function HeroSection() {
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-primary pt-28 pb-16 md:pt-40 md:pb-20 text-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="w-48 h-48 mx-auto rounded-full bg-secondary/20 border-4 border-secondary flex items-center justify-center overflow-hidden">
                <UserCircle className="h-32 w-32 text-secondary" />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-10 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{PERSONAL_INFO.name}</h1>
              <h2 className="text-xl md:text-2xl mb-6 text-secondary">{PERSONAL_INFO.title}</h2>
              <p className="text-lg leading-relaxed">
                A motivated and detail-oriented Mining Fresher with a strong educational background in science and education, seeking opportunities in the mining industry.
              </p>
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="bg-secondary hover:bg-secondary/90 text-white py-2 px-6 rounded-md transition font-semibold shadow-lg"
                >
                  Contact Me
                </button>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="border-2 border-white hover:border-secondary hover:text-secondary text-white py-2 px-6 rounded-md transition font-semibold"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full overflow-hidden h-16 -bottom-1">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" fill="#fff"></path>
        </svg>
      </div>
    </section>
  );
}
