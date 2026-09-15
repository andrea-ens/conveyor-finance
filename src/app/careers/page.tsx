import { Metadata } from "next";
import Link from "next/link";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { careerBenefits, careerRoles, careerValues } from "@/app/api/careers";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Conveyor. Open roles across product, DeFi dashboard, trading, and people operations at conveyor.finance.",
};

export default function CareersPage() {
  return (
    <main>
      <HeroSub title="Careers" />
      <section className="pb-10">
        <div className="container px-4 max-w-4xl">
          <p className="text-white text-2xl md:text-3xl leading-relaxed">
            Help us build the operating system for digital-asset desks.
            Careers at Conveyor are how we find operators who want to own
            a real surface — not a slide.
          </p>
          <p className="text-white/60 text-lg mt-6 max-w-3xl">
            We are hiring across the three layers of Conveyor: the corporate
            website, the DeFi dashboard, and the trading workspace. If you
            care about precision, markets, and craft, we want to meet you.
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

      <section className="py-12">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-primary font-medium">Open roles</p>
              <h2 className="text-white sm:text-4xl text-3xl font-medium mt-2">
                {careerRoles.length} roles on conveyor.finance
              </h2>
            </div>
            <p className="text-white/50 max-w-md">
              Do not see a fit? Write to{" "}
              <a
                href="mailto:careers@conveyor.finance"
                className="text-primary hover:underline"
              >
                careers@conveyor.finance
              </a>
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
            <p className="text-primary font-medium">Benefits</p>
            <h2 className="text-white sm:text-4xl text-3xl font-medium mt-2">
              What we offer
            </h2>
            <p className="text-white/60 mt-4 text-lg">
              We compete for exceptional people. Compensation, tools, and
              time to do the work properly are not extras.
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
                Hiring is a product at Conveyor
              </h2>
              <p className="text-white/60 text-lg mt-3 max-w-2xl">
                We read every application. Introduce yourself with the work
                you are proud of — markets, systems, or both.
              </p>
            </div>
            <Button
              render={<a href="mailto:careers@conveyor.finance" />}
              className="bg-primary text-background h-12 px-7 rounded-lg font-medium"
            >
              Email careers@conveyor.finance
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
