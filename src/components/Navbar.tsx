import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-neutral-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src="/Evizen ai-06.png" alt="Evizen AI" className="w-8 h-8 object-contain hover:scale-110 hover:rotate-12 transition-all duration-300" />
            <span className="text-xl font-bold text-white">Evizen AI</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-neutral-300 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('products')} className="text-neutral-300 hover:text-white transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection('services')} className="text-neutral-300 hover:text-white transition-colors">
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 bg-white text-neutral-950 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
            >
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 border-t border-neutral-800">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-neutral-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left text-neutral-300 hover:text-white transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-neutral-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-5 py-2 bg-white text-neutral-950 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
