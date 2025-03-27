import { PERSONAL_INFO } from '@/lib/constants';
import { Quote } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">{PERSONAL_INFO.name}</h3>
          <p className="mb-6">{PERSONAL_INFO.title}</p>
          
          <div className="section-divider bg-white/20"></div>
          
          <div className="mt-6">
            <p className="text-sm flex items-center justify-center gap-2">
              <Quote className="h-4 w-4 text-secondary" />
              I hereby declare that the information provided is true and correct to the best of my knowledge.
              <Quote className="h-4 w-4 text-secondary rotate-180" />
            </p>
          </div>
          
          <p className="mt-8 text-sm text-white/70">© {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
