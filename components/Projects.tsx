import React from 'react';
import { RESUME_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen py-20 bg-dark/50 snap-start flex flex-col justify-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center text-white">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.projects.map((project, idx) => (
            <div key={idx} className="group bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                {/* Abstract visualization for project image */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="text-6xl text-white/10 font-black select-none group-hover:scale-110 transition-transform duration-500">
                  AI
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="text-gray-400 text-sm space-y-2 mb-6 flex-grow">
                  {project.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0"></span>
                        {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          
          {/* Placeholder for more projects to fill the grid if needed */}
          <div className="bg-card/30 rounded-2xl border border-white/5 border-dashed flex flex-col items-center justify-center p-8 text-center hover:bg-card/50 transition-colors">
             <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
             </div>
             <h3 className="text-lg font-medium text-gray-300">More Coming Soon</h3>
             <p className="text-sm text-gray-500 mt-2">Currently working on new AI ideas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;