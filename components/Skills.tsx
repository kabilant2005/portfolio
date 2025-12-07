import React, { useState, useEffect, useRef } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from 'recharts';
import { RESUME_DATA, SKILL_CHART_DATA } from '../constants';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="min-h-screen flex flex-col justify-center py-20 bg-dark/50 snap-start">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Detailed List */}
          <div className="space-y-8">
            {RESUME_DATA.skills.map((category, idx) => (
              <div key={idx} className="bg-card p-6 rounded-xl border border-white/5 shadow-lg">
                <h3 className="text-xl font-semibold text-secondary mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-3 py-1 bg-white/5 hover:bg-white/10 text-sm text-gray-300 rounded-md border border-white/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="h-[400px] w-full bg-card/30 rounded-xl p-4 border border-white/5 flex flex-col">
             <h3 className="text-center text-gray-400 mb-4 text-sm uppercase tracking-wider">Proficiency Overview</h3>
            {isVisible ? (
              <div className="w-full h-full animate-fade-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={SKILL_CHART_DATA}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                    <XAxis 
                        dataKey="name" 
                        stroke="#94a3b8" 
                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                        dy={10}
                    />
                    <YAxis 
                        hide
                        domain={[0, 100]} 
                    />
                    <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.05)'}}
                        contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f1f5f9' }}
                        itemStyle={{ color: '#3b82f6' }}
                    />
                    <Bar 
                      dataKey="value" 
                      radius={[4, 4, 0, 0]} 
                      barSize={40}
                      animationDuration={1500}
                      animationBegin={300}
                    >
                      {SKILL_CHART_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#3b82f6' : '#8b5cf6'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="w-full h-full flex items-end justify-between px-4 pb-8 gap-4">
                 {[60, 80, 40, 90, 50, 70].map((height, i) => (
                    <div 
                        key={i} 
                        className="w-full bg-white/5 rounded-t-md animate-pulse relative overflow-hidden" 
                        style={{ 
                            height: `${height}%`,
                            animationDelay: `${i * 150}ms`
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-50"></div>
                    </div>
                 ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;