import React, { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Services', href: '#services' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#home" className="text-2xl font-bold tracking-tighter text-white">
                    Bana<span className="text-[var(--color-electric-violet)]">.B</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-[var(--color-neon-cyan)] transition-colors">
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <a href="#contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-electric-violet)] to-[var(--color-neon-cyan)] text-white text-sm font-medium hover:opacity-90 transition-opacity">
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden glass absolute top-full left-0 w-full border-t border-white/10">
                    <nav className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className="text-lg font-medium text-slate-300 hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a 
                            href="#contact" 
                            className="mt-4 px-6 py-3 rounded-lg text-center bg-gradient-to-r from-[var(--color-electric-violet)] to-[var(--color-neon-cyan)] text-white font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Hire Me
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
