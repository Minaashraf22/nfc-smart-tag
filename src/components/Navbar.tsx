import { useState, useEffect } from 'react';
import { Menu, X, Wifi } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'NFC Setup', href: '#nfc-setup' },
    { label: 'Security', href: '#security' },
    { label: 'Stores', href: '#contact' }, // 👈 إضافة السكشن الجديد
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0e1500]/90 backdrop-blur-xl border-b border-white/10 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a
            href="https://www.arrowfootwear.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <img
              src="/11.png"
              alt="Arrow Footwear"
              className="w-11 h-11 object-contain"
            />
            <span className="text-white font-bold text-lg hidden sm:block">
              ARROW <span className="text-gradient">Smart Tag</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/70 hover:text-[#AECB00] transition-colors duration-200 text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.arrowfootwear.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn text-[#0e1500] font-bold px-5 py-2.5 rounded-full text-sm flex items-center gap-2 hover:scale-105 transition-transform duration-200"
            >
              <Wifi size={14} />
              Explore Our Products
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0e1500]/95 backdrop-blur-xl border-t border-white/10 px-4 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-white/80 hover:text-[#AECB00] font-medium py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contact"
            className="shimmer-btn text-[#0e1500] font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 mt-2"
            onClick={() => setOpen(false)}
          >
            <Wifi size={16} />
            Find Stores
          </a>
        </div>
      )}
    </nav>
  );
}