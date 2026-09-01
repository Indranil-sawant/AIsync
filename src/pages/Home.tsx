import React from 'react';
import { Container } from '../components/common/Container';
import { Button } from '../components/ui/Button';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { WebsiteMockupVisual } from '../components/home/WebsiteMockupVisual';
import { AppDashboardVisual } from '../components/home/AppDashboardVisual';
import { SeeItInActionMobileShowcase } from '../components/home/SeeItInActionMobileShowcase';
import { AutomationBeforeAfterVisual } from '../components/home/AutomationBeforeAfterVisual';
import { DigitalizationFlowVisual } from '../components/home/DigitalizationFlowVisual';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { BusinessFaq } from '../components/home/BusinessFaq';
import { CaseStudyGrid } from '../components/work/CaseStudyGrid';
import { PhilosophySection } from '../components/about/PhilosophySection';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare,
  Sparkles 
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0 bg-bg-primary text-text-primary">
      
      {/* SECTION 01 — HERO */}
      <HeroSection />

      {/* SECTION 02 — THE BUSINESS PROBLEM */}
      <section className="py-20 bg-bg-surface1 border-t border-border-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold">
              The Everyday Challenge
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-text-primary leading-tight">
              Your business shouldn't have to work around its technology.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl bg-bg-primary border border-border-subtle space-y-2">
              <span className="text-xs font-mono text-rose-400 font-bold block">01 / MANUAL CHAOS</span>
              <h3 className="text-base font-semibold text-text-primary">Too much repetitive work</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Staff spending hours copying information between spreadsheets, emails, and messaging apps.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-bg-primary border border-border-subtle space-y-2">
              <span className="text-xs font-mono text-amber-400 font-bold block">02 / OUTDATED PRESENCE</span>
              <h3 className="text-base font-semibold text-text-primary">Outdated business websites</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Websites that don't explain what you offer or fail to convert visitors into inquiries.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-bg-primary border border-border-subtle space-y-2">
              <span className="text-xs font-mono text-blue-400 font-bold block">03 / DISCONNECTED TOOLS</span>
              <h3 className="text-base font-semibold text-text-primary">Disconnected software</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Using 5 different tools that don't talk to each other, causing lost records and confusion.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 03 — WHAT WE CAN HELP WITH */}
      <ServicesOverview />

      {/* SECTION 04 — WEBSITE DEVELOPMENT */}
      <section className="py-24 bg-bg-primary border-t border-border-subtle">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold">
                01 Website Development
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
                Your business deserves more than a website that simply exists.
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                We build websites designed to represent your business properly, load fast on all devices, and help customers take the next step.
              </p>
              <div className="pt-2">
                <Button to="/services" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Explore Website Solutions
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <WebsiteMockupVisual />
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 05 — APPLICATION DEVELOPMENT */}
      <section className="py-24 bg-bg-surface1 border-t border-border-subtle">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <AppDashboardVisual />
            </div>

            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold">
                02 Application Development
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
                Have an idea? Need a system built around your business?
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Instead of forcing your business into generic off-the-shelf software, we build custom applications tailored around the way your business actually works.
              </p>
              <div className="pt-2">
                <Button to="/services" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Explore App Development
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SEE IT IN ACTION — MOBILE & BUSINESS SHOWCASE (Kinto Inspired) */}
      <SeeItInActionMobileShowcase />

      {/* SECTION 06 — BUSINESS AUTOMATION */}
      <section className="py-24 bg-bg-primary border-t border-border-subtle">
        <Container className="space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold">
              03 Business Automation
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-text-primary">
              Tired of doing the same tasks manually?
            </h2>
            <p className="text-sm sm:text-base text-text-secondary">
              We find repetitive work and turn it into simple automated processes so your team spends less time copying information.
            </p>
          </div>

          <AutomationBeforeAfterVisual />
        </Container>
      </section>

      {/* SECTION 07 — DIGITALIZATION */}
      <section className="py-24 bg-bg-surface1 border-t border-border-subtle">
        <Container className="space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold">
              04 Digital Transformation
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-text-primary">
              Take Your Business Digital
            </h2>
            <p className="text-sm text-text-secondary">
              Still managing important work through paper, spreadsheets, and scattered messages? We help move those processes into organized digital systems.
            </p>
          </div>

          <DigitalizationFlowVisual />
        </Container>
      </section>

      {/* SECTION 08 — DIGITAL MARKETING */}
      <section className="py-24 bg-bg-primary border-t border-border-subtle">
        <Container>
          <div className="max-w-4xl mx-auto p-10 rounded-2xl bg-bg-surface1 border border-border-subtle space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold block">
              05 Digital Marketing & Growth
            </span>
            <h2 className="text-3xl font-bold text-text-primary">
              Build a stronger online presence and reach the right customers.
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
              Having a good product is not enough if people cannot find you. We help local and regional businesses improve search visibility, Google presence, and content strategies without unrealistic promises.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border-subtle">
              <div className="flex items-center gap-2 text-xs text-text-secondary font-mono">
                <CheckCircle2 className="w-4 h-4 text-accent-primary" />
                <span>Search Engine Visibility</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary font-mono">
                <CheckCircle2 className="w-4 h-4 text-accent-primary" />
                <span>Google Profile Optimization</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary font-mono">
                <CheckCircle2 className="w-4 h-4 text-accent-primary" />
                <span>Honest Analytics & Guidance</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 09 — TECHNOLOGY CONSULTING */}
      <section className="py-24 bg-bg-surface1 border-t border-border-subtle text-center">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold">
              06 Technology Consulting
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-text-primary">
              Not sure what technology your business actually needs?
            </h2>
            <p className="text-base text-text-secondary leading-relaxed">
              Start with the problem. You don't have to know the technology — tell us what your business is facing, and we'll help you figure out practical, affordable options before spending money.
            </p>
            <div className="pt-2">
              <Button to="/contact" variant="primary" size="lg" icon={<MessageSquare className="w-4 h-4" />}>
                Tell Us Your Challenge
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 10 — OUR PROCESS */}
      <section className="py-24 bg-bg-primary border-t border-border-subtle">
        <Container className="space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold">
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-text-primary">
              How We Deliver Solutions
            </h2>
            <p className="text-sm text-text-secondary">
              A clear, predictable 7-step process ensuring total transparency from initial idea to deployment.
            </p>
          </div>

          <ProcessTimeline />
        </Container>
      </section>

      {/* SECTION 11 — SELECTED WORK */}
      <section className="py-24 bg-bg-surface1 border-t border-border-subtle">
        <Container className="space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-text-primary">
              Solutions We've Engineered
            </h2>
          </div>

          <CaseStudyGrid />
        </Container>
      </section>

      {/* SECTION 12 — TRUST */}
      <section className="py-20 bg-bg-primary border-t border-border-subtle">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="p-6 rounded-xl bg-bg-surface1 border border-border-subtle space-y-2">
              <ShieldCheck className="w-6 h-6 text-accent-primary mx-auto" />
              <span className="text-lg font-bold text-text-primary block">Zero Jargon</span>
              <p className="text-xs text-text-secondary">Clear, plain-English communication at every stage.</p>
            </div>
            <div className="p-6 rounded-xl bg-bg-surface1 border border-border-subtle space-y-2">
              <CheckCircle2 className="w-6 h-6 text-accent-primary mx-auto" />
              <span className="text-lg font-bold text-text-primary block">Fixed Upfront Quotes</span>
              <p className="text-xs text-text-secondary">No hidden fees or unexpected billing surprises.</p>
            </div>
            <div className="p-6 rounded-xl bg-bg-surface1 border border-border-subtle space-y-2">
              <Sparkles className="w-6 h-6 text-accent-primary mx-auto" />
              <span className="text-lg font-bold text-text-primary block">Built to Last</span>
              <p className="text-xs text-text-secondary">Production-grade clean code designed for long-term scale.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 13 — ABOUT */}
      <section className="py-24 bg-bg-surface1 border-t border-border-subtle">
        <Container className="space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-text-primary">
              What We Believe
            </h2>
          </div>

          <PhilosophySection />
        </Container>
      </section>

      {/* SECTION 14 — FAQ */}
      <section className="py-24 bg-bg-primary border-t border-border-subtle">
        <Container className="space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-text-primary">
              Questions Business Owners Ask
            </h2>
          </div>

          <BusinessFaq />
        </Container>
      </section>

      {/* SECTION 15 — FINAL CTA */}
      <section className="py-24 bg-bg-surface1 border-t border-border-subtle text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-accent-glow rounded-full blur-[120px] pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary">
              Have a problem worth solving?
            </h2>
            <p className="text-base text-text-secondary">
              Let's figure it out together. Tell us about your business challenge and we'll help you find a simple, practical solution.
            </p>
            <div className="pt-2 flex justify-center">
              <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Start a Conversation
              </Button>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};
