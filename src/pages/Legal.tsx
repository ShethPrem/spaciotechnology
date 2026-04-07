import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const LegalPage = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="pt-24 pb-20">
      <div className="container-main max-w-3xl pt-8">
        <Link to="/" className="text-primary font-body text-sm font-semibold hover:underline mb-6 block">← Back to Home</Link>
        <h1 className="heading-section mb-8">{title}</h1>
        <div className="prose prose-sm max-w-none font-body text-foreground/80 space-y-6">{children}</div>
      </div>
    </div>
    <Footer />
  </div>
);

export const Terms = () => (
  <LegalPage title="Terms of Service">
    <p className="text-muted-foreground text-sm">Last updated: April 1, 2026</p>
    <div className="space-y-6">
      <section><h2 className="font-heading text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2><p className="text-foreground/70 font-body leading-relaxed">By accessing or using Spacio's platform, you agree to be bound by these Terms of Service.</p></section>
      <section><h2 className="font-heading text-xl font-bold text-foreground mb-3">2. Description of Service</h2><p className="text-foreground/70 font-body leading-relaxed">Spacio provides an online platform for discovering, comparing, and booking workspaces across India.</p></section>
      <section><h2 className="font-heading text-xl font-bold text-foreground mb-3">3. Booking and Payments</h2><p className="text-foreground/70 font-body leading-relaxed">All bookings are subject to availability. Prices displayed are exclusive of GST (18%) unless stated otherwise.</p></section>
    </div>
  </LegalPage>
);

export const Privacy = () => (
  <LegalPage title="Privacy Policy">
    <p className="text-muted-foreground text-sm">Last updated: April 1, 2026</p>
    <div className="space-y-6">
      <section><h2 className="font-heading text-xl font-bold text-foreground mb-3">1. Information We Collect</h2><p className="text-foreground/70 font-body leading-relaxed">We collect personal information you provide, usage data, and device information.</p></section>
      <section><h2 className="font-heading text-xl font-bold text-foreground mb-3">2. Data Security</h2><p className="text-foreground/70 font-body leading-relaxed">We use 256-bit SSL encryption and follow industry-standard security practices.</p></section>
    </div>
  </LegalPage>
);

export const Refund = () => (
  <LegalPage title="Refund Policy">
    <p className="text-muted-foreground text-sm">Last updated: April 1, 2026</p>
    <div className="space-y-6">
      <section><h2 className="font-heading text-xl font-bold text-foreground mb-3">1. Cancellation Timeline</h2><p className="text-foreground/70 font-body leading-relaxed">48+ hours before: Full refund. 24–48 hours: 50% refund. Less than 24 hours: No refund.</p></section>
    </div>
  </LegalPage>
);

export const Cookies = () => (
  <LegalPage title="Cookie Policy">
    <p className="text-muted-foreground text-sm">Last updated: April 1, 2026</p>
    <div className="space-y-6">
      <section><h2 className="font-heading text-xl font-bold text-foreground mb-3">1. What Are Cookies</h2><p className="text-foreground/70 font-body leading-relaxed">Cookies are small text files stored on your device when you visit our website.</p></section>
    </div>
  </LegalPage>
);