import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Engines } from "@/components/sections/engines";
import { PortfolioIntro } from "@/components/sections/portfolio-intro";
import { Products } from "@/components/sections/products";
import { CompanyStory } from "@/components/sections/company-story";
import { WhyUs } from "@/components/sections/why-us";
import { Vision } from "@/components/sections/vision";
import { BuilderCulture } from "@/components/sections/builder-culture";
import { Insights } from "@/components/sections/insights";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Engines />
        <PortfolioIntro />
        <Products />
        <CompanyStory />
        <WhyUs />
        <Vision />
        <BuilderCulture />
        <Insights />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
