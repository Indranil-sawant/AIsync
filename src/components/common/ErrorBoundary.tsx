import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught component error in ErrorBoundary:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#fcfbf9] text-[#1c1917] flex items-center justify-center p-6 antialiased">
          <div className="max-w-md w-full p-8 rounded-3xl bg-white border border-[rgba(0,0,0,0.12)] shadow-xl text-center space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-[#f5f3ef] border border-[rgba(0,0,0,0.08)] flex items-center justify-center mx-auto text-[#4f46e5] font-mono text-xl font-bold">
              !
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#4f46e5] font-bold">
                System Recovered
              </span>
              <h2 className="text-2xl font-black text-[#1c1917] tracking-tight">
                An unexpected error occurred
              </h2>
              <p className="text-xs text-[#57534e] leading-relaxed">
                The application encountered an unexpected render issue. You can safely refresh the view to restore the interface.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#4f46e5] text-white font-bold text-xs hover:bg-[#4338ca] transition-colors shadow-sm select-none"
              >
                Reload Page
              </button>
              <a
                href="/"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-[rgba(0,0,0,0.15)] text-[#1c1917] font-semibold text-xs hover:bg-[#f5f3ef] transition-colors select-none"
              >
                Return to Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
