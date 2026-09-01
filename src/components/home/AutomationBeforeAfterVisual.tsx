import React, { useState } from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export const AutomationBeforeAfterVisual: React.FC = () => {
  const [viewMode, setViewMode] = useState<'after' | 'before'>('after');

  return (
    <div className="p-8 rounded-2xl bg-bg-surface1 border border-border-medium space-y-6 shadow-2xl">
      {/* Mode Switcher Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border-subtle">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-accent-primary font-semibold block">
            Visual Comparison
          </span>
          <h3 className="text-xl font-bold text-text-primary">
            Manual vs. Automated Workflow
          </h3>
        </div>

        {/* Toggle Buttons */}
        <div className="flex items-center gap-2 bg-bg-primary p-1 rounded-xl border border-border-subtle">
          <button
            onClick={() => setViewMode('before')}
            className={`text-xs font-mono px-3.5 py-1.5 rounded-lg transition-all ${
              viewMode === 'before'
                ? 'bg-rose-100 text-rose-800 border border-rose-300 font-bold'
                : 'text-text-tertiary hover:text-text-primary'
            }`}
          >
            BEFORE (Manual Chaos)
          </button>
          <button
            onClick={() => setViewMode('after')}
            className={`text-xs font-mono px-3.5 py-1.5 rounded-lg transition-all ${
              viewMode === 'after'
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold'
                : 'text-text-tertiary hover:text-text-primary'
            }`}
          >
            AFTER (Automated Flow)
          </button>
        </div>
      </div>

      {/* Dynamic Flow View */}
      {viewMode === 'before' ? (
        <div className="p-6 rounded-xl bg-bg-primary border border-rose-300 space-y-4">
          <div className="flex items-center gap-2 text-rose-700 text-xs font-mono font-bold">
            <XCircle className="w-4 h-4 text-rose-600" /> BEFORE: Disconnected Manual Bottlenecks
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center text-center text-xs font-mono text-text-secondary">
            <div className="p-3 rounded bg-bg-surface1 border border-border-subtle">Website Form</div>
            <div className="text-rose-600 font-semibold">↓ Manual Copy</div>
            <div className="p-3 rounded bg-bg-surface1 border border-border-subtle">WhatsApp Group</div>
            <div className="text-rose-600 font-semibold">↓ Spreadsheet Paste</div>
            <div className="p-3 rounded bg-bg-surface1 border border-border-subtle">Delayed Manual Email</div>
          </div>

          <p className="text-xs text-rose-800 italic pt-2">
            ⚠️ Problem: High risk of lost inquiries, delayed follow-up, and staff spending hours on repetitive typing.
          </p>
        </div>
      ) : (
        <div className="p-6 rounded-xl bg-bg-primary border border-emerald-300 space-y-4">
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> AFTER: Instant Automated Pipeline
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center text-center text-xs font-mono text-text-primary">
            <div className="p-3 rounded bg-emerald-50 border border-emerald-200 font-medium">Website Inquiry</div>
            <div className="text-accent-primary font-bold">⚡ Instant Trigger</div>
            <div className="p-3 rounded bg-accent-primary/10 border border-accent-primary/30 font-medium">Central System</div>
            <div className="text-accent-primary font-bold">⚡ Auto-Notify</div>
            <div className="p-3 rounded bg-emerald-50 border border-emerald-200 font-medium">Automatic Follow-Up</div>
          </div>

          <p className="text-xs text-emerald-800 italic pt-2">
            ✓ Result: Inquiries captured instantly, zero manual copy-pasting, and instant response to customers 24/7.
          </p>
        </div>
      )}
    </div>
  );
};
