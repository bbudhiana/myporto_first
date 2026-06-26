import React from 'react';
import SectionHeader from './SectionHeader';
import { skills } from '../data/portfolioData';

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative bg-slate-900/50">
            <div className="container mx-auto px-6">
                <SectionHeader 
                    title="Tech Stack & Expertise" 
                    subtitle="Tools and technologies I use to build robust digital solutions."
                />
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px]">
                    {/* Highlight Box 1 - Backend Focus */}
                    <div className="col-span-2 row-span-2 glass rounded-2xl p-8 flex flex-col justify-end group hover:border-electric-violet/50 transition-colors relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-electric-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h3 className="text-3xl font-bold text-white mb-2 relative z-10">Backend Architecture</h3>
                        <p className="text-slate-400 relative z-10">Powering logic with PHP, Laravel, and optimized databases.</p>
                    </div>

                    {skills.map((skill, index) => (
                        <div key={index} className="glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:scale-[1.02] hover:bg-white/10 transition-all cursor-default">
                            <div className="text-lg font-bold text-white text-center">{skill.name}</div>
                            <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-neon-cyan border border-neon-cyan/20">
                                {skill.category}
                            </span>
                        </div>
                    ))}

                    {/* Highlight Box 2 - Infrastructure Focus */}
                    <div className="col-span-2 glass rounded-2xl p-8 flex flex-col justify-center group hover:border-emerald-400/50 transition-colors relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Server Infrastructure</h3>
                        <p className="text-slate-400 relative z-10">Linux administration and secure environment setups.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
