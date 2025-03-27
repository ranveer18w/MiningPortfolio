import { TECHNICAL_SKILLS, PROFESSIONAL_SKILLS, LANGUAGES } from '@/lib/constants';
import { Cog, User, Languages } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Technical & Professional Skills</h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Cog className="text-secondary mr-3 h-6 w-6" />
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                {TECHNICAL_SKILLS.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <User className="text-secondary mr-3 h-6 w-6" />
                Professional Skills
              </h3>
              
              <div className="space-y-6">
                {PROFESSIONAL_SKILLS.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
              <Languages className="text-secondary mr-3 h-6 w-6" />
              Languages
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {LANGUAGES.map((language, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{language.name}</span>
                    <span>{language.proficiency}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: `${language.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
