import React from 'react';
import { Container } from '../components/common/Container';
import { Button } from '../components/ui/Button';
import { usePageSEO } from '../hooks/usePageSEO';
import { Terminal, Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  usePageSEO({
    title: 'Page Not Found | AiSync Software Solutions',
    description: 'The requested page could not be found on AiSync Software Solutions.',
    canonicalPath: '/404',
    noIndex: true,
  });

  return (
    <div className="pt-36 pb-24 bg-bg-primary min-h-[85vh] flex items-center justify-center">
      <Container>
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-bg-surface1 border border-border-medium flex items-center justify-center text-accent-primary mx-auto">
            <Terminal className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono text-accent-primary uppercase tracking-widest">
              Error 404 — Route Not Found
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-text-primary">
              Target Vector Undefined
            </h1>
            <p className="text-xs font-mono text-text-tertiary">
              The requested URL path does not exist in the application router matrix.
            </p>
          </div>
          <div className="pt-2 flex justify-center gap-3">
            <Button to="/" variant="primary" size="sm" icon={<Home className="w-4 h-4" />}>
              Return Home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
