import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { CapabilitiesFilter } from '../components/services/CapabilitiesFilter';
import { ServiceDetailList } from '../components/services/ServiceDetailList';
import { Button } from '../components/ui/Button';
import { usePageSEO } from '../hooks/usePageSEO';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const Services: React.FC = () => {
  usePageSEO({
    title: 'Services | AiSync Software Solutions — Software & Web Development in Ratnagiri',
    description: 'Explore custom software engineering, website development, mobile apps, business automation, and technology consulting in Ratnagiri by AiSync Software Solutions.',
    canonicalPath: '/services',
  });

  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Websites',
    'Applications',
    'Automation',
    'Digital Systems',
    'Marketing & Growth',
    'Consulting',
    'Custom Solutions'
  ];

  return (
    <div className="pt-32 pb-24 bg-bg-primary min-h-screen">
      <Container className="space-y-16">
        
        {/* Editorial Opening */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold">
            Services & Solutions
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-text-primary leading-tight">
            Technology should make business simpler.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            We build websites, applications, automated workflows, and digital systems that help businesses work better and grow — explained in plain language, without technical jargon.
          </p>
        </div>

        {/* Category Filter */}
        <CapabilitiesFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Service Detail List */}
        <ServiceDetailList activeCategory={activeCategory} />

        {/* Bottom Editorial Call to Action */}
        <div className="p-10 rounded-2xl bg-bg-surface1 border border-border-medium text-center max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-xl bg-bg-surface2 border border-border-subtle flex items-center justify-center text-accent-primary mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-text-primary">
              Have a problem that doesn't fit standard categories?
            </h3>
            <p className="text-sm text-text-secondary max-w-xl mx-auto">
              You don't need to know what technology to ask for. Describe your business challenge, and we'll help you figure out practical, affordable options.
            </p>
          </div>
          <div className="pt-2 flex justify-center">
            <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Tell Us What You Need
            </Button>
          </div>
        </div>

      </Container>
    </div>
  );
};
