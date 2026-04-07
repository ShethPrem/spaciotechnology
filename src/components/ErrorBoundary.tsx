import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-8">
          <div className="text-center max-w-md">
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Something went wrong</h1>
            <p className="text-muted-foreground font-body mb-6">We encountered an unexpected error. Please try refreshing the page.</p>
            <button
              onClick={() => { this.setState({ hasError: false }); window.location.href = '/'; }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-body font-semibold hover:opacity-90 transition-opacity"
            >
              Go to Homepage
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;