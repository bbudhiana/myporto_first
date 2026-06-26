import React from 'react';
import { profile } from '../data/portfolioData';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-electric-violet)]/20 via-slate-950 to-slate-950 -z-10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-neon-cyan)]/10 rounded-full blur-3xl -z-10 mix-blend-screen"></div>
            
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-start space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm font-medium text-[var(--color-emerald-400)]">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-emerald-400)] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-emerald-400)]"></span>
                        </span>
                        Available for freelance & contract
                    </div>
                    
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                        Crafting High-Performance Web Ecosystems for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric-violet)] to-[var(--color-neon-cyan)]">2+ Decades</span>.
                    </h1>
                    
                    <p className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed">
                        I am a {profile.title} specializing in modern frontend experiences and robust backend infrastructures.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <a href="#contact" className="px-8 py-4 rounded-lg bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors">
                            Discuss Project
                        </a>
                        <a href="#portfolio" className="px-8 py-4 rounded-lg glass text-white font-medium hover:bg-white/10 transition-colors">
                            View Work
                        </a>
                    </div>
                </div>
                
                <div className="hidden lg:flex justify-center relative">
                    <div className="w-[400px] h-[500px] glass rounded-2xl p-6 relative overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-electric-violet)] to-[var(--color-neon-cyan)]"></div>
                        <div className="flex flex-col gap-4 h-full opacity-50 font-mono text-sm text-[var(--color-neon-cyan)]">
                            <div>{'>'} init portfolio...</div>
                            <div>{'>'} loading experience modules...</div>
                            <div>{'>'} 20_years_loaded: true</div>
                            <div>{'>'} system_status: optimal</div>
                            <div className="mt-auto animate-pulse">_</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
