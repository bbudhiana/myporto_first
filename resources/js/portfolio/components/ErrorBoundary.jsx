import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error('Portfolio error:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center p-8">
                    <div className="text-center space-y-6 max-w-md">
                        <div className="text-6xl">⚠️</div>
                        <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
                        <p className="text-slate-400">
                            The portfolio encountered an unexpected error. Please try refreshing the page.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-3 rounded-lg bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}