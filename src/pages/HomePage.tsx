import { FormEvent, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const pillars = [
  ['Operational intelligence', 'Systems that make fragmented activity visible enough to act on.'],
  ['Workflow automation', 'Structured flows for approvals, reporting, routing, and repeated operational work.'],
  ['Predictive systems', 'Anomaly detection and decision support for teams managing operational risk.'],
];

const domains = [
  [
    'Power infrastructure',
    'Reactive maintenance and delayed anomaly visibility increase asset risk.',
    'Thermal anomaly detection, asset visibility, and predictive maintenance workflows.',
  ],
  [
    'Academic institutions',
    'Attendance, coursework, grading, and communication often sit across disconnected systems.',
    'Unified academic workflows for students, faculty, and administrators.',
  ],
  [
    'Enterprise operations',
    'Manual approvals, reporting, and coordination slow down operational teams.',
    'Workflow automation, operational dashboards, and integrations with existing tools.',
  ],
];

const capabilities = [
  ['AI systems', 'Models, data pipelines, and decision-support layers built for practical deployment.'],
  ['Predictive analytics', 'Forecasting, anomaly detection, and risk signals for operational planning.'],
  ['Workflow automation', 'Approvals, routing, escalation, and reporting workflows for internal teams.'],
  ['Enterprise integrations', 'Connections with databases, ERPs, CRMs, internal tools, and identity systems.'],
  ['Operational dashboards', 'Interfaces that help teams review status, exceptions, and action queues.'],
  ['Infrastructure software', 'Portals, admin systems, mobile tools, and monitoring layers built for long-term use.'],
];

const why = [
  ['Engineering depth', 'We approach problems from the system level: data, workflows, interfaces, deployment, and maintenance.'],
  ['Operational understanding', 'Our work is shaped by the environments where the software will actually be used.'],
  ['Production mindset', 'We design for reliability, monitoring, maintainability, and adoption from the beginning.'],
  ['Clear product thinking', 'We turn complex operational requirements into usable software with focused workflows.'],
];

const products = [
  {
    name: 'Thermal Eye',
    label: 'Power systems',
    href: '/thermal-eye',
    description: 'Predictive maintenance and thermal anomaly detection for transmission infrastructure.',
    credibility: 'Built in collaboration with Tata Power.',
    points: [
      'Early hotspot detection',
      '110kV / 220kV transmission assets',
      'Maintenance prioritization',
      'Operational visibility for power teams',
    ],
  },
  {
    name: 'Unilic',
    label: 'Academic operations',
    href: '/unilic',
    description: 'Mobile-first academic operational infrastructure for institutions.',
    credibility: 'Launching at IIT Ropar.',
    points: [
      'Attendance and coursework workflows',
      'Faculty and student coordination',
      'Grading and communication workflows',
      'Institution-wide operational visibility',
    ],
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f7f3ea] text-stone-950">
      <Hero />
      <WhatWeBuild />
      <Platforms />
      <OperatingDomains />
      <Capabilities />
      <WhyEvizen />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="border-b border-stone-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.86fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold text-teal-800">Operational AI systems</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
            AI systems for operationally complex environments.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            Evizen AI builds production-grade automation, predictive analytics, and operational intelligence systems for
            power, academic, and enterprise workflows.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#platforms"
              className="inline-flex items-center justify-center rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
            >
              Explore platforms
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-950 transition-colors hover:border-stone-950"
            >
              Work with us
            </a>
          </div>
        </div>

        <SystemMap />
      </div>
    </section>
  );
}

