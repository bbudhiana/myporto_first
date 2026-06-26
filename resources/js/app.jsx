import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioApp from './portfolio/PortfolioApp';

const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <PortfolioApp />
        </React.StrictMode>
    );
}
