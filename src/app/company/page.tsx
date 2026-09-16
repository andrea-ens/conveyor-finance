import { Metadata } from "next";
import Link from "next/link";
import HeroSub from "@/components/SharedComponent/HeroSub";
import Team from "@/components/Company/Team";
import {
  companyFacts,
  companyNotList,
  companyPillars,
  companyPrinciples,
} from "@/app/api/company";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Conveyor Finance — corporate information, leadership, principles, and how to reach us at conveyor.finance.",
};

export default function CompanyPage() {
  return (
    <main>
      <HeroSub
        title="Company"
        subtitle="Conveyor Finance is a founder-led company building on-chain trading infrastructure and the public organization around it."
      />

      <section className="py-16 md:py-20">
        <div className="container px-4">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-white text-2xl md:text-[1.75rem] leading-relaxed font-medium">
                We exist so digital-asset operators can see a serious company
                behind the protocol work — and so candidates can inspect how we
                actually hire and build.
              </p>
              <div className="mt-8 space-y-5 text-white/65 text-lg leading-relaxed">
                <p>
                  conveyor.finance is the corporate website: brand, selected
                  work, careers, and contact. Product studies published here
                  are labeled. They are not a live venue.
                </p>
                <p>
                  Engineering work includes EVM protocol design, wallet-connected
                  product, and markets UI. The CEO holds vision, fundraising,
                  product, technical direction, partnerships, and hiring — and
                  acts as CTO until a dedicated technical lead is justified.
                </p>
              </div>
            </div>
            <dl className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
              {companyFacts.map((item) => (
                <div key={item.label} className="bg-background p-6">
                  <dt className="text-white/40 text-sm uppercase tracking-wide">
                    {item.label}
                  </dt>
                  <dd className="text-white text-lg font-medium mt-2">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="approach" className="py-16 border-t border-white/10 scroll-mt-32">
        <div className="container px-4">
          <p className="text-primary font-medium">What we do</p>
          <h2 className="text-white sm:text-4xl text-3xl font-medium mt-2 max-w-2xl">
            Three layers, one company
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {companyPillars.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="text-white text-xl font-medium">{item.title}</h3>
                <p className="text-white/60 mt-4 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/10">
        <div className="container px-4 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-primary font-medium">Principles</p>
            <h2 className="text-white sm:text-4xl text-3xl font-medium mt-2">
              How we operate
            </h2>
            <div className="mt-10 space-y-10">
              {companyPrinciples.map((item) => (
                <div key={item.title}>
                  <h3 className="text-white text-lg font-medium">{item.title}</h3>
                  <p className="text-white/60 mt-2 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-primary font-medium">Disclosures</p>
            <h2 className="text-white sm:text-4xl text-3xl font-medium mt-2">
              What this site is not
            </h2>
            <ul className="mt-10 space-y-4">
              {companyNotList.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-white/70 border-b border-white/10 pb-4 leading-relaxed"
                >
                  <span className="text-primary mt-1 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-white/45 text-sm mt-8 leading-relaxed">
              Full terms, privacy, and product-study disclosures:{" "}
              <Link href="/legal/terms" className="text-primary hover:underline">
                Terms
              </Link>
              ,{" "}
              <Link href="/legal/privacy" className="text-primary hover:underline">
                Privacy
              </Link>
              ,{" "}
              <Link href="/legal/disclosures" className="text-primary hover:underline">
                Disclosures
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10">
        <Team />
      </div>

      <section className="pb-24">
        <div className="container px-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-12 md:px-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-white text-3xl font-medium">Contact</h2>
              <p className="text-white/60 text-lg mt-3 max-w-xl leading-relaxed">
                Partnerships and press: hello@conveyor.finance. People and
                recruiting: careers@conveyor.finance.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                render={<Link href="/contact" />}
                className="bg-primary text-background h-12 px-7 rounded-lg font-medium"
              >
                Contact
              </Button>
              <Button
                variant="outline"
                render={<Link href="/blog" />}
                className="border-white/20 text-white h-12 px-7 rounded-lg"
              >
                Blog
              </Button>
              <Button
                variant="outline"
                render={<Link href="/careers" />}
                className="border-primary text-primary h-12 px-7 rounded-lg"
              >
                Careers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
