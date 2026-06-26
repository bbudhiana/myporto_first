import React from 'react';
import SectionHeader from './SectionHeader';
import { services } from '../data/portfolioData';

export default function Services() {
    return (
        <section id="services" className="relative bg-slate-900/50">
            <div className="container mx-auto px-6">
                <SectionHeader 
                    title="Services" 
                    subtitle="Professional offerings to elevate your business."
                />
                
                <div className="grid lg:grid-cols-3 gap-8">
                    {services.map(service => (
                        <div key={service.id} className="glass rounded-2xl p-8 flex flex-col group hover:border-electric-violet/50 transition-colors relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 group-hover:-rotate-12 duration-500">
                                {/* Abstract Icon shape */}
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                    {service.icon === 'monitor' && <path d="M21 16V4H3v12h18zM21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>}
                                    {service.icon === 'server' && <path d="M2 4h20v4H2zm0 6h20v4H2zm0 6h20v4H2zm4-9h2v2H6zm0 6h2v2H6zm0-12h2v2H6z"/>}
                                    {service.icon === 'linux' && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>}
                                </svg>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-neon-cyan transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 mb-8 relative z-10 leading-relaxed grow">
                                {service.description}
                            </p>
                            
                            <ul className="space-y-3 relative z-10 mb-8">
                                {service.features.map(feature => (
                                    <li key={feature} className="flex items-center text-sm text-slate-300">
                                        <svg className="w-5 h-5 mr-3 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            
                            <a href="#contact" className="mt-auto w-full py-3 rounded-lg border border-white/10 text-center font-medium hover:bg-white hover:text-slate-900 transition-colors relative z-10">
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
