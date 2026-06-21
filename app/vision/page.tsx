import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { VisionHero } from "@/components/sections/vision-hero";
import { VisionDetail } from "@/components/sections/vision-detail";
import { CompanyStory } from "@/components/sections/company-story";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Vision — NQB8",
  description:
    "NQB8 is building toward digital trust, logistics intelligence, academic systems, fulfilment networks, identity, and operational infrastructure for emerging markets.",
};

export default function VisionPage() {
  return (
    <>
      <Header />
      <main>
        <VisionHero />
        <VisionDetail />
        <CompanyStory />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
