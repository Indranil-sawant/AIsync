import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { Cpu, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-surface1 border-t border-border-subtle pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-border-subtle">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-bg-surface2 border border-border-medium flex items-center justify-center text-accent-primary">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-mono text-base font-bold tracking-tight text-text-primary">
                AISYNC<span className="text-accent-primary">.</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              We build websites, applications, automated workflows, and digital systems to help your business work better and grow.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-surface2 border border-border-subtle text-xs font-mono text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Operational Status: Ready for Inquiries
            </div>
          </div>

          {/* Solutions Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-tertiary font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/services" className="hover:text-text-primary transition-colors">Website Development</Link></li>
              <li><Link to="/services" className="hover:text-text-primary transition-colors">Application Development</Link></li>
              <li><Link to="/services" className="hover:text-text-primary transition-colors">Business Automation</Link></li>
              <li><Link to="/services" className="hover:text-text-primary transition-colors">Take Your Business Digital</Link></li>
              <li><Link to="/services" className="hover:text-text-primary transition-colors">Digital Marketing & Growth</Link></li>
              <li><Link to="/services" className="hover:text-text-primary transition-colors">Technology Consulting</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-tertiary font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/about" className="hover:text-text-primary transition-colors">About Us</Link></li>
              <li><Link to="/work" className="hover:text-text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-tertiary font-semibold">Inquiries</h4>
            <p className="text-sm text-text-secondary">
              Have a problem in your business? Let's talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:text-white transition-colors"
            >
              Start a Conversation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-tertiary gap-4">
          <p>© {currentYear} Aisync Software Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-text-secondary transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-text-secondary transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
