import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

const navItems = [
  { label: 'Work', href: '/#work' },
  { label: 'Platforms', href: '/#platforms' },
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
    <header
      className={`site-header sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? 'is-scrolled border-stone-300/80 shadow-[0_10px_30px_rgb(28_25_23_/_0.06)]'
          : 'border-stone-200 shadow-none'
      }`}
    >
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
                className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-2 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-teal-700 after:transition-all after:duration-300 hover:text-stone-950 ${
                  active ? 'text-stone-950 after:opacity-100' : 'text-stone-700 after:opacity-0 hover:after:opacity-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="/#contact"
            className="btn-premium border border-stone-950 bg-stone-950 px-4 py-2 text-white hover:bg-stone-800"
          >
            Work With Us
          </a>
        </div>

        <button
          type="button"
          className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-950 transition-all duration-300 hover:border-stone-950 hover:bg-white/45 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="transition-transform duration-300 group-aria-expanded:rotate-90">
            {open ? <X size={18} /> : <Menu size={18} />}
          </span>
        </button>
      </nav>

      {open && (
        <div className="mobile-menu border-t border-stone-200 bg-[#FFFFFF]/96 px-5 py-4 shadow-[0_18px_45px_rgb(28_25_23_/_0.07)] backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-stone-800 hover:bg-stone-200/60"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-stone-950 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Work With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


