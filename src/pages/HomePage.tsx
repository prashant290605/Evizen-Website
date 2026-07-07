import { FormEvent, ReactNode, useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';

const THERMAL_EYE_URL = 'https://thermal-eye.vercel.app/';
const UNILIC_URL = 'https://www.unilic.in/';

const proofPoints = [
  'Deployed with Tata Power',
  'Built by IIT Ropar engineers',
  'Incubated at TBIF',
  'Live on real infrastructure',
  'No fabricated readings',
];

const capabilities = [
  {
    title: 'Predictive maintenance',
    copy: 'We read your inspection data and tell you which asset fails next — and roughly when — so the fix becomes a scheduled job, not a 2am outage.',
  },
  {
    title: 'Workflow automation',
    copy: 'The approvals, routing, grading and reporting that quietly eat your team’s week, moved off spreadsheets and into a system that just does it.',
  },
  {
    title: 'Operational intelligence',
    copy: 'One screen that turns scattered signals into a ranked list of what to do next. Not another dashboard nobody opens.',
  },
];

const principles = [
  {
    title: 'Architecture before polish',
    copy: 'Pipelines, models, interfaces, deployment — we build the whole system, not a pretty front end bolted onto a fragile core.',
  },
  {
    title: 'Designed for the day after the pilot',
    copy: 'Monitoring, reliability and adoption are in the plan from line one. Our software is meant to still be running in a year.',
  },
  {
    title: 'Built around the people who use it',
    copy: 'The maintenance crew, the faculty member, the ops desk at 2am. We design for the real environment, not the demo.',
  },
  {
    title: 'Proof, not promises',
    copy: 'Live on Tata Power infrastructure. Built at IIT Ropar. We would rather show you it working than tell you it will.',
  },
];

const stats = [
  ['02', 'Products live in the field'],
  ['400kV', 'Transmission assets watched'],
  ['<20s', 'To mark a full class present'],
  ['IIT Ropar', 'Where Unilic is deployed'],
];

export default function HomePage() {
  return (
    <main className="bg-transparent text-neutral-900">
      <Hero />
      <ProofStrip />
      <WhatWeBuild />
      <Products />
      <WhyEvizen />
      <Contact />
    </main>
  );
}

function Eyebrow({ index, children, invert = false }: { index: string; children: ReactNode; invert?: boolean }) {
  return (
    <div className={`mono flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] ${invert ? 'text-white' : 'text-black'}`}>
      <span>{index}</span>
      <span className={`h-0.5 w-9 ${invert ? 'bg-white' : 'bg-black'}`} />
      <span>{children}</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-black">
      <span className="screentone-drift" aria-hidden="true" />
      <span className="speed-lines" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-28">
        <div data-reveal-group>
          <Eyebrow index="00">Applied AI · Production systems</Eyebrow>
          <h1 className="mt-7 font-display text-[clamp(2.7rem,6.2vw,4.8rem)] font-black leading-[1.04] tracking-[-0.02em] text-black">
            AI systems for operations that{' '}
            <span className="ink-underline-text">can&rsquo;t afford to fail.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
            Evizen builds production-grade AI — predictive maintenance, workflow automation, and operational
            intelligence — for the power grids and institutions where software failing quietly is not an option.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Work with us
              <ArrowRight size={16} />
            </a>
            <a href="#platforms" className="btn-ghost">See what we&rsquo;ve shipped</a>
          </div>
          <p className="mono mt-10 text-[0.72rem] uppercase tracking-[0.18em] text-neutral-500">
            Deployed <span className="text-black">— Tata Power</span> · Built{' '}
            <span className="text-black">— IIT Ropar</span> · Incubated <span className="text-black">— TBIF</span>
          </p>
        </div>

        <div data-reveal className="relative">
          <FleetMonitorMock />
        </div>
      </div>
    </section>
  );
}

const toneClass: Record<string, string> = {
  risk: 'bg-black text-white border-2 border-black',
  watch: 'bg-white text-black border-2 border-black',
  ok: 'bg-white text-neutral-500 border border-black/30',
};

function FleetMonitorMock() {
  const rows = [
    { id: 'TWR-110-085', kv: '400kV', line: 'Bhira–Khopoli L2', status: 'AT RISK', tone: 'risk', dt: '+2.1' },
    { id: 'TWR-220-014', kv: '220kV', line: 'Kalwa–Salsette', status: 'WATCH', tone: 'watch', dt: '+0.7' },
    { id: 'TWR-110-207', kv: '110kV', line: 'Trombay Feeder', status: 'HEALTHY', tone: 'ok', dt: '+0.1' },
  ];
  return (
    <div className="mock-shell">
      <div className="flex items-center justify-between border-b-2 border-black bg-black px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="pulse-dot inline-block h-2 w-2 bg-white" />
          <span className="mono text-sm font-bold uppercase tracking-wide text-white">Thermal Eye</span>
          <span className="mono text-[0.65rem] uppercase tracking-wider text-white/60">Fleet monitor</span>
        </div>
        <span className="mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white">Live</span>
      </div>

      <div className="space-y-2.5 p-5">
        {rows.map((r) => (
          <div key={r.id} className="flex items-center justify-between border-2 border-black bg-white px-3.5 py-3">
            <div className="min-w-0">
              <p className="mono truncate text-sm font-bold text-black">{r.id}</p>
              <p className="truncate text-xs text-neutral-500">{r.kv} · {r.line}</p>
            </div>
            <div className="flex items-center gap-3 pl-3">
              <span className="mono hidden text-xs text-neutral-600 sm:inline">ΔT {r.dt}°C</span>
              <span className={`mono px-2 py-1 text-[0.6rem] font-bold tracking-wide ${toneClass[r.tone]}`}>
                {r.status}
              </span>
            </div>
          </div>
        ))}

        <div className="border-2 border-black">
          <div className="flex items-center gap-2 border-b-2 border-black bg-white px-4 py-2">
            <span className="tone-dense inline-block h-3 w-3 border border-black" />
            <p className="mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-black">TWR-110-085 · forecast</p>
          </div>
          <div className="p-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="mono text-2xl font-black text-black">~6 wks</p>
                <p className="text-xs text-neutral-500">to critical threshold</p>
              </div>
              <div className="text-right">
                <p className="mono text-2xl font-black text-black">92%</p>
                <p className="text-xs text-neutral-500">confidence</p>
              </div>
            </div>
            <div className="mt-3 h-3 w-full border-2 border-black bg-white">
              <div className="meter-fill h-full bg-black" style={{ width: '78%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="mono flex items-center justify-between border-t-2 border-black px-5 py-3 text-xs text-neutral-600">
        <span><span className="font-bold text-black">1,204</span> assets healthy</span>
        <span><span className="font-bold text-black">3</span> flagged for action</span>
      </div>
    </div>
  );
}

function ProofStrip() {
  const loop = [...proofPoints, ...proofPoints, ...proofPoints, ...proofPoints];
  return (
    <section className="ink-panel relative overflow-hidden border-b-2 border-black">
      <span className="screentone-drift-light" aria-hidden="true" />
      <div className="marquee relative py-4">
        <div className="marquee-track mono text-[0.72rem] uppercase tracking-[0.2em] text-white" aria-hidden="true">
          {loop.map((p, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6">
              <span className="inline-block h-1.5 w-1.5 bg-white" />
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeBuild() {
  return (
    <section id="work" className="border-b-2 border-black py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl" data-reveal-group>
          <Eyebrow index="01">What we build</Eyebrow>
          <h2 className="mt-6 text-4xl font-black leading-[1.02] text-black sm:text-5xl">
            We don&rsquo;t ship demos. We ship systems that run every day.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Most operations still run on manual coordination, fragmented tools and reactive decisions. Evizen builds the
            software layer that connects data, workflows and people into something teams actually rely on.
          </p>
        </div>

        <div className="mt-14 grid border-2 border-black md:grid-cols-3" data-reveal-group>
          {capabilities.map(({ title, copy }, i) => (
            <div key={title} className="group relative border-b-2 border-black p-8 transition-colors last:border-b-0 hover:bg-black hover:text-white md:border-b-0 md:[&:not(:last-child)]:border-r-2 lg:p-10">
              <span className="mono text-3xl font-black text-black transition-colors group-hover:text-white">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-5 text-2xl font-black text-black transition-colors group-hover:text-white">{title}</h3>
              <p className="mt-4 text-[0.95rem] leading-7 text-neutral-600 transition-colors group-hover:text-white/80">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="platforms" className="relative border-b-2 border-black py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl" data-reveal-group>
          <Eyebrow index="02">Products</Eyebrow>
          <h2 className="mt-6 text-4xl font-black leading-[1.02] text-black sm:text-5xl">
            Two products. Both already live in the real world.
          </h2>
        </div>

        <div className="mt-16 space-y-20 lg:space-y-28">
          <ProductBlock
            eyebrow="Power infrastructure"
            name="Thermal Eye"
            tagline="See the failure before it happens."
            copy="Predictive thermal intelligence for the grid. Thermal Eye reads temperature straight from your inspection imagery, grades every hotspot, and forecasts which transmission asset fails next — weeks before it does."
            credibility="Live on Tata Power transmission infrastructure."
            features={[
              'Reads the reading — never fabricates one',
              'Per-asset time-to-critical forecasting',
              'Fleet-wide risk ranking & auto-routed alerts',
              'Board-ready reports, tenant-isolated data',
            ]}
            href="/thermal-eye"
            liveHref={THERMAL_EYE_URL}
            liveLabel="Open live product"
            visual={<ThermalPredictMock />}
          />
          <ProductBlock
            reverse
            eyebrow="Academic operations"
            name="Unilic"
            tagline="The proxy-proof classroom."
            copy="Unilic marks a whole class present in under 20 seconds and makes proxy attendance physically impossible with four stacked verification layers — then keeps grading and coursework in one audit-ready system."
            credibility="Built and deployed at IIT Ropar."
            features={[
              'Four-layer anti-proxy verification',
              'A full class marked present in under 20s',
              'Automated grading and marks distribution',
              'NAAC / NBA audit-ready records',
            ]}
            href="/unilic"
            liveHref={UNILIC_URL}
            liveLabel="Visit unilic.in"
            visual={<ClassCheckinMock />}
          />
        </div>
      </div>
    </section>
  );
}

function ProductBlock({
  eyebrow,
  name,
  tagline,
  copy,
  credibility,
  features,
  href,
  liveHref,
  liveLabel,
  visual,
  reverse = false,
}: {
  eyebrow: string;
  name: string;
  tagline: string;
  copy: string;
  credibility: string;
  features: string[];
  href: string;
  liveHref: string;
  liveLabel: string;
  visual: ReactNode;
  reverse?: boolean;
}) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16" data-reveal-group>
      <div className={reverse ? 'lg:order-2' : ''}>
        <p className="section-label">{eyebrow}</p>
        <h3 className="mt-5 text-5xl font-black tracking-tight text-black sm:text-6xl">{name}</h3>
        <p className="mt-4 inline-block border-b-4 border-black text-xl font-bold text-black">{tagline}</p>
        <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-neutral-600">{copy}</p>
        <ul className="mt-7 grid gap-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-[0.95rem] font-medium text-neutral-800">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center bg-black text-white">
                <Check size={12} strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>
        <p className="mono mt-7 text-[0.72rem] uppercase tracking-[0.14em] text-black">{credibility}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href={href} className="link-underline text-sm font-bold uppercase tracking-wide text-black">
            Explore {name}
            <ArrowRight size={16} />
          </a>
          <a href={liveHref} target="_blank" rel="noreferrer" className="link-underline text-sm font-bold uppercase tracking-wide text-black">
            {liveLabel}
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className={reverse ? 'lg:order-1' : ''}>{visual}</div>
    </article>
  );
}

function ThermalPredictMock() {
  const bars = [28, 34, 33, 42, 51, 63, 78, 92];
  return (
    <div className="mock-shell">
      <div className="flex items-center justify-between border-b-2 border-black px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="pulse-dot inline-block h-2 w-2 bg-black" />
          <span className="mono text-sm font-bold text-black">TWR-110-085</span>
        </div>
        <span className="mono bg-black px-2 py-1 text-[0.6rem] font-bold tracking-wide text-white">AT RISK</span>
      </div>

      <div className="p-5 sm:p-6">
        <p className="mono text-[0.65rem] uppercase tracking-[0.16em] text-neutral-500">ΔT trend · last 8 inspections</p>
        <div className="mt-4 flex h-32 items-end gap-2 border-b-2 border-black">
          {bars.map((h, i) => (
            <div key={i} className="chart-bar flex-1 border-2 border-b-0 border-black bg-black" style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 divide-x-2 divide-black border-2 border-black">
          {[
            ['+2.1°C', 'critical ΔT'],
            ['~6 wks', 'to critical'],
            ['92%', 'confidence'],
          ].map(([v, l]) => (
            <div key={l} className="p-3">
              <p className="mono text-lg font-black text-black">{v}</p>
              <p className="text-[0.7rem] text-neutral-500">{l}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-black">
          <Check size={13} strokeWidth={3} /> No fabricated readings — verified from source imagery
        </p>
      </div>
    </div>
  );
}

function ClassCheckinMock() {
  const layers = [
    ['GPS geofence', 'inside room'],
    ['Rotating token', 'valid · 30s'],
    ['Device fingerprint', '1 phone : 1 student'],
    ['Anti-spoof', 'no anomalies'],
  ];
  return (
    <div className="mock-shell">
      <div className="flex items-center justify-between border-b-2 border-black bg-black px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="pulse-dot inline-block h-2 w-2 bg-white" />
          <span className="mono text-sm font-bold uppercase text-white">Unilic</span>
          <span className="mono text-[0.65rem] uppercase tracking-wider text-white/60">CS-207</span>
        </div>
        <span className="mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white">Verified</span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="mono text-4xl font-black text-black">62<span className="text-neutral-400"> / 64</span></p>
            <p className="text-xs text-neutral-500">present</p>
          </div>
          <div className="text-right">
            <p className="mono text-4xl font-black text-black">18s</p>
            <p className="text-xs text-neutral-500">to mark class</p>
          </div>
        </div>

        <div className="mt-5 space-y-2.5">
          {layers.map(([label, meta]) => (
            <div key={label} className="flex items-center justify-between border-2 border-black bg-white px-3.5 py-2.5">
              <span className="inline-flex items-center gap-2.5 text-sm font-bold text-black">
                <span className="inline-flex h-5 w-5 items-center justify-center bg-black text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                {label}
              </span>
              <span className="mono text-[0.7rem] text-neutral-500">{meta}</span>
            </div>
          ))}
        </div>

        <p className="mono mt-4 text-[0.72rem] text-neutral-600">
          <span className="font-bold text-black">2</span> flagged for review · proxy attempts blocked
        </p>
      </div>
    </div>
  );
}

function WhyEvizen() {
  return (
    <section id="capabilities" className="ink-panel relative overflow-hidden border-b-2 border-black py-20 sm:py-24 lg:py-28">
      <span className="screentone-drift-light" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start" data-reveal-group>
            <Eyebrow index="03" invert>Why Evizen</Eyebrow>
            <h2 className="mt-6 text-4xl font-black leading-[1.02] text-white sm:text-5xl">
              Built to survive the day after the pilot.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-white/70">
              A lot of AI looks impressive in a slide and dies in production. We build for the opposite — the boring,
              critical days when the software just has to work.
            </p>
          </div>

          <div className="grid divide-y divide-white/20 border-y-2 border-white/30" data-reveal-group>
            {principles.map((p, i) => (
              <article key={p.title} className="group flex gap-6 py-7">
                <span className="mono pt-1 text-2xl font-black text-white/40">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-xl font-black text-white">{p.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-7 text-white/70">{p.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 border-2 border-white/30 lg:grid-cols-4" data-reveal-group>
          {stats.map(([num, label], i) => (
            <div key={label} className={`p-6 sm:p-8 ${i < 2 ? 'border-b-2 border-white/30 lg:border-b-0' : ''} ${i % 2 === 0 ? 'border-r-2 border-white/30' : ''} ${i === 2 ? 'lg:border-r-2 lg:border-white/30' : ''}`}>
              <p className="mono text-3xl font-black tracking-tight text-white sm:text-4xl">{num}</p>
              <p className="mt-2 text-sm leading-6 text-white/60">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', organization: '', email: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get('interest');
    if (interest) setForm((current) => ({ ...current, interest }));
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Evizen AI inquiry from ${form.name || 'website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganization: ${form.organization}\nWork email: ${form.email}\nArea of interest: ${form.interest}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:contact@evizenai.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div data-reveal-group>
          <Eyebrow index="04">Contact</Eyebrow>
          <h2 className="mt-6 text-4xl font-black leading-[1.02] text-black sm:text-5xl">
            Tell us what can&rsquo;t afford to break.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-neutral-600">
            If your team runs on manual workflows, fragmented tools, or reactive processes, we can help you design and
            ship the system that fixes it. Tell us the problem — we&rsquo;ll reply with a short discovery note.
          </p>
          <a href="mailto:contact@evizenai.com" className="link-underline mono mt-7 text-sm font-bold text-black">
            contact@evizenai.com
            <ArrowUpRight size={15} />
          </a>
        </div>

        <form onSubmit={submit} className="panel panel-shadow p-6 sm:p-8" data-reveal>
          {submitted ? (
            <div className="py-8">
              <h3 className="text-2xl font-black text-black">Thanks — we&rsquo;ll be in touch.</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">Your email client should open with the inquiry ready to send.</p>
            </div>
          ) : (
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <Field label="Organization" value={form.organization} onChange={(v) => setForm({ ...form, organization: v })} />
              </div>
              <Field label="Work email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
              <label className="block">
                <span className="mono mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black">Area of interest</span>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="contact-control"
                >
                  {['', 'Thermal Eye', 'Unilic', 'Workflow automation', 'Predictive analytics', 'Operational intelligence', 'Other'].map((o) => (
                    <option key={o} value={o}>{o || 'Select an area'}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mono mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black">Message</span>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  placeholder="Tell us what workflow, system, or operational problem you're trying to fix."
                  className="contact-control"
                />
              </label>
              <div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send inquiry
                  <ArrowRight size={16} />
                </button>
                <p className="mt-4 text-sm leading-6 text-neutral-500">We usually reply with a short discovery note and next-step questions.</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mono mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-black">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="contact-control"
      />
    </label>
  );
}
