import React from 'react';
import { Container } from '../components/common/Container';
import { InquiryForm } from '../components/contact/InquiryForm';
import { Mail, Clock, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-bg-primary min-h-screen">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold">
                Direct Communication Channel
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-text-primary">
                Initiate an Engineering Consultation
              </h1>
              <p className="text-sm text-text-secondary leading-relaxed">
                Connect directly with our engineering leadership to review your system requirements, technical scope, and product timeline.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-border-subtle">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-bg-surface1 border border-border-subtle flex items-center justify-center text-accent-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-text-tertiary uppercase block">Direct Technical Inbox</span>
                  <span className="text-sm font-medium text-text-primary">contact@aisyncsolutions.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-bg-surface1 border border-border-subtle flex items-center justify-center text-accent-primary">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-text-tertiary uppercase block">Response Protocol</span>
                  <span className="text-sm font-medium text-text-primary">Within 24 Business Hours</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-bg-surface1 border border-border-subtle flex items-center justify-center text-accent-primary">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-text-tertiary uppercase block">Confidentiality</span>
                  <span className="text-sm font-medium text-text-primary">Standard NDA Executed on Request</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </Container>
    </div>
  );
};
