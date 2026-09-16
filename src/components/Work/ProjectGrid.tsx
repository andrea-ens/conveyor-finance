import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/app/api/projects";

const ProjectGrid = ({ items }: { items: Project[] }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {items.map((project) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:border-primary/50 transition-colors h-full"
        >
          <div className="relative aspect-[16/10] bg-black/40">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col p-8 flex-1">
            <p className="text-primary text-sm uppercase tracking-wide">
              {project.kicker}
            </p>
            <h3 className="text-white text-2xl font-medium mt-3">
              {project.title}
            </h3>
            <p className="text-white/60 mt-4 leading-relaxed flex-1">
              {project.summary}
            </p>
            <p className="text-white/40 text-sm mt-6">{project.stack}</p>
            <span className="text-primary font-medium mt-4">
              Read case study →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;
