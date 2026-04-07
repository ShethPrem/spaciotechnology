import { X } from 'lucide-react';
import { useState } from 'react';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal = ({ open, onClose }: LoginModalProps) => {
  const [isSignup, setIsSignup] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-card rounded-2xl border border-border p-8 w-full max-w-md mx-4 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X size={20} />
        </button>
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
          {isSignup ? 'Create Account' : 'Welcome Back'}
        </h2>
        <p className="text-muted-foreground font-body text-sm mb-6">
          {isSignup ? 'Sign up to start booking workspaces' : 'Log in to your Spacio account'}
        </p>
        <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-4">
          {isSignup && (
            <div>
              <label className="text-sm font-body font-semibold text-foreground mb-2 block">Full Name</label>
              <input type="text" placeholder="Your name" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body placeholder:text-muted-foreground" />
            </div>
          )}
          <div>
            <label className="text-sm font-body font-semibold text-foreground mb-2 block">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body placeholder:text-muted-foreground" />
          </div>
          <div>
            <label className="text-sm font-body font-semibold text-foreground mb-2 block">Password</label>
            <input type="password" placeholder="••••••••" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body placeholder:text-muted-foreground" />
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-body font-semibold text-sm hover:opacity-90 transition-opacity">
            {isSignup ? 'Sign Up' : 'Log In'}
          </button>
        </form>
        <p className="text-center text-sm font-body text-muted-foreground mt-6">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button onClick={() => setIsSignup(!isSignup)} className="text-primary font-semibold hover:underline">
            {isSignup ? 'Log in' : 'Sign up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;