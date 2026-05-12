import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Work', href: '/#work' },
  { label: 'Platforms', href: '/#platforms' },
  { label: 'Capabilities', href: '/#capabilities' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#f7f3ea]/92 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-300 text-xs font-semibold text-stone-950">
            E
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-stone-950">Evizen AI</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-stone-700 transition-colors hover:text-stone-950">
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="rounded-full border border-stone-950 bg-stone-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
          >
            Work With Us
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-950 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-stone-200 bg-[#f7f3ea] px-5 py-4 md:hidden">
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
