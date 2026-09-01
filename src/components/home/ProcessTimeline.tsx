import React, { useState } from 'react';
import { Compass, FileCode2, Palette, Code, CheckCircle, Rocket, RefreshCw } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'We listen to your business challenges, team requirements, and product goals in plain everyday language.',
      icon: <Compass className="w-5 h-5 text-accent-primary" />
    },
    {
      num: '02',
      title: 'Plan',
      desc: 'We formulate a straightforward technical plan, outline features, and set a clear timeline & budget.',
      icon: <FileCode2 className="w-5 h-5 text-accent-primary" />
    },
    {
      num: '03',
      title: 'Design',
      desc: 'We design clear, accessible screens so you see and approve how your system will look before building.',
      icon: <Palette className="w-5 h-5 text-accent-primary" />
    },
    {
      num: '04',
      title: 'Build',
      desc: 'We construct your website or application using modular TypeScript components and fast clean code.',
      icon: <Code className="w-5 h-5 text-accent-primary" />
    },
    {
      num: '05',
      title: 'Test',
      desc: 'We test across desktop, tablet, and mobile devices to verify sub-second performance and zero visual bugs.',
      icon: <CheckCircle className="w-5 h-5 text-accent-primary" />
    },
    {
      num: '06',
      title: 'Launch',
      desc: 'We deploy your system securely and train your team so you can start using it smoothly immediately.',
      icon: <Rocket className="w-5 h-5 text-accent-primary" />
    },
    {
      num: '07',
      title: 'Improve',
      desc: 'We remain available for maintenance, enhancements, and ongoing updates as your business grows.',
      icon: <RefreshCw className="w-5 h-5 text-accent-primary" />
    }
  ];

  return (
    <div className="space-y-8">
      {/* Horizontal Step Selector for Desktop */}
      <div className="hidden lg:grid grid-cols-7 gap-2 pb-4 border-b border-border-subtle">
        {steps.map((st, i) => (
          <button
            key={st.num}
            onClick={() => setActiveStep(i)}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeStep === i
                ? 'bg-bg-surface1 border-accent-primary text-text-primary shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                : 'bg-bg-primary border-border-subtle text-text-tertiary hover:text-text-secondary'
            }`}
          >
            <span className="font-mono text-xs font-bold block">{st.num}</span>
            <span className="text-xs font-semibold truncate block mt-0.5">{st.title}</span>
          </button>
        ))}
      </div>

      {/* Active Step Detail Card */}
      <div className="p-8 rounded-2xl bg-bg-surface1 border border-border-medium flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-bg-surface2 border border-border-medium flex items-center justify-center text-accent-primary shrink-0">
            {steps[activeStep].icon}
          </div>
          <div className="space-y-1">
            <span className="font-mono text-xs text-accent-primary font-bold tracking-wider">
              STEP {steps[activeStep].num} OF 07
            </span>
            <h3 className="text-2xl font-bold text-text-primary">
              {steps[activeStep].title}
            </h3>
            <p className="text-sm text-text-secondary max-w-xl leading-relaxed">
              {steps[activeStep].desc}
            </p>
          </div>
        </div>

        {/* Next Step Control */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            className="px-4 py-2 rounded-lg bg-bg-primary border border-border-subtle text-xs font-mono text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Prev
          </button>
          <button
            disabled={activeStep === steps.length - 1}
            onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
            className="px-4 py-2 rounded-lg bg-accent-primary text-white text-xs font-mono font-semibold hover:bg-accent-hover disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next Step →
          </button>
        </div>
      </div>
    </div>
  );
};
