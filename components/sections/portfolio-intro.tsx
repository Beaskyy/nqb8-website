"use client";

import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export function PortfolioIntro() {
  return (
    <section
      id="portfolio"
      className="border-y border-white/[0.06] bg-surface py-20 lg:py-[100px]"
    >
      <Container>
        <FadeInView className="max-w-3xl">
          <SectionLabel>Portfolio</SectionLabel>
          <h2
            className="mt-4 text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[36px] lg:text-[40px]"
          >
            A portfolio of infrastructure layers, not isolated apps.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-text-secondary sm:text-[16px]">
            Each platform in the NQB8 portfolio is designed as connective
            tissue — payment rails, identity layers, cloud tooling, and social
            infrastructure that compound over time.
          </p>
        </FadeInView>
      </Container>
    </section>
  );
}
