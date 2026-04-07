import { Check } from 'lucide-react';
import { pricingPlans } from '@/data/listings';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  const safePlans = Array.isArray(pricingPlans) ? pricingPlans : [];

  if (safePlans.length === 0) return null;

  const handlePlanClick = (planName: string) => {
    if (planName === 'Enterprise') {
      navigate('/contact');
    } else {
      navigate('/payment', {
        state: {
          spaceName: `${planName} Plan`,
          mode: 'plan',
          duration: planName === 'Starter' ? '1 month' : '1 month',
          total: planName === 'Starter' ? 499 : 1999,
          serviceFee: 0,
          gst: Math.round((planName === 'Starter' ? 499 : 1999) * 0.18),
          grandTotal: planName === 'Starter' ? Math.round(499 * 1.18) : Math.round(1999 * 1.18),
        },
      });
    }
  };

  return (
    <section id="pricing-section" className="py-20 md:py-28 section-dark">
      <div className="container-main">
        <div className="text-center mb-14">
          <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-3">Simple pricing</p>
          <h2 className="heading-section text-surface-dark-foreground">Plans for every <span className="italic-accent">team</span></h2>
          <p className="text-surface-dark-foreground/50 font-body mt-4 max-w-xl mx-auto">
            Whether you're a solo freelancer or a growing enterprise, we have a plan that fits. All prices exclusive of GST.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {safePlans.map((plan) => {
            if (!plan?.name) return null;
            return (
              <div key={plan.name} className={`rounded-2xl p-8 border ${plan.highlighted ? 'bg-primary border-primary text-primary-foreground relative' : 'bg-surface-dark-muted/20 border-surface-dark-muted/30 text-surface-dark-foreground'}`}>
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-body font-semibold px-4 py-1 rounded-full">Most Popular</div>
                )}
                <h3 className="font-heading text-xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm font-body mb-6 ${plan.highlighted ? 'text-primary-foreground/70' : 'text-surface-dark-foreground/50'}`}>{plan.description || ''}</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="font-heading text-4xl font-bold">{plan.price || ''}</span>
                  <span className={`text-sm font-body ${plan.highlighted ? 'text-primary-foreground/70' : 'text-surface-dark-foreground/50'}`}>{plan.period || ''}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {(plan.features || []).map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm font-body">
                      <Check size={16} className={`shrink-0 mt-0.5 ${plan.highlighted ? 'text-primary-foreground' : 'text-primary'}`} />
                      <span className={plan.highlighted ? 'text-primary-foreground/90' : 'text-surface-dark-foreground/70'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePlanClick(plan.name)}
                  className={`block w-full text-center py-3 rounded-xl font-body font-semibold text-sm transition-all ${plan.highlighted ? 'bg-surface-dark text-surface-dark-foreground hover:opacity-90' : 'border border-surface-dark-foreground/20 text-surface-dark-foreground hover:bg-surface-dark-foreground/10'}`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;