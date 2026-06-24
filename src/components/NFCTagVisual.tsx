import { useState } from 'react';
import { Wifi } from 'lucide-react';

interface Props {
  animate?: boolean;
}

export default function NFCTagVisual({ animate = true }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-center ${animate ? 'animate-float' : ''}`}
      style={{ width: 260, height: 320 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* NFC pulse rings */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border-2 border-[#AECB00]/40"
          style={{
            width: 130 + i * 60,
            height: 130 + i * 60,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: `pulseRing 2.5s ease-out infinite ${i * 0.6}s`,
          }}
        />
      ))}

      {/* Tag body */}
      <div
        className="relative z-10 transition-all duration-500"
        style={{
          transform: hovered ? 'rotateY(12deg) rotateX(-8deg) scale(1.05)' : 'rotateY(0deg) rotateX(0deg) scale(1)',
          transformStyle: 'preserve-3d',
          perspective: '800px',
        }}
      >
        {/* Main tag shape */}
        <div
          className="relative"
          style={{
            width: 90,
            height: 130,
            borderRadius: '20px 20px 20px 20px',
            background: 'linear-gradient(145deg, #2a3d00 0%, #1a2800 40%, #0e1a00 100%)',
            boxShadow: hovered
              ? '0 30px 80px rgba(174, 203, 0, 0.5), 0 0 40px rgba(174, 203, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.15)'
              : '0 20px 60px rgba(0,0,0,0.6), 0 0 20px rgba(174, 203, 0, 0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
            border: '1px solid rgba(174, 203, 0, 0.3)',
          }}
        >
          {/* Hole at top */}
          <div
            className="absolute bg-[#0e1500] rounded-full border border-[#AECB00]/30"
            style={{ width: 14, height: 14, top: 10, left: '50%', transform: 'translateX(-50%)' }}
          />

          {/* NFC chip area */}
          <div
            className="absolute rounded-xl"
            style={{
              width: 48,
              height: 36,
              top: 40,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(135deg, #AECB00 0%, #8FB000 100%)',
              boxShadow: '0 4px 15px rgba(174, 203, 0, 0.4)',
            }}
          >
            {/* Chip lines */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute bg-[#0e1500]/30 rounded"
                style={{ height: 2, left: 6, right: 6, top: 8 + i * 9 }}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <Wifi size={12} className="text-[#0e1500]/60" />
            </div>
          </div>

          {/* Brand text */}
          <div className="absolute bottom-12 left-0 right-0 text-center">
            <span className="text-[#AECB00] font-bold text-[9px] tracking-widest uppercase">NFC Smart</span>
          </div>

          {/* Arrow logo hint */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center">
            <div
              className="rounded-sm"
              style={{
                width: 30,
                height: 2,
                background: 'linear-gradient(90deg, transparent, #AECB00, transparent)',
              }}
            />
          </div>

          {/* Shine overlay */}
          <div
            className="absolute inset-0 rounded-[20px] opacity-20"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.3) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Keyring */}
        <div
          className="absolute"
          style={{
            width: 22,
            height: 22,
            top: -11,
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '50%',
            border: '3px solid rgba(174, 203, 0, 0.7)',
            boxShadow: '0 2px 8px rgba(174, 203, 0, 0.3)',
          }}
        />
      </div>

      {/* Glow base */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: 100,
          height: 20,
          background: 'radial-gradient(ellipse, rgba(174, 203, 0, 0.3) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
    </div>
  );
}
