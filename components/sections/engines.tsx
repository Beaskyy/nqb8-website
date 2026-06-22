"use client";

import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { engines } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export function Engines() {
  return (
    <section id="engines" className="bg-[#060708] py-20 lg:py-[120px]">
      <Container>
        <FadeInView>
          <SectionLabel className="text-xs font-semibold uppercase tracking-[12%] text-[#0A89FF]">
            OPERATING MODEL
          </SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-bold leading-[1.15] tracking-[-1.2%] text-[#F0F2ED] sm:text-[44px] lg:text-[48px] max-w-[760px]">
            Two engines. One infrastructure mindset.
          </h2>
        </FadeInView>
        <p className="mt-6 text-sm leading-[150%] text-[#8F999E] sm:text-base lg:text-[17px] max-w-[540px]">
          NQB8 combines product ownership with talent development, turning real
          market problems into operating platforms and capable builders.
        </p>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-7 lg:grid-cols-2">
          {engines.map((engine, i) => (
            <FadeInView key={engine.title} delay={i * 0.1}>
              <article
                className={cn(
                  "group rounded-xl border border-[#00000047] shadow-sm bg-surface-card py-6 px-[22px] transition-all duration-300 sm:p-8",
                  "hover:border-accent/25 hover:bg-surface-elevated",
                )}
              >
                <h3 className="font-heading lg:text-[28px] text-xl text-[#F0F2ED] font-bold tracking-[-0.4%] text-[#F0F2ED]">
                  {engine.title}
                </h3>
                <p className="mt-3 lg:text-[17px] text-[15px] text-[#8F999E]">
                  {engine.description}
                </p>
                <div className="mt-8">
                  <span className="text-[13px] font-bold uppercase tracking-[8%] text-[#0A89FF]">
                    {engine.label}
                  </span>
                </div>
              </article>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
