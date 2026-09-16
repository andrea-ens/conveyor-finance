"use client";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="relative py-24 pt-32 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col items-center lg:items-start gap-10">
            <div className="flex flex-col gap-5 text-center lg:text-left">
              <div className="flex items-center lg:justify-start justify-center">
                <Badge
                  variant="outline"
                  className="text-xl md:text-2xl py-2.5 px-7 bg-primary/10 rounded-full border border-white/10 text-primary font-medium h-12 md:h-14"
                >
                  conveyor.finance
                </Badge>
              </div>
              <h1 className="font-medium xl:text-[49px] md:text-6xl sm:text-5xl text-4xl text-white leading-[1.08]">
                On-chain trading infrastructure, published as a company.
              </h1>
              <p className="text-white/70 text-lg max-w-xl leading-relaxed">
                Conveyor Finance is founder-led. This is the corporate website
                — work, organization, and careers. It is not a live exchange,
                custodian, or brokerage.
              </p>
            </div>
            <div className="flex flex-wrap items-center md:justify-start justify-center gap-4">
              <Button
                render={<Link href="/company" />}
                className="text-base bg-primary hover:bg-primary/80 flex items-center gap-2 border border-primary rounded-lg font-semibold text-background py-6 px-7 cursor-pointer h-12"
              >
                Company
                <Image
                  src={"/images/icons/icon-arrow.svg"}
                  alt="arrow-icon"
                  width={20}
                  height={20}
                />
              </Button>
              <Button
                variant="outline"
                render={<Link href="/work" />}
                className="text-base border-primary text-primary hover:bg-primary hover:text-background py-6 px-7 rounded-lg h-12"
              >
                Selected work
              </Button>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="w-full h-full">
              <Image
                src="/images/hero/hero-banner-img.png"
                alt="Conveyor"
                width={584}
                height={582}
                className="w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
