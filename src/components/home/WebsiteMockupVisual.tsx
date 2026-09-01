import React, { useState } from 'react';
import { Monitor, Smartphone, Tablet, Eye, Search, Send } from 'lucide-react';

export const WebsiteMockupVisual: React.FC = () => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeStep, setActiveStep] = useState<number>(1);

  const deviceWidths = {
    desktop: 'max-w-3xl',
    tablet: 'max-w-md',
    mobile: 'max-w-xs',
  };

  return (
    <div className="space-y-6">
      {/* Device Viewport Toggle */}
      <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
        <span className="text-xs font-mono text-text-tertiary uppercase tracking-wider">
          Interactive Viewport Preview
        </span>
        <div className="flex items-center gap-1.5 bg-bg-surface1 p-1 rounded-lg border border-border-subtle">
          <button
            onClick={() => setDevice('desktop')}
            className={`p-1.5 rounded transition-colors ${device === 'desktop' ? 'bg-accent-primary text-white' : 'text-text-tertiary hover:text-text-primary'}`}
            title="Desktop View"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`p-1.5 rounded transition-colors ${device === 'tablet' ? 'bg-accent-primary text-white' : 'text-text-tertiary hover:text-text-primary'}`}
            title="Tablet View"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`p-1.5 rounded transition-colors ${device === 'mobile' ? 'bg-accent-primary text-white' : 'text-text-tertiary hover:text-text-primary'}`}
            title="Mobile View"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Browser Window */}
      <div className={`mx-auto transition-all duration-300 ${deviceWidths[device]}`}>
        <div className="rounded-xl bg-bg-surface1 border border-border-medium overflow-hidden shadow-2xl">
          {/* Browser Address Bar */}
          <div className="px-4 py-2.5 bg-bg-primary border-b border-border-subtle flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="px-3 py-0.5 rounded bg-bg-surface2 text-[10px] font-mono text-text-tertiary border border-border-subtle flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              https://yourcompany.com
            </div>
            <div className="w-8" />
          </div>

          {/* Website Canvas Interface */}
          <div className="p-6 space-y-5 bg-bg-surface1">
            {/* Mock Header */}
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle/60">
              <div className="font-mono text-xs font-bold text-text-primary">YOUR LOGO</div>
              <div className="flex items-center gap-3 text-[10px] font-mono text-text-secondary">
                <span>Services</span>
                <span>About</span>
                <span className="px-2 py-0.5 rounded bg-accent-primary text-white font-semibold">Contact</span>
              </div>
            </div>

            {/* Mock Hero Banner */}
            <div className="p-4 rounded-lg bg-bg-primary border border-border-subtle space-y-2">
              <span className="text-[10px] font-mono text-accent-primary uppercase tracking-widest font-semibold block">
                Official Business Flagship
              </span>
              <div className="text-sm font-bold text-text-primary">
                Professional Services Designed For Local & Enterprise Clients
              </div>
              <p className="text-[11px] text-text-secondary leading-snug">
                Clear explanations of your offerings, immediate credibility, and fast mobile inquiries.
              </p>
            </div>

            {/* Mock Inquiry Bar */}
            <div className="p-3 rounded-lg bg-bg-surface2 border border-border-subtle flex items-center justify-between">
              <span className="text-[10px] font-mono text-text-secondary">Ready to work together?</span>
              <button className="text-[10px] font-mono px-3 py-1 rounded bg-accent-primary text-white font-semibold">
                Submit Inquiry →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Journey Flow: Discover -> Understand -> Enquire */}
      <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border-subtle">
        <div
          onClick={() => setActiveStep(1)}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${activeStep === 1 ? 'bg-bg-surface1 border-accent-primary' : 'bg-bg-primary border-border-subtle'}`}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-accent-primary font-semibold mb-1">
            <Search className="w-3.5 h-3.5" /> 1. DISCOVER
          </div>
          <p className="text-xs text-text-secondary">
            Local & search visibility helps prospective clients find your business.
          </p>
        </div>

        <div
          onClick={() => setActiveStep(2)}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${activeStep === 2 ? 'bg-bg-surface1 border-accent-primary' : 'bg-bg-primary border-border-subtle'}`}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-accent-primary font-semibold mb-1">
            <Eye className="w-3.5 h-3.5" /> 2. UNDERSTAND
          </div>
          <p className="text-xs text-text-secondary">
            Clear, clean explanations build immediate confidence and trust.
          </p>
        </div>

        <div
          onClick={() => setActiveStep(3)}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${activeStep === 3 ? 'bg-bg-surface1 border-accent-primary' : 'bg-bg-primary border-border-subtle'}`}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-accent-primary font-semibold mb-1">
            <Send className="w-3.5 h-3.5" /> 3. ENQUIRE
          </div>
          <p className="text-xs text-text-secondary">
            Simple forms turn website visitors into active business leads.
          </p>
        </div>
      </div>
    </div>
  );
};
