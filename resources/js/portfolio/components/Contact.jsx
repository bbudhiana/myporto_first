import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { profile } from '../data/portfolioData';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="relative">
            <div className="container mx-auto px-6">
                <SectionHeader 
                    title="Let's Talk" 
                    subtitle="Ready to start your next project? Let's discuss how I can help you achieve your goals."
                />
                
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="glass p-8 rounded-2xl flex flex-col items-start gap-4 hover:border-electric-violet/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-electric-violet/20 flex items-center justify-center text-electric-violet">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                                <a href={`mailto:${profile.email}`} className="text-slate-400 hover:text-neon-cyan transition-colors">
                                    {profile.email}
                                </a>
                            </div>
                        </div>

                        <div className="glass p-8 rounded-2xl flex flex-col items-start gap-4 hover:border-electric-violet/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-electric-violet/20 flex items-center justify-center text-electric-violet">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">LinkedIn</h4>
                                <a href="#" className="text-slate-400 hover:text-neon-cyan transition-colors">
                                    Connect with me
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass p-8 rounded-2xl relative overflow-hidden">
                        {submitted ? (
                            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur flex flex-col items-center justify-center text-center p-8 z-20 animate-in fade-in duration-500">
                                <div className="w-16 h-16 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-400 mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-slate-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        required
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-violet focus:ring-1 focus:ring-electric-violet transition-colors"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        required
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-violet focus:ring-1 focus:ring-electric-violet transition-colors"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-violet focus:ring-1 focus:ring-electric-violet transition-colors"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                                <textarea 
                                    id="message" 
                                    rows="4" 
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-violet focus:ring-1 focus:ring-electric-violet transition-colors resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-lg bg-linear-to-r from-electric-violet to-neon-cyan text-white font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
