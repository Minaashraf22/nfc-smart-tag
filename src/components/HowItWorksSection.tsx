import { useEffect, useRef, useState } from 'react';
import { Tag, Smartphone, UserCheck } from 'lucide-react';

const steps = [
  {
    icon: Tag,
    number: '01',
    title: 'Attach the Tag',
    description:
      'Clip the NFC Smart Bag Tag to any bag, backpack, or luggage. It\'s lightweight, durable, and looks great.',
    color: 'from-[#AECB00] to-[#8FB000]',
    detail: 'Waterproof · Scratch-resistant · Keyring clip',
  },
  {
    icon: Smartphone,
    number: '02',
    title: 'Someone Scans',
    description:
      'If the bag is found, anyone with a modern smartphone can tap the tag — no app download needed.',
    color: 'from-[#88c000] to-[#5a9000]',
    detail: 'Works on all NFC phones · Instant open',
  },
  {
    icon: UserCheck,
    number: '03',
    title: 'Owner Info Appears',
    description:
      'Your chosen contact details open instantly on their screen. They can call or message you right away.',
    color: 'from-[#d4f000] to-[#AECB00]',
    detail: 'No login required · Privacy first',
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((s) => (s + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="relative py-28 bg-[#0a1000]">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0e1500] to-transparent pointer-events-none" />

      <div ref={sectionRef} className="section-fade max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block text-[#AECB00] text-sm font-semibold tracking-widest uppercase mb-4">
            Simple as 1 · 2 · 3
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Three effortless steps stand between a lost bag and a happy reunion.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#AECB00]/30 to-transparent -translate-y-1/2 pointer-events-none" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = activeStep === i;
            return (
              <button
                key={i}
                className={`relative text-left glass-card rounded-3xl p-8 transition-all duration-500 cursor-pointer ${
                  isActive
                    ? 'border-[#AECB00]/50 bg-white/10 shadow-xl shadow-[#AECB00]/15 scale-105'
                    : 'border-white/8 hover:border-[#AECB00]/30 hover:scale-102'
                }`}
                onClick={() => setActiveStep(i)}
                style={{ border: `1px solid ${isActive ? 'rgba(174,203,0,0.5)' : 'rgba(255,255,255,0.08)'}` }}
              >
                {/* Step number */}
                <div className="text-[80px] font-black text-white/04 absolute top-4 right-6 leading-none select-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 ${
                    isActive ? 'scale-110' : ''
                  }`}
                >
                  <Icon size={28} className="text-[#0e1500]" strokeWidth={2.5} />
                </div>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute top-4 left-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#AECB00] animate-pulse shadow-lg shadow-[#AECB00]/50" />
                  </div>
                )}

                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{step.description}</p>

                <div className="inline-flex items-center gap-1.5 bg-[#AECB00]/10 rounded-full px-3 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#AECB00]" />
                  <span className="text-[#AECB00] text-xs font-medium">{step.detail}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`rounded-full transition-all duration-300 ${
                activeStep === i
                  ? 'w-8 h-2.5 bg-[#AECB00]'
                  : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
