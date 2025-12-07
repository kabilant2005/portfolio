import React from 'react';
import { RESUME_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="min-h-screen py-20 bg-black relative snap-start flex flex-col justify-center">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Let's Connect</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          I'm currently looking for new opportunities in AI, Data Science, and Full Stack Development. 
          Feel free to reach out!
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/5 w-full md:w-64 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 className="text-white font-medium mb-1">Email</h3>
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-sm text-gray-400 hover:text-white">{RESUME_DATA.contact.email}</a>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/5 w-full md:w-64 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
                <h3 className="text-white font-medium mb-1">Phone</h3>
                <a href={`tel:${RESUME_DATA.contact.phone}`} className="text-sm text-gray-400 hover:text-white">{RESUME_DATA.contact.phone}</a>
            </div>
            
             <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/5 w-full md:w-64 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <h3 className="text-white font-medium mb-1">Location</h3>
                <span className="text-sm text-gray-400">{RESUME_DATA.contact.location}</span>
            </div>
        </div>

        <div className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Kabilan T. All rights reserved. Built with React & Gemini.
        </div>
      </div>
    </footer>
  );
};

export default Contact;