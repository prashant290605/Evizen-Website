import { ArrowRight, Sparkles, Brain, Zap, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingIcons = [
    { Icon: Brain, delay: 0, x: 15, y: 20 },
    { Icon: Zap, delay: 1, x: 75, y: 30 },
    { Icon: TrendingUp, delay: 2, x: 85, y: 70 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-neutral-950 overflow-hidden"
      style={{ transform: `translateY(${scrollY * 0.5}px)` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black"></div>

      <ParticleBackground />

      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"
          style={{
            top: `${25 + mousePosition.y * 0.02}%`,
            left: `${25 + mousePosition.x * 0.02}%`,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed"
          style={{
            bottom: `${25 - mousePosition.y * 0.02}%`,
            right: `${25 - mousePosition.x * 0.02}%`,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
      </div>

      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-20"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon size={40} className="text-white" />
        </div>
      ))}

      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-slide-down hover:bg-white/15 transition-all cursor-default hover:scale-105">
          <Sparkles size={16} className="text-white animate-pulse" />
          <span className="text-sm text-neutral-300">Shaping Industries with Intelligent Automation</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
          Welcome to{' '}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-400 animate-gradient">
              Evizen AI
            </span>
            <span className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent blur-lg opacity-50 animate-pulse"></span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
          We build AI products and automation workflows that transform business operations across industries
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up delay-300">
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-white text-neutral-950 rounded-lg font-semibold hover:bg-neutral-200 hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-2xl overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative">Get Started</span>
            <ArrowRight size={20} className="relative group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          <button
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative group-hover:tracking-wider transition-all duration-300">Explore Products</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow cursor-pointer">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 hover:border-white/50 transition-colors">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
