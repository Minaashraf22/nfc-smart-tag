import { useState } from 'react';
import { Download, Smartphone, PenLine, Eye, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Download NFC Tools',
    description: 'Install the free "NFC Tools" app — the most trusted NFC app on both Android and iOS.',
    tip: 'Available on Google Play & App Store',
  },
  {
    icon: PenLine,
    title: 'Switch to WRITE Mode',
    description: 'Open NFC Tools, go to the "Write" tab, then choose "Add a record" to enter your data.',
    tip: 'You only need to do this once',
  },
  {
    icon: Smartphone,
    title: 'Add Your Contact Info',
    description: 'Add your name, phone number, and a short message. Tap "Write / 1 record" then hold your phone to the tag.',
    tip: 'Use vCard or custom URL for richer info',
  },
  {
    icon: Eye,
    title: 'Test in READ Mode',
    description: 'Switch to the "Read" tab and tap the tag again to confirm everything was saved correctly.',
    tip: 'Test on a friend\'s phone too!',
  },
];

export default function NFCSetupSection() {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggle = (i: number) => {
    setCompleted((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <section id="nfc-setup" className="relative py-28 bg-[#0a1200]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(174,203,0,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block text-[#AECB00] text-sm font-semibold tracking-widest uppercase mb-4">
            NFC Setup Guide
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Program Your <span className="text-gradient">Tag</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Follow these four steps to program your NFC tag in under 2 minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const done = completed.includes(i);
            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                className={`text-left glass-card rounded-3xl p-7 transition-all duration-400 group ${
                  done
                    ? 'border-[#AECB00]/40 bg-[#AECB00]/05'
                    : 'border-white/08 hover:border-[#AECB00]/25'
                }`}
                style={{ border: `1px solid ${done ? 'rgba(174,203,0,0.4)' : 'rgba(255,255,255,0.08)'}` }}
              >
                <div className="flex items-start gap-5">
                  {/* Step badge */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      done
                        ? 'bg-gradient-to-br from-[#AECB00] to-[#8FB000] scale-95'
                        : 'bg-white/08 group-hover:bg-[#AECB00]/20'
                    }`}
                  >
                    {done ? (
                      <CheckCircle size={26} className="text-[#0e1500]" />
                    ) : (
                      <Icon size={24} className="text-[#AECB00]" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-bold tracking-widest uppercase"
                        style={{ color: done ? '#AECB00' : 'rgba(255,255,255,0.3)' }}
                      >
                        Step {i + 1}
                      </span>
                      {done && (
                        <span className="text-[10px] bg-[#AECB00]/20 text-[#AECB00] rounded-full px-2 py-0.5 font-semibold">
                          Done
                        </span>
                      )}
                    </div>
                    <h3
                      className={`font-bold text-lg mb-2 transition-colors ${
                        done ? 'text-[#AECB00]' : 'text-white'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-3">{step.description}</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-[#AECB00]/60" />
                      <span className="text-white/35 text-xs">{step.tip}</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Download buttons */}
        <div className="glass-card rounded-3xl p-8 md:p-10" style={{ border: '1px solid rgba(174,203,0,0.2)' }}>
          <div className="text-center mb-8">
            <h3 className="text-white font-bold text-2xl mb-2">Download NFC Tools</h3>
            <p className="text-white/50 text-sm">Free · 10M+ downloads · Trusted by professionals</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="https://play.google.com/store/apps/details?id=com.wakdev.wdnfc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center gap-4 glass rounded-2xl px-5 py-4 hover:border-[#AECB00]/50 hover:bg-[#AECB00]/08 transition-all duration-300 group"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#AECB00] to-[#8FB000] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0e1500">
                  <path d="M3 20.5v-17c0-.83 1.01-1.3 1.7-.8l14.5 8.5c.67.39.67 1.37 0 1.76L4.7 21.3c-.69.5-1.7.03-1.7-.8z" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-[10px] uppercase tracking-wider">Get it on</p>
                <p className="text-white font-bold text-sm">Google Play</p>
              </div>
            </a>

            <a
              href="https://apps.apple.com/app/nfc-tools/id1252962749"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center gap-4 glass rounded-2xl px-5 py-4 hover:border-[#AECB00]/50 hover:bg-[#AECB00]/08 transition-all duration-300 group"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#AECB00] to-[#8FB000] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0e1500">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div>
                <p className="text-white/50 text-[10px] uppercase tracking-wider">Download on the</p>
                <p className="text-white font-bold text-sm">App Store</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
