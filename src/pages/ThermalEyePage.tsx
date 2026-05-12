import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

const problem = [
  ['Late anomaly visibility', 'Thermal issues become harder to prioritize when findings arrive late or without context.'],
  ['Manual review load', 'Inspection outputs need structure before engineering and maintenance teams can act.'],
  ['Reactive maintenance cycles', 'Teams lose time when asset risk is discovered only after degradation has progressed.'],
];

const helps = [
  ['Early hotspot detection', 'Identify potential hotspot patterns across inspected transmission assets.'],
  ['Asset visibility', 'Organize findings around transmission assets, voltage classes, and inspection context.'],
  ['Maintenance prioritization', 'Support decisions on which anomalies require earlier field action.'],
  ['Operational reporting', 'Turn inspection findings into usable summaries for engineering and maintenance teams.'],
];

const workflow = [
  ['Detect', 'Identify potential thermal hotspots.'],
  ['Review', 'Validate context across asset and inspection data.'],
  ['Prioritize', 'Rank issues by severity and maintenance urgency.'],
  ['Dispatch', 'Move actionable findings to field or maintenance teams.'],
  ['Prevent', 'Support earlier intervention before failures escalate.'],
];

const useCases = [
  ['Focus area', '110kV and 220kV transmission assets'],
  ['Supported asset class', 'High-voltage transmission infrastructure'],
  ['Workflow objective', 'Proactive maintenance planning'],
  ['System output', 'Structured anomaly review and reporting'],
];

export default function ThermalEyePage() {
  return (
    <main className="bg-[#f7f3ea] text-stone-950">
      <section className="border-b border-stone-200">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold text-teal-800">Thermal Eye</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Predictive maintenance intelligence for transmission infrastructure.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              Thermal Eye helps power teams identify early thermal anomalies across critical transmission assets before
              they escalate into outage, equipment damage, or safety risk.
            </p>
            <p className="mt-5 text-sm font-semibold text-stone-950">Built in collaboration with Tata Power.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/?interest=Thermal%20Eye#contact" className="rounded-full bg-stone-950 px-5 py-3 text-center text-sm font-semibold text-white">
                Discuss Thermal Eye
              </a>
              <a href="/#platforms" className="rounded-full border border-stone-300 px-5 py-3 text-center text-sm font-semibold text-stone-950">
                Back to work
              </a>
            </div>
          </div>

          <ProductDiagram />
        </div>
      </section>

      <PageSection eyebrow="Problem" title="Transmission risk increases when anomaly visibility arrives late.">
        <div className="grid gap-6 md:grid-cols-3">
          {problem.map(([title, copy]) => (
            <TextBlock key={title} title={title} copy={copy} />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="How Thermal Eye helps"
        title="An operational layer around thermal anomaly detection."
        body="Thermal Eye is designed to support asset visibility, anomaly tracking, maintenance prioritization, and proactive workflows across transmission infrastructure."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {helps.map(([title, copy]) => (
            <TextBlock key={title} title={title} copy={copy} />
          ))}
        </div>
      </PageSection>

      <section className="bg-stone-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Workflow" title="From detection to intervention." dark />
          <div className="mt-10 divide-y divide-white/15 border-y border-white/15">
            {workflow.map(([step, copy], index) => (
              <article key={step} className="grid gap-4 py-6 sm:grid-cols-[4rem_0.45fr_1fr]">
                <span className="text-sm font-semibold text-teal-300">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-semibold">{step}</h3>
                <p className="text-sm leading-6 text-stone-300">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageSection
        eyebrow="Use cases"
        title="Designed to support proactive maintenance workflows."
        body="Thermal Eye is not positioned as a one-off model. It is a software layer that makes anomaly findings easier to review, prioritize, report, and route into maintenance action."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map(([label, value]) => (
            <div key={label} className="border-t border-stone-300 pt-4">
              <p className="text-sm font-semibold text-stone-950">{label}</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">{value}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <section className="border-t border-stone-200 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight">Discuss predictive maintenance for transmission assets.</h2>
          <p className="mt-5 text-base leading-7 text-stone-700">
            Talk to Evizen AI about thermal anomaly detection, asset visibility, and maintenance workflow systems.
          </p>
          <a href="/?interest=Thermal%20Eye#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white">
            Discuss Thermal Eye
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}

function ProductDiagram() {
  return (
    <div className="rounded-[1.5rem] border border-stone-300 bg-[#fbfaf5] p-6">
      <p className="text-sm font-semibold">Thermal Eye system path</p>
      <div className="mt-8 space-y-4">
        {['Inspection signal', 'Anomaly review', 'Asset context', 'Maintenance action'].map((item, index) => (
          <div key={item} className="flex items-center gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal-700 text-sm font-semibold text-teal-800">
              {index + 1}
            </span>
            <div className="h-px flex-1 bg-stone-300" />
            <span className="w-44 text-sm font-medium text-stone-800">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PageSection({ eyebrow, title, body, children }: { eyebrow: string; title: string; body?: string; children: ReactNode }) {
  return (
    <section className="border-b border-stone-200 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={eyebrow} title={title} body={body} />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, body, dark = false }: { eyebrow: string; title: string; body?: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-semibold ${dark ? 'text-teal-300' : 'text-teal-800'}`}>{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">{title}</h2>
      {body && <p className={`mt-5 text-base leading-7 ${dark ? 'text-stone-300' : 'text-stone-700'}`}>{body}</p>}
    </div>
  );
}

function TextBlock({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="border-t border-stone-300 pt-5">
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-stone-600">{copy}</p>
    </div>
  );
}
