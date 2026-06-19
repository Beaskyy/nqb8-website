"use client";

import {
  Calendar,
  Globe2,
  Layers,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { whyUsItems } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

const iconMap = {
  calendar: Calendar,
  layers: Layers,
  target: Target,
  globe: Globe2,
  users: Users,
  shield: Shield,
} as const;

export function WhyUs() {
  return (
    <section className="bg-black py-20 lg:py-[120px]">
      <Container>
        <FadeInView>
          <SectionLabel>Why work with us</SectionLabel>
          <h2
            className="mt-4 text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[36px] lg:text-[40px]"
          >
            Why organizations work with NQB8.
          </h2>
        </FadeInView>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsItems.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <FadeInView key={item.title} delay={i * 0.06}>
                <article
                  className={cn(
                    "rounded-xl border border-white/[0.08] bg-surface-card p-6 transition-all duration-300",
                    "hover:border-accent/25 hover:bg-surface-elevated"
                  )}
                >
                  <div
                    className="flex size-9 items-center justify-center rounded-lg bg-accent/10"
                  >
                    <Icon className="size-4 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-[16px] font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </article>
              </FadeInView>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
