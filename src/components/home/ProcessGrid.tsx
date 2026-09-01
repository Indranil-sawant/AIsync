import React from 'react';
import { Container } from '../common/Container';
import { Compass, Cpu, CheckCircle2, Rocket } from 'lucide-react';

export const ProcessGrid: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Architectural Blueprint',
      description: 'System modeling, API contract specification, database design, and visual component token definition.',
      icon: <Compass className="w-5 h-5 text-accent-primary" />
    },
    {
      num: '02',
      title: 'Iterative Development',
      description: 'Rapid sprint cycles using modular TypeScript components, automated unit tests, and continuous preview builds.',
      icon: <Cpu className="w-5 h-5 text-accent-primary" />
    },
    {
      num: '03',
      title: 'Rigorous Quality Audit',
      description: 'Comprehensive 15-point audit covering sub-second rendering, WCAG AA accessibility, security, and edge cases.',
      icon: <CheckCircle2 className="w-5 h-5 text-accent-primary" />
    },
    {
      num: '04',
      title: 'Deployment & Scale',
      description: 'Zero-downtime production deployment with containerized orchestration and automated telemetry monitoring.',
      icon: <Rocket className="w-5 h-5 text-accent-primary" />
    }
  ];

  return (
    <section className="py-24 bg-bg-primary relative border-t border-border-subtle">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold">
            Execution Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            How We Deliver Software
          </h2>
          <p className="text-sm text-text-secondary">
            Structured, linear engineering methodology ensuring predictability, code maintainability, and zero production jitter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-xl bg-bg-surface1 border border-border-subtle relative space-y-4 hover:border-border-medium transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-text-tertiary">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-lg bg-bg-surface2 flex items-center justify-center border border-border-subtle">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-base font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
