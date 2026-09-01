import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Send, CheckCircle } from 'lucide-react';

export const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceScope: 'Website Development',
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
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-border-medium text-center space-y-4 max-w-lg mx-auto shadow-sm">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle className="w-6 h-6" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
          Inquiry Received Successfully
        </h3>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
          Thank you, <span className="text-text-primary font-bold">{formData.name}</span>. We have received your project briefing and will get back to you within 24 business hours.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                company: '',
                serviceScope: 'Website Development',
                timeline: 'Within 1-3 Months',
                message: '',
              });
            }}
            className="text-xs font-mono text-accent-primary hover:underline font-semibold"
          >
            Submit Another Project Brief
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-white border border-border-medium space-y-6 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-text-secondary uppercase tracking-wider block font-bold">
            Full Name <span className="text-accent-primary">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Alex Vance"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-medium focus:border-accent-primary text-text-primary text-base sm:text-sm focus:outline-none transition-colors min-h-[44px]"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-text-secondary uppercase tracking-wider block font-bold">
            Work Email <span className="text-accent-primary">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="alex@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-medium focus:border-accent-primary text-text-primary text-base sm:text-sm focus:outline-none transition-colors min-h-[44px]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Company */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-text-secondary uppercase tracking-wider block font-bold">
            Organization / Company
          </label>
          <input
            type="text"
            placeholder="Your Company Name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-medium focus:border-accent-primary text-text-primary text-base sm:text-sm focus:outline-none transition-colors min-h-[44px]"
          />
        </div>

        {/* Target Service */}
        <div className="space-y-2">
          <label className="text-xs font-mono text-text-secondary uppercase tracking-wider block font-bold">
            Primary Service Scope
          </label>
          <select
            value={formData.serviceScope}
            onChange={(e) => setFormData({ ...formData, serviceScope: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-medium focus:border-accent-primary text-text-primary text-base sm:text-sm focus:outline-none transition-colors min-h-[44px]"
          >
            <option>Website Development</option>
            <option>Application Development</option>
            <option>Business Automation</option>
            <option>Digital Transformation</option>
            <option>Digital Marketing & Growth</option>
            <option>Technology Consulting</option>
            <option>Custom Business Solutions</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-xs font-mono text-text-secondary uppercase tracking-wider block font-bold">
          Project Brief & Challenge <span className="text-accent-primary">*</span>
        </label>
        <textarea
          required
          rows={4}
          placeholder="Tell us about your business goals, current bottlenecks, or what you are looking to build..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-medium focus:border-accent-primary text-text-primary text-base sm:text-sm focus:outline-none transition-colors"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[11px] font-mono text-text-tertiary text-center sm:text-left">
          🔒 Strict NDA & Confidentiality Protocol
        </span>
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={loading}
          className="w-full sm:w-auto min-h-[48px]"
          icon={<Send className="w-4 h-4" />}
        >
          {loading ? 'Submitting...' : 'Send Inquiry'}
        </Button>
      </div>
    </form>
  );
};
