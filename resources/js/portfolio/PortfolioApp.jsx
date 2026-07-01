import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function PortfolioApp() {
    return (
        <ErrorBoundary>
            <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-white focus:text-slate-950 focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold">
                Skip to main content
            </a>
            <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-electric-violet selection:text-white">
                <Header />
                <main id="main-content">
                    <Hero />
                    <About />
                    <Skills />
                    <Portfolio />
                    <Services />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ErrorBoundary>
    );
}
