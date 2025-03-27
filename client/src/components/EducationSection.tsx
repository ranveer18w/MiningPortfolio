import { EDUCATION } from '@/lib/constants';

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Academic Qualification</h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="relative pl-10 md:pl-12">
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-primary"></div>
            
            {EDUCATION.map((edu, index) => (
              <div key={index} className={`relative mb-12 timeline-item ${index === EDUCATION.length - 1 ? 'mb-0' : ''}`}>
                <div className="bg-white rounded-lg shadow-md p-6 ml-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                    <div className="flex items-center mt-2 md:mt-0">
                      <span className="text-secondary font-medium">{edu.year}</span>
                    </div>
                  </div>
                  <p className="mb-2 font-medium">{edu.institution}</p>
                  <p className="text-text">{edu.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{skill}</span>
                    ))}
                  </div>
                </div>
                {index !== EDUCATION.length - 1 && <div className="timeline-line"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
