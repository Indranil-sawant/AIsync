import React, { useState } from 'react';
import { servicesData, ServiceItem } from '../../data/servicesData';
import { Button } from '../ui/Button';
import { 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Lightbulb,
  Sparkles
} from 'lucide-react';

interface ServiceDetailListProps {
  activeCategory: string;
}

export const ServiceDetailList: React.FC<ServiceDetailListProps> = ({ activeCategory }) => {
  const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({});

  const toggleFaq = (key: string) => {
    setOpenFaq((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <div className="space-y-16">
      {filteredServices.map((service: ServiceItem) => (
        <div
          key={service.id}
          id={service.id}
          className="p-8 sm:p-10 rounded-2xl bg-bg-surface1 border border-border-subtle hover:border-border-medium transition-all space-y-8"
        >
          {/* Header & Editorial Number */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-border-subtle">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-bold text-accent-primary">
                  {service.num}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-text-tertiary px-3 py-1 rounded bg-bg-surface2 border border-border-subtle">
                  {service.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-text-primary">
                {service.name}
              </h2>
              <p className="text-base font-medium text-text-secondary">
                {service.tagline}
              </p>
            </div>

            <div className="shrink-0">
              <Button to="/contact" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Talk to Us About This
              </Button>
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: The Problem & Plain English Explanation */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Problem Highlight Box */}
              <div className="p-5 rounded-xl bg-bg-primary border border-border-subtle space-y-2">
                <div className="flex items-center gap-2 text-accent-primary text-xs font-mono font-semibold uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  Is Your Business Facing This Challenge?
                </div>
                <p className="text-sm text-text-primary italic leading-relaxed">
                  "{service.problem}"
                </p>
              </div>

              {/* Solution Description */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono text-text-tertiary uppercase tracking-wider font-semibold">
                  How We Help Your Business
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {service.explanation}
                </p>
              </div>

              {/* Key Business Benefits */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-mono text-text-tertiary uppercase tracking-wider font-semibold">
                  Key Business Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2.5 text-xs text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: What We Can Build / Real-World Examples */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-bg-primary border border-border-subtle space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-primary font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                What We Can Build / Offer
              </h3>
              <ul className="space-y-2.5">
                {service.examples.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs text-text-primary font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Simple 4-Step Process Bar */}
          <div className="pt-6 border-t border-border-subtle/80 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-text-tertiary font-semibold">
              How the Process Works
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.process.map((step) => (
                <div key={step.step} className="p-4 rounded-lg bg-bg-primary border border-border-subtle space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-accent-primary">{step.step}</span>
                    <span className="text-xs font-semibold text-text-primary">{step.title}</span>
                  </div>
                  <p className="text-[11px] text-text-secondary leading-snug">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Accordion if available */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="pt-4 border-t border-border-subtle/60 space-y-3">
              {service.faqs.map((faq, index) => {
                const faqKey = `${service.id}-${index}`;
                const isOpen = !!openFaq[faqKey];
                return (
                  <div key={faqKey} className="rounded-lg bg-bg-primary border border-border-subtle overflow-hidden">
                    <button
                      onClick={() => toggleFaq(faqKey)}
                      className="w-full px-5 py-3 text-left flex items-center justify-between text-xs font-semibold text-text-primary hover:text-white"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-accent-primary" />
                        {faq.question}
                      </span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-text-tertiary" /> : <ChevronDown className="w-4 h-4 text-text-tertiary" />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 pt-1 text-xs text-text-secondary border-t border-border-subtle leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

        </div>
      ))}
    </div>
  );
};
