import { CAREER_OBJECTIVE, CORE_COMPETENCIES } from '@/lib/constants';
import { 
  Mountain, 
  Microscope, 
  HardHat, 
  Users, 
  Target 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'mountain': <Mountain className="text-white" />,
  'microscope': <Microscope className="text-white" />,
  'hard-hat': <HardHat className="text-white" />,
  'users': <Users className="text-white" />
};

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Career Objective</h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <div className="flex items-start">
              <div className="hidden md:block mr-8 text-primary">
                <Target className="h-12 w-12" />
              </div>
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  {CAREER_OBJECTIVE}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {CORE_COMPETENCIES.map((competency, index) => (
                    <div key={index} className="bg-accent/20 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                          {iconMap[competency.icon]}
                        </div>
                        <h3 className="font-semibold text-lg text-primary">{competency.title}</h3>
                      </div>
                      <p className="text-text">{competency.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
