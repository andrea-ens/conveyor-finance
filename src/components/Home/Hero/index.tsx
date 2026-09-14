"use client";
import Link from "next/link";
import Image from "next/image";
import CardSlider from "./slider";
import BrandLogo from "../BrandLogo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LiveTicker from "@/components/Product/LiveTicker";

const Hero = () => {
  return (
    <section
      className="relative py-24 pt-40 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-center lg:items-start gap-10">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <div className="flex gap-6 items-center lg:justify-start justify-center">
                <Badge
                  variant="outline"
                  className="text-base py-1.5 px-4 bg-primary/10 rounded-full border border-white/10 text-primary font-medium h-9"
                >
                  conveyor.finance
                </Badge>
              </div>
              <h1 className="font-medium xl:text-[64px] md:text-6xl sm:text-5xl text-4xl text-white leading-[1.08]">
                Capital that moves with institutional precision
              </h1>
              <p className="text-white/80 text-lg max-w-xl">
                Conveyor is the professional stack for digital-asset desks:
                live DeFi portfolios, liquidity analytics, and execution-grade
                trading — in one operating system.
              </p>
            </div>
            <div className="flex flex-wrap items-center md:justify-start justify-center gap-4">
              <Button
                render={<Link href="/dashboard" />}
                className="text-base bg-primary hover:bg-primary/80 flex items-center gap-2 border border-primary rounded-lg font-semibold text-background py-6 px-7 cursor-pointer h-12"
              >
                View dashboard
                <Image
                  src={"/images/icons/icon-arrow.svg"}
                  alt="arrow-icon"
                  width={20}
                  height={20}
                />
              </Button>
              <Button
                variant="outline"
                render={<Link href="/trade" />}
                className="text-base border-primary text-primary hover:bg-primary hover:text-background py-6 px-7 rounded-lg h-12"
              >
                Trading terminal
              </Button>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="w-full h-full">
              <Image
                src="/images/hero/hero-banner-img.png"
                alt="Conveyor platform"
                width={584}
                height={582}
                className="w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <LiveTicker />
        </div>
        <BrandLogo />
        <CardSlider />
      </div>
    </section>
  );
};

export default Hero;
