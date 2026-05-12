const links = [
  ['Work', '/#work'],
  ['Platforms', '/#platforms'],
  ['Capabilities', '/#capabilities'],
  ['Contact', '/#contact'],
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#f7f3ea] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-300 text-xs font-semibold text-stone-950">
              E
            </span>
            <span className="text-base font-semibold tracking-tight text-stone-950">Evizen AI</span>
          </div>
          <p className="mt-4 max-w-lg text-sm leading-6 text-stone-600">
            AI systems for operationally complex industries.
          </p>
          <a href="mailto:prashant@evizenai.com" className="mt-4 inline-block text-sm font-medium text-stone-950">
            prashant@evizenai.com
          </a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-950">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
