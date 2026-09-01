import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Send, CheckCircle } from 'lucide-react';

export const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceScope: 'Custom Software Engineering',
    timeline: 'Within 1-3 Months',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate interactive form dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-bg-surface1 border border-border-medium text-center space-y-4 max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-text-primary">
          Inquiry Transmitted Successfully
        </h3>
        <p className="text-xs text-text-secondary leading-relaxed">
          Thank you, <span className="text-text-primary font-medium">{formData.name}</span>. Our technical leadership team has received your project briefing and will review your requirements within 24 business hours.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                company: '',
                serviceScope: 'Custom Software Engineering',
                timeline: 'Within 1-3 Months',
                message: '',
              });
            }}
            className="text-xs font-mono text-accent-primary hover:underline"
          >
            Submit Additional Technical Scope
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-bg-surface1 border border-border-subtle space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-text-secondary uppercase tracking-wider block">
            Full Name <span className="text-accent-primary">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Alex Vance"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg bg-bg-primary border border-border-subtle focus:border-accent-primary text-text-primary text-sm focus:outline-none transition-colors"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-text-secondary uppercase tracking-wider block">
            Work Email <span className="text-accent-primary">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="alex@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg bg-bg-primary border border-border-subtle focus:border-accent-primary text-text-primary text-sm focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Company */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-text-secondary uppercase tracking-wider block">
            Organization / Company
          </label>
          <input
            type="text"
            placeholder="Aisync Partner Org"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg bg-bg-primary border border-border-subtle focus:border-accent-primary text-text-primary text-sm focus:outline-none transition-colors"
          />
        </div>

        {/* Target Service */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-text-secondary uppercase tracking-wider block">
            Primary Service Scope
          </label>
          <select
            value={formData.serviceScope}
            onChange={(e) => setFormData({ ...formData, serviceScope: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg bg-bg-primary border border-border-subtle focus:border-accent-primary text-text-primary text-sm focus:outline-none transition-colors"
          >
            <option>Custom Software Engineering</option>
            <option>Web Application Development</option>
            <option>Mobile Application Development</option>
            <option>AI & Machine Learning Engineering</option>
            <option>Cloud Infrastructure & DevOps</option>
            <option>Digital Product Design</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-xs font-mono text-text-secondary uppercase tracking-wider block">
          Project Brief & System Requirements <span className="text-accent-primary">*</span>
        </label>
        <textarea
          required
          rows={4}
          placeholder="Briefly describe your product goals, architectural constraints, target platform, and performance expectations..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg bg-bg-primary border border-border-subtle focus:border-accent-primary text-text-primary text-sm focus:outline-none transition-colors"
        />
      </div>

      <div className="pt-2 flex items-center justify-between">
        <span className="text-[11px] font-mono text-text-tertiary">
          🔒 Strict NDA & Client Privacy Protocol
        </span>
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={loading}
          icon={<Send className="w-4 h-4" />}
        >
          {loading ? 'Transmitting...' : 'Transmit Inquiry'}
        </Button>
      </div>
    </form>
  );
};
