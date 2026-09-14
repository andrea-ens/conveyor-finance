import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";

export const metadata: Metadata = {
  title: "Company",
  description: "About Conveyor Finance — institutional crypto infrastructure.",
};

export default function CompanyPage() {
  return (
    <main>
      <HeroSub title="Company" />
      <section className="py-20">
        <div className="container px-4 max-w-4xl">
          <p className="text-white text-2xl leading-relaxed">
            Conveyor exists so digital-asset operators can move capital with
            the same discipline they expect from traditional markets.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
              <h2 className="text-white text-xl font-medium">Mission</h2>
              <p className="text-white/60 mt-3">
                Unify observation and execution. Portfolio, liquidity, and
                trading should share one book, one risk model, and one brand.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
              <h2 className="text-white text-xl font-medium">Domain</h2>
              <p className="text-white/60 mt-3">
                Public site and product entry point:{" "}
                <span className="text-primary">conveyor.finance</span>
              </p>
            </div>
          </div>
          <div className="mt-12 space-y-4 text-white/70 text-lg">
            <p>
              We assemble Conveyor as three repositories: this corporate
              website, the DeFi dashboard application, and the trading
              workspace. Each layer is independently shippable and jointly
              branded.
            </p>
            <p>
              Headquarters correspondence: hello@conveyor.finance
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
