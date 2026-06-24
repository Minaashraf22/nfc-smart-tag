import { useEffect, useRef } from 'react';
import { Lock, Eye, UserCog, CheckCircle } from 'lucide-react';

const pillars = [
  {
    icon: Lock,
    title: 'Only the data you choose',
    description:
      'You decide exactly what gets stored on the tag — a name and phone number is all it takes. Nothing more is ever required.',
  },
  {
    icon: Eye,
    title: 'No tracking or leakage',
    description:
      'The tag is passive. It doesn\'t transmit, broadcast, or record anything. Data only moves when someone physically taps it.',
  },
  {
    icon: UserCog,
    title: 'Full control by parent',
    description:
      'You program it, you own it. Change or erase the content anytime with the same NFC Tools app. No accounts, no cloud.',
  },
];

const trustPoints = [
  'No hidden accounts or subscriptions',
  'No GPS or location data',
  'No app required to scan',
  'Fully reprogrammable by parent',
  'Works completely offline',
  'GDPR-friendly: zero data collection',
];

export default function SecuritySection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="security" className="relative py-28 bg-[#070d00]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 60% 40%, rgba(174,203,0,0.04) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="section-fade relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block text-[#AECB00] text-sm font-semibold tracking-widest uppercase mb-4">
            Parent-first privacy
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Your Family's Safety.{' '}
            <span className="text-gradient">Your Rules.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            We built this for parents. Privacy isn't a feature — it's the foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="hover-lift relative glass-card rounded-3xl p-8"
                style={{ border: '1px solid rgba(174,203,0,0.12)' }}
              >
                {/* Top glow dot */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                  style={{
                    background: '#AECB00',
                    boxShadow: '0 0 20px rgba(174,203,0,0.8)',
                  }}
                />

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(174,203,0,0.15), rgba(174,203,0,0.05))',
                    border: '1px solid rgba(174,203,0,0.2)',
                  }}
                >
                  <Icon size={28} className="text-[#AECB00]" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trust checklist */}
        <div
          className="glass-card rounded-3xl p-8 md:p-10 max-w-3xl mx-auto"
          style={{ border: '1px solid rgba(174,203,0,0.2)' }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #AECB00, #8FB000)' }}
              >
                <Lock size={14} className="text-[#0e1500]" />
              </div>
              <span className="text-white font-bold">100% Transparent</span>
            </div>
            <p className="text-white/50 text-sm">Everything this tag can and cannot do:</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {trustPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/03"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <CheckCircle size={16} className="text-[#AECB00] flex-shrink-0" />
                <span className="text-white/70 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
