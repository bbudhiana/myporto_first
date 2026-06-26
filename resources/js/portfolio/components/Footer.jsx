import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-white/10 bg-slate-950 py-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-electric-violet to-transparent opacity-50"></div>
            
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <a href="#home" className="text-2xl font-bold tracking-tighter text-white">
                        Bana<span className="text-electric-violet">.B</span>
                    </a>
                    <p className="text-sm text-slate-500">
                        © {currentYear} Bana Budhiana. All rights reserved.
                    </p>
                </div>
                
                <button 
                    onClick={scrollToTop}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 hover:-translate-y-1 transition-all"
                    aria-label="Scroll to top"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </div>
        </footer>
    );
}
