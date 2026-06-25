import { useEffect, useRef } from 'react';
import { Wifi } from 'lucide-react';
import NFCTagVisual from './NFCTagVisual';

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible');
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="cta" className="relative py-32 overflow-hidden bg-[#050a00]">

      {/* =========================
          BACKGROUND GLOW (SIMPLE)
      ========================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#AECB00]/10 blur-3xl rounded-full" />
      </div>

      {/* =========================
          CONTENT
      ========================= */}
      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >

        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <Wifi size={14} className="text-[#AECB00]" />
          <span className="text-[#AECB00] text-xs font-semibold uppercase tracking-wider">
            Ready to protect your child
          </span>
        </div>

        {/* Title */}
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          Give your child's bag{' '}
          <span className="text-gradient">a voice</span>
        </h2>

        {/* Description */}
        <p className="text-white/60 text-xl max-w-2xl mx-auto mb-14">
          One small tag. One tap. One relieved parent. Join thousands of families
          who never worry about lost bags anymore.
        </p>

        {/* =========================
            PRODUCT FOCUS AREA (FIXED)
        ========================= */}
        <div className="relative flex justify-center items-center mb-14">

          {/* soft spotlight */}
          <div className="absolute w-[520px] h-[520px] bg-[radial-gradient(circle_at_center,rgba(174,203,0,0.12),transparent_65%)] blur-2xl" />

          {/* single clean ring */}
          <div className="absolute w-[340px] h-[340px] rounded-full border border-[#AECB00]/10" />

          {/* subtle ground shadow */}
          <div className="absolute bottom-[-40px] w-[220px] h-[60px] bg-black/60 blur-2xl rounded-full" />

          {/* product */}
          <div className="relative z-10 scale-[1.05]">
            <NFCTagVisual animate />
          </div>

        </div>

        {/* =========================
            CONTACT CARD
        ========================= */}
        <div
          id="contact"
          className="glass-card rounded-3xl p-8 md:p-10 border border-white/10 mb-10 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-white font-bold text-3xl mb-3">
              Find Your Nearest Store
            </h3>

            <p className="text-white/60">
              Visit one of our stores or contact customer service.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:+201275853763"
              className="text-[#AECB00] font-semibold hover:text-white transition-colors"
            >
              📞 Customer Service: 01275853763
            </a>

            <span className="hidden md:block text-white/20">|</span>

            <a
              href="mailto:arrow@almahabagroup.com"
              className="text-[#AECB00] font-semibold hover:text-white transition-colors"
            >
              📧 arrow@almahabagroup.com
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ["Mall of Arabia", "01275853168"],
              ["Dandy Mall", "01286751854"],
              ["Genena Mall", "01273545103"],
              ["Grand Mall", "01281301989"],
              ["City Centre Maadi", "01211187491"],
              ["Gateway Mall", "01278671143"],
              ["All Seasons Park", "01289478321"],
              ["Trivium Square", "01226027539"],
              ["Alexandria City Centre", "01288319807"],
              ["El Gam3a Plaza", "01226027716"],
            ].map(([name, phone]) => (
              <a
                key={phone}
                href={`tel:+2${phone}`}
                className="glass rounded-2xl p-4 border border-white/10 hover:border-[#AECB00]/40 transition-all duration-300 text-center"
              >
                <p className="text-white font-medium mb-1">{name}</p>
                <p className="text-[#AECB00]">{phone}</p>
              </a>
            ))}
          </div>
        </div>

        {/* =========================
            TAGLINE (CLEAN GLOW)
        ========================= */}
        <div className="flex justify-center mt-6">
          <span className="relative text-[#AECB00] font-bold tracking-[0.3em] text-sm sm:text-base">

            <span className="relative z-10">
              GO HAPPY GO ANYWHERE
            </span>

            <span className="absolute inset-0 blur-md text-[#AECB00] opacity-40 animate-pulse">
              GO HAPPY GO ANYWHERE
            </span>

          </span>
        </div>

      </div>
    </section>
  );
}