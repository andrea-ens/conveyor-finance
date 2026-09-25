import { Metadata } from "next";
import Link from "next/link";
import HeroSub from "@/components/SharedComponent/HeroSub";
import {
  careerBenefits,
  careerRoles,
  careerValues,
  hiringSteps,
} from "@/app/api/careers";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at Conveyor. Hiring process, benefits, and applications via careers@conveyor.finance.",
};

export default function CareersPage() {
  return (
    <main>
      <HeroSub
        title="Careers"
        subtitle="Applications are delivered to careers@conveyor.finance."
      />
      <section className="pb-10">
        <div className="container px-4 max-w-4xl">
          <p className="text-white text-2xl md:text-3xl leading-relaxed">
            We hire slowly, write clearly, and
            expect people to own real surfaces.
          </p>
          <p className="text-white/60 text-lg mt-6 max-w-3xl leading-relaxed">
            conveyor.finance is our marketing site. We are hiring senior blockchain, backend, frontend
            Web3, DevOps / security, and product — not a CTO. Every open role is 100% remote, contract,
            and either part-time or full-time. You set your own schedule.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4">
          <p className="text-primary font-medium">How we hire</p>
          <h2 className="text-white sm:text-4xl text-3xl font-medium mt-2 mb-10">
            A short, respectful loop
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-white/5 p-7"
              >
                <p className="text-primary text-sm font-medium">{item.step}</p>
                <h3 className="text-white text-xl font-medium mt-3">
                  {item.title}
                </h3>
                <p className="text-white/60 mt-3 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <p className="text-white/45 text-sm mt-8 max-w-3xl">
            We do not use surprise take-home marathons or unpaid production
            work. We aim to respond to every complete application within seven
            business days.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4">
          <p className="text-primary font-medium">How we work</p>
          <h2 className="text-white sm:text-4xl text-3xl font-medium mt-2 mb-10">
            Built for people who take ownership
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {careerValues.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-white text-xl font-medium">{item.title}</h3>
                <p className="text-white/60 mt-4 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" id="open-roles">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-primary font-medium">Open roles</p>
              <h2 className="text-white sm:text-4xl text-3xl font-medium mt-2">
                {careerRoles.length} roles
              </h2>
            </div>
            <p className="text-white/50 max-w-md">
              No matching role? Send a brief note and a portfolio to{" "}
              <a
                href="mailto:careers@conveyor.finance"
                className="text-primary hover:underline"
              >
                careers@conveyor.finance
              </a>
              .
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 overflow-hidden">
            {careerRoles.map((role) => (
              <Link
                key={role.slug}
                href={`/careers/${role.slug}`}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 md:px-8 py-6 border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors"
              >
                <div>
                  <h3 className="text-white text-xl font-medium">{role.title}</h3>
                  <p className="text-white/55 mt-1 max-w-2xl">{role.summary}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm shrink-0">
                  <span className="rounded-full border border-white/15 px-3 py-1 text-white/80">
                    {role.team}
                  </span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-white/80">
                    {role.location}
                  </span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-white/80">
                    {role.schedule}
                  </span>
                  <span className="rounded-full border border-primary/40 text-primary px-3 py-1">
                    {role.type}
                  </span>
                  <span className="text-primary font-medium">View role →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-primary font-medium">Compensation & benefits</p>
            <h2 className="text-white sm:text-4xl text-3xl font-medium mt-2">
              What we offer
            </h2>
            <p className="text-white/60 mt-4 text-lg leading-relaxed">
              We share contract rates in the first substantive conversation. We
              will not ask you to name a number before we do.
            </p>
          </div>
          <ul className="space-y-4">
            {careerBenefits.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-white/80 border-b border-white/10 pb-4"
              >
                <span className="text-primary mt-1">●</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4">
          <div className="rounded-3xl border-2 border-white/10 bg-white/5 px-8 py-12 md:px-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-white text-3xl font-medium">
                Equal opportunity
              </h2>
              <p className="text-white/60 text-lg mt-3 max-w-2xl leading-relaxed">
                Conveyor is an equal opportunity employer. We consider
                applicants without regard to race, color, religion, sex,
                gender identity, sexual orientation, national origin, age,
                disability, veteran status, or any other status protected by
                applicable law. Need an accommodation for the process? Email
                careers@conveyor.finance.
              </p>
            </div>
            <Button
              render={<a href="mailto:careers@conveyor.finance" />}
              className="bg-primary text-background h-12 px-7 rounded-lg font-medium shrink-0"
            >
              Email careers@
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
