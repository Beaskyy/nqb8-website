"use client";

import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { LearnMoreLink } from "@/components/ui/learn-more-link";
import { SectionLabel } from "@/components/ui/section-label";
import { learnMoreItems } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export function Talent() {
  return (
    <section id="talent" className="bg-black py-20 lg:py-[120px]">
      <Container>
        <FadeInView>
          <SectionLabel>Learn more</SectionLabel>
          <h2
            className="mt-4 max-w-2xl text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[36px] lg:text-[40px]"
          >
            We build products and the people who build them.
          </h2>
        </FadeInView>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {learnMoreItems.map((item, i) => (
            <FadeInView key={item.title} delay={i * 0.1}>
              <article
                className={cn(
                  "rounded-xl border border-white/[0.08] bg-surface-card p-6 transition-all duration-300",
                  "hover:border-accent/25 hover:bg-surface-elevated"
                )}
              >
                <h3 className="text-[18px] font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
                  {item.description}
                </p>
                <div className="mt-5">
                  <LearnMoreLink href={item.href} />
                </div>
              </article>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
