import React from 'react';
import { Container } from '../components/common/Container';
import { CaseStudyGrid } from '../components/work/CaseStudyGrid';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const Work: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-bg-primary min-h-screen">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold">
            Engineering Archive & Proof of Capability
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
            Selected Architecture Case Studies
          </h1>
          <p className="text-base text-text-secondary leading-relaxed">
            Detailed technical breakdowns of software systems, distributed services, and cloud engineering projects.
          </p>
        </div>

        {/* Grid */}
        <CaseStudyGrid />

        {/* Bottom CTA */}
        <div className="mt-20 p-8 rounded-2xl bg-bg-surface1 border border-border-subtle text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-text-primary">
            Need a custom technical case study review?
          </h3>
          <p className="text-xs text-text-secondary">
            We provide NDA-backed architectural walk-throughs for prospective technical leadership teams.
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Request Technical Discussion
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
