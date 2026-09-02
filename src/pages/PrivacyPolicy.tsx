import React from 'react';
import { Container } from '../components/common/Container';
import { usePageSEO } from '../hooks/usePageSEO';
import { ShieldCheck, Lock, Eye, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
  usePageSEO({
    title: 'Privacy Policy | AiSync Software Solutions',
    description: 'Review data protection practices, client confidentiality protocols, and privacy policies of AiSync Software Solutions in Ratnagiri, Maharashtra.',
    canonicalPath: '/privacy',
  });

  return (
    <div className="pt-32 pb-24 bg-bg-primary min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="space-y-4 pb-8 border-b border-border-subtle">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold px-3 py-1 rounded bg-[#f5f3ef] border border-border-subtle">
                Legal & Data Protection
              </span>
              <span className="text-xs font-mono text-text-tertiary">Effective Date: January 1, 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-text-primary">
              Privacy Policy & Data Security
            </h1>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              This Privacy Policy outlines how <strong className="text-text-primary">AIsync Software Solutions</strong> (founded and operated by <strong className="text-text-primary">Indranil Amar Sawant</strong>, Ratnagiri, Maharashtra, India) collects, processes, and protects your information when you interact with our website and software engineering services.
            </p>
          </div>

          {/* Core Commitments Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-border-medium space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-accent-primary/10 text-accent-primary flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Strict NDA Protocol</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                All client briefings, technical specs, and business ideas submitted through our website are treated under default non-disclosure confidentiality.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border-medium space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">No Selling of Data</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                We never sell, rent, or lease your personal or corporate email address to third-party advertisers or data brokers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border-medium space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Transparent Processing</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                We capture only essential project information necessary to evaluate your business requirements and reply to your inquiry.
              </p>
            </div>
          </div>

          {/* Document Content Sections */}
          <div className="space-y-10 text-sm text-text-secondary leading-relaxed">

            <section className="space-y-3 p-6 rounded-2xl bg-white border border-border-subtle">
              <h2 className="text-xl font-extrabold text-text-primary flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-primary" /> 1. Information We Collect
              </h2>
              <p>
                When you initiate an engineering inquiry on our website, we capture the following data fields:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-text-primary">
                <li><strong>Contact Identification:</strong> Full name, work email address, phone number, and company/organization name.</li>
                <li><strong>Project Briefing:</strong> Service scope requested (Website, Application, Automation, etc.) and your requirement description.</li>
                <li><strong>Technical Metadata:</strong> Standard web analytics (IP address, browser type, device category) to ensure website security and operational performance.</li>
              </ul>
            </section>

            <section className="space-y-3 p-6 rounded-2xl bg-white border border-border-subtle">
              <h2 className="text-xl font-extrabold text-text-primary flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-primary" /> 2. How We Use Your Information
              </h2>
              <p>
                Information submitted to AIsync Software Solutions is utilized exclusively for:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-text-primary">
                <li>Evaluating your system requirements and preparing custom technical proposals.</li>
                <li>Communicating directly regarding project scopes, timelines, and execution agreements.</li>
                <li>Internal quality control, security auditing, and lead management.</li>
              </ul>
            </section>

            <section className="space-y-3 p-6 rounded-2xl bg-white border border-border-subtle">
              <h2 className="text-xl font-extrabold text-text-primary flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-primary" /> 3. Data Storage & Security Controls
              </h2>
              <p>
                Your submitted inquiries are stored securely in protected databases and Google Enterprise Cloud services. We enforce strict HTTPS encryption in transit and rest restrictions to prevent unauthorized access.
              </p>
            </section>

            <section className="space-y-3 p-6 rounded-2xl bg-white border border-border-subtle">
              <h2 className="text-xl font-extrabold text-text-primary flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-primary" /> 4. Ownership & Data Protection Officer
              </h2>
              <p>
                You have the right to request access to, correction of, or complete deletion of your stored inquiry data at any time.
              </p>
              <div className="pt-2 text-xs font-mono text-text-primary space-y-1">
                <p><strong>Founder & CEO:</strong> Indranil Amar Sawant</p>
                <p><strong>Operating Entity:</strong> AIsync Software Solutions</p>
                <p><strong>Headquarters:</strong> Ratnagiri, Maharashtra, India</p>
                <p><strong>Direct Phone:</strong> +91 9975046416</p>
                <p><strong>Direct Email:</strong> indranilsawant07@gmail.com / contact@aisyncsolutions.com</p>
                <p><strong>Official Web Portal:</strong> https://aisyncsoftware.in</p>
              </div>
            </section>

          </div>

          <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
            <Link to="/terms" className="text-xs font-mono text-accent-primary font-bold hover:underline">
              View Terms of Service →
            </Link>
            <Link to="/contact" className="text-xs font-mono text-text-secondary hover:text-text-primary">
              Contact Engineering Leadership →
            </Link>
          </div>

        </div>
      </Container>
    </div>
  );
};
