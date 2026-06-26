import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { projects } from '../data/portfolioData';

export default function Portfolio() {
    const [filter, setFilter] = useState('All');
    
    const categories = ['All', 'Full-Stack', 'Frontend', 'DevOps/Linux'];
    
    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section id="portfolio" className="py-24 relative">
            <div className="container mx-auto px-6">
                <SectionHeader 
                    title="Selected Works" 
                    subtitle="A showcase of enterprise applications and robust architectures."
                />
                
                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                filter === cat 
                                ? 'bg-gradient-to-r from-[var(--color-electric-violet)] to-[var(--color-neon-cyan)] text-white shadow-lg shadow-[var(--color-electric-violet)]/20' 
                                : 'glass text-slate-300 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                
                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="group glass rounded-2xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300">
                            <div className="aspect-video overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-[var(--color-neon-cyan)] text-xs font-bold uppercase tracking-wider mb-2">
                                    {project.category}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-electric-violet)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-6 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-300 border border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
