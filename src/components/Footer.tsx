export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/Evizen ai-06.png" alt="Evizen AI" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-white">Evizen AI</span>
            </div>
            <p className="text-neutral-500 max-w-md">
              Shaping industries with intelligent automation. Building AI products that transform business operations worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="mailto:prashant@evizenai.com" className="text-neutral-500 hover:text-white transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-900 text-center">
          <p className="text-neutral-500 text-sm">
            {currentYear} Evizen AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
