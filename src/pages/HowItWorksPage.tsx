import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';

const HowItWorksPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="pt-24">
      <div className="container-main py-12 text-center">
        <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-3">Getting started</p>
        <h1 className="heading-display mb-4">How Spacio <span className="italic-accent">works</span></h1>
        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">From searching to moving in — booking a workspace has never been this simple.</p>
      </div>
    </div>
    <HowItWorks />
    <Footer />
  </div>
);

export default HowItWorksPage;