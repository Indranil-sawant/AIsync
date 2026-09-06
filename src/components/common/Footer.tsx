import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-surface1 border-t border-border-subtle pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-border-subtle">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center group focus:outline-none focus:ring-2 focus:ring-accent-primary/40 rounded-lg"
              aria-label="AiSync Software Solutions Home"
            >
              <BrandLogo variant="horizontal" size="md" />
            </Link>
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              Custom software development, web applications, responsive websites, and automated digital systems for modern businesses in Ratnagiri, Maharashtra.
            </p>
            
            <div className="space-y-1.5 pt-1 text-xs text-text-secondary font-mono">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent-primary" />
                <a href="tel:+919975046416" className="hover:text-text-primary transition-colors">+91 9975046416</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent-primary" />
                <a href="mailto:contact@aisyncsoftware.in" className="hover:text-text-primary transition-colors">contact@aisyncsoftware.in</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent-primary" />
                <span>Ratnagiri, Maharashtra, India</span>
              </div>
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
              <li><Link to="/privacy" className="hover:text-text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-text-primary transition-colors">Terms of Service</Link></li>
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
              className="inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:text-accent-hover transition-colors"
            >
              Start a Conversation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-tertiary gap-4">
          <p>© {currentYear} AiSync Software Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-text-secondary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-text-secondary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
