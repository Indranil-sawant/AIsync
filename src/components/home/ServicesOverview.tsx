import React from 'react';
import { Container } from '../common/Container';
import { WebsiteMockupVisual } from './WebsiteMockupVisual';
import { AppDashboardVisual } from './AppDashboardVisual';
import { AutomationBeforeAfterVisual } from './AutomationBeforeAfterVisual';
import { Button } from '../ui/Button';
import { 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesOverview: React.FC = () => {
  return (
    <section className="py-28 bg-[#f5f3ef] border-t border-border-subtle relative overflow-hidden">
      <Container className="space-y-20">

        {/* Section Editorial Header */}
        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Comprehensive Business Solutions
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-text-primary leading-tight">
            We use technology to make businesses work better.
          </h2>
          <p className="text-base sm:text-xl text-text-secondary font-normal leading-relaxed">
            From websites and custom applications to automated workflows and digital growth — explore the full range of practical solutions we build for your business.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* TIER 1 — FLAGSHIP SERVICES (01 WEBSITES, 02 APPS, 03 AUTOMATION) */}
        {/* ==================================================================== */}
        <div className="space-y-12">
          
          {/* SERVICE 01: WEBSITE DEVELOPMENT */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-border-medium hover-card-effect space-y-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl font-black text-accent-primary">01</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-text-tertiary px-3 py-1 rounded bg-[#f5f3ef] border border-border-subtle font-bold">
                    Website Development
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight">
                  Your business deserves more than a website that simply exists.
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Fast, responsive business sites designed to establish immediate trust, explain your services clearly, and turn visitors into client leads.
                </p>
                <div className="pt-2">
                  <Button to="/services#website-development" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                    Explore Website Solutions
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-7">
                <WebsiteMockupVisual />
              </div>
            </div>
          </div>

          {/* SERVICE 02: APPLICATION DEVELOPMENT */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-border-medium hover-card-effect space-y-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <AppDashboardVisual />
              </div>
              <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl font-black text-accent-primary">02</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-text-tertiary px-3 py-1 rounded bg-[#f5f3ef] border border-border-subtle font-bold">
                    Application Development
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight">
                  Custom software built around the way your business actually works.
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Internal management systems, mobile apps, and customer portals tailored to your specific team operations without forced generic templates.
                </p>
                <div className="pt-2">
                  <Button to="/services#application-development" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                    Explore App Development
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE 03: BUSINESS AUTOMATION */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-border-medium hover-card-effect space-y-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border-subtle">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl font-black text-accent-primary">03</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-text-tertiary px-3 py-1 rounded bg-[#f5f3ef] border border-border-subtle font-bold">
                    Business Automation
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight">
                  Still doing work manually that a computer could handle?
                </h3>
                <p className="text-sm sm:text-base text-text-secondary">
                  We connect your spreadsheets, emails, and forms into simple automated processes so your team spends less time copying information.
                </p>
              </div>
              <Button to="/services#business-automation" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Explore Automation
              </Button>
            </div>
            <AutomationBeforeAfterVisual />
          </div>

        </div>

        {/* ==================================================================== */}
        {/* TIER 2 — SERVICES 04, 05, 06 (DIGITAL SYSTEMS, MARKETING, CONSULTING) */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* SERVICE 04: TAKE YOUR BUSINESS DIGITAL */}
          <div className="p-8 rounded-3xl bg-white border border-border-medium hover-card-effect space-y-6 flex flex-col justify-between shadow-sm">
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
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Move paper forms, manual tracking, and scattered emails into one organized digital system that makes daily operations clean and less chaotic.
              </p>
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-mono uppercase text-text-tertiary font-bold">Key Capabilities</span>
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
              Explore Digitalization <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* SERVICE 05: DIGITAL MARKETING & GROWTH */}
          <div className="p-8 rounded-3xl bg-white border border-border-medium hover-card-effect space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-black text-accent-primary">05</span>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[#f5f3ef] text-text-tertiary font-bold">
                  Marketing & Growth
                </span>
              </div>
              <h4 className="text-2xl font-bold text-text-primary leading-tight">
                Digital Marketing & Visibility
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Build a stronger online presence, improve Google search ranking, and reach potential customers in your area without unrealistic claims.
              </p>
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-mono uppercase text-text-tertiary font-bold">Key Capabilities</span>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-text-primary font-medium">
                  <span className="px-2.5 py-1 rounded bg-[#f5f3ef] border border-border-subtle">Search Engine SEO</span>
                  <span className="px-2.5 py-1 rounded bg-[#f5f3ef] border border-border-subtle">Google Profiles</span>
                  <span className="px-2.5 py-1 rounded bg-[#f5f3ef] border border-border-subtle">Local Reach</span>
                </div>
              </div>
            </div>
            <Link
              to="/services#digital-marketing"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-primary hover:text-accent-hover transition-colors pt-4 border-t border-border-subtle"
            >
              Explore Digital Growth <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* SERVICE 06: TECHNOLOGY CONSULTING */}
          <div className="p-8 rounded-3xl bg-white border border-border-medium hover-card-effect space-y-6 flex flex-col justify-between shadow-sm">
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
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Start with the problem. You don't need technical knowledge — tell us what your business is facing and we'll help you pick practical tools.
              </p>
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] font-mono uppercase text-text-tertiary font-bold">Key Capabilities</span>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-text-primary font-medium">
                  <span className="px-2.5 py-1 rounded bg-[#f5f3ef] border border-border-subtle">System Planning</span>
                  <span className="px-2.5 py-1 rounded bg-[#f5f3ef] border border-border-subtle">Tool Selection</span>
                  <span className="px-2.5 py-1 rounded bg-[#f5f3ef] border border-border-subtle">Plain Guidance</span>
                </div>
              </div>
            </div>
            <Link
              to="/services#technology-consulting"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-primary hover:text-accent-hover transition-colors pt-4 border-t border-border-subtle"
            >
              Explore Consulting <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* ==================================================================== */}
        {/* TIER 3 — SERVICE 07: CUSTOM BUSINESS SOLUTIONS */}
        {/* ==================================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-border-medium flex flex-col md:flex-row items-center justify-between gap-8 shadow-md hover-card-effect relative overflow-hidden">
          <div className="space-y-3 max-w-2xl text-center md:text-left z-10">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="font-mono text-3xl font-black text-accent-primary">07</span>
              <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold">
                Custom Solutions
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-text-primary leading-tight">
              Have a problem worth solving that doesn't fit standard categories?
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
