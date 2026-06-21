import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TalentHero } from "@/components/sections/talent-hero";
import { Engines } from "@/components/sections/engines";
import { BuilderCulture } from "@/components/sections/builder-culture";
import { FinalCta } from "@/components/sections/final-cta";
import { WhyUs } from "@/components/sections/why-us";

export const metadata: Metadata = {
  title: "Talent — NQB8",
  description:
    "Builder culture with real stakes. NQB8 develops talent through live products, operational discipline, and long-term infrastructure thinking.",
};

export default function TalentPage() {
  return (
    <>
      <Header />
      <main>
        <TalentHero />
        <BuilderCulture />
        <Engines />
        <WhyUs />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
