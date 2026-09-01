import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const BusinessFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How much does a website or custom software system cost?',
      a: 'Cost depends on the scope of what your business needs. Simple business websites are very affordable, while custom application systems or automation pipelines are quoted based on specific features. We always provide a clear, fixed upfront quote before any work begins.'
    },
    {
      q: 'How long does it take to build a website or application?',
      a: 'A standard business website typically takes 2 to 4 weeks. Custom applications or business automation systems usually take 4 to 8 weeks depending on complexity.'
    },
    {
      q: 'We don\'t know what technology we need. Can you help us figure it out?',
      a: 'Yes! That is one of our primary services. You describe your business goals and current challenges in plain language, and we will help you evaluate practical, affordable options.'
    },
    {
      q: 'Can you automate our existing manual spreadsheets and emails?',
      a: 'Absolutely. In most cases, we connect the software tools you already use so information flows automatically without your team needing to copy data manually.'
    },
    {
      q: 'Can you work with or upgrade our existing website?',
      a: 'Yes. We can either redesign your current website to look modern and work better, or build a new site using modern fast components.'
    },
    {
      q: 'Do you provide support and maintenance after launch?',
      a: 'Yes. We provide ongoing support, security updates, and maintenance plans so your business system runs smoothly without interruption.'
    }
  ];

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.q}
            className="rounded-xl bg-bg-surface1 border border-border-subtle overflow-hidden transition-colors hover:border-border-medium"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-text-primary hover:text-accent-primary transition-colors"
            >
              <span className="flex items-center gap-3 pr-4">
                <HelpCircle className="w-4 h-4 text-accent-primary shrink-0" />
                {faq.q}
              </span>
              {isOpen ? (
                <ChevronUp className="w-4 h-4 text-accent-primary shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-text-tertiary shrink-0" />
              )}
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border-subtle/60">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
