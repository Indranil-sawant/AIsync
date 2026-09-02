import React from 'react';
import { Container } from '../components/common/Container';
import { InquiryForm } from '../components/contact/InquiryForm';
import { usePageSEO } from '../hooks/usePageSEO';
import { Mail, Clock, ShieldCheck, PhoneCall, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  usePageSEO({
    title: 'Contact Us | AiSync Software Solutions — Ratnagiri',
    description: 'Contact AiSync Software Solutions in Ratnagiri, Maharashtra. Schedule a technical consultation for custom software and web development projects.',
    canonicalPath: '/contact',
  });

  return (
    <div className="pt-28 pb-16 bg-bg-primary min-h-screen">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-bold">
                Direct Communication Channel
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary">
                Initiate an Engineering Consultation
              </h1>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Connect directly with our engineering leadership under Founder <strong className="text-text-primary">Indranil Amar Sawant</strong> to review your system requirements, technical scope, and product timeline.
              </p>
            </div>

            <div className="space-y-3.5 pt-4 border-t border-border-subtle">
              {/* Direct Phone */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-bg-surface1 border border-border-subtle flex items-center justify-center text-accent-primary shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-text-tertiary uppercase block">Direct Phone & WhatsApp</span>
                  <a href="tel:+919975046416" className="text-xs sm:text-sm font-bold text-text-primary hover:text-accent-primary transition-colors">
                    +91 9975046416
                  </a>
                </div>
              </div>

              {/* Direct Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-bg-surface1 border border-border-subtle flex items-center justify-center text-accent-primary shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-text-tertiary uppercase block">Technical Inbox</span>
                  <a href="mailto:indranilsawant07@gmail.com" className="text-xs sm:text-sm font-bold text-text-primary hover:text-accent-primary transition-colors">
                    indranilsawant07@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-bg-surface1 border border-border-subtle flex items-center justify-center text-accent-primary shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-text-tertiary uppercase block">Headquarters</span>
                  <span className="text-xs sm:text-sm font-bold text-text-primary">Ratnagiri, Maharashtra, India</span>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-bg-surface1 border border-border-subtle flex items-center justify-center text-accent-primary shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-text-tertiary uppercase block">Response Protocol</span>
                  <span className="text-xs sm:text-sm font-medium text-text-primary">Within 24 Business Hours</span>
                </div>
              </div>

              {/* NDA Security */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-bg-surface1 border border-border-subtle flex items-center justify-center text-accent-primary shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-text-tertiary uppercase block">Confidentiality</span>
                  <span className="text-xs sm:text-sm font-medium text-text-primary">Standard NDA Executed on Request</span>
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
