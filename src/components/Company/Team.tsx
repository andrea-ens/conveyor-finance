import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/app/api/team";
import { careerRoles } from "@/app/api/careers";

const Team = () => {
  const founder = teamMembers[0];

  return (
    <section id="team" className="py-20 scroll-mt-32">
      <div className="container px-4">
        <p className="text-primary font-medium">Team</p>
        <h2 className="text-white sm:text-4xl text-3xl font-medium mt-2">
          How we are organized
        </h2>
        <p className="text-white/60 mt-4 max-w-3xl text-lg leading-relaxed">
          One founder in seat. Technical direction sits with the CEO for now —
          we are not hiring a CTO / lead blockchain engineer until that split
          is real. The roles below are the seats we are filling.
        </p>

        <div className="grid lg:grid-cols-12 gap-8 mt-12 items-stretch">
          <article className="lg:col-span-5 rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="relative aspect-[5/4] bg-black/40">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="p-8">
              <h3 className="text-white text-2xl font-medium">{founder.name}</h3>
              <p className="text-primary mt-1">{founder.role}</p>
              <p className="text-white/40 text-sm mt-1">{founder.location}</p>
              <p className="text-white/60 mt-4 leading-relaxed">{founder.bio}</p>
              <p className="text-white/40 text-sm uppercase tracking-wide mt-8">
                Responsibilities
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {founder.responsibilities.map((item) => (
                  <li key={item} className="text-white/80 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
              {founder.github ? (
                <a
                  href={founder.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm text-white/70 hover:text-primary mt-6"
                >
                  GitHub
                </a>
              ) : null}
            </div>
          </article>

          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col justify-center">
            <p className="text-primary text-sm uppercase tracking-wide">
              Not hiring yet
            </p>
            <h3 className="text-white text-2xl font-medium mt-3">
              CTO / Lead Blockchain Engineer
            </h3>
            <p className="text-white/60 mt-4 leading-relaxed">
              The founder is acting as CTO: technical direction, protocol
              judgment, and engineering sequencing. We will not post this seat
              until the company needs a dedicated technical lead separate from
              the CEO.
            </p>
            <p className="text-white/45 text-sm mt-6 leading-relaxed">
              Senior blockchain engineering is hired as an IC role, reporting
              into the founder.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-primary font-medium">Open seats</p>
          <h3 className="text-white text-2xl font-medium mt-2">
            Who we are hiring
          </h3>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
            {careerRoles.map((role) => (
              <Link
                key={role.slug}
                href={`/careers/${role.slug}`}
                className="rounded-3xl border border-dashed border-white/20 bg-white/[0.03] p-7 flex flex-col justify-between hover:border-primary/50 transition-colors min-h-[240px]"
              >
                <div>
                  <p className="text-white/40 text-sm">{role.team}</p>
                  <h4 className="text-white text-xl font-medium mt-2">
                    {role.title}
                  </h4>
                  <p className="text-white/60 mt-3 leading-relaxed text-sm">
                    {role.summary}
                  </p>
                </div>
                <span className="text-primary font-medium mt-6">
                  View role →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
