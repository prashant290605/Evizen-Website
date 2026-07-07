import { ArrowUpRight, ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

const THERMAL_EYE_URL = 'https://thermal-eye.vercel.app/';

const problem = [
  ['You find out after the outage', 'Traditional thermal inspection catches a fault once it is already severe — after the trip, the damage, and the emergency callout.'],
  ['Inspections pile up unread', 'Thousands of thermal frames arrive as raw images. Someone has to eyeball them, and the important ones get lost in the volume.'],
  ['Maintenance stays reactive', 'Without a trend line per asset, teams cannot tell a cooling hotspot from one three weeks away from failure.'],
];

const helps = [
  ['Reads the temperature, never invents it', 'Automated temperature extraction straight from the thermal frame. If a reading is not in the image, Thermal Eye does not fabricate one.'],
  ['A trend line for every asset', 'Per-asset temperature history and prediction — so you see the drift, not just today’s snapshot.'],
  ['Failure, with a date on it', 'Forecasts when each asset is on track to cross a critical threshold, weeks before it does.'],
  ['Fleet-wide risk ranking', 'Every asset ranked by risk, so the crew works the one that matters first instead of the one nearest the depot.'],
  ['Alerts that route themselves', 'Critical findings are pushed to the right team automatically — no chasing, no spreadsheets.'],
  ['Board-ready reports', 'AI-generated inspection reports that a regulator or a board can read without a translation layer.'],
];

const workflow = [
  ['Extract', 'Pull verified temperatures from every thermal frame across the fleet.'],
  ['Predict', 'Model each asset’s trend and forecast when it reaches a critical threshold.'],
  ['Prioritize', 'Rank the whole fleet by risk so the most dangerous asset is worked first.'],
  ['Route', 'Push the alert and context straight to the responsible maintenance team.'],
  ['Prevent', 'Fix it while it is still cheap — before the trip, not after.'],
];

const proof = [
  ['Live infrastructure', 'Running on Tata Power transmission assets, not a demo dataset.'],
  ['110kV / 220kV', 'Built for high-voltage transmission, where a missed hotspot is an outage.'],
  ['Tenant-isolated data', 'Every operator gets an isolated database. Your grid data never mixes with anyone else’s.'],
  ['Your grid, mapped', 'Bring your own network via KML, GeoJSON, or CSV — findings land on your real geography.'],
];

export default function ThermalEyePage() {
  return (
    <main className="bg-transparent text-neutral-900">
      <section className="border-b-2 border-black">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-24">
          <div data-reveal-group>
            <p className="section-label">Thermal Eye &middot; Power infrastructure</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-black sm:text-6xl">
              See the failure before it happens.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Thermal Eye is predictive thermal intelligence for the grid. It reads temperature from your inspection
              imagery, tracks every asset over time, and tells you which one is about to fail — weeks before it does.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              Live on Tata Power transmission infrastructure
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={THERMAL_EYE_URL} target="_blank" rel="noreferrer" className="btn-primary gap-2 text-center">
                Open the live product
                <ArrowUpRight size={16} />
              </a>
              <a href="/?interest=Thermal%20Eye#contact" className="btn-ghost text-center">
                Discuss deployment
              </a>
            </div>
          </div>

          <div data-reveal data-reveal-delay="220">
            <ProductDiagram />
          </div>
        </div>
      </section>

      <PageSection eyebrow="The problem" title="Thermal inspection tells you what already broke.">
        <div className="grid gap-6 md:grid-cols-3">
          {problem.map(([title, copy]) => (
            <TextBlock key={title} title={title} copy={copy} />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="What Thermal Eye does"
        title="From a pile of thermal frames to a ranked list of what to fix."
        body="Thermal Eye is not a one-off model. It is the operational layer that turns raw inspection imagery into verified readings, per-asset forecasts, and maintenance work that gets routed to the right crew."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {helps.map(([title, copy]) => (
            <TextBlock key={title} title={title} copy={copy} />
          ))}
        </div>
      </PageSection>

      <section className="border-y-2 border-black bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="How it works" title="Extract. Predict. Prevent." dark />
          <div className="mt-10 divide-y-2 divide-black border-y-2 border-black" data-reveal-group>
            {workflow.map(([step, copy], index) => (
              <article key={step} className="interactive-row grid gap-4 py-6 hover:bg-black/[0.04] sm:grid-cols-[4rem_0.5fr_1fr]">
                <span className="text-sm font-semibold text-black">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-semibold text-black">{step}</h3>
                <p className="text-sm leading-6 text-neutral-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageSection
        eyebrow="Why teams trust it"
        title="Built for a control room, not a pitch deck."
        body="A transmission engineer’s biggest fear with AI is a confident wrong answer. Thermal Eye is designed around that fear: verified readings, isolated data, and reports you can hand upward without a caveat."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map(([label, value]) => (
            <div key={label} className="border-t-2 border-black pt-4">
              <p className="text-sm font-semibold text-black">{label}</p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{value}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <section className="border-t-2 border-black py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8" data-reveal-group>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-black">Stop inspecting the past.</h2>
          <p className="mt-5 text-base leading-7 text-neutral-600">
            See Thermal Eye running on live grid data, or talk to us about rolling it out across your transmission fleet.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={THERMAL_EYE_URL} target="_blank" rel="noreferrer" className="btn-primary gap-2">
              Open the live product
              <ArrowUpRight size={16} />
            </a>
            <a href="/?interest=Thermal%20Eye#contact" className="btn-ghost gap-2">
              Discuss deployment
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProductDiagram() {
  return (
    <div className="interactive-card rounded-none border-2 border-black bg-white p-6">
      <p className="text-sm font-semibold text-black">Thermal Eye signal path</p>
      <div className="mt-8 space-y-4" data-reveal-group>
        {['Thermal frame in', 'Verified temperature', 'Per-asset forecast', 'Routed work order'].map((item, index) => (
          <div key={item} className="flex items-center gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-black text-sm font-semibold text-black">
              {index + 1}
            </span>
            <div className="h-px flex-1 bg-black/20" />
            <span className="w-40 text-sm font-medium text-neutral-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PageSection({ eyebrow, title, body, children }: { eyebrow: string; title: string; body?: string; children: ReactNode }) {
  return (
    <section className="site-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={eyebrow} title={title} body={body} />
        <div className="mt-10" data-reveal-group>{children}</div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, body, dark = false }: { eyebrow: string; title: string; body?: string; dark?: boolean }) {
  return (
    <div className="max-w-3xl" data-reveal-group>
      <p className={dark ? 'section-label-dark' : 'section-label'}>{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-black">{title}</h2>
      {body && <p className="mt-5 text-base leading-7 text-neutral-600">{body}</p>}
    </div>
  );
}

function TextBlock({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="interactive-card rounded-none border-2 border-black bg-white p-5">
      <h3 className="text-lg font-semibold tracking-tight text-black">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-600">{copy}</p>
    </div>
  );
}
