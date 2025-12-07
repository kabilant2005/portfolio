import React from 'react';
import { RESUME_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen py-20 snap-start flex flex-col justify-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center text-white">
          Experience & <span className="text-secondary">Education</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Internship */}
            <div>
                <h3 className="text-2xl font-bold text-gray-200 mb-6 flex items-center">
                    <span className="w-8 h-1 bg-primary mr-3 rounded-full"></span>
                    Experience
                </h3>
                <div className="space-y-8 border-l-2 border-white/10 ml-4 pl-8 relative">
                    {RESUME_DATA.experience.map((exp, idx) => (
                        <div key={idx} className="relative group">
                             <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-dark bg-primary"></div>
                             <div className="bg-card p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300">
                                <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                                    <span>{exp.company}</span>
                                </div>
                                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4 text-sm">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {exp.techStack.map((tech, tIdx) => (
                                        <span key={tIdx} className="text-xs px-2 py-1 rounded bg-primary/20 text-primary-200">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education */}
            <div>
                <h3 className="text-2xl font-bold text-gray-200 mb-6 flex items-center">
                    <span className="w-8 h-1 bg-secondary mr-3 rounded-full"></span>
                    Education
                </h3>
                <div className="space-y-8 border-l-2 border-white/10 ml-4 pl-8 relative">
                    {RESUME_DATA.education.map((edu, idx) => (
                        <div key={idx} className="relative">
                             <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-dark bg-secondary"></div>
                             <div className="bg-card p-6 rounded-xl border border-white/5">
                                <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                                <p className="text-secondary font-medium mb-1">{edu.institution}</p>
                                <p className="text-sm text-gray-500">{edu.period}</p>
                             </div>
                        </div>
                    ))}
                    
                    {/* Certifications embedded here for layout balance */}
                     <div className="relative mt-10">
                        <h4 className="text-lg font-bold text-gray-300 mb-4 uppercase tracking-wider">Certifications</h4>
                        <div className="grid gap-4">
                            {RESUME_DATA.certifications.map((cert, idx) => (
                                <div key={idx} className="flex items-center p-4 bg-white/5 rounded-lg border border-white/5">
                                    <div className="mr-4 text-green-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">{cert.name}</p>
                                        <p className="text-xs text-gray-500">{cert.issuer}</p>
                                    </div>
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
};

export default Experience;