import React from 'react';

export default function SectionHeader({ title, subtitle }) {
    return (
        <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {title}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-electric-violet)] to-[var(--color-neon-cyan)] mb-6"></div>
            {subtitle && (
                <p className="text-slate-400 text-lg max-w-2xl">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
