import { Globe, Smartphone, Workflow, Database, Zap, CheckCircle2 } from 'lucide-react';

export const SystemConnectedDiagram: React.FC = () => {
  const nodes = [
    { id: 'web', label: 'Web Platform', sub: 'Credibility & Leads', icon: <Globe className="w-4 h-4 text-accent-primary" /> },
    { id: 'app', label: 'Mobile & Web App', sub: 'Custom Operations', icon: <Smartphone className="w-4 h-4 text-accent-primary" /> },
    { id: 'auto', label: 'Business Automation', sub: 'Zero Manual Work', icon: <Workflow className="w-4 h-4 text-accent-primary" /> },
    { id: 'data', label: 'Digital Records', sub: 'Centralized Data', icon: <Database className="w-4 h-4 text-accent-primary" /> },
  ];

  return (
    <div className="w-full rounded-2xl bg-white border border-border-medium p-6 sm:p-8 space-y-6 shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover-card-effect">
      
      {/* Diagram Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-accent-primary" />
          <span className="text-xs font-mono font-bold text-text-primary uppercase tracking-wider">
            Connected Digital System Architecture
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-semibold px-2.5 py-0.5 rounded bg-emerald-50 border border-emerald-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Active Sync
        </div>
      </div>

      {/* Central Hub Core */}
      <div className="p-4 rounded-xl bg-[#fbf9f5] border border-accent-primary/40 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-primary shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-text-primary block">
              AISYNC SYSTEM CORE
            </span>
            <span className="text-[11px] font-mono text-text-secondary">
              Synchronizing data across your business
            </span>
          </div>
        </div>
        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
      </div>

      {/* Connected 2x2 System Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="p-3.5 rounded-xl bg-white border border-border-subtle flex items-center gap-3 shadow-sm hover:border-accent-primary/40 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#f5f3ef] border border-border-subtle flex items-center justify-center shrink-0">
              {node.icon}
            </div>
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-text-primary block">
                {node.label}
              </span>
              <span className="text-[10px] font-mono text-text-tertiary block">
                {node.sub}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
