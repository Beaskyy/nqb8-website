"use client";

import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { impactStats } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export function Impact() {
  return (
    <section className="border-y border-white/[0.06] bg-surface py-20 lg:py-[100px]">
      <Container>
        <FadeInView>
          <SectionLabel>Our impact</SectionLabel>
          <h2
            className="mt-4 text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[36px] lg:text-[40px]"
          >
            Resilience is part of the operating system.
          </h2>
        </FadeInView>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, i) => (
            <FadeInView key={stat.label} delay={i * 0.1}>
              <div className="border-l border-white/[0.08] pl-6">
                <p
                  className={cn(
                    "text-[40px] font-semibold tracking-[-0.03em] sm:text-[48px]",
                    "highlight" in stat && stat.highlight
                      ? "text-accent"
                      : "text-white"
                  )}
                >
                  {stat.value}
                </p>
                <p
                  className={cn(
                    "mt-1 text-[15px] font-medium",
                    "highlight" in stat && stat.highlight
                      ? "text-accent"
                      : "text-text-secondary"
                  )}
                >
                  {stat.label}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
