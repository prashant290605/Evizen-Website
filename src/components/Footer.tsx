import { ArrowUpRight, ArrowRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

const links = [
  ['Work', '/#work'],
  ['Products', '/#platforms'],
  ['Capabilities', '/#capabilities'],
  ['Contact', '/#contact'],
];

const products: Array<[string, string, boolean]> = [
  ['Thermal Eye', '/thermal-eye', false],
  ['thermal-eye.vercel.app', 'https://thermal-eye.vercel.app/', true],
  ['Unilic', '/unilic', false],
  ['unilic.in', 'https://www.unilic.in/', true],
];

export default function Footer() {
  return (
    <footer className="final-footer relative overflow-hidden border-t-2 border-black">
      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8" aria-label="Final call to action">
        <div className="max-w-4xl">
          <p className="mono flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white">
            <span className="h-0.5 w-9 bg-white" />
            Build with Evizen
          </p>
          <h2 className="mt-6 text-5xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">
            Systems that hold up when the stakes are real.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Evizen AI designs and ships production-grade AI — predictive maintenance, workflow automation, and
            operational intelligence — for teams that can&rsquo;t afford for the software to quietly fail.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="/#contact" className="btn-premium justify-center border-white bg-white text-black hover:bg-transparent hover:text-white">
              Work with us
              <ArrowRight size={16} />
            </a>
            <a href="/#platforms" className="btn-premium justify-center border-white bg-transparent text-white hover:bg-white hover:text-black">
              Explore products
            </a>
          </div>
        </div>
      </section>

      <div className="relative z-10 border-t-2 border-white/20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.7fr_0.9fr] lg:px-8">
          <div>
            <BrandLogo className="h-9 w-auto" />
            <p className="mt-4 max-w-lg text-sm leading-6 text-white/60">
              AI systems for operations that can&rsquo;t afford to fail.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="footer-heading">Company</p>
            <div className="mt-4 grid gap-3">
              {links.map(([label, href]) => (
                <a key={href} href={href} className="link-underline text-sm font-medium text-white/70 transition-colors hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </nav>

          <nav aria-label="Footer products">
            <p className="footer-heading">Products</p>
            <div className="mt-4 grid gap-3">
              {products.map(([label, href, external]) => (
                <a
                  key={href}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className={`link-underline text-sm font-medium transition-colors hover:text-white ${
                    external ? 'text-white/50' : 'text-white/80'
                  }`}
                >
                  {label}
                  {external && <ArrowUpRight size={13} className="opacity-70" />}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="mono mx-auto flex max-w-7xl flex-col gap-3 border-t-2 border-white/20 px-5 py-5 text-xs text-white/50 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>&copy; {new Date().getFullYear()} Evizen AI. All rights reserved.</p>
          <a href="mailto:contact@evizenai.com" className="link-underline text-white/70 transition-colors hover:text-white">
            contact@evizenai.com
          </a>
        </div>
      </div>
    </footer>
  );
}
