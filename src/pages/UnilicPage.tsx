import { ArrowUpRight, ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

const UNILIC_URL = 'https://www.unilic.in/';

const problems = [
  ['Proxy attendance is normal', 'In most classrooms a phone marks three friends present. Everyone knows it, and the register still says 100%.'],
  ['Roll call eats the lecture', 'Ten minutes of “present sir” at the start of every class — multiplied across every faculty member, every day.'],
  ['Records fall apart at audit', 'Attendance, marks, and coursework live in four different tools, and none of them are ready when NAAC or NBA asks.'],
];

const verification = [
  ['Live GPS geofencing', 'The student’s phone has to physically be in the room. Marking a friend present from the canteen simply fails.'],
  ['Rotating token codes', 'The check-in code refreshes every 30 seconds, so a screenshot forwarded to a friend is already dead.'],
  ['Device fingerprinting', 'One phone equals one student. A single device cannot quietly sign in four people.'],
  ['Anti-spoof flags', 'Faked GPS, cloned devices, and suspicious patterns are flagged for the faculty automatically.'],
];

const suite = [
  ['Attendance in under 20 seconds', 'The whole class is marked, verified, and logged before the lecture would normally have started.'],
  ['Grading, automated', 'Marks are calculated and distributed to students by email without the faculty rebuilding a spreadsheet.'],
  ['Course workspace', 'Materials, assignments, and submissions in one place instead of a WhatsApp group and three drives.'],
  ['Discussion forums', 'Doubts and announcements stay inside the course, not lost in a chat scroll.'],
];

const benefits = [
  'Ten minutes back every single lecture',
  'Attendance that survives a NAAC / NBA audit',
  'Proxy fraud designed out, not policed after',
  'One system instead of four disconnected tools',
  'Built and supported in India, with direct founder access',
  'Mobile-first for the way students actually behave',
];

export default function UnilicPage() {
  return (
    <main className="bg-transparent text-neutral-900">
      <section className="border-b-2 border-black">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-24">
          <div data-reveal-group>
            <p className="section-label">Unilic &middot; Academic operations</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-black sm:text-6xl">
              The proxy-proof classroom.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Unilic marks a whole class present in under 20 seconds, makes proxy attendance physically impossible, and
              keeps grading and coursework in one audit-ready system. It gives faculty back ten minutes every lecture.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              Built and launching at IIT Ropar
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={UNILIC_URL} target="_blank" rel="noreferrer" className="btn-primary gap-2 text-center">
                Visit unilic.in
                <ArrowUpRight size={16} />
              </a>
              <a href="/?interest=Unilic#contact" className="btn-ghost text-center">
                Bring it to your campus
              </a>
            </div>
          </div>

          <div data-reveal data-reveal-delay="220">
            <AcademicDiagram />
          </div>
        </div>
      </section>

      <PageSection eyebrow="The problem" title="Everyone accepts a register that lies.">
        <div className="grid gap-6 md:grid-cols-3">
          {problems.map(([title, copy]) => (
            <TextBlock key={title} title={title} copy={copy} />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="Four layers, no proxies"
        title="You don’t police proxy attendance. You make it impossible."
        body="Any one check can be gamed. Unilic stacks four so a fake mark has to beat all of them at once — which, in a real classroom, it can’t."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {verification.map(([title, copy], index) => (
            <div key={title} className="interactive-card rounded-none border-2 border-black bg-white p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-black">Layer {String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{copy}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <section className="border-y-2 border-black bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="More than attendance" title="One system for the whole course." dark />
          <div className="mt-10 grid gap-5 md:grid-cols-2" data-reveal-group>
            {suite.map(([title, copy]) => (
              <article key={title} className="interactive-card rounded-none border-2 border-black bg-white p-5">
                <h3 className="text-lg font-semibold text-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageSection
        eyebrow="Why campuses adopt it"
        title="Built for faculty, admins, and the audit that’s coming."
        body="Unilic is live at IIT Ropar and built for rollout across institutions — with founding-campus pricing locked for two years."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3 border-t-2 border-black pt-4 text-sm font-medium leading-6 text-neutral-700">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-black" />
              {benefit}
            </div>
          ))}
        </div>
      </PageSection>

      <section className="border-t-2 border-black py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8" data-reveal-group>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-black">Give your faculty their ten minutes back.</h2>
          <p className="mt-5 text-base leading-7 text-neutral-600">
            See Unilic for yourself, or talk to us about becoming a founding campus with two-year locked pricing.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={UNILIC_URL} target="_blank" rel="noreferrer" className="btn-primary gap-2">
              Visit unilic.in
              <ArrowUpRight size={16} />
            </a>
            <a href="/?interest=Unilic#contact" className="btn-ghost gap-2">
              Bring it to your campus
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function AcademicDiagram() {
  return (
    <div className="interactive-card rounded-none border-2 border-black bg-white p-6">
      <p className="text-sm font-semibold text-black">Who touches Unilic</p>
      <div className="mt-8 grid gap-5" data-reveal-group>
        {[
          ['Student', 'Checks in in seconds, submits coursework, sees marks — all from a phone.'],
          ['Faculty', 'Verified attendance, automated grading, and course communication in one place.'],
          ['Administration', 'Audit-ready visibility across departments, courses, and academic activity.'],
        ].map(([role, copy]) => (
          <div key={role} className="border-l-2 border-black pl-5">
            <h3 className="text-lg font-semibold tracking-tight text-black">{role}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{copy}</p>
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
