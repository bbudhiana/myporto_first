import React from 'react';
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
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-electric-violet selection:text-white">
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Portfolio />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
