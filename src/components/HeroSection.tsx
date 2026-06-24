import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.classList.add("hero-visible");
    });
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
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: "78% center",
            transform: "scale(1.04)",
            filter: "brightness(1.12) contrast(1.05) saturate(1.02)",
          }}
        >
          <source src="/111.mp4" type="video/mp4" />
        </video>

        {/* Overlay for desktop */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/92 via-black/62 to-black/12" />

        {/* Overlay for mobile */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-b from-black/72 via-black/52 to-black/65" />

        {/* very subtle right-side vignette */}
        <div className="absolute inset-y-0 right-0 w-[45%] hidden md:block bg-gradient-to-l from-black/18 to-transparent" />

        {/* tiny brand accent only */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[12%] top-[22%] h-32 w-32 rounded-full bg-[#AECB00]/8 blur-3xl" />
          <div className="absolute bottom-[18%] right-[18%] h-40 w-40 rounded-full bg-[#AECB00]/6 blur-3xl" />
        </div>
      </div>

      {/* =========================
          CONTENT
      ========================= */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-24 lg:pb-20">
          {/* Badge */}
          <div className="hero-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs sm:text-sm text-[#D6ED63] backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#AECB00]" />
            NFC Smart Safety Tag
          </div>

          {/* Heading */}
          <h1 className="hero-fade-up hero-delay-1 max-w-[12ch] text-[40px] font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[72px]">
            Never lose your{" "}
            <span className="text-[#CBE23A]">child’s bag</span> again
          </h1>

          {/* Subtitle */}
          <p className="hero-fade-up hero-delay-2 mt-5 max-w-xl text-[15px] leading-7 text-white/72 sm:text-lg sm:leading-8">
            A smart NFC tag that helps return lost bags instantly with a single
            scan — even when you are not around.
          </p>

          {/* CTA */}
          <div className="hero-fade-up hero-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#AECB00] px-6 py-3.5 text-sm font-bold text-black transition hover:scale-[1.02] sm:px-8 sm:py-4 sm:text-base"
            >
              Get Yours Now
              <ArrowRight size={18} />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-3.5 text-sm text-white backdrop-blur-md transition hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base"
            >
              <Play size={16} className="text-[#CBE23A]" />
              How It Works
            </a>
          </div>

          {/* Small info row */}
          <div className="hero-fade-up hero-delay-4 mt-8 flex flex-wrap gap-3 text-sm text-white/65">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
              Instant bag recovery
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
              Safe for kids
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
              Smart NFC contact tag
            </span>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />

      {/* =========================
          LOCAL ANIMATION
      ========================= */}
      <style jsx>{`
        .hero-fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.8s ease,
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero-visible .hero-fade-up {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-delay-1 {
          transition-delay: 0.08s;
        }

        .hero-delay-2 {
          transition-delay: 0.16s;
        }

        .hero-delay-3 {
          transition-delay: 0.24s;
        }

        .hero-delay-4 {
          transition-delay: 0.32s;
        }
      `}</style>
    </section>
  );
}