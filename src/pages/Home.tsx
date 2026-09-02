import React from 'react';
import { Container } from '../components/common/Container';
import { Button } from '../components/ui/Button';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { SeeItInActionMobileShowcase } from '../components/home/SeeItInActionMobileShowcase';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { BusinessFaq } from '../components/home/BusinessFaq';
import { CaseStudyGrid } from '../components/work/CaseStudyGrid';
import { PhilosophySection } from '../components/about/PhilosophySection';
import { usePageSEO } from '../hooks/usePageSEO';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

export const Home: React.FC = () => {
  usePageSEO({
    title: 'AiSync Software Solutions | Software & Website Development in Ratnagiri',
    description: 'AiSync Software Solutions is a software development and website design company in Ratnagiri, Maharashtra, building modern, fast, and scalable digital solutions.',
    canonicalPath: '/',
  });

  return (
    <div className="space-y-0 bg-bg-primary text-text-primary">
      
      {/* SECTION 01 — HERO */}
      <HeroSection />

      {/* SECTION 02 — CORE CAPABILITIES (BUILD | AUTOMATE | GROW | CUSTOM) */}
      <ServicesOverview />

      {/* SECTION 03 — SEE IT IN ACTION (SCROLL-DRIVEN 3-DEVICE SHOWCASE) */}
      <SeeItInActionMobileShowcase />

      {/* SECTION 04 — SELECTED WORK */}
      <section className="py-28 bg-bg-primary border-t border-border-subtle">
        <Container className="space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold">
              Selected Engineering Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-text-primary tracking-tight">
              Solutions We've Built
            </h2>
            <p className="text-sm sm:text-base text-text-secondary">
              Real-world systems engineered for stability, performance, and operational scale.
            </p>
          </div>

          <CaseStudyGrid />
        </Container>
      </section>

      {/* SECTION 05 — EXECUTION METHODOLOGY */}
      <section className="py-28 bg-bg-surface1 border-t border-border-subtle">
        <Container className="space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold">
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-text-primary tracking-tight">
              How We Deliver Solutions
            </h2>
            <p className="text-sm text-text-secondary">
              A clear, predictable 7-step process ensuring total transparency from initial idea to deployment.
            </p>
          </div>

          <ProcessTimeline />
        </Container>
      </section>

      {/* SECTION 06 — TRUST & PHILOSOPHY */}
      <section className="py-24 bg-bg-primary border-t border-border-subtle">
        <Container className="space-y-16">
          {/* Trust Signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="p-6 rounded-2xl bg-white border border-border-medium space-y-2 shadow-sm hover-card-effect">
              <ShieldCheck className="w-6 h-6 text-accent-primary mx-auto" />
              <span className="text-base font-bold text-text-primary block">Zero Jargon</span>
              <p className="text-xs text-text-secondary">Clear, plain-English communication at every stage.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-border-medium space-y-2 shadow-sm hover-card-effect">
              <CheckCircle2 className="w-6 h-6 text-accent-primary mx-auto" />
              <span className="text-base font-bold text-text-primary block">Fixed Upfront Quotes</span>
              <p className="text-xs text-text-secondary">No hidden fees or unexpected billing surprises.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-border-medium space-y-2 shadow-sm hover-card-effect">
              <Sparkles className="w-6 h-6 text-accent-primary mx-auto" />
              <span className="text-base font-bold text-text-primary block">Built to Last</span>
              <p className="text-xs text-text-secondary">Production-grade clean code designed for long-term scale.</p>
            </div>
          </div>

          {/* Philosophy Statement */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
                What We Believe
              </h2>
            </div>
            <PhilosophySection />
          </div>
        </Container>
      </section>

      {/* SECTION 07 — BUSINESS FAQ */}
      <section className="py-28 bg-bg-surface1 border-t border-border-subtle">
        <Container className="space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-text-primary tracking-tight">
              Questions Business Owners Ask
            </h2>
          </div>

          <BusinessFaq />
        </Container>
      </section>

      {/* SECTION 08 — FINAL MEMORABLE CTA */}
      <section className="py-32 bg-bg-primary border-t border-border-subtle text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-glow rounded-full blur-[140px] pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-text-primary leading-tight">
              Have a problem worth solving?
            </h2>
            <p className="text-base sm:text-lg text-text-secondary">
              Let's figure it out together. Tell us about your business challenge and we'll help you find a simple, practical solution.
            </p>
            <div className="pt-4 flex justify-center">
              <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Start a Conversation
              </Button>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};
