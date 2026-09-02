import React from 'react';
import { Container } from '../components/common/Container';
import { PhilosophySection } from '../components/about/PhilosophySection';
import { EngineeringValues } from '../components/about/EngineeringValues';
import { usePageSEO } from '../hooks/usePageSEO';

export const About: React.FC = () => {
  usePageSEO({
    title: 'About Us | AiSync Software Solutions — Ratnagiri',
    description: 'Learn about AiSync Software Solutions in Ratnagiri, Maharashtra. We engineer high-performance software, custom web applications, and automated systems.',
    canonicalPath: '/about',
  });

  return (
    <div className="pt-32 pb-24 bg-bg-primary min-h-screen">
      <Container className="space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold">
            Institutional Identity & Mission
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
            About AiSync Software Solutions
          </h1>
          <p className="text-base text-text-secondary leading-relaxed">
            Positioned as an elite software engineering partner, we help startups and growth enterprises design, construct, and scale modern intelligence platforms and digital product architectures.
          </p>
        </div>

        {/* Philosophy Section */}
        <PhilosophySection />

        {/* Values Section */}
        <EngineeringValues />
      </Container>
    </div>
  );
};
