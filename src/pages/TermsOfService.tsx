import React from 'react';
import { Container } from '../components/common/Container';
import { usePageSEO } from '../hooks/usePageSEO';
import { ShieldCheck, FileCheck, Code2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsOfService: React.FC = () => {
  usePageSEO({
    title: 'Terms of Service & Project Governance — AIsync Software Solutions',
    description: 'Commercial terms of service, intellectual property assignments, client warranties, and project execution policies of AIsync Software Solutions.',
    canonicalPath: '/terms',
  });

  return (
    <div className="pt-32 pb-24 bg-bg-primary min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="space-y-4 pb-8 border-b border-border-subtle">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold px-3 py-1 rounded bg-[#f5f3ef] border border-border-subtle">
                Commercial Operating Terms
              </span>
              <span className="text-xs font-mono text-text-tertiary">Effective Date: January 1, 2026</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-text-primary">
              Terms of Service & Project Execution
            </h1>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              These Terms of Service govern the access to and commercial engagement with <strong className="text-text-primary">AIsync Software Solutions</strong> (founded and operated by <strong className="text-text-primary">Indranil Amar Sawant</strong>, Ratnagiri, Maharashtra, India).
            </p>
          </div>

          {/* Key Principles Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-border-medium space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-accent-primary/10 text-accent-primary flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Intellectual Property</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Upon full settlement of commercial milestone invoices, full operational ownership and code rights transfer to the client.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border-medium space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Scope Integrity</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Projects are executed under defined technical Statement of Work (SOW) documents with clear deliverables and milestones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border-medium space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Confidentiality</h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Strict bilateral non-disclosure provisions protect both proprietary client business algorithms and engineering trade secrets.
              </p>
            </div>
          </div>

          {/* Detailed Terms Sections */}
          <div className="space-y-10 text-sm text-text-secondary leading-relaxed">

            <section className="space-y-3 p-6 rounded-2xl bg-white border border-border-subtle">
              <h2 className="text-xl font-extrabold text-text-primary flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-primary" /> 1. Services Scope & Proposals
              </h2>
              <p>
                AIsync Software Solutions provides digital product engineering, custom application development, business process automation, SEO search architecture, and technical consulting. All services are governed by formal project proposals and written Statements of Work (SOW).
              </p>
            </section>

            <section className="space-y-3 p-6 rounded-2xl bg-white border border-border-subtle">
              <h2 className="text-xl font-extrabold text-text-primary flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-primary" /> 2. Proprietary Ownership & Code Transfer
              </h2>
              <p>
                All custom software, codebases, database schemas, and digital branding assets developed by AIsync Software Solutions for a client become the exclusive property of the client upon final payment receipt, subject to standard open-source dependency licenses.
              </p>
            </section>

            <section className="space-y-3 p-6 rounded-2xl bg-white border border-border-subtle">
              <h2 className="text-xl font-extrabold text-text-primary flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-primary" /> 3. Commercial Warranty & Maintenance
              </h2>
              <p>
                Unless specified otherwise in an executed SLA agreement, custom development deliverables include a 30-day operational bug-fix warranty post-deployment to ensure system stability.
              </p>
            </section>

            <section className="space-y-3 p-6 rounded-2xl bg-white border border-border-subtle">
              <h2 className="text-xl font-extrabold text-text-primary flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-primary" /> 4. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any legal proceedings or disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Ratnagiri, Maharashtra, India.
              </p>
              <div className="pt-2 text-xs font-mono text-text-primary space-y-1">
                <p><strong>Legal Entity Founder:</strong> Indranil Amar Sawant</p>
                <p><strong>Operating Firm:</strong> AIsync Software Solutions</p>
                <p><strong>Headquarters:</strong> Ratnagiri, Maharashtra, India</p>
                <p><strong>Direct Phone:</strong> +91 9975046416</p>
                <p><strong>Direct Inbox:</strong> indranilsawant07@gmail.com / contact@aisyncsolutions.com</p>
              </div>
            </section>

          </div>

          <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
            <Link to="/privacy" className="text-xs font-mono text-accent-primary font-bold hover:underline">
              ← View Privacy Policy
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
