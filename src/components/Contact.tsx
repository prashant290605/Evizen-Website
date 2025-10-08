import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'N/A'}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open default email client
    window.location.href = `mailto:prashant@evizenai.com?subject=${subject}&body=${body}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-on-scroll">Let's Connect</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto animate-on-scroll delay-100">
            Ready to transform your business with AI? Get in touch for inquiries, collaborations, and partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll delay-200">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Partner With Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-neutral-950 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Industry Expertise</h4>
                    <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors">
                      Deep understanding of sector-specific challenges and opportunities
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-neutral-950 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Proven Solutions</h4>
                    <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors">
                      Track record of successful implementations across industries
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-neutral-950 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ongoing Support</h4>
                    <p className="text-neutral-400 text-sm group-hover:text-neutral-300 transition-colors">
                      Dedicated team ensuring your success at every step
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-neutral-700 hover:shadow-xl transition-all duration-300 group">
              <Mail className="w-8 h-8 text-white mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-semibold mb-2">Direct Contact</h4>
              <p className="text-neutral-400 text-sm mb-4">
                Prefer email? Reach out directly to discuss your project
              </p>
              <a
                href="mailto:prashant@evizenai.com"
                className="text-white hover:text-neutral-300 transition-colors font-medium inline-block hover:translate-x-1 duration-300"
              >
                prashant@evizenai.com
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 animate-on-scroll delay-300 shadow-2xl">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 animate-slide-up">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold text-neutral-950 mb-2">Message Sent!</h3>
                <p className="text-neutral-600">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-950 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                      focusedField === 'name'
                        ? 'border-neutral-950 scale-105'
                        : 'border-neutral-300'
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-950 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                      focusedField === 'email'
                        ? 'border-neutral-950 scale-105'
                        : 'border-neutral-300'
                    }`}
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-neutral-950 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                      focusedField === 'company'
                        ? 'border-neutral-950 scale-105'
                        : 'border-neutral-300'
                    }`}
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-950 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 resize-none ${
                      focusedField === 'message'
                        ? 'border-neutral-950 scale-105'
                        : 'border-neutral-300'
                    }`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full px-6 py-4 bg-neutral-950 text-white rounded-lg font-semibold hover:bg-neutral-800 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
