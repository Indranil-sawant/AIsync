import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../ui/Button';
import { WebsiteMockupVisual } from './WebsiteMockupVisual';
import { AppDashboardVisual } from './AppDashboardVisual';
import { AutomationBeforeAfterVisual } from './AutomationBeforeAfterVisual';
import { 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesOverview: React.FC = () => {
  return (
    <section className="py-28 bg-[#f5f3ef] border-t border-border-subtle relative overflow-hidden">
      <Container className="space-y-24">

        {/* Section Editorial Header */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Practical Business Solutions
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-text-primary leading-[1.05]">
            We don't just sell software. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-800">
              We solve business problems.
            </span>
          </h2>
          <p className="text-lg sm:text-2xl text-text-secondary leading-relaxed font-normal">
            Every business operates differently. We look at what is holding your company back — whether it's an outdated website, hours spent on manual work, or scattered spreadsheets — and build simple, reliable technology around your exact needs.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* TIER 1 — FLAGSHIP SERVICE 01: WEBSITE DEVELOPMENT */}
        {/* ==================================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-border-medium hover-card-effect space-y-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Problem-First Editorial Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-black text-accent-primary">01</span>
                <span className="text-xs font-mono uppercase tracking-widest text-text-tertiary px-3 py-1 rounded bg-[#f5f3ef] border border-border-subtle font-semibold">
                  Website Development
                </span>
              </div>

              {/* Problem Headline */}
              <h3 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight">
                Your business deserves more than a website that simply exists.
              </h3>

              {/* Problem Teaser Box */}
              <div className="p-4 rounded-xl bg-[#fcfbf8] border border-border-subtle space-y-1">
                <span className="text-[11px] font-mono text-accent-primary font-bold uppercase tracking-wider block">
                  THE COMMON PROBLEM
                </span>
                <p className="text-xs text-text-secondary italic">
                  "Does your website look outdated, fail to explain what you offer, or bring in zero inquiries?"
                </p>
              </div>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                We design and build professional business websites that establish immediate credibility, load fast on all devices, and help prospective clients take the next step.
              </p>

              {/* Inline Bullet List */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase text-text-tertiary font-bold tracking-wider block">What We Deliver</span>
                <div className="flex flex-wrap gap-2 text-xs text-text-primary font-medium">
                  <span className="px-3 py-1 rounded-lg bg-[#f5f3ef] border border-border-subtle">Business & School Sites</span>
                  <span className="px-3 py-1 rounded-lg bg-[#f5f3ef] border border-border-subtle">Clinic & Service Sites</span>
                  <span className="px-3 py-1 rounded-lg bg-[#f5f3ef] border border-border-subtle">Landing Pages & Portals</span>
                </div>
              </div>

              <div className="pt-2">
                <Button to="/services#website-development" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Explore Website Solutions
                </Button>
              </div>
            </div>

            {/* Right: Product Visualization Showcase */}
            <div className="lg:col-span-7">
              <WebsiteMockupVisual />
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* TIER 1 — FLAGSHIP SERVICE 02: APPLICATION DEVELOPMENT */}
        {/* ==================================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-border-medium hover-card-effect space-y-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Product Dashboard Visualization */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <AppDashboardVisual />
            </div>

            {/* Right: Problem-First Editorial Narrative */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-black text-accent-primary">02</span>
                <span className="text-xs font-mono uppercase tracking-widest text-text-tertiary px-3 py-1 rounded bg-[#f5f3ef] border border-border-subtle font-semibold">
                  Application Development
                </span>
              </div>

              {/* Problem Headline */}
              <h3 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight">
                Need a system built around the way your business actually works?
              </h3>

              {/* Problem Teaser Box */}
              <div className="p-4 rounded-xl bg-[#fcfbf8] border border-border-subtle space-y-1">
                <span className="text-[11px] font-mono text-accent-primary font-bold uppercase tracking-wider block">
                  THE COMMON PROBLEM
                </span>
                <p className="text-xs text-text-secondary italic">
                  "Trying to force your business into generic off-the-shelf software that doesn't fit how you work?"
                </p>
              </div>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Have an idea for an app or need an internal system for your team? We design and build custom web and mobile applications tailored to your specific operations.
              </p>

              {/* Inline Bullet List */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase text-text-tertiary font-bold tracking-wider block">What We Deliver</span>
                <div className="flex flex-wrap gap-2 text-xs text-text-primary font-medium">
                  <span className="px-3 py-1 rounded-lg bg-[#f5f3ef] border border-border-subtle">Internal Management Systems</span>
                  <span className="px-3 py-1 rounded-lg bg-[#f5f3ef] border border-border-subtle">Customer & Staff Portals</span>
                  <span className="px-3 py-1 rounded-lg bg-[#f5f3ef] border border-border-subtle">Booking & Mobile Apps</span>
                </div>
              </div>

              <div className="pt-2">
                <Button to="/services#application-development" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Explore App Development
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* TIER 1 — FLAGSHIP SERVICE 03: BUSINESS AUTOMATION */}
        {/* ==================================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-border-medium hover-card-effect space-y-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border-subtle">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-3xl font-black text-accent-primary">03</span>
                <span className="text-xs font-mono uppercase tracking-widest text-text-tertiary px-3 py-1 rounded bg-[#f5f3ef] border border-border-subtle font-semibold">
                  Business Automation
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight">
                Still doing work manually that a computer could handle?
              </h3>
              <p className="text-sm sm:text-base text-text-secondary">
                If your team repeatedly does the same task by hand, there is a better way. We find repetitive work and set up simple automated workflows so your team can focus on what matters.
              </p>
            </div>

            <Button to="/services#business-automation" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Automation Solutions
            </Button>
          </div>

          {/* Interactive Before vs After Visual Component */}
          <AutomationBeforeAfterVisual />
        </div>

        {/* ==================================================================== */}
        {/* TIER 2 — SECONDARY EDITORIAL COMPOSITIONS (SERVICES 04, 05, 06) */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* SERVICE 04: DIGITAL TRANSFORMATION */}
          <div className="p-8 rounded-2xl bg-white border border-border-medium hover-card-effect flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-black text-accent-primary">04</span>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[#f5f3ef] text-text-tertiary font-bold">
                  Digital Systems
                </span>
              </div>

              <h4 className="text-2xl font-bold text-text-primary leading-tight">
                Take Your Business Digital
              </h4>

              <div className="p-3 rounded-lg bg-[#fcfbf8] border border-border-subtle">
                <p className="text-xs text-text-secondary italic">
                  "Still managing important work through paper, spreadsheets, or scattered messages?"
                </p>
              </div>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                We bring paper forms, manual tracking, and disconnected tools into one organized digital system that makes daily operations clean and less chaotic.
              </p>

              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-mono uppercase text-text-tertiary font-bold">Key Focus Areas</span>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-text-primary font-medium">
                  <span className="px-2.5 py-1 rounded bg-[#f5f3ef] border border-border-subtle">Online Forms</span>
                  <span className="px-2.5 py-1 rounded bg-[#f5f3ef] border border-border-subtle">Client Databases</span>
                  <span className="px-2.5 py-1 rounded bg-[#f5f3ef] border border-border-subtle">Digital Records</span>
                </div>
              </div>
            </div>

            <Link
              to="/services#take-your-business-digital"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-primary hover:text-accent-hover transition-colors pt-4 border-t border-border-subtle"
            >
              Learn About Digitalization <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* SERVICE 05: DIGITAL MARKETING */}
          <div className="p-8 rounded-2xl bg-white border border-border-medium hover-card-effect flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-black text-accent-primary">05</span>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[#f5f3ef] text-text-tertiary font-bold">
                  Marketing & Growth
                </span>
              </div>

              <h4 className="text-2xl font-bold text-text-primary leading-tight">
                Digital Marketing & Growth
              </h4>

              <div className="p-3 rounded-lg bg-[#fcfbf8] border border-border-subtle">
                <p className="text-xs text-text-secondary italic">
                  "Having a great service is not enough if potential customers cannot find you online."
                </p>
              </div>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                We help local and regional businesses build a stronger online presence, improve Google search visibility, and reach potential customers without fake promises.
              </p>

              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-mono uppercase text-text-tertiary font-bold">Key Focus Areas</span>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-text-primary font-medium">
                  <span className="px-2.5 py-1 rounded bg-[#f5f3ef] border border-border-subtle">Search Engine SEO</span>
                  <span className="px-2.5 py-1 rounded bg-[#f5f3ef] border border-border-subtle">Google Presence</span>
                  <span className="px-2.5 py-1 rounded bg-[#f5f3ef] border border-border-subtle">Local Reach</span>
                </div>
              </div>
            </div>

            <Link
              to="/services#digital-marketing"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-primary hover:text-accent-hover transition-colors pt-4 border-t border-border-subtle"
            >
              Learn About Marketing <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* SERVICE 06: TECHNOLOGY CONSULTING */}
          <div className="p-8 rounded-2xl bg-white border border-border-medium hover-card-effect flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-black text-accent-primary">06</span>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[#f5f3ef] text-text-tertiary font-bold">
                  Consulting
                </span>
              </div>

              <h4 className="text-2xl font-bold text-text-primary leading-tight">
                Technology Consulting
              </h4>

              <div className="p-3 rounded-lg bg-[#fcfbf8] border border-border-subtle">
                <p className="text-xs text-text-secondary italic">
                  "Not sure what technology your business actually needs or worried about wasting money?"
                </p>
              </div>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                You don't have to understand the technology. Tell us the problem your business is facing, and we will help you choose practical tools before spending money.
              </p>

              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-mono uppercase text-text-tertiary font-bold">Key Focus Areas</span>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-text-primary font-medium">
                  <span className="px-2.5 py-1 rounded bg-[#f5f3ef] border border-border-subtle">System Planning</span>
                  <span className="px-2.5 py-1 rounded bg-[#f5f3ef] border border-border-subtle">Tool Selection</span>
                  <span className="px-2.5 py-1 rounded bg-[#f5f3ef] border border-border-subtle">Plain Advice</span>
                </div>
              </div>
            </div>

            <Link
              to="/services#technology-consulting"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-primary hover:text-accent-hover transition-colors pt-4 border-t border-border-subtle"
            >
              Learn About Consulting <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* ==================================================================== */}
        {/* TIER 3 — FLEXIBLE CUSTOM BUSINESS SOLUTIONS CALLOUT BANNER */}
        {/* ==================================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-border-medium flex flex-col md:flex-row items-center justify-between gap-8 shadow-md hover-card-effect relative overflow-hidden">
          <div className="space-y-3 max-w-2xl text-center md:text-left z-10">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="font-mono text-2xl font-black text-accent-primary">07</span>
              <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold">
                Custom Solutions
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-text-primary leading-tight">
              Have a problem worth solving that doesn't fit a standard category?
            </h3>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Every business operates differently. If your challenge doesn't fit into a standard service bucket, tell us what you are trying to achieve, and we'll figure out a practical solution with you.
            </p>
          </div>

          <div className="shrink-0 z-10">
            <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Start a Conversation
            </Button>
          </div>
        </div>

      </Container>
    </section>
  );
};
