import React, { useState } from 'react';
import { LayoutDashboard, Users, CheckSquare, BarChart3, Clock, CheckCircle } from 'lucide-react';

export const AppDashboardVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'records' | 'tasks' | 'reports'>('dashboard');

  return (
    <div className="rounded-2xl bg-bg-surface1 border border-border-medium overflow-hidden shadow-2xl space-y-0">
      {/* App Top Bar */}
      <div className="px-6 py-3 bg-bg-primary border-b border-border-subtle flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-accent-primary" />
          <span className="text-xs font-mono font-bold text-text-primary">
            CUSTOM BUSINESS SYSTEM [DEMO]
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-text-tertiary">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          Live Connection
        </div>
      </div>

      {/* App Body Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
        {/* Sidebar Nav */}
        <div className="md:col-span-3 bg-bg-primary/60 border-r border-border-subtle p-4 space-y-2">
          <span className="text-[10px] font-mono uppercase text-text-tertiary tracking-wider block font-semibold mb-2">
            Modules
          </span>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono transition-colors ${activeTab === 'dashboard' ? 'bg-accent-primary text-white font-semibold' : 'text-text-secondary hover:text-text-primary'}`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" /> Dashboard
          </button>
          <button
            onClick={() => setActiveTab('records')}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono transition-colors ${activeTab === 'records' ? 'bg-accent-primary text-white font-semibold' : 'text-text-secondary hover:text-text-primary'}`}
          >
            <Users className="w-3.5 h-3.5" /> Client Records
          </button>
          <button
            onClick={() => setActiveTab('tasks')}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono transition-colors ${activeTab === 'tasks' ? 'bg-accent-primary text-white font-semibold' : 'text-text-secondary hover:text-text-primary'}`}
          >
            <CheckSquare className="w-3.5 h-3.5" /> Active Tasks
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono transition-colors ${activeTab === 'reports' ? 'bg-accent-primary text-white font-semibold' : 'text-text-secondary hover:text-text-primary'}`}
          >
            <BarChart3 className="w-3.5 h-3.5" /> Reports
          </button>
        </div>

        {/* Dynamic Tab Screen View */}
        <div className="md:col-span-9 p-6 bg-bg-surface1 space-y-4">
          {activeTab === 'dashboard' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-text-primary">Operational Overview</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-surface2 text-text-tertiary">Real-time</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-bg-primary border border-border-subtle space-y-1">
                  <span className="text-[10px] font-mono text-text-tertiary block">Active Projects</span>
                  <span className="text-lg font-bold text-text-primary">12</span>
                </div>
                <div className="p-3 rounded-lg bg-bg-primary border border-border-subtle space-y-1">
                  <span className="text-[10px] font-mono text-text-tertiary block">Pending Actions</span>
                  <span className="text-lg font-bold text-amber-400">4</span>
                </div>
                <div className="p-3 rounded-lg bg-bg-primary border border-border-subtle space-y-1">
                  <span className="text-[10px] font-mono text-text-tertiary block">Completed</span>
                  <span className="text-lg font-bold text-emerald-400">128</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'records' && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-text-primary">Client & Lead Directory</h4>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-bg-primary border border-border-subtle flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-text-primary block">[Demo Client Organization A]</span>
                    <span className="text-[10px] font-mono text-text-tertiary">Contract Status: Active</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Verified</span>
                </div>
                <div className="p-3 rounded-lg bg-bg-primary border border-border-subtle flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-text-primary block">[Demo Client Organization B]</span>
                    <span className="text-[10px] font-mono text-text-tertiary">Inquiry Date: Today</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-primary/10 text-accent-primary border border-accent-primary/20">New Lead</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tasks' && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-text-primary">Internal Team Workflows</h4>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded bg-bg-primary border border-border-subtle flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-text-secondary">Generate Weekly Client Progress Report</span>
                </div>
                <div className="p-2.5 rounded bg-bg-primary border border-border-subtle flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-text-primary">Review Automated Invoice Dispatch</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-text-primary">Business Intelligence Summary</h4>
              <p className="text-xs text-text-secondary">
                Custom reports compiled automatically from your daily business activities without manual data extraction.
              </p>
              <div className="h-20 rounded bg-bg-primary border border-border-subtle flex items-end p-2 gap-2 justify-between">
                <div className="w-full bg-accent-primary/30 h-1/3 rounded-t" />
                <div className="w-full bg-accent-primary/50 h-2/3 rounded-t" />
                <div className="w-full bg-accent-primary h-full rounded-t" />
                <div className="w-full bg-accent-primary/80 h-3/4 rounded-t" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
