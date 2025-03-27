import { PERSONAL_ATTRIBUTES } from '@/lib/constants';
import { 
  Lightbulb, 
  Mountain,
  Puzzle,  
  Users 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'lightbulb': <Lightbulb className="h-8 w-8 text-secondary" />,
  'mountain': <Mountain className="h-8 w-8 text-secondary" />,
  'puzzle-piece': <Puzzle className="h-8 w-8 text-secondary" />,
  'users': <Users className="h-8 w-8 text-secondary" />
};

export default function AttributesSection() {
  return (
    <section id="attributes" className="py-16 md:py-24 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Personal Attributes</h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PERSONAL_ATTRIBUTES.map((attribute, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 flex">
                <div className="mr-6">
                  {iconMap[attribute.icon]}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{attribute.title}</h3>
                  <p className="text-text">{attribute.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
