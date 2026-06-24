import { useEffect, useRef } from 'react';
import { Zap, WifiOff, Droplets, Shield, Feather, Share2, Clock, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Contact',
    description: 'Your info appears on the finder\'s screen in under a second.',
    accent: '#AECB00',
  },
  {
    icon: WifiOff,
    title: 'Works Without Internet',
    description: 'NFC is peer-to-peer — no Wi-Fi, no mobile data needed.',
    accent: '#88c000',
  },
  {
    icon: Droplets,
    title: 'Waterproof & Durable',
    description: 'Built to survive rain, puddles, and rough playground days.',
    accent: '#AECB00',
  },
  {
    icon: Shield,
    title: 'Safe for Kids',
    description: 'No radiation, no battery. Completely passive and harmless.',
    accent: '#d4f000',
  },
  {
    icon: Feather,
    title: 'Ultra Lightweight',
    description: 'Weighs less than a coin. Kids won\'t even notice it\'s there.',
    accent: '#8FB000',
  },
  {
    icon: Share2,
    title: 'Universal Sharing',
    description: 'Works with any NFC-enabled phone — Android or iPhone.',
    accent: '#AECB00',
  },
  {
    icon: Clock,
    title: 'Lasts Forever',
    description: 'No batteries to replace. The tag never runs out of power.',
    accent: '#b5d400',
  },
  {
    icon: Globe,
    title: 'Works Anywhere',
    description: 'From school hallways to airport terminals — always ready.',
    accent: '#AECB00',
  },
];

export default function FeaturesSection() {
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
    <section id="features" className="relative py-28 bg-[#080f00]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(174,203,0,0.05) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="section-fade relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block text-[#AECB00] text-sm font-semibold tracking-widest uppercase mb-4">
            Everything you need
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Built for <span className="text-gradient">Real Life</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Every detail engineered for parents who need peace of mind and kids who need adventure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="hover-lift glass-card rounded-2xl p-6 group"
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${f.accent}25, ${f.accent}10)`,
                    border: `1px solid ${f.accent}30`,
                  }}
                >
                  <Icon size={22} style={{ color: f.accent }} />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{f.description}</p>

                {/* Bottom accent line */}
                <div
                  className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${f.accent}, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
