import { Metadata } from "next";
import HeroSub from "@/components/SharedComponent/HeroSub";
import ProjectGrid from "@/components/Work/ProjectGrid";
import { projects } from "@/app/api/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Blockchain projects we developed — protocol, product, and UI — with descriptions and screenshots. No live deployments.",
};

export default function WorkPage() {
  return (
    <main>
      <HeroSub
        title="Selected work"
        subtitle="Case studies of protocol, product, and UI we developed. Screenshots and descriptions — not deployment links."
      />
      <section className="py-16 pb-24">
        <div className="container px-4">
          <p className="text-white/60 max-w-3xl text-lg mb-12 leading-relaxed">
            Protocol, product, and UI case studies. Not live venues.
          </p>
          <ProjectGrid items={projects} />
        </div>
      </section>
    </main>
  );
}
