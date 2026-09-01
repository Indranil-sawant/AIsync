import { Lock } from 'lucide-react';

interface CaseStudyItem {
  id: string;
  category: string;
  title: string;
  clientPlaceholder: string;
  summary: string;
  metrics: string[];
  techStack: string[];
  imageUrl: string;
}

export const CaseStudyGrid: React.FC = () => {
  const caseStudies: CaseStudyItem[] = [
    {
      id: 'cs-01',
      category: 'Fintech & Systems',
      title: 'High-Throughput Distributed Microservice Architecture',
      clientPlaceholder: '[Validated Client Partner TBD]',
      summary: 'Re-architected core transaction logic to process concurrent financial streams with low latency and zero memory leaks.',
      metrics: ['[Validated Metric TBD]', 'Sub-50ms Latency', 'Zero Memory Drift'],
      techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'cs-02',
      category: 'Intelligence & Automation',
      title: 'Enterprise Autonomous AI Agent & RAG Pipeline',
      clientPlaceholder: '[Validated Client Partner TBD]',
      summary: 'Engineered an internal document search and reasoning engine using vector embeddings, deterministic guardrails, and role-based permissions.',
      metrics: ['[Validated Metric TBD]', 'Strict Data Isolation', 'Multi-Tenant RAG'],
      techStack: ['Python', 'Pgvector', 'React', 'TypeScript'],
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'cs-03',
      category: 'Cloud Infrastructure',
      title: 'Multi-Region Kubernetes & Infrastructure Automation',
      clientPlaceholder: '[Validated Client Partner TBD]',
      summary: 'Designed IaC modules for multi-region failover, container orchestration, and continuous telemetry monitoring.',
      metrics: ['[Validated Metric TBD]', 'SOC2 Audit Ready', 'Automated Failover'],
      techStack: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {caseStudies.map((study) => (
        <div
          key={study.id}
          className="group rounded-2xl bg-white border border-border-medium hover-card-effect flex flex-col justify-between overflow-hidden shadow-sm"
        >
          {/* Visual Header Image */}
          <div className="h-52 bg-bg-surface2 border-b border-border-subtle relative overflow-hidden">
            <img
              src={study.imageUrl}
              alt={study.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-accent-primary font-bold shadow-sm">
                {study.category}
              </span>
              <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white">
                <Lock className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-10 space-y-0.5">
              <span className="text-[10px] font-mono text-stone-300">
                {study.clientPlaceholder}
              </span>
              <h3 className="text-base font-bold text-white line-clamp-1">
                {study.title}
              </h3>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {study.summary}
            </p>

            <div className="space-y-4">
              {/* Metrics */}
              <div className="space-y-1.5 pt-4 border-t border-border-subtle">
                <span className="text-[10px] font-mono uppercase text-text-tertiary tracking-wider font-bold">
                  Validated Metrics
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {study.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-[#f5f3ef] text-text-primary border border-border-subtle"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1">
                {study.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-surface2 text-text-tertiary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
