import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/work";
import TimeLine from "@/components/Home/timeline";
import Platform from "@/components/Home/platform";
import Portfolio from "@/components/Home/portfolio";
import Upgrade from "@/components/Home/upgrade";
import Perks from "@/components/Home/perks";
import GlobalReach from "@/components/Home/GlobalReach";
import Faq from "@/components/Home/Faq";
import DashboardPreview from "@/components/Product/DashboardPreview";
import TradingPreview from "@/components/Product/TradingPreview";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Conveyor is institutional crypto infrastructure: DeFi dashboards and professional trading at conveyor.finance.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <GlobalReach />
      <TimeLine />
      <DashboardPreview />
      <TradingPreview />
      <Platform />
      <Portfolio />
      <Upgrade />
      <Perks />
      <Faq />
    </main>
  );
}
