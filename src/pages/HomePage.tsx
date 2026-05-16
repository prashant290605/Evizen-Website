import { FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const pillars = [
  {
    title: 'Operational intelligence',
    copy: 'Systems that make fragmented activity visible enough to act on.',
    capabilities: ['Asset visibility', 'Activity monitoring', 'Exception reporting'],
  },
  {
    title: 'Workflow automation',
    copy: 'Structured flows for approvals, reporting, routing, and repeated operational work.',
    capabilities: ['Review routing', 'Approvals', 'Escalation paths'],
  },
  {
    title: 'Predictive systems',
    copy: 'Anomaly detection and decision support for teams managing operational risk.',
    capabilities: ['Anomaly detection', 'Risk scoring', 'Maintenance prioritization'],
  },
];

const domains = [
  {
    domain: 'Power infrastructure',
    problem: 'Reactive maintenance and delayed anomaly visibility increase asset risk.',
    response: 'Thermal anomaly detection, asset visibility, and predictive maintenance workflows.',
  },
  {
    domain: 'Academic institutions',
    problem: 'Attendance, coursework, grading, and communication often sit across disconnected systems.',
    response: 'Unified academic workflows for students, faculty, and administrators.',
  },
  {
    domain: 'Enterprise operations',
    problem: 'Manual approvals, reporting, and coordination slow down operational teams.',
    response: 'Workflow automation, operational dashboards, and integrations with existing tools.',
  },
];

const capabilities = [
  {
    layer: 'Data ingestion',
    detail: 'Inspection data, academic activity, internal events',
  },
  {
    layer: 'Signal processing',
    detail: 'Cleaning, normalization, event detection',
  },
  {
    layer: 'Intelligence layer',
    detail: 'Forecasting, anomaly detection, risk scoring',
  },
  {
    layer: 'Workflow layer',
    detail: 'Routing, approvals, escalation, reporting',
  },
  {
    layer: 'Operational interface',
    detail: 'Dashboards, alerts, mobile workflows, decision support',
  },
];

const why = [
  {
    title: 'Engineering depth',
    keyword: 'Engineering',
    copy: 'We approach problems from the system level: data, workflows, interfaces, deployment, and maintenance.',
    detail: 'Architecture before surface polish.',
  },
  {
    title: 'Operational understanding',
    keyword: 'Operations',
    copy: 'Our work is shaped by the environments where the software will actually be used.',
    detail: 'Built around real teams and constraints.',
  },
  {
    title: 'Production mindset',
    keyword: 'Production',
    copy: 'We design for reliability, monitoring, maintainability, and adoption from the beginning.',
    detail: 'Designed to survive beyond the pilot.',
  },
  {
    title: 'Clear product thinking',
    keyword: 'Product',
    copy: 'We turn complex operational requirements into usable software with focused workflows.',
    detail: 'Complexity translated into action.',
  },
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

const systemLayers = [
  ['Signals', 'Inspection data, academic activity, internal events'],
  ['Workflows', 'Review, routing, approvals, escalation'],
  ['Decisions', 'Prioritization, reporting, operational action'],
  ['Operations', 'Maintenance teams, institutions, enterprise users'],
];

const transformationSteps = [
  {
    title: 'Fragmented inputs',
    copy: 'Operational data starts scattered across inspections, forms, messages, spreadsheets, and internal tools.',
  },
  {
    title: 'Connected signals',
    copy: 'Evizen connects those inputs into clean operational signals.',
  },
  {
    title: 'Workflow intelligence',
    copy: 'Signals move through review, routing, approvals, escalation, and reporting workflows.',
  },
  {
    title: 'Decision layer',
    copy: 'Teams get prioritized actions, anomaly visibility, and decision support.',
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#FFFFFF] text-stone-950">
      <Hero />
      <TransformationSection />
      <WhatWeBuild />
      <Platforms />
      <OperatingDomains />
      <Capabilities />
      <WhyEvizen />
      <Contact />
    </main>
  );
}

function TransformationSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.stepIndex);
            setActiveStep(index);
          }
        });
      },
      {
        rootMargin: '-35% 0px -35% 0px',
        threshold: 0.2,
      },
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="transformation-section border-b border-stone-200 bg-[#FFFFFF]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.92fr_0.78fr] lg:px-8 lg:py-28">
        <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
          <div data-reveal-group>
            <p className="section-label">System evolution</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              From fragmented operations to intelligent systems.
            </h2>
          </div>

          <div className="mt-10">
            <TransformationVisual activeStep={activeStep} />
          </div>
        </div>

        <div className="space-y-8 lg:space-y-28 lg:py-[18vh]">
          {transformationSteps.map((step, index) => (
            <article
              key={step.title}
              ref={(element) => {
                stepRefs.current[index] = element;
              }}
              data-step-index={index}
              className={`story-step border-t pt-6 transition-all duration-500 ${
                activeStep === index ? 'border-teal-800 text-stone-950' : 'border-stone-300 text-stone-500'
              }`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="flex items-start gap-5">
                <span
                  className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-500 ${
                    activeStep === index
                      ? 'border-teal-800 bg-white text-teal-900 shadow-[0_0_0_5px_rgb(15_118_110_/_0.08)]'
                      : 'border-stone-300 text-stone-500'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-stone-950">{step.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">{step.copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransformationVisual({ activeStep }: { activeStep: number }) {
  const nodes = [
    ['Inspection', 'left-[8%] top-[16%]'],
    ['Forms', 'left-[62%] top-[12%]'],
    ['Messages', 'left-[18%] top-[56%]'],
    ['Sheets', 'left-[70%] top-[62%]'],
    ['Tools', 'left-[42%] top-[38%]'],
  ];
  const checkpoints = ['Review', 'Route', 'Approve', 'Escalate', 'Report'];

  return (
    <div className={`transformation-visual step-${activeStep}`} aria-label={`Operational system diagram: ${transformationSteps[activeStep].title}`}>
      <div className="absolute left-5 top-5 z-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
        <span className="h-2 w-2 rounded-full bg-teal-700" />
        {transformationSteps[activeStep].title}
      </div>

      <div className="visual-field">
        <svg className="visual-lines" viewBox="0 0 620 420" aria-hidden="true">
          <path className="fragment-line line-a" d="M95 88 C205 62 275 96 390 72 S510 94 548 70" />
          <path className="fragment-line line-b" d="M128 255 C220 192 294 206 382 188 S490 214 520 285" />
          <path className="fragment-line line-c" d="M242 165 C286 202 306 238 336 284" />
          <path className="flow-line flow-main" d="M84 300 C150 242 206 224 260 214 S350 190 410 148 S504 120 552 92" />
          <path className="flow-line flow-secondary" d="M124 95 C188 132 232 158 260 214" />
          <path className="flow-line flow-secondary" d="M505 300 C444 262 388 226 260 214" />
          <path className="decision-ring" d="M384 148 C430 116 494 124 532 166 C568 206 558 270 516 306 C474 344 410 332 374 288 C338 246 342 178 384 148Z" />
        </svg>

        {nodes.map(([label, position], index) => (
          <div key={label} className={`visual-node node-${index} ${position}`}>
            <span>{label}</span>
          </div>
        ))}

        <div className="workflow-path">
          {checkpoints.map((checkpoint, index) => (
            <div key={checkpoint} className="workflow-checkpoint">
              <span>{String(index + 1).padStart(2, '0')}</span>
              {checkpoint}
            </div>
          ))}
        </div>

        <div className="decision-node">
          <span className="decision-pulse" />
          <p>Decision layer</p>
          <strong>Prioritized action</strong>
        </div>

        <div className="system-output">
          <span>Anomaly visibility</span>
          <span>Action queue</span>
          <span>Decision support</span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-shell relative min-h-[calc(100vh-4rem)] overflow-hidden border-b border-stone-200">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 py-16 pb-24 sm:px-6 sm:py-20 sm:pb-28 lg:grid-cols-[1.02fr_0.9fr] lg:px-8 lg:py-24">
        <div className="relative z-10 max-w-4xl">
          <p className="hero-kicker section-label">Operational AI systems</p>
          <h1 className="mt-6 text-[clamp(3.6rem,8.2vw,7.9rem)] font-semibold leading-[0.91] tracking-[-0.045em] text-stone-950">
            <span className="hero-line"><span>AI systems for</span></span>
            <span className="hero-line"><span>operationally complex</span></span>
            <span className="hero-line"><span>environments.</span></span>
          </h1>
          <p className="hero-body mt-7 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl sm:leading-9">
            Evizen AI builds production-grade automation, predictive analytics, and operational intelligence systems for
            power, academic, and enterprise workflows.
          </p>
          <div className="hero-actions mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#platforms"
              className="btn-premium bg-stone-950 text-white hover:bg-stone-800"
            >
              Explore platforms
            </a>
            <a
              href="#contact"
              className="btn-premium border border-stone-300 text-stone-950 hover:border-stone-950 hover:bg-white/45"
            >
              Work with us
            </a>
          </div>
        </div>

        <div className="hero-map-wrap relative z-10">
          <SystemMap />
        </div>
      </div>
      <a href="#work" className="hero-scroll-cue" aria-label="Scroll to the next section">
        <span />
      </a>
    </section>
  );
}

function SystemMap() {
  const [activeLayer, setActiveLayer] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveLayer((current) => (current + 1) % systemLayers.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="system-map rounded-[1.75rem] border border-stone-300/90 bg-[#FFFFFF]/92 p-4 shadow-[0_30px_90px_rgb(28_25_23_/_0.08)] backdrop-blur-sm sm:p-6">
      <div className="flex flex-col gap-3 border-b border-stone-300 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">Live operational layer</p>
          <p className="mt-2 text-sm leading-6 text-stone-600">Inspection data &middot; Academic activity &middot; Internal events</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
          <span className="h-2 w-2 rounded-full bg-teal-700 shadow-[0_0_0_4px_rgb(15_118_110_/_0.12)]" />
          Online
        </div>
      </div>

      <div className="relative mt-7">
        <div className="system-spine" aria-hidden="true">
          <span className="system-spine-fill" style={{ height: `${22 + activeLayer * 25}%` }} />
          <span className="signal-dot signal-dot-one" />
          <span className="signal-dot signal-dot-two" />
          <span className="signal-dot signal-dot-three" />
        </div>

        <div className="space-y-4">
          {systemLayers.map(([title, copy], index) => {
            const active = activeLayer === index;
            return (
              <button
                key={title}
                type="button"
                onMouseEnter={() => setActiveLayer(index)}
                className={`system-layer group grid w-full grid-cols-[3.1rem_1fr] gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                  active
                    ? 'border-teal-800/45 bg-white/70 shadow-[0_18px_45px_rgb(28_25_23_/_0.075)]'
                    : 'border-stone-300/70 bg-transparent hover:border-teal-800/35 hover:bg-white/50'
                }`}
              >
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-teal-800/55 bg-[#FFFFFF] text-sm font-semibold text-teal-900 transition-colors duration-300 group-hover:border-teal-800 group-hover:bg-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="flex items-center justify-between gap-4">
                    <span className="text-xl font-semibold tracking-tight text-stone-950">{title}</span>
                    <span className={`h-px w-12 transition-colors duration-300 ${active ? 'bg-teal-800' : 'bg-stone-300'}`} />
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-stone-600">{copy}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-stone-300 pt-5 text-xs font-medium text-stone-500">
          <span>Signal intake</span>
          <span className="text-center text-teal-800">Decision support</span>
          <span className="text-right">Operational action</span>
        </div>
      </div>
    </div>
  );
}

function WhatWeBuild() {
  const [activeArchitecture, setActiveArchitecture] = useState(0);

  return (
    <section id="work" className="site-section">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <div data-reveal-group>
          <div className="lg:sticky lg:top-28">
            <p className="section-label">What we build</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">Software systems for real operational work.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-stone-700">
              Many organizations still depend on manual coordination, fragmented tools, delayed reporting, and reactive
              decisions. Evizen AI builds systems that connect data, workflows, decisions, and users into reliable
              operational software.
            </p>
          </div>
        </div>

        <div className="architecture-grid" data-reveal>
          {pillars.map((pillar, index) => {
            const active = activeArchitecture === index;

            return (
              <article
                key={pillar.title}
                className={`architecture-card ${active ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveArchitecture(index)}
                onClick={() => setActiveArchitecture(index)}
              >
                <button type="button" className="architecture-card-button" aria-pressed={active}>
                  <span className="architecture-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="architecture-title">{pillar.title}</span>
                  <span className="architecture-rule" />
                  <span className="architecture-copy">{pillar.copy}</span>
                </button>

                <div className="architecture-detail" aria-hidden={!active}>
                  <ArchitectureDiagram active={active} />
                  <ul>
                    {pillar.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                  <div className="architecture-flow">
                    <span>Input</span>
                    <span>System</span>
                    <span>Action</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArchitectureDiagram({ active }: { active: boolean }) {
  return (
    <div className={`architecture-diagram ${active ? 'is-active' : ''}`} aria-hidden="true">
      <span className="diagram-node diagram-node-a" />
      <span className="diagram-node diagram-node-b" />
      <span className="diagram-node diagram-node-c" />
      <span className="diagram-line diagram-line-a" />
      <span className="diagram-line diagram-line-b" />
      <span className="diagram-core" />
    </div>
  );
}

function Platforms() {
  return (
    <section id="platforms" className="site-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl" data-reveal-group>
          <p className="section-label">Platforms</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">Focused products for operational teams.</h2>
        </div>

        <div className="grid gap-6" data-reveal>
          {products.map((product) => (
            <article key={product.name} className="product-panel grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-stretch">
              <div className="flex flex-col">
                <p className="section-label">{product.label}</p>
                <h3 className="mt-4 text-5xl font-semibold leading-none tracking-tight">{product.name}</h3>
                <p className="mt-5 max-w-xl text-lg leading-8 text-stone-700">{product.description}</p>
                <p className="mt-4 text-sm font-semibold text-stone-950">{product.credibility}</p>

                <div className="mt-8 grid gap-2 sm:grid-cols-2">
                  {product.points.map((point) => (
                    <p key={point} className="product-chip">
                      {point}
                    </p>
                  ))}
                </div>

                <a href={product.href} className="link-underline mt-8 text-sm font-semibold text-stone-950">
                  View {product.name}
                  <ArrowRight size={16} />
                </a>
              </div>
              {product.name === 'Thermal Eye' ? <ThermalEyeVisual /> : <UnilicVisual />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThermalEyeVisual() {
  return (
    <div className="product-visual thermal-visual" aria-label="Thermal Eye asset grid diagram">
      <svg viewBox="0 0 560 360" aria-hidden="true">
        <path className="grid-line" d="M72 78 H500" />
        <path className="grid-line" d="M72 178 H500" />
        <path className="grid-line" d="M72 278 H500" />
        <path className="asset-line" d="M112 285 C150 228 162 160 204 110 C252 52 326 76 366 132 C406 188 440 236 494 280" />
        <path className="asset-line secondary" d="M94 154 C160 130 210 176 268 154 C332 130 390 96 468 118" />
        <circle className="thermal-point" cx="122" cy="272" r="5" />
        <circle className="thermal-point" cx="206" cy="110" r="5" />
        <circle className="thermal-point anomaly" cx="366" cy="132" r="8" />
        <circle className="thermal-point" cx="494" cy="280" r="5" />
        <circle className="thermal-pulse" cx="366" cy="132" r="20" />
      </svg>
      <span className="visual-label label-hotspot">Hotspot</span>
      <span className="visual-label label-priority">Priority</span>
      <span className="visual-label label-signal">Inspection signal</span>
    </div>
  );
}

function UnilicVisual() {
  return (
    <div className="product-visual unilic-visual" aria-label="Unilic academic workflow map">
      <svg viewBox="0 0 560 360" aria-hidden="true">
        <path className="workflow-link" d="M120 96 C196 92 224 148 280 178" />
        <path className="workflow-link" d="M438 96 C364 100 336 150 280 178" />
        <path className="workflow-link" d="M280 178 C224 214 198 250 122 264" />
        <path className="workflow-link" d="M280 178 C338 216 364 252 438 264" />
        <rect className="workflow-node" x="68" y="66" width="104" height="58" rx="29" />
        <rect className="workflow-node" x="386" y="66" width="104" height="58" rx="29" />
        <rect className="workflow-node" x="213" y="143" width="134" height="70" rx="35" />
        <rect className="workflow-node" x="62" y="236" width="120" height="58" rx="29" />
        <rect className="workflow-node" x="378" y="236" width="120" height="58" rx="29" />
        <circle className="workflow-core" cx="280" cy="178" r="9" />
      </svg>
      <span className="visual-label node-student">Student</span>
      <span className="visual-label node-faculty">Faculty</span>
      <span className="visual-label node-coursework">Coursework</span>
      <span className="visual-label node-grading">Grading</span>
      <span className="visual-label node-comm">Communication</span>
      <span className="launch-label">Launching at IIT Ropar</span>
    </div>
  );
}

function OperatingDomains() {
  const [activeDomain, setActiveDomain] = useState(0);
  const domainRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveDomain(Number((entry.target as HTMLElement).dataset.domainIndex));
          }
        });
      },
      {
        rootMargin: '-34% 0px -42% 0px',
        threshold: 0.22,
      },
    );

    domainRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="domain-section border-b border-stone-200 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start" data-reveal-group>
          <p className="section-label">Operating domains</p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Built where operations are fragmented, delayed, and high-stakes.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-stone-700">
            Evizen turns messy operational environments into reliable software systems that connect signals, workflows,
            decisions, and users.
          </p>
          <DomainStickyVisual activeDomain={activeDomain} />
        </div>

        <div className="grid gap-5" data-reveal>
          {domains.map((item, index) => {
            const active = activeDomain === index;

            return (
              <article
                key={item.domain}
                ref={(element) => {
                  domainRefs.current[index] = element;
                }}
                data-domain-index={index}
                onMouseEnter={() => setActiveDomain(index)}
                className={`domain-card ${active ? 'is-active' : ''}`}
              >
                <div>
                  <span className="domain-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.domain}</h3>
                </div>
                <div>
                  <p className="domain-meta">Problem</p>
                  <p>{item.problem}</p>
                </div>
                <div>
                  <p className="domain-meta text-teal-800">System response</p>
                  <p>{item.response}</p>
                </div>
                <DomainMiniDiagram index={index} active={active} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DomainStickyVisual({ activeDomain }: { activeDomain: number }) {
  const labels = ['Transmission risk', 'Institution workflow', 'Approval routing'];

  return (
    <div className={`domain-sticky-visual domain-visual-${activeDomain}`} aria-label={labels[activeDomain]}>
      <div className="domain-visual-label">
        <span />
        {labels[activeDomain]}
      </div>
      <DomainMiniDiagram index={activeDomain} active large />
    </div>
  );
}

function DomainMiniDiagram({ index, active, large = false }: { index: number; active: boolean; large?: boolean }) {
  if (index === 0) {
    return (
      <div className={`domain-mini ${large ? 'is-large' : ''} ${active ? 'is-active' : ''}`} aria-hidden="true">
        <svg viewBox="0 0 260 130">
          <path d="M24 96 C58 52 88 38 124 62 C158 84 178 90 236 34" />
          <path className="soft" d="M34 46 C82 32 112 80 156 58 C190 42 214 54 238 78" />
          <circle cx="124" cy="62" r="5" />
          <circle className="focus" cx="178" cy="90" r="7" />
        </svg>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className={`domain-mini ${large ? 'is-large' : ''} ${active ? 'is-active' : ''}`} aria-hidden="true">
        <svg viewBox="0 0 260 130">
          <path d="M58 38 C98 42 104 64 130 66 C156 68 164 42 204 38" />
          <path d="M130 66 C104 76 98 98 58 100" />
          <path d="M130 66 C158 76 166 98 204 100" />
          <rect x="32" y="24" width="52" height="28" rx="14" />
          <rect x="178" y="24" width="52" height="28" rx="14" />
          <rect x="104" y="52" width="52" height="28" rx="14" />
          <rect x="32" y="86" width="52" height="28" rx="14" />
          <rect x="178" y="86" width="52" height="28" rx="14" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`domain-mini ${large ? 'is-large' : ''} ${active ? 'is-active' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 260 130">
        <path d="M34 34 H96 C116 34 116 66 136 66 H226" />
        <path d="M34 96 H96 C116 96 116 66 136 66" />
        <rect x="24" y="20" width="56" height="28" rx="14" />
        <rect x="24" y="82" width="56" height="28" rx="14" />
        <rect x="116" y="52" width="54" height="28" rx="14" />
        <rect x="190" y="52" width="46" height="28" rx="14" />
        <circle className="focus" cx="136" cy="66" r="6" />
      </svg>
    </div>
  );
}

function Capabilities() {
  const [activeCapability, setActiveCapability] = useState(2);

  return (
    <section id="capabilities" className="capability-section border-b border-stone-200 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <div data-reveal-group>
          <p className="section-label">Capabilities</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">The layers behind operational software.</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-stone-700">
            Evizen combines data pipelines, AI models, workflow logic, and deployment discipline into systems teams can
            actually use.
          </p>
        </div>

        <div className="capability-stack" data-reveal>
          <div className="capability-flow" aria-hidden="true">
            <span />
          </div>
          {capabilities.map((capability, index) => {
            const active = activeCapability === index;

            return (
              <button
                key={capability.layer}
                type="button"
                onMouseEnter={() => setActiveCapability(index)}
                onFocus={() => setActiveCapability(index)}
                onClick={() => setActiveCapability(index)}
                className={`capability-layer ${active ? 'is-active' : ''}`}
                aria-pressed={active}
              >
                <span className="capability-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="capability-main">
                  <span className="capability-title">{capability.layer}</span>
                  <span className="capability-detail">{capability.detail}</span>
                </span>
                <span className="capability-mini" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyEvizen() {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const principleRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePrinciple(Number((entry.target as HTMLElement).dataset.principleIndex));
          }
        });
      },
      {
        rootMargin: '-36% 0px -42% 0px',
        threshold: 0.22,
      },
    );

    principleRefs.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-section relative overflow-hidden bg-stone-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="why-texture" aria-hidden="true" />
      <div className="why-scanline" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start" data-reveal-group>
          <p className="section-label-dark">Why Evizen</p>
          <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl">
            Built for systems that need to work beyond the pilot.
          </h2>
          <div className="why-keyword-wrap mt-8">
            <span className="why-keyword-label">Current principle</span>
            <span className="why-keyword">{why[activePrinciple].keyword}</span>
          </div>
        </div>

        <div className="why-principles border-y border-white/15">
          {why.map((principle, index) => (
            <article
              key={principle.title}
              ref={(element) => {
                principleRefs.current[index] = element;
              }}
              data-principle-index={index}
                onMouseEnter={() => setActivePrinciple(index)}
                className={`why-principle ${activePrinciple === index ? 'is-active' : ''}`}
            >
              <span className="why-principle-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
                <span className="why-principle-detail">{principle.detail}</span>
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
    window.location.href = `mailto:contact@evizenai.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div className="contact-narrative" data-reveal-group>
          <p className="section-label">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Bring operational complexity into a better system.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-stone-800">
            Tell us what system, workflow, or operational problem you want to improve.
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-stone-700">
            If your organization relies on manual workflows, fragmented tools, or reactive processes, Evizen AI can help
            design and build the systems needed to move faster with more control.
          </p>
          <a href="mailto:contact@evizenai.com" className="link-underline mt-6 text-sm font-semibold text-stone-950">
            Email Evizen AI
          </a>
        </div>

        <form onSubmit={submit} className="contact-form" data-reveal>
          {submitted ? (
            <div className="py-10">
              <h3 className="text-2xl font-semibold tracking-tight">Thanks. We will review your message and get back to you.</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">Your email client should open with the inquiry prepared.</p>
            </div>
          ) : (
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Input label="Name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} required />
                <Input label="Organization" value={form.organization} onChange={(value) => setForm({ ...form, organization: value })} />
              </div>
              <Input label="Work email" type="email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} required />
              <label className="contact-field block">
                <span>Area of interest</span>
                <select
                  value={form.interest}
                  onChange={(event) => setForm({ ...form, interest: event.target.value })}
                  className="contact-control"
                >
                  {['', 'Thermal Eye', 'Unilic', 'Workflow automation', 'Predictive analytics', 'Operational intelligence', 'Other'].map((option) => (
                    <option key={option} value={option}>
                      {option || 'Select an area'}
                    </option>
                  ))}
                </select>
              </label>
              <label className="contact-field block">
                <span>Message</span>
                <textarea
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  required
                  rows={5}
                  placeholder="Tell us what workflow, system, or operational problem you are trying to improve."
                  className="contact-control resize-none"
                />
              </label>
              <div>
                <button type="submit" className="btn-premium w-full bg-stone-950 text-white hover:bg-stone-800 sm:w-auto">
                  Send inquiry
                </button>
                <p className="mt-4 max-w-md text-sm leading-6 text-stone-500">
                  We usually respond with a short discovery note and next-step questions.
                </p>
              </div>
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
    <label className="contact-field block">
      <span>{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="contact-control"
      />
    </label>
  );
}


