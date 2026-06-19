"use client";

import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { LearnMoreLink } from "@/components/ui/learn-more-link";
import { SectionLabel } from "@/components/ui/section-label";
import { platforms } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export function Platforms() {
  const topRow = platforms.slice(0, 3);
  const bottomRow = platforms.slice(3);

  return (
    <section id="platforms" className="bg-black py-20 lg:py-[120px]">
      <Container>
        <FadeInView>
          <SectionLabel>Platforms</SectionLabel>
          <h2
            className="mt-4 text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[36px] lg:text-[40px]"
          >
            Live platforms with infrastructure intent.
          </h2>
        </FadeInView>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topRow.map((platform, i) => (
            <FadeInView key={platform.name} delay={i * 0.08}>
              <PlatformCard platform={platform} />
            </FadeInView>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {bottomRow.map((platform, i) => (
            <FadeInView key={platform.name} delay={0.24 + i * 0.08}>
              <PlatformCard platform={platform} />
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PlatformCard({
  platform,
}: {
  platform: {
    category: string;
    name: string;
    description: string;
    href: string;
  };
}) {
  return (
    <article
      className={cn(
        "group rounded-xl border border-white/[0.08] bg-surface-card p-6 transition-all duration-300",
        "hover:border-accent/25 hover:bg-surface-elevated"
      )}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
        {platform.category}
      </p>
      <h3 className="mt-3 text-[18px] font-semibold text-white">
        {platform.name}
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
        {platform.description}
      </p>
      <div className="mt-5">
        <LearnMoreLink href={platform.href} />
      </div>
    </article>
  );
}
