import React from 'react';
import { Check } from 'lucide-react';

export const EngineeringValues: React.FC = () => {
  const values = [
    'Strict TypeScript strict-mode enforcement across all application code',
    'GPU-accelerated layout transitions obeying prefers-reduced-motion',
    'Comprehensive error boundary boundaries and graceful degradation',
    'Zero unverified metrics or fabricated testimonial copy',
    'Modular page architecture preventing cross-route style regressions',
    'Automated build validation with strict zero-warning thresholds'
  ];

  return (
    <div className="p-8 rounded-2xl bg-bg-surface1 border border-border-subtle space-y-6">
      <h3 className="text-xl font-bold text-text-primary">
        Our Operating Discipline & Technical Governance
      </h3>
      <p className="text-xs text-text-secondary leading-relaxed">
        Every project undertaken by Aisync Software Solutions is managed under a permanent AI-governed operating system, enforcing standard verification pipelines from inspection to deployment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {values.map((v) => (
          <div key={v} className="flex items-start gap-3 text-xs text-text-secondary">
            <div className="w-5 h-5 rounded bg-accent-primary/10 text-accent-primary flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
