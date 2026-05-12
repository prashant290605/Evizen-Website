import { Workflow, Cpu, Settings, BarChart } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamline your business processes with intelligent automation that learns and adapts to your operations.',
      features: [
        'Process optimization',
        'Custom workflow design',
        'Integration with existing systems',
        'Real-time monitoring',
      ],
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Seamlessly integrate cutting-edge AI capabilities into your existing infrastructure and applications.',
      features: [
        'Custom AI model development',
        'API integration',
        'Legacy system modernization',
        'Scalable architecture',
      ],
    },
    {
      icon: Settings,
      title: 'Intelligent Systems',
      description: 'Build smart systems that make data-driven decisions and continuously improve performance.',
      features: [
        'Machine learning pipelines',
        'Predictive analytics',
        'Autonomous decision-making',
        'Performance optimization',
      ],
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
      features: [
        'Real-time dashboards',
        'Predictive modeling',
        'Custom reporting',
        'Data visualization',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-neutral-950 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neutral-950 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 mb-4 animate-on-scroll">Our Services</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto animate-on-scroll delay-100">
            Comprehensive AI and automation solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 bg-neutral-50 border-2 rounded-xl transition-all duration-500 cursor-pointer ${
                hoveredIndex === index
                  ? 'border-neutral-950 shadow-2xl scale-105 bg-white'
                  : 'border-neutral-200 hover:shadow-xl hover:-translate-y-1'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`w-14 h-14 bg-neutral-950 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 ${
                  hoveredIndex === index ? 'scale-125 rotate-12' : 'group-hover:scale-110'
                }`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-neutral-950 mb-3 group-hover:tracking-wide transition-all">
                {service.title}
              </h3>
              <p className="text-neutral-700 mb-6 leading-relaxed group-hover:text-neutral-900 transition-colors">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        hoveredIndex === index ? 'bg-neutral-950 scale-150' : 'bg-neutral-950'
                      }`}
                    ></div>
                    <span className="text-neutral-600 group-hover:text-neutral-900 transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-12 bg-neutral-950 rounded-2xl text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Need a Custom Solution?</h3>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto relative z-10">
            Every business is unique. Let's discuss how we can build a tailored AI solution for your specific needs.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-neutral-950 rounded-lg font-semibold hover:bg-neutral-200 hover:scale-105 transition-all duration-300 relative z-10"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
