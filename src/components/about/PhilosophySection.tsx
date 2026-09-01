import React from 'react';
import { Shield, Zap, Target, Cpu } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      title: 'Architectural Authority',
      description: 'We prioritize memory safety, clean API contracts, and predictable data flow over quick visual hacks.',
      icon: <Cpu className="w-5 h-5 text-accent-primary" />
    },
    {
      title: 'Relentless Performance',
      description: '60/120fps UI render targets, sub-second initial loads, and zero layout shift across screen sizes.',
      icon: <Zap className="w-5 h-5 text-accent-primary" />
    },
    {
      title: 'Commercial Precision',
      description: 'A strict zero-invented-information policy ensuring total transparency and validated technical specs.',
      icon: <Target className="w-5 h-5 text-accent-primary" />
    },
    {
      title: 'Production Rigor',
      description: 'Automated CI/CD validation, strict WCAG AA accessibility standards, and comprehensive defense-in-depth security.',
      icon: <Shield className="w-5 h-5 text-accent-primary" />
    }
  ];

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="p-6 rounded-xl bg-bg-surface1 border border-border-subtle hover:border-border-medium transition-colors space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-bg-surface2 flex items-center justify-center border border-border-subtle">
              {p.icon}
            </div>
            <h3 className="text-lg font-semibold text-text-primary">
              {p.title}
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
