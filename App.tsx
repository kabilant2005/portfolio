import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen text-slate-200 selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Experience /> {/* Includes Education & Certifications */}
        <Skills />
        <Projects />
      </main>
      <Contact />
      <ChatWidget />
    </div>
  );
};

export default App;