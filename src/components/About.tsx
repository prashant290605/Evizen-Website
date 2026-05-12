import { Target, Zap, Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const offset = window.innerHeight - rect.top;
        setScrollY(offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      icon: Target,
      title: 'Industry Focus',
      description: 'Deep expertise in power sector operations and legal technology, with expanding reach into finance, healthcare, and beyond.',
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description: 'Cutting-edge AI solutions designed to solve real-world problems and create measurable business value.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Building solutions that scale globally while addressing local industry-specific challenges.',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-neutral-950 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-950 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 mb-4 animate-on-scroll">About Evizen AI</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto animate-on-scroll delay-100">
            Pioneering the future of intelligent automation across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-on-scroll delay-200">
            <h3 className="text-3xl font-bold text-neutral-950 mb-6 relative inline-block">
              Our Mission
              <span className="absolute bottom-0 left-0 w-full h-1 bg-neutral-950 transform origin-left"></span>
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-neutral-700 leading-relaxed hover:text-neutral-900 hover:translate-x-2 transition-all duration-300">
                At Evizen AI, we believe in simplifying complex industries through AI-driven innovation.
                Our journey began with a vision to transform how businesses operate, bringing intelligent
                automation to sectors that need it most.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed hover:text-neutral-900 hover:translate-x-2 transition-all duration-300">
                From the power sector to legal technology, we've built solutions that don't just automate
                tasks — they enhance decision-making, improve efficiency, and unlock new possibilities
                for organizations worldwide.
              </p>
            </div>
          </div>

          <div className="grid gap-6 animate-on-scroll delay-300">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`p-6 bg-neutral-50 rounded-xl border-2 transition-all duration-500 cursor-pointer relative overflow-hidden ${
                  hoveredCard === index
                    ? 'border-neutral-950 shadow-xl scale-105 bg-white'
                    : 'border-neutral-200 hover:shadow-lg'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === index ? 'perspective(1000px) rotateY(5deg)' : 'none',
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-neutral-950/0 via-neutral-950/5 to-neutral-950/0 transform -skew-x-12 transition-transform duration-500 ${
                  hoveredCard === index ? 'translate-x-full' : '-translate-x-full'
                }`}></div>
                <card.icon
                  className={`w-10 h-10 text-neutral-950 mb-4 transition-all duration-500 ${
                    hoveredCard === index ? 'scale-110 rotate-12' : ''
                  }`}
                />
                <h4 className="text-xl font-semibold text-neutral-950 mb-2">{card.title}</h4>
                <p className="text-neutral-600 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
