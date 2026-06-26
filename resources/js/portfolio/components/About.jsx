import React from 'react';
import SectionHeader from './SectionHeader';
import { profile } from '../data/portfolioData';

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6">
                <SectionHeader 
                    title="About Me" 
                    subtitle="A brief history of my two-decade journey in software development."
                />
                
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 relative">
                        <div className="aspect-square rounded-2xl overflow-hidden glass p-2">
                            <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=800" 
                                alt={profile.name}
                                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        {/* Stats Overlay */}
                        <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl border-t-4 border-t-electric-violet">
                            <div className="text-4xl font-bold text-white mb-1">{profile.yearsOfExperience}</div>
                            <div className="text-sm text-slate-400 font-medium">Years Experience</div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-7 space-y-6 text-lg text-slate-300 leading-relaxed">
                        <p>
                            Hello! I'm <strong className="text-white">{profile.name}</strong>, a seasoned professional with over {profile.yearsOfExperience} years of experience in the tech industry. My journey began when the web was still young, and I've evolved alongside it, mastering both frontend interactivity and backend robustness.
                        </p>
                        <p>
                            My expertise lies in architecting high-performance web applications and ensuring the infrastructure that runs them is secure, scalable, and optimized. I bridge the gap between elegant user interfaces and complex database structures.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-6 pt-8">
                            <div className="glass p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-white mb-2">Problem Solving</h3>
                                <p className="text-sm text-slate-400">Turning complex business requirements into elegant technical solutions.</p>
                            </div>
                            <div className="glass p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-white mb-2">Scalability</h3>
                                <p className="text-sm text-slate-400">Building systems that grow seamlessly from hundreds to millions of users.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
