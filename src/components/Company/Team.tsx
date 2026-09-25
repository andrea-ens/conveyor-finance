import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { teamMembers } from "@/app/api/team";
import { careerRoles } from "@/app/api/careers";

const Team = () => {
  return (
    <section id="team" className="py-20 scroll-mt-32">
      <div className="container px-4">
        <p className="text-primary font-medium">Team</p>
        <h2 className="text-white sm:text-4xl text-3xl font-medium mt-2">
          How we are organized
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12 items-stretch">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[5/4] bg-black/40">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/[0.04]">
                    <span className="text-white/35 text-5xl font-medium tracking-tight">
                      {member.name
                        .split(" ")
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-white text-2xl font-medium">{member.name}</h3>
                {member.role ? (
                  <p className="text-primary mt-1">{member.role}</p>
                ) : null}
                {member.location ? (
                  <p className="text-white/40 text-sm mt-1">{member.location}</p>
                ) : null}
                {member.bio ? (
                  <p className="text-white/60 mt-4 leading-relaxed">{member.bio}</p>
                ) : null}
                {member.responsibilities.length > 0 ? (
                  <>
                    <p className="text-white/40 text-sm uppercase tracking-wide mt-8">
                      Responsibilities
                    </p>
                    <ul className="mt-3 grid grid-cols-2 gap-2">
                      {member.responsibilities.map((item) => (
                        <li key={item} className="text-white/80 text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-primary mt-6 w-fit"
                  >
                    <Icon icon="fa6-brands:linkedin-in" width="18" height="18" />
                    LinkedIn
                  </a>
                ) : null}
              </div>
            </article>
          ))}
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
