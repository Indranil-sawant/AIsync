import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fcfbf8]/90 backdrop-blur-md border-b border-border-subtle py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group select-none">
            <div className="w-9 h-9 rounded-xl bg-white border border-border-medium flex items-center justify-center text-accent-primary group-hover:border-accent-primary transition-colors shadow-sm">
              <Cpu className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-base font-bold tracking-tight text-text-primary group-hover:text-accent-primary transition-colors">
                AISYNC<span className="text-accent-primary">.</span>
              </span>
              <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest -mt-1">
                SOFTWARE SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive ? 'text-text-primary font-semibold' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button to="/contact" variant="primary" size="sm" icon={<ArrowUpRight className="w-4 h-4" />}>
              Initiate Project
            </Button>
          </div>

          {/* Mobile Menu Toggle (44px x 44px Touch Target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-xl bg-white border border-border-subtle text-text-secondary hover:text-text-primary active:bg-bg-surface2 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 flex items-center justify-center shadow-sm select-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border-subtle bg-white/98 backdrop-blur-xl px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-1">
            <Link
              to="/"
              className={`text-base font-semibold py-3 px-4 rounded-xl min-h-[44px] flex items-center transition-colors ${
                location.pathname === '/' 
                  ? 'bg-accent-primary/10 text-accent-primary font-bold' 
                  : 'text-text-primary hover:bg-bg-surface2'
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-semibold py-3 px-4 rounded-xl min-h-[44px] flex items-center transition-colors ${
                  location.pathname === link.path 
                    ? 'bg-accent-primary/10 text-accent-primary font-bold' 
                    : 'text-text-primary hover:bg-bg-surface2'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-border-subtle">
            <Button to="/contact" variant="primary" size="md" className="w-full min-h-[48px]" icon={<ArrowUpRight className="w-4 h-4" />}>
              Initiate Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
