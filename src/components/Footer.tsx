import BrandLogo from './BrandLogo';

const links = [
  ['Work', '/#work'],
  ['Platforms', '/#platforms'],
  ['Capabilities', '/#capabilities'],
  ['Contact', '/#contact'],
];

const products = [
  ['Thermal Eye', '/thermal-eye'],
  ['Unilic', '/unilic'],
];

export default function Footer() {
  return (
    <footer className="final-footer relative overflow-hidden border-t border-stone-200 bg-[#FFFFFF]">
      <div className="footer-motif" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8" aria-label="Final call to action">
        <div className="max-w-4xl">
          <p className="section-label">Build with Evizen</p>
          <h2 className="mt-5 text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-stone-950 sm:text-6xl lg:text-7xl">
            Build operational systems that teams can rely on.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            Evizen AI designs and builds AI-enabled software for complex workflows, predictive visibility, and
            production-grade operations.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/#contact" className="btn-premium bg-stone-950 text-white hover:bg-stone-800">
              Work with us
            </a>
            <a href="/#platforms" className="btn-premium border border-stone-300 text-stone-950 hover:border-stone-950 hover:bg-white/45">
              Explore platforms
            </a>
          </div>
        </div>
      </section>

      <div className="relative z-10 border-t border-stone-300/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.7fr_0.7fr] lg:px-8">
          <div>
            <div className="flex items-center">
              <BrandLogo className="h-10 w-auto" />
            </div>
            <p className="mt-4 max-w-lg text-sm leading-6 text-stone-600">
              AI systems for operationally complex industries.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="footer-heading">Links</p>
            <div className="mt-4 grid gap-3">
              {links.map(([label, href]) => (
                <a key={href} href={href} className="link-underline text-sm font-medium text-stone-600 transition-colors hover:text-stone-950">
                  {label}
                </a>
              ))}
            </div>
          </nav>

          <nav aria-label="Footer products">
            <p className="footer-heading">Products</p>
            <div className="mt-4 grid gap-3">
              {products.map(([label, href]) => (
                <a key={href} href={href} className="link-underline text-sm font-medium text-stone-600 transition-colors hover:text-stone-950">
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-stone-200 px-5 py-5 text-xs font-medium text-stone-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>&copy; {new Date().getFullYear()} Evizen AI. All rights reserved.</p>
          <a href="mailto:contact@evizenai.com" className="link-underline text-stone-600 transition-colors hover:text-stone-950">
            contact@evizenai.com
          </a>
        </div>
      </div>
    </footer>
  );
}


