import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { careerRoles, getRoleBySlug } from "@/app/api/careers";
import ApplyForm from "@/components/Careers/ApplyForm";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return careerRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) {
    return { title: "Role not found" };
  }
  return {
    title: `${role.title} — Careers`,
    description: role.summary,
  };
}

export default async function CareerRolePage({ params }: PageProps) {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) {
    notFound();
  }

  return (
    <main>
      <HeroSub title={role.title} />
      <section className="pb-20">
        <div className="container px-4 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="rounded-full border border-white/15 px-3 py-1 text-white/80 text-sm">
                {role.team}
              </span>
              <span className="rounded-full border border-white/15 px-3 py-1 text-white/80 text-sm">
                {role.location}
              </span>
              <span className="rounded-full border border-primary/40 text-primary px-3 py-1 text-sm">
                {role.type}
              </span>
            </div>
            <p className="text-white text-xl leading-relaxed">{role.about}</p>
            <h2 className="text-white text-2xl font-medium mt-12 mb-4">
              What you will do
            </h2>
            <ul className="space-y-3 text-white/70">
              {role.responsibilities.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-primary">●</span>
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="text-white text-2xl font-medium mt-12 mb-4">
              What you bring
            </h2>
            <ul className="space-y-3 text-white/70">
              {role.requirements.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-primary">●</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/careers"
              className="inline-block mt-12 text-primary hover:underline"
            >
              ← All open roles
            </Link>
          </div>
          <div className="lg:col-span-5">
            <ApplyForm roleTitle={role.title} />
          </div>
        </div>
      </section>
    </main>
  );
}
