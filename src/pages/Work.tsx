import React from 'react';
import { Container } from '../components/common/Container';
import { CaseStudyGrid } from '../components/work/CaseStudyGrid';
import { Button } from '../components/ui/Button';
import { usePageSEO } from '../hooks/usePageSEO';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Work: React.FC = () => {
  usePageSEO({
    title: 'Work & Case Studies | AiSync Software Solutions — Ratnagiri',
    description: 'Explore real-world software engineering case studies, web applications, e-commerce storefronts, and automated business systems built by AiSync in Ratnagiri.',
    canonicalPath: '/work',
  });

  return (
    <div className="pt-32 pb-24 bg-bg-primary min-h-screen">
      <Container className="space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold flex items-center gap-2 justify-center">
            <Sparkles className="w-4 h-4" /> Verified Client Portfolio
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-text-primary">
            Selected Client Work
          </h1>
          <p className="text-base sm:text-xl text-text-secondary leading-relaxed">
            Real-world websites, lead generation platforms, and digital systems built and deployed for our business partners.
          </p>
        </div>

        {/* Real Client Case Studies Grid */}
        <CaseStudyGrid />

        {/* Bottom Conversation Invitation CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-border-medium text-center max-w-2xl mx-auto space-y-4 shadow-sm hover-card-effect">
          <h3 className="text-2xl font-extrabold text-text-primary">
            Have a project idea for your business?
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Tell us about your business goals and current online presence, and we'll help you design a fast, high-converting digital platform.
          </p>
          <div className="pt-2 flex justify-center">
            <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Start a Project Conversation
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
