"use client";

import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export function PortfolioIntro() {
  return (
    <section
      id="portfolio"
      className="bg-[#0E0F11] py-20 lg:py-[120px]"
    >
      <Container>
        <FadeInView className="max-w-3xl">
          <SectionLabel className="text-xs font-semibold uppercase tracking-[8%] text-[#0A89FF]">
            ECOSYSTEM
          </SectionLabel>
          <h2 className="font-heading mt-6 text-[44px] font-bold leading-[1.15] tracking-[-1.2%] text-[#F0F2ED] sm:text-10 lg:text-[48px] max-w-[760px]">
            A portfolio of infrastructure layers, not isolated apps.
          </h2>
          <p className="mt-8 text-[17px] leading-[150%] text-[#8F999E] sm:text-base max-w-[700px]">
            Each platform focuses on a practical layer of African market infrastructure: movement,
            learning, trust, residence, and operator capability.
          </p>
        </FadeInView>
      </Container>
    </section>
  );
}
