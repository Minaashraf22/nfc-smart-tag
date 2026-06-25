import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("hero-visible");
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-black text-white"
    >
      {/* =========================
          VIDEO BACKGROUND
      ========================= */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] md:object-[78%_center] scale-[1.05]"
          style={{
            filter: "brightness(1.1) contrast(1.05) saturate(1.02)",
          }}
        >
          <source src="/111.mp4" type="video/mp4" />
        </video>

        {/* main overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

        {/* mobile overlay */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        {/* cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,0,0,0.15),transparent_60%)]" />

        {/* brand glow accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[12%] top-[22%] h-32 w-32 rounded-full bg-[#AECB00]/8 blur-3xl animate-pulse" />
          <div className="absolute bottom-[18%] right-[18%] h-40 w-40 rounded-full bg-[#AECB00]/6 blur-3xl animate-pulse" />
        </div>
      </div>

      {/* =========================
          CONTENT
      ========================= */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-24 lg:pb-20">

          {/* Badge */}
          <div className="hero-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs sm:text-sm text-[#D6ED63] backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#AECB00] animate-pulse" />
            NFC Smart Safety Tag
          </div>

          {/* Heading */}
          <h1 className="hero-fade-up hero-delay-1 max-w-[12ch] text-[36px] sm:text-[52px] lg:text-[72px] font-black leading-[0.95] tracking-[-0.04em] text-white">
            Never lose your{" "}
            <span className="text-[#CBE23A] drop-shadow-[0_0_12px_rgba(202,226,58,0.6)]">
              child’s bag
            </span>{" "}
            again
          </h1>

          {/* Subtitle */}
          <p className="hero-fade-up hero-delay-2 mt-5 max-w-xl text-[15px] sm:text-lg leading-7 sm:leading-8 text-white/70">
            A smart NFC tag that helps return lost bags instantly with a single
            scan — even when you are not around.
          </p>

          {/* CTA */}
          <div className="hero-fade-up hero-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#AECB00] px-6 py-3.5 text-sm font-bold text-black transition hover:scale-[1.03] sm:px-8 sm:py-4 sm:text-base"
            >
              Get Yours Now
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm text-white backdrop-blur-md transition hover:bg-white/15 sm:px-8 sm:py-4 sm:text-base"
            >
              <Play size={16} className="text-[#CBE23A]" />
              How It Works
            </a>
          </div>

          {/* Download buttons */}
          <div className="hero-fade-up hero-delay-4 mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">

            {/* Google Play */}
            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 transition hover:border-[#AECB00]/50 hover:bg-[#AECB00]/10 sm:flex-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#AECB00] to-[#8FB000] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0e1500">
                  <path d="M3 20.5v-17c0-.83 1.01-1.3 1.7-.8l14.5 8.5c.67.39.67 1.37 0 1.76L4.7 21.3c-.69.5-1.7.03-1.7-.8z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase text-white/50">Get it on</p>
                <p className="text-sm font-bold">Google Play</p>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 transition hover:border-[#AECB00]/50 hover:bg-[#AECB00]/10 sm:flex-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#AECB00] to-[#8FB000] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0e1500">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase text-white/50">Download on</p>
                <p className="text-sm font-bold">App Store</p>
              </div>
            </a>

          </div>

          {/* tags */}
          <div className="hero-fade-up mt-6 flex flex-wrap gap-3 text-sm text-white/65">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
              Instant recovery
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
              Safe for kids
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
              NFC smart tag
            </span>
          </div>

        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />

      {/* =========================
          ANIMATION
      ========================= */}
      <style>{`
        .hero-fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero-visible .hero-fade-up {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-delay-1 { transition-delay: 0.08s; }
        .hero-delay-2 { transition-delay: 0.16s; }
        .hero-delay-3 { transition-delay: 0.24s; }
        .hero-delay-4 { transition-delay: 0.32s; }
      `}</style>
    </section>
  );
}