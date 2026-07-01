import React from 'react';

export default function SectionHeader({ title, subtitle }) {
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return (
        <div className="mb-10" id={`${id}-heading`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {title}
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-electric-violet to-neon-cyan mb-4" aria-hidden="true"></div>
            {subtitle && (
                <p className="text-slate-400 text-base max-w-2xl">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
