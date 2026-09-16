import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroSub from "@/components/SharedComponent/HeroSub";
import ProtocolFlow from "@/components/Work/ProtocolFlow";
import { getProjectBySlug, projects } from "@/app/api/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Work not found" };
  }
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  return (
    <main>
      <HeroSub title={project.title} />
      <section className="pb-24">
        <div className="container px-4 max-w-5xl">
          <p className="text-primary text-sm uppercase tracking-wide">
            {project.kicker}
          </p>
          <p className="text-white text-2xl md:text-3xl leading-relaxed mt-4">
            {project.overview}
          </p>
          <p className="text-white/40 text-sm mt-6">{project.stack}</p>

          {project.screenshots[0] ? (
            <figure className="mt-12 rounded-3xl overflow-hidden border border-white/10 bg-black/30">
              <Image
                src={project.screenshots[0].src}
                alt={project.screenshots[0].alt}
                width={1600}
                height={1000}
                className="w-full h-auto"
                priority
              />
              <figcaption className="text-white/50 text-sm px-6 py-4 border-t border-white/10">
                {project.screenshots[0].caption}
              </figcaption>
            </figure>
          ) : null}

          {project.showProtocolFlow ? (
            <div className="mt-12">
              <ProtocolFlow />
            </div>
          ) : null}

          <div className="mt-14 space-y-6 text-white/70 text-lg leading-relaxed">
            {project.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <h2 className="text-white text-2xl font-medium mt-14 mb-6">
            What we built
          </h2>
          <ul className="space-y-3 text-white/70">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-primary">●</span>
                {item}
              </li>
            ))}
          </ul>

          {project.screenshots.length > 1 ? (
            <div className="mt-16 space-y-10">
              <h2 className="text-white text-2xl font-medium">Screenshots</h2>
              {project.screenshots.slice(1).map((shot) => (
                <figure
                  key={shot.src}
                  className="rounded-3xl overflow-hidden border border-white/10 bg-black/30"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1600}
                    height={1000}
                    className="w-full h-auto"
                  />
                  <figcaption className="text-white/50 text-sm px-6 py-4 border-t border-white/10">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}

          <p className="text-white/40 text-sm mt-14">
            No production deployment is linked from this page.
          </p>
          <Link
            href="/work"
            className="inline-block mt-6 text-primary hover:underline"
          >
            ← All selected work
          </Link>
        </div>
      </section>
    </main>
  );
}
