import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

const navItems = [
  { label: 'Work', href: '/#work' },
  { label: 'Products', href: '/#platforms' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(window.location.pathname + window.location.hash);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

      if (window.location.pathname === '/') {
        const current = navItems
          .map((item) => item.href.slice(2))
          .map((id) => document.getElementById(id))
          .filter((section): section is HTMLElement => Boolean(section))
          .find((section) => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 120 && rect.bottom >= 120;
          });

        if (current) {
          setActiveHref(`/#${current.id}`);
        }
      }
    };

    const handleLocation = () => setActiveHref(window.location.pathname + window.location.hash);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleLocation);
    window.addEventListener('popstate', handleLocation);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleLocation);
      window.removeEventListener('popstate', handleLocation);
    };
  }, []);

  return (
    <header className="site-header sticky top-0 z-50 border-b-2 border-black backdrop-blur-xl">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? 'h-14' : 'h-16'
        }`}
        aria-label="Main navigation"
      >
        <a href="/" className="group flex items-center" aria-label="Evizen AI home">
          <BrandLogo className="h-8 w-auto sm:h-9" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`mono relative text-xs font-semibold uppercase tracking-wider transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-black after:transition-all after:duration-300 hover:text-black ${
                  active ? 'text-black after:opacity-100' : 'text-neutral-500 after:opacity-0 hover:after:opacity-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a href="/#contact" className="btn-premium bg-black px-4 py-2 text-white">
            Work With Us
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border-2 border-black text-black transition-colors hover:bg-black hover:text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu border-t-2 border-black bg-[#f6f5f1] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="mono px-2 py-3 text-sm font-semibold uppercase tracking-wide text-neutral-700 hover:text-black"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn-premium mt-3 justify-center bg-black text-white"
            >
              Work With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
