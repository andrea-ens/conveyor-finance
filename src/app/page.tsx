import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import CompanyIntro from "@/components/Home/CompanyIntro";
import Platform from "@/components/Home/platform";
import Faq from "@/components/Home/Faq";
import SelectedWork from "@/components/Home/SelectedWork";
import LatestBlog from "@/components/Home/LatestBlog";

export const metadata: Metadata = {
  title: {
    absolute: "Conveyor Finance",
  },
  description:
    "Conveyor Finance — corporate site for on-chain trading infrastructure. Work, careers, and company at conveyor.finance.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyIntro />
      <SelectedWork />
      <LatestBlog />
      <Platform />
      <Faq />
    </main>
  );
}
