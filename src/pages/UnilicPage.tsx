import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

const problems = [
  ['Disconnected workflows', 'Attendance, coursework, grading, and communication often live in different tools.'],
  ['Faculty coordination load', 'Faculty teams need clearer queues for submissions, review, grading, and updates.'],
  ['Limited institutional visibility', 'Administrators need a better view of academic activity across roles and departments.'],
];

const connects = [
  ['Student mobile access', 'Attendance, coursework, submissions, updates, and academic activity through mobile-first access.'],
  ['Faculty dashboard', 'Attendance review, assignments, grading, course communication, and student coordination.'],
  ['Administration visibility', 'Operational visibility across departments, courses, faculty activity, and academic workflows.'],
];

const workflow = [
  ['Check in', 'Students complete attendance workflows through mobile-first access.'],
  ['Submit', 'Coursework moves into structured submission flows.'],
  ['Review', 'Faculty review submissions and activity from dashboards.'],
  ['Grade', 'Grades and evaluation status are managed with clearer visibility.'],
  ['Communicate', 'Course updates and faculty messages reach the right users.'],
  ['Monitor', 'Administrators get visibility across academic workflows.'],
];

const benefits = [
  'Fewer disconnected academic tools',
  'Clearer attendance and coursework visibility',
  'Better coordination between students and faculty',
  'More structured grading and assignment workflows',
  'Better operational visibility for institutions',
  'Mobile-first access for daily academic activity',
];

export default function UnilicPage() {
  return (
    <main className="bg-[#f7f3ea] text-stone-950">
      <section className="border-b border-stone-200">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold text-teal-800">Unilic</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Academic operational infrastructure for institutions that need clearer workflows.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              Unilic brings attendance, coursework, grading, communication, and faculty workflows into one mobile-first
              operational platform.
            </p>
            <p className="mt-5 text-sm font-semibold text-stone-950">Launching at IIT Ropar.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/?interest=Unilic#contact" className="rounded-full bg-stone-950 px-5 py-3 text-center text-sm font-semibold text-white">
                Discuss Unilic
              </a>
              <a href="/#platforms" className="rounded-full border border-stone-300 px-5 py-3 text-center text-sm font-semibold text-stone-950">
                Back to work
              </a>
            </div>
          </div>

          <AcademicDiagram />
        </div>
      </section>

      <PageSection eyebrow="Problem" title="Academic operations break down when workflows are split.">
        <div className="grid gap-6 md:grid-cols-3">
          {problems.map(([title, copy]) => (
            <TextBlock key={title} title={title} copy={copy} />
          ))}
        </div>
      </PageSection>

      <PageSection
        eyebrow="What Unilic connects"
        title="One operational layer for daily academic work."
        body="Unilic is designed as academic operational infrastructure, not a narrow attendance app. It supports mobile-first workflows for students and faculty while giving institutions clearer control over academic activity."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {connects.map(([title, copy]) => (
            <TextBlock key={title} title={title} copy={copy} />
          ))}
        </div>
      </PageSection>

      <section className="bg-stone-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Workflow examples" title="Designed around daily academic activity." dark />
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
        eyebrow="Institution benefits"
        title="Built for students, faculty, and administrators."
        body="Unilic is launching at IIT Ropar and is designed for rollout across additional institutions."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="border-t border-stone-300 pt-4 text-sm font-medium leading-6 text-stone-700">
              {benefit}
            </div>
          ))}
        </div>
      </PageSection>

      <section className="border-t border-stone-200 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight">Discuss academic operational infrastructure.</h2>
          <p className="mt-5 text-base leading-7 text-stone-700">
            Talk to Evizen AI about academic workflows, institutional platforms, and mobile-first systems for students,
            faculty, and administrators.
          </p>
          <a href="/?interest=Unilic#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white">
            Discuss Unilic
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}

function AcademicDiagram() {
  return (
    <div className="rounded-[1.5rem] border border-stone-300 bg-[#fbfaf5] p-6">
      <p className="text-sm font-semibold">Academic workflow layer</p>
      <div className="mt-8 grid gap-5">
        {[
          ['Student', 'Mobile access for attendance, coursework, and updates'],
          ['Faculty', 'Dashboards for review, grading, and communication'],
          ['Administration', 'Visibility across departments and workflows'],
        ].map(([role, copy]) => (
          <div key={role} className="border-l border-teal-700 pl-5">
            <h3 className="text-xl font-semibold tracking-tight">{role}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">{copy}</p>
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