function SystemMap() {
  return (
    <div className="rounded-[1.5rem] border border-stone-300 bg-[#fbfaf5] p-6">
      <p className="text-sm font-semibold text-stone-950">Operational layer</p>
      <div className="mt-8 space-y-6">
        {[
          ['Signals', 'Inspection data, academic activity, internal events'],
          ['Workflows', 'Review, routing, approvals, escalation'],
          ['Decisions', 'Prioritization, reporting, operational action'],
          ['Operations', 'Maintenance teams, institutions, enterprise users'],
        ].map(([title, copy], index) => (
          <div key={title} className="grid grid-cols-[2rem_1fr] gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-teal-700 text-sm font-semibold text-teal-800">
                {index + 1}
              </span>
              {index < 3 && <span className="mt-2 h-10 w-px bg-stone-300" />}
            </div>
            <div className="pb-6">
              <h3 className="text-xl font-semibold tracking-tight text-stone-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">{copy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhatWeBuild() {
  return (
    <section id="work" className="border-b border-stone-200 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-teal-800">What we build</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">Software systems for real operational work.</h2>
          </div>
          <div>
            <p className="max-w-3xl text-lg leading-8 text-stone-700">
              Many organizations still depend on manual coordination, fragmented tools, delayed reporting, and reactive
              decisions. Evizen AI builds systems that connect data, workflows, decisions, and users into reliable
              operational software.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {pillars.map(([title, copy]) => (
                <div key={title} className="border-l border-stone-300 pl-5">
                  <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  return (
    <section id="platforms" className="border-b border-stone-200 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold text-teal-800">Platforms</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">Focused products for operational teams.</h2>
        </div>

        <div className="divide-y divide-stone-300 border-y border-stone-300">
          {products.map((product) => (
            <article key={product.name} className="grid gap-8 py-10 lg:grid-cols-[0.72fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold text-teal-800">{product.label}</p>
                <h3 className="mt-3 text-4xl font-semibold tracking-tight">{product.name}</h3>
                <p className="mt-4 text-lg leading-8 text-stone-700">{product.description}</p>
                <p className="mt-4 text-sm font-semibold text-stone-950">{product.credibility}</p>
              </div>
              <div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {product.points.map((point) => (
                    <p key={point} className="border-t border-stone-300 pt-3 text-sm leading-6 text-stone-700">
                      {point}
                    </p>
                  ))}
                </div>
                <a href={product.href} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-stone-950">
                  View {product.name}
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OperatingDomains() {
  return (
    <section className="border-b border-stone-200 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-teal-800">Operating domains</p>
        <div className="mt-8 divide-y divide-stone-300 border-y border-stone-300">
          {domains.map(([domain, problem, response]) => (
            <article key={domain} className="grid gap-6 py-7 lg:grid-cols-[0.55fr_1fr_1fr]">
              <h3 className="text-2xl font-semibold tracking-tight">{domain}</h3>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-stone-500">Problem</p>
                <p className="mt-2 text-sm leading-6 text-stone-700">{problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-teal-800">System response</p>
                <p className="mt-2 text-sm leading-6 text-stone-700">{response}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-stone-200 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-teal-800">Capabilities</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">The layers behind operational software.</h2>
        </div>
        <div className="divide-y divide-stone-300 border-y border-stone-300">
          {capabilities.map(([name, copy]) => (
            <div key={name} className="grid gap-3 py-5 sm:grid-cols-[0.42fr_1fr]">
              <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
              <p className="text-sm leading-6 text-stone-700">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyEvizen() {
  return (
    <section className="bg-stone-950 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-teal-300">Why Evizen</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">Built for systems that need to work beyond the pilot.</h2>
        </div>
        <div className="divide-y divide-white/15 border-y border-white/15">
          {why.map(([title, copy], index) => (
            <article key={title} className="grid gap-4 py-6 sm:grid-cols-[4rem_1fr]">
              <span className="text-sm font-semibold text-teal-300">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-300">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    interest: '',
    message: '',
  });
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
    window.location.href = `mailto:prashant@evizenai.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-teal-800">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">Bring operational complexity into a better system.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-stone-700">
            If your organization relies on manual workflows, fragmented tools, or reactive processes, Evizen AI can help
            design and build the systems needed to move faster with more control.
          </p>
          <a href="mailto:prashant@evizenai.com" className="mt-6 inline-block text-sm font-semibold text-stone-950">
            Email Evizen AI
          </a>
        </div>

        <form onSubmit={submit} className="border border-stone-300 bg-[#fbfaf5] p-5 sm:p-6">
          {submitted ? (
            <div className="py-10">
              <h3 className="text-2xl font-semibold tracking-tight">Thanks. We will review your message and get back to you.</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">Your email client should open with the inquiry prepared.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} required />
                <Input label="Organization" value={form.organization} onChange={(value) => setForm({ ...form, organization: value })} />
              </div>
              <Input label="Work email" type="email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} required />
              <label className="block">
                <span className="text-sm font-medium text-stone-800">Area of interest</span>
                <select
                  value={form.interest}
                  onChange={(event) => setForm({ ...form, interest: event.target.value })}
                  className="mt-2 w-full border border-stone-300 bg-white px-3 py-3 text-sm outline-none focus:border-teal-700"
                >
                  {['', 'Thermal Eye', 'Unilic', 'AI Systems', 'Workflow Automation', 'Predictive Analytics', 'Enterprise Integrations', 'Other'].map((option) => (
                    <option key={option} value={option}>
                      {option || 'Select an area'}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-stone-800">Message</span>
                <textarea
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  required
                  rows={5}
                  placeholder="Tell us what workflow, system, or operational problem you are trying to improve."
                  className="mt-2 w-full resize-none border border-stone-300 bg-white px-3 py-3 text-sm outline-none placeholder:text-stone-400 focus:border-teal-700"
                />
              </label>
              <button type="submit" className="rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-800">
                Send inquiry
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Input({
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
      <span className="text-sm font-medium text-stone-800">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="mt-2 w-full border border-stone-300 bg-white px-3 py-3 text-sm outline-none focus:border-teal-700"
      />
    </label>
  );
}
