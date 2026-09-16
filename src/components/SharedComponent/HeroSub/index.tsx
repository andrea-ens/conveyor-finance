import React, { FC } from "react";

interface HeroSubProps {
  title: string;
  subtitle?: string;
}

const HeroSub: FC<HeroSubProps> = ({ title, subtitle }) => {
  return (
    <section className="pt-36 pb-14 border-b border-white/10 bg-background">
      <div className="container px-4 mx-auto max-w-5xl">
        <p className="text-primary text-sm uppercase tracking-[0.18em] mb-4">
          Conveyor Finance
        </p>
        <h1 className="text-white md:text-5xl text-4xl font-medium tracking-tight">
          {title}
        </h1>
        {subtitle ? (
          <p className="text-white/55 text-lg md:text-xl mt-5 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
};

export default HeroSub;
