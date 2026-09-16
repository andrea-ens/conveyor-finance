import Link from "next/link";
import { companyPillars, companyPrinciples } from "@/app/api/company";

const CompanyIntro = () => {
  return (
    <section className="py-20 border-t border-white/10" id="why">
      <div className="container px-4">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <p className="text-primary font-medium">Company</p>
            <h2 className="text-white sm:text-4xl text-3xl font-medium mt-2">
              A corporate site for infrastructure that has to be taken seriously
            </h2>
          </div>
          <p className="lg:col-span-7 text-white/60 text-lg leading-relaxed lg:pt-8">
            Conveyor Finance publishes the company in the same register as the
            engineering: protocol, product studies, and hiring. We would rather
            look small and precise than large and invented.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {companyPillars.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 p-8 bg-white/[0.03]"
            >
              <h3 className="text-white text-xl font-medium">{item.title}</h3>
              <p className="text-white/60 mt-4 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-10 mt-16 pt-16 border-t border-white/10">
          {companyPrinciples.slice(0, 4).map((item) => (
            <div key={item.title}>
              <h3 className="text-white text-lg font-medium">{item.title}</h3>
              <p className="text-white/55 mt-2 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <Link
          href="/company"
          className="inline-block text-primary font-medium mt-12"
        >
          Company information →
        </Link>
      </div>
    </section>
  );
};

export default CompanyIntro;
