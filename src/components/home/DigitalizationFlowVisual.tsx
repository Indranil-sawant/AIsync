import { FileText, FileSpreadsheet, Layers, ShieldCheck } from 'lucide-react';

export const DigitalizationFlowVisual: React.FC = () => {
  const stages = [
    {
      step: '01',
      title: 'Paper Records & Files',
      status: 'Legacy / Manual',
      desc: 'Physical file folders, handwritten notes, and lost receipts.',
      icon: <FileText className="w-5 h-5 text-amber-400" />,
    },
    {
      step: '02',
      title: 'Scattered Spreadsheets',
      status: 'Unstructured',
      desc: 'Multiple versions of Excel files emailed across team members.',
      icon: <FileSpreadsheet className="w-5 h-5 text-yellow-400" />,
    },
    {
      step: '03',
      title: 'Disconnected Messaging',
      status: 'Fragmented',
      desc: 'Important customer communications buried in WhatsApp groups.',
      icon: <Layers className="w-5 h-5 text-blue-400" />,
    },
    {
      step: '04',
      title: 'Organized Digital Platform',
      status: 'Aisync System',
      desc: 'Centralized cloud portal with instant search, backups, and role-based permissions.',
      icon: <ShieldCheck className="w-5 h-5 text-accent-primary" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stages.map((st, index) => (
        <div
          key={st.step}
          className={`p-6 rounded-xl border flex flex-col justify-between space-y-4 transition-all ${
            index === 3
              ? 'bg-bg-surface1 border-accent-primary shadow-[0_0_30px_rgba(99,102,241,0.15)]'
              : 'bg-bg-primary border-border-subtle hover:border-border-medium'
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-text-tertiary">{st.step}</span>
              <div className="w-9 h-9 rounded-lg bg-bg-surface2 flex items-center justify-center border border-border-subtle">
                {st.icon}
              </div>
            </div>
            <h4 className="text-sm font-bold text-text-primary">{st.title}</h4>
            <span
              className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded border ${
                index === 3
                  ? 'bg-accent-primary/10 text-accent-primary border-accent-primary/30 font-semibold'
                  : 'bg-bg-surface2 text-text-tertiary border-border-subtle'
              }`}
            >
              {st.status}
            </span>
            <p className="text-xs text-text-secondary leading-relaxed">{st.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
