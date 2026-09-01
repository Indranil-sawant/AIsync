import React, { useState } from 'react';
import { Monitor, Smartphone, Tablet, Eye, Search, Send, Sparkles } from 'lucide-react';

export const WebsiteMockupVisual: React.FC = () => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeStep, setActiveStep] = useState<number>(1);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  const handleDeviceChange = (newDevice: 'desktop' | 'tablet' | 'mobile') => {
    setDevice(newDevice);
    if (!hasInteracted) setHasInteracted(true);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
    if (!hasInteracted) setHasInteracted(true);
  };

  const deviceWidths = {
    desktop: 'max-w-3xl',
    tablet: 'max-w-md',
    mobile: 'max-w-xs',
  };

  return (
    <div className="space-y-6">
      {/* Device Viewport Toggle Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
        {/* Understated Interaction Indicator */}
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
          <span className="text-xs font-mono font-bold text-text-primary uppercase tracking-wider">
            INTERACTIVE PREVIEW
          </span>
          {!hasInteracted && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-accent-primary/10 text-accent-primary border border-accent-primary/30 transition-all duration-300">
              <Sparkles className="w-3 h-3" /> Explore views
            </span>
          )}
        </div>

        {/* Refined Device Switcher Controls (44px Minimum Touch Area) */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-border-medium shadow-sm">
          <button
            onClick={() => handleDeviceChange('desktop')}
            className={`group px-3 py-2 rounded-lg text-xs font-mono flex items-center gap-1.5 min-h-[44px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 select-none ${
              device === 'desktop'
                ? 'bg-accent-primary text-white shadow-sm font-bold'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface2'
            }`}
            title="Desktop View (Full Screen Layout)"
            aria-label="Switch to Desktop View"
          >
            <Monitor className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span className="hidden md:inline">Desktop</span>
          </button>

          <button
            onClick={() => handleDeviceChange('tablet')}
            className={`group px-3 py-2 rounded-lg text-xs font-mono flex items-center gap-1.5 min-h-[44px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 select-none ${
              device === 'tablet'
                ? 'bg-accent-primary text-white shadow-sm font-bold'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface2'
            }`}
            title="Tablet View (Responsive Medium Canvas)"
            aria-label="Switch to Tablet View"
          >
            <Tablet className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span className="hidden md:inline">Tablet</span>
          </button>

          <button
            onClick={() => handleDeviceChange('mobile')}
            className={`group px-3 py-2 rounded-lg text-xs font-mono flex items-center gap-1.5 min-h-[44px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 select-none ${
              device === 'mobile'
                ? 'bg-accent-primary text-white shadow-sm font-bold'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface2'
            }`}
            title="Mobile View (Compact Mobile Viewport)"
            aria-label="Switch to Mobile View"
          >
            <Smartphone className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span className="hidden md:inline">Mobile</span>
          </button>
        </div>
      </div>

      {/* Product Browser Window Frame */}
      <div className={`mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${deviceWidths[device]}`}>
        <div className="rounded-2xl bg-white border border-border-medium overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          
          {/* Browser Address Bar */}
          <div className="px-4 py-2.5 bg-[#fbf9f5] border-b border-border-subtle flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="px-3 py-0.5 rounded-md bg-white text-[10px] font-mono text-text-secondary border border-border-subtle flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              https://yourcompany.com
            </div>
            <div className="w-8" />
          </div>

          {/* Website Canvas Interface */}
          <div className="p-5 sm:p-6 space-y-5 bg-white">
            {/* Mock Header */}
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
              <div className="font-mono text-xs font-bold text-text-primary">YOUR BRAND</div>
              <div className="flex items-center gap-3 text-[10px] font-mono text-text-secondary">
                <span>Services</span>
                <span>About</span>
                <span className="px-2 py-0.5 rounded bg-accent-primary text-white font-semibold shadow-sm">Contact</span>
              </div>
            </div>

            {/* Mock Hero Banner */}
            <div className="p-4 rounded-xl bg-[#fbf9f5] border border-border-subtle space-y-2">
              <span className="text-[10px] font-mono text-accent-primary uppercase tracking-widest font-bold block">
                Official Business Flagship
              </span>
              <div className="text-sm font-bold text-text-primary">
                {activeStep === 1 && "1. High Search Visibility & Local Discovery"}
                {activeStep === 2 && "2. Clear Explanations Build Immediate Confidence"}
                {activeStep === 3 && "3. Fast Inquiry Forms Turn Visitors Into Clients"}
              </div>
              <p className="text-[11px] text-text-secondary leading-snug">
                Clear explanations of your offerings, immediate credibility, and fast mobile inquiries.
              </p>
            </div>

            {/* Mock Inquiry Bar */}
            <div className="p-3 rounded-xl bg-white border border-border-medium flex items-center justify-between shadow-sm">
              <span className="text-[10px] font-mono text-text-secondary font-medium">Ready to work together?</span>
              <button 
                onClick={() => handleStepChange(3)}
                className="text-[10px] font-mono px-3 py-1.5 rounded-lg bg-accent-primary text-white font-semibold shadow-sm hover:bg-accent-hover active:scale-95 transition-all select-none"
              >
                Submit Inquiry →
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Customer Journey Flow: Discover -> Understand -> Enquire */}
      <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3.5 border-t border-border-subtle">
        <div
          onClick={() => handleStepChange(1)}
          className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer min-h-[44px] select-none ${
            activeStep === 1 
              ? 'bg-white border-accent-primary shadow-md ring-1 ring-accent-primary/30' 
              : 'bg-white border-border-subtle hover:border-border-medium'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-accent-primary font-bold mb-1">
            <Search className="w-3.5 h-3.5" /> 1. DISCOVER
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">
            Local & search engine visibility helps prospective clients find your business.
          </p>
        </div>

        <div
          onClick={() => handleStepChange(2)}
          className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer min-h-[44px] select-none ${
            activeStep === 2 
              ? 'bg-white border-accent-primary shadow-md ring-1 ring-accent-primary/30' 
              : 'bg-white border-border-subtle hover:border-border-medium'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-accent-primary font-bold mb-1">
            <Eye className="w-3.5 h-3.5" /> 2. UNDERSTAND
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">
            Clear, plain-English explanations build immediate confidence and trust.
          </p>
        </div>

        <div
          onClick={() => handleStepChange(3)}
          className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer min-h-[44px] select-none ${
            activeStep === 3 
              ? 'bg-white border-accent-primary shadow-md ring-1 ring-accent-primary/30' 
              : 'bg-white border-border-subtle hover:border-border-medium'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-accent-primary font-bold mb-1">
            <Send className="w-3.5 h-3.5" /> 3. ENQUIRE
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">
            Simple forms turn website visitors into active business leads.
          </p>
        </div>
      </div>
    </div>
  );
};
