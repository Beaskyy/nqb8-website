import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FinalCta } from "@/components/sections/final-cta";
import { About } from "@/components/sections/about";
import { Engines } from "@/components/sections/engines";
import { Products } from "@/components/sections/products";
import { CompanyStory } from "@/components/sections/company-story";
import { Vision } from "@/components/sections/vision";
import { AboutHero } from "@/components/sections/about-hero";

export const metadata: Metadata = {
  title: "About — NQB8",
  description:
    "Founded in 2010, NQB8 is a Nigerian technology institution building digital infrastructure and platforms for emerging markets.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <About />
        <Engines />
        <Products />
        <CompanyStory />
        <Vision />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
