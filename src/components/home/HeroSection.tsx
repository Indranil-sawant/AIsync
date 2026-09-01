import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../ui/Button';
import { SystemConnectedDiagram } from './SystemConnectedDiagram';
import { ArrowRight, ShieldCheck, Zap, Layers, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] pt-32 sm:pt-36 pb-16 sm:pb-20 flex items-center overflow-hidden bg-bg-primary">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent-primary/5 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-border-medium shadow-sm hover:border-accent-primary/40 transition-colors">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse shrink-0" />
            <span className="text-[11px] sm:text-sm font-mono tracking-wide text-text-primary uppercase font-bold">
              Software & Digital Solutions
            </span>
          </div>

          {/* Primary Centered Headline - Clean Mobile Scale */}
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight text-text-primary leading-[1.15] sm:leading-[1.08] max-w-4xl mx-auto">
            Software and digital systems built for the way{' '}
            <span className="text-accent-primary">
              your business works.
            </span>
          </h1>

          {/* Centered Subtitle Description */}
          <p className="text-sm sm:text-xl text-text-secondary max-w-3xl mx-auto font-normal leading-relaxed px-2 sm:px-0">
            We design and build custom websites, applications, automated workflows, and digital systems that help your business operate smoothly and grow.
          </p>

          {/* Centered Action CTAs - Full Width on Mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 pt-2 max-w-md sm:max-w-none mx-auto">
            <Button to="/contact" variant="primary" size="lg" className="w-full sm:w-auto min-h-[48px]" icon={<ArrowRight className="w-5 h-5" />}>
              Start a Conversation
            </Button>
            <Button to="/services" variant="secondary" size="lg" className="w-full sm:w-auto min-h-[48px]" icon={<Layers className="w-5 h-5" />}>
              Explore Our Services
            </Button>
          </div>

          {/* Centered Interactive Architecture Visualization */}
          <div className="pt-2 sm:pt-4 max-w-3xl mx-auto">
            <SystemConnectedDiagram />
          </div>

          {/* Centered Trust Signals */}
          <div className="pt-6 sm:pt-8 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 border-t border-border-subtle max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-white border border-border-subtle shadow-sm hover-card-effect">
              <ShieldCheck className="w-4 h-4 text-accent-primary shrink-0" />
              <span className="text-xs font-semibold text-text-primary">Plain-English Advice</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-white border border-border-subtle shadow-sm hover-card-effect">
              <Zap className="w-4 h-4 text-accent-primary shrink-0" />
              <span className="text-xs font-semibold text-text-primary">Sub-Second Performance</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-white border border-border-subtle shadow-sm hover-card-effect">
              <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0" />
              <span className="text-xs font-semibold text-text-primary">Fixed Upfront Quotes</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
