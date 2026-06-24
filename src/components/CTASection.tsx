import { useEffect, useRef } from 'react';
import { ArrowRight, Wifi, Star } from 'lucide-react';
import NFCTagVisual from './NFCTagVisual';

export default function CTASection() {
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
    <section id="cta" className="relative py-32 overflow-hidden bg-[#050a00]">
      {/* Big glow background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 800,
          height: 500,
          background: 'radial-gradient(ellipse, rgba(174,203,0,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Stars decoration */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: `${10 + (i * 7.5) % 80}%`,
            left: `${5 + (i * 8.3) % 90}%`,
            opacity: 0.3 + (i % 3) * 0.15,
            animation: `float ${5 + (i % 3) * 2}s ease-in-out infinite ${i * 0.4}s`,
          }}
        >
          <Star size={i % 4 === 0 ? 8 : 5} className="text-[#AECB00]" fill="currentColor" />
        </div>
      ))}

      <div ref={ref} className="section-fade relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Overline */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <Wifi size={14} className="text-[#AECB00]" />
          <span className="text-[#AECB00] text-xs font-semibold tracking-wider uppercase">
            Ready to protect your child
          </span>
        </div>

        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          Give your child's bag{' '}
          <span className="text-gradient">a voice</span>
        </h2>

        <p className="text-white/55 text-xl leading-relaxed max-w-2xl mx-auto mb-14">
          One small tag. One tap. One relieved parent. Join thousands of families
          who never worry about lost bags anymore.
        </p>

        {/* Tag visual */}
        <div className="flex justify-center mb-12">
          <NFCTagVisual animate />
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="mailto:hello@arrowfootwear.com?subject=NFC Smart Tag Order"
            className="animate-glow shimmer-btn text-[#0e1500] font-black px-12 py-5 rounded-full flex items-center gap-3 text-xl shadow-2xl shadow-[#AECB00]/30 hover:scale-105 transition-transform duration-300"
          >
            Order Now
            <ArrowRight size={22} />
          </a>
          <a
            href="#how-it-works"
            className="glass text-white/70 font-semibold px-8 py-5 rounded-full hover:text-white hover:bg-white/10 transition-all"
          >
            Learn more
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/40 text-sm">
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-[#AECB00]" fill="currentColor" />
            ))}
            <span className="ml-1">4.9 / 5 from 2,400+ parents</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <span>Free shipping on all orders</span>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <span>30-day money back guarantee</span>
        </div>
      </div>
    </section>
  );
}
