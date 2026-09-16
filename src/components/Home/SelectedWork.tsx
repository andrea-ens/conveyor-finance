import Link from "next/link";
import ProjectGrid from "@/components/Work/ProjectGrid";
import { featuredProjects } from "@/app/api/projects";

const SelectedWork = () => {
  return (
    <section className="py-16 md:py-20" id="work">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-primary font-medium">Selected work</p>
            <h2 className="text-white sm:text-4xl text-3xl font-medium mt-2">
              Blockchain projects we developed
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl text-lg">
              Protocol, wallet-connected product, and markets UI — described
              and shown as screenshots, without deployed links.
            </p>
          </div>
          <Link href="/work" className="text-primary font-medium shrink-0">
            View all work →
          </Link>
        </div>
        <ProjectGrid items={featuredProjects} />
      </div>
    </section>
  );
};

export default SelectedWork;
