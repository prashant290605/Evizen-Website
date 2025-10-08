import { Scale, Zap, TrendingUp, Heart, DollarSign, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Products() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products = [
    {
      icon: Scale,
      name: 'Nyayasahayak',
      description: 'AI-powered legal assistant that simplifies legal research, document analysis, and case management.',
      status: 'Live',
      statusColor: 'bg-green-500',
      industry: 'Legal Technology',
    },
    {
      icon: Zap,
      name: 'Power Analytics Suite',
      description: 'Intelligent monitoring and predictive analytics for power sector operations and grid management.',
      status: 'Active',
      statusColor: 'bg-green-500',
      industry: 'Power Sector',
    },
    {
      icon: DollarSign,
      name: 'Finance AI',
      description: 'Next-generation financial analysis and risk assessment tools powered by advanced AI.',
      status: 'Coming Soon',
      statusColor: 'bg-amber-500',
      industry: 'Finance',
    },
    {
      icon: Heart,
      name: 'HealthCare Intelligence',
      description: 'AI-driven patient care optimization and medical data analysis for healthcare providers.',
      status: 'In Development',
      statusColor: 'bg-blue-500',
      industry: 'Healthcare',
    },
    {
      icon: TrendingUp,
      name: 'Business Intelligence Hub',
      description: 'Comprehensive analytics and automation platform for enterprise business operations.',
      status: 'Planned',
      statusColor: 'bg-neutral-500',
      industry: 'Enterprise',
    },
  ];

  return (
    <section id="products" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-on-scroll">Our Products</h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto animate-on-scroll delay-100">
            Transforming industries with purpose-built AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group p-8 bg-neutral-900 border-2 rounded-xl transition-all duration-500 cursor-pointer ${
                hoveredIndex === index
                  ? 'border-white shadow-2xl scale-105 bg-neutral-800'
                  : 'border-neutral-800 hover:border-neutral-700'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start justify-between mb-4">
                <product.icon
                  className={`w-10 h-10 text-white transition-all duration-500 ${
                    hoveredIndex === index ? 'scale-125 rotate-12' : ''
                  }`}
                />
                <span
                  className={`px-3 py-1 ${product.statusColor} text-white text-xs font-semibold rounded-full transition-all duration-300 ${
                    hoveredIndex === index ? 'scale-110' : ''
                  }`}
                >
                  {product.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all">
                {product.name}
              </h3>
              <p className="text-sm text-neutral-500 mb-4 font-medium group-hover:text-neutral-400 transition-colors">
                {product.industry}
              </p>
              <p className="text-neutral-400 mb-6 leading-relaxed group-hover:text-neutral-300 transition-colors">
                {product.description}
              </p>

              <button
                className={`flex items-center space-x-2 text-white hover:text-neutral-300 transition-all duration-300 ${
                  hoveredIndex === index ? 'translate-x-2' : ''
                }`}
              >
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight size={16} className={hoveredIndex === index ? 'animate-pulse' : ''} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
