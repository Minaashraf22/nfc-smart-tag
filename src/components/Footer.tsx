import { Wifi, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030600] border-t border-white/05">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
           <div className="flex items-center gap-3 mb-5">
  <img
    src="/11.png"
    alt="Arrow Footwear"
    className="w-12 h-12 object-contain"
  />

  <div>
    <div className="text-white font-bold text-lg leading-tight">
      NFC Smart Bag Tag
    </div>
    <div className="text-[#AECB00] text-xs font-medium">
      by Arrow Footwear
    </div>
  </div>
</div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              The smartest way to protect what matters most. A tiny tag with a
              powerful purpose — bringing lost bags back home.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Facebook, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full flex items-center justify-center glass hover:bg-[#AECB00]/20 hover:border-[#AECB00]/40 transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <Icon size={15} className="text-white/60 hover:text-[#AECB00]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Features', href: '#features' },
                { label: 'NFC Setup Guide', href: '#nfc-setup' },
                { label: 'Security & Privacy', href: '#security' },
                { label: 'Order Now', href: '#cta' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/45 text-sm hover:text-[#AECB00] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#AECB00] transition-all duration-300 rounded-full" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@arrowfootwear.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#AECB00]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={13} className="text-[#AECB00]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs">Email</p>
                    <p className="text-white/60 text-sm group-hover:text-[#AECB00] transition-colors">
                      hello@arrowfootwear.com
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+15550123456" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#AECB00]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={13} className="text-[#AECB00]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs">Phone</p>
                    <p className="text-white/60 text-sm group-hover:text-[#AECB00] transition-colors">
                      +20 1228102517
                    </p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#AECB00]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={13} className="text-[#AECB00]" />
                </div>
                <div>
                  <p className="text-white/30 text-xs">Location</p>
                  <p className="text-white/60 text-sm">Global shipping available</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t border-white/05 py-5"
        style={{ background: 'rgba(0,0,0,0.3)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Arrow Footwear. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <Wifi size={12} className="text-[#AECB00]/60" />
            <span className="text-white/25 text-xs">NFC Smart Bag Tag — Powered by Arrow</span>
          </div>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Service'].map((t) => (
              <a
                key={t}
                href="#"
                className="text-white/25 text-xs hover:text-white/50 transition-colors"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
