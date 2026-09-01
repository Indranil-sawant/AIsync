import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../ui/Button';
import { SystemConnectedDiagram } from './SystemConnectedDiagram';
import { ArrowRight, ShieldCheck, Zap, Layers, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[88vh] pt-36 pb-20 flex items-center overflow-hidden bg-bg-primary">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-accent-primary/5 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Eyebrow Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-border-medium shadow-sm hover:border-accent-primary/40 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-mono tracking-wide text-text-primary uppercase font-bold">
              Software & Digital Solutions
            </span>
          </motion.div>

          {/* Primary Centered Headline - Solid 100% High Contrast */}
          <motion.h1 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-text-primary leading-[1.08] max-w-4xl mx-auto"
          >
            Software and digital systems built for the way{' '}
            <span className="text-accent-primary">
              your business works.
            </span>
          </motion.h1>

          {/* Centered Subtitle Description */}
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-text-secondary max-w-3xl mx-auto font-normal leading-relaxed"
          >
            We design and build custom websites, applications, automated workflows, and digital systems that help your business operate smoothly and grow.
          </motion.p>

          {/* Centered Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Start a Conversation
            </Button>
            <Button to="/services" variant="secondary" size="lg" icon={<Layers className="w-5 h-5" />}>
              Explore Our Services
            </Button>
          </motion.div>

          {/* Centered Interactive Architecture Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-4 max-w-3xl mx-auto"
          >
            <SystemConnectedDiagram />
          </motion.div>

          {/* Centered Trust Signals */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-border-subtle max-w-3xl mx-auto"
          >
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
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
