import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type PaymentMethod = 'upi' | 'card' | 'netbanking';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state as {
    spaceName: string;
    mode: string;
    duration: string;
    total: number;
    serviceFee: number;
    gst: number;
    grandTotal: number;
  } | null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  // Payment method fields
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [netBankingOption, setNetBankingOption] = useState('');

  if (!booking) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 text-center container-main">
          <h1 className="heading-section mb-4">No booking details found</h1>
          <Link to="/browse" className="text-primary font-body font-semibold">← Browse Spaces</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const validate = () => {
    const errs: { name?: string; email?: string } = {};
    if (!name.trim()) errs.name = 'Name is required';
    if (!email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Invalid email';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleConfirm = () => {
    if (validate()) setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 container-main max-w-lg text-center">
          <div className="bg-card rounded-2xl border border-border p-10">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h1 className="font-heading text-3xl font-bold text-foreground mb-3">Payment Successful</h1>
            <p className="text-muted-foreground font-body mb-2">Your booking for <strong>{booking.spaceName}</strong> has been confirmed.</p>
            <p className="text-muted-foreground font-body mb-6">Amount paid: <strong>₹{(booking.grandTotal || 0).toLocaleString()}</strong></p>
            <button onClick={() => navigate('/')} className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-body font-semibold hover:opacity-90 transition-opacity">
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-28 pb-20 container-main max-w-2xl">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-8">Complete Your Booking</h1>

        <div className="bg-card rounded-2xl border border-border p-6 mb-8">
          <h2 className="font-heading text-xl font-bold text-foreground mb-4">Booking Summary</h2>
          <div className="space-y-2 text-sm font-body">
            <div className="flex justify-between"><span className="text-muted-foreground">Space</span><span className="text-foreground font-semibold">{booking.spaceName || 'N/A'}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Mode</span><span className="text-foreground capitalize">{booking.mode || 'N/A'}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Duration</span><span className="text-foreground">{booking.duration || 'N/A'}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Base Amount</span><span className="text-foreground">₹{(booking.total || 0).toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Service Fee</span><span className="text-foreground">₹{(booking.serviceFee || 0).toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">GST</span><span className="text-foreground">₹{(booking.gst || 0).toLocaleString()}</span></div>
            <div className="flex justify-between pt-3 border-t border-border font-bold text-base">
              <span>Total</span><span>₹{(booking.grandTotal || 0).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6">
          <h2 className="font-heading text-xl font-bold text-foreground mb-6">Payment Details</h2>
          <div className="space-y-5">
            <div>
              <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Full Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body" />
              {errors.name && <p className="text-destructive text-xs font-body mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body" />
              {errors.email && <p className="text-destructive text-xs font-body mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Payment Method</label>
              <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value as PaymentMethod)} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body">
                <option value="upi">UPI</option>
                <option value="card">Card</option>
                <option value="netbanking">Net Banking</option>
              </select>
            </div>

            {/* Dynamic payment fields */}
            {paymentMethod === 'upi' && (
              <div>
                <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-2">UPI ID</label>
                <input type="text" value={upiId} onChange={e => setUpiId(e.target.value)} placeholder="yourname@upi" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body" />
              </div>
            )}

            {paymentMethod === 'card' && (
              <>
                <div>
                  <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Card Number</label>
                  <input type="text" value={cardNumber} onChange={e => setCardNumber(e.target.value)} placeholder="1234 5678 9012 3456" maxLength={19} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Expiry</label>
                    <input type="text" value={cardExpiry} onChange={e => setCardExpiry(e.target.value)} placeholder="MM/YY" maxLength={5} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body" />
                  </div>
                  <div>
                    <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-2">CVV</label>
                    <input type="password" value={cardCvv} onChange={e => setCardCvv(e.target.value)} placeholder="•••" maxLength={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body" />
                  </div>
                </div>
              </>
            )}

            {paymentMethod === 'netbanking' && (
              <div>
                <label className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Select Bank / Wallet</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Paytm', 'Google Pay', 'PhonePe', 'Others'].map(option => (
                    <button
                      key={option}
                      onClick={() => setNetBankingOption(option)}
                      className={`py-3 px-4 rounded-xl border text-sm font-body font-semibold transition-all ${
                        netBankingOption === option
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border bg-background text-foreground hover:border-primary/50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button onClick={handleConfirm} className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-body font-semibold text-base hover:opacity-90 transition-opacity mt-4">
              Confirm Payment — ₹{(booking.grandTotal || 0).toLocaleString()}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;