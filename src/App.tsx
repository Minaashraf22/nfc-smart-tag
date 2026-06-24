import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import DemoSection from './components/DemoSection';
import NFCSetupSection from './components/NFCSetupSection';
import FeaturesSection from './components/FeaturesSection';
import SecuritySection from './components/SecuritySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  // Intersection observer for section fade animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.section-fade').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0e1500] overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <HowItWorksSection />
        <DemoSection />
        <FeaturesSection />
        <NFCSetupSection />
        <SecuritySection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
