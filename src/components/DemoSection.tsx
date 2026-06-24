import { useState } from 'react';
import { Wifi, Phone, Mail, User, CheckCircle, ArrowRight } from 'lucide-react';

type Stage = 'idle' | 'scanning' | 'done';

export default function DemoSection() {
  const [stage, setStage] = useState<Stage>('idle');

  const handleTap = () => {
    if (stage !== 'idle') return;
    setStage('scanning');
    setTimeout(() => setStage('done'), 2200);
  };

  const reset = () => setStage('idle');

  return (
    <section className="relative py-28 bg-[#080e00]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 600,
            height: 600,
            background: 'radial-gradient(circle, rgba(174,203,0,0.04) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#AECB00] text-sm font-semibold tracking-widest uppercase mb-4">
            Try It Yourself
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            <span className="text-gradient">Live Demo</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Tap the NFC tag below to simulate how a finder would experience returning your bag.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Tag + tap area */}
          <div className="relative flex flex-col items-center gap-8">
            <div className="relative">
              {/* Rings */}
              {stage === 'scanning' && [0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute rounded-full border-2 border-[#AECB00]/60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    animation: `nfcWave 1.8s ease-out infinite ${i * 0.35}s`,
                    width: 80,
                    height: 80,
                  }}
                />
              ))}

              {/* Tag */}
              <div
                className={`relative z-10 rounded-[24px] flex flex-col items-center justify-center gap-3 transition-all duration-500 cursor-pointer select-none ${
                  stage === 'idle' ? 'hover:scale-105' : ''
                } ${stage === 'done' ? 'scale-95' : ''}`}
                style={{
                  width: 110,
                  height: 155,
                  background:
                    stage === 'done'
                      ? 'linear-gradient(145deg, #2a4a00, #1a3000)'
                      : 'linear-gradient(145deg, #2a3d00, #1a2800)',
                  border:
                    stage === 'scanning'
                      ? '2px solid rgba(174,203,0,0.9)'
                      : stage === 'done'
                      ? '2px solid #AECB00'
                      : '2px solid rgba(174,203,0,0.3)',
                  boxShadow:
                    stage === 'scanning'
                      ? '0 0 40px rgba(174,203,0,0.6), 0 0 80px rgba(174,203,0,0.3)'
                      : stage === 'done'
                      ? '0 0 30px rgba(174,203,0,0.4)'
                      : '0 20px 60px rgba(0,0,0,0.5)',
                }}
                onClick={handleTap}
              >
                {/* Hole */}
                <div
                  className="absolute bg-[#0e1500] rounded-full border border-[#AECB00]/30"
                  style={{ width: 16, height: 16, top: 12 }}
                />

                {stage === 'done' ? (
                  <CheckCircle size={36} className="text-[#AECB00] mt-4" />
                ) : (
                  <Wifi
                    size={36}
                    className={`text-[#AECB00] mt-4 ${stage === 'scanning' ? 'animate-pulse' : ''}`}
                  />
                )}

                <div className="px-3 text-center">
                  <p className="text-[#AECB00] font-bold text-[10px] tracking-wider uppercase">
                    {stage === 'idle' ? 'Tap to Scan' : stage === 'scanning' ? 'Reading...' : 'Found!'}
                  </p>
                </div>

                {/* Shine */}
                <div
                  className="absolute inset-0 rounded-[22px] opacity-10"
                  style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.4) 0%, transparent 50%)' }}
                />
              </div>
            </div>

            {stage === 'idle' && (
              <p className="text-white/40 text-sm text-center max-w-[160px]">
                Tap the tag to simulate NFC scan
              </p>
            )}
            {stage === 'scanning' && (
              <p className="text-[#AECB00]/80 text-sm font-medium animate-pulse">
                Reading NFC data...
              </p>
            )}
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center">
            <ArrowRight
              size={32}
              className={`transition-all duration-500 ${
                stage === 'done' ? 'text-[#AECB00]' : 'text-white/20'
              }`}
            />
          </div>

          {/* Contact card */}
          <div className="w-full max-w-sm">
            <div
              className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
                stage === 'done' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-20 translate-y-6 scale-95'
              }`}
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${stage === 'done' ? 'rgba(174,203,0,0.5)' : 'rgba(255,255,255,0.1)'}`,
                boxShadow: stage === 'done' ? '0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(174,203,0,0.15)' : 'none',
              }}
            >
              {/* Card header */}
              <div
                className="px-6 py-5 flex items-center gap-3"
                style={{ background: 'linear-gradient(135deg, rgba(174,203,0,0.2), rgba(174,203,0,0.05))' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #AECB00, #8FB000)' }}
                >
                  <User size={22} className="text-[#0e1500]" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Mena Ashraf</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#AECB00] animate-pulse" />
                    <p className="text-[#AECB00] text-xs font-medium">NFC Tag · Arrow Smart</p>
                  </div>
                </div>
              </div>

              {/* Contact details */}
              <div className="px-6 py-5 space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/05">
                  <div className="w-9 h-9 rounded-xl bg-[#AECB00]/15 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-[#AECB00]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">Phone</p>
                    <p className="text-white font-semibold text-sm">+20 1228102517</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/05">
                  <div className="w-9 h-9 rounded-xl bg-[#AECB00]/15 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-[#AECB00]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">Email</p>
                    <p className="text-white font-semibold text-sm">menaashraf1517@gmail.com</p>
                  </div>
                </div>

                <div className="mt-2 p-3 rounded-xl bg-[#AECB00]/10 border border-[#AECB00]/20">
                  <p className="text-[#AECB00]/80 text-xs leading-relaxed">
                    <span className="font-bold">Message:</span> If found, please contact me! This bag belongs to my daughter Emma. Thank you so much! 💚
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 pb-5 flex gap-3">
                <button className="flex-1 shimmer-btn text-[#0e1500] font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-1.5">
                  <Phone size={14} />
                  Call Now
                </button>
                <button className="flex-1 bg-white/10 text-white font-semibold py-3 rounded-xl text-sm hover:bg-white/20 transition-colors flex items-center justify-center gap-1.5 border border-white/10">
                  <Mail size={14} />
                  Email
                </button>
              </div>
            </div>

            {stage === 'done' && (
              <button
                onClick={reset}
                className="mt-4 w-full text-center text-white/40 text-sm hover:text-white/70 transition-colors"
              >
                Reset demo ↺
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
