import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Engines } from "@/components/sections/engines";
import { PortfolioIntro } from "@/components/sections/portfolio-intro";
import { Platforms } from "@/components/sections/platforms";
import { Impact } from "@/components/sections/impact";
import { WhyUs } from "@/components/sections/why-us";
import { CaseStudy } from "@/components/sections/case-study";
import { Talent } from "@/components/sections/talent";
import { News } from "@/components/sections/news";
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
        <Platforms />
        <Impact />
        <WhyUs />
        <CaseStudy />
        <Talent />
        <News />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
