import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { InsightsHero } from "@/components/sections/insights-hero";
import { Insights } from "@/components/sections/insights";
import { FinalCta } from "@/components/sections/final-cta";
import { WhyUs } from "@/components/sections/why-us";

export const metadata: Metadata = {
  title: "Insights — NQB8",
  description:
    "Field notes from the infrastructure layer. Perspectives on building platforms, developing talent, and operating systems across African markets.",
};

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main>
        <InsightsHero />
        <Insights />
        <WhyUs />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
