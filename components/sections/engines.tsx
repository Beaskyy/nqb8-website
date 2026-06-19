"use client";

import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { LearnMoreLink } from "@/components/ui/learn-more-link";
import { SectionLabel } from "@/components/ui/section-label";
import { engines } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export function Engines() {
  return (
    <section id="engines" className="bg-black py-20 lg:py-[120px]">
      <Container>
        <FadeInView>
          <SectionLabel>What we do</SectionLabel>
          <h2
            className="mt-4 max-w-2xl text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[36px] lg:text-[40px]"
          >
            Two engines. One infrastructure mindset.
          </h2>
        </FadeInView>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {engines.map((engine, i) => (
            <FadeInView key={engine.title} delay={i * 0.1}>
              <article
                className={cn(
                  "group rounded-xl border border-white/[0.08] bg-surface-card p-6 transition-all duration-300 sm:p-8",
                  "hover:border-accent/25 hover:bg-surface-elevated"
                )}
              >
                <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-white">
                  {engine.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                  {engine.description}
                </p>
                <div className="mt-6">
                  <LearnMoreLink href={engine.href} />
                </div>
              </article>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
