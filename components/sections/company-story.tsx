"use client";

import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { companyStory } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export function CompanyStory() {
  return (
    <section id="company-story" className="bg-[#0E0F11] py-20 lg:py-[120px]">
      <Container>
        <FadeInView>
          <SectionLabel className="text-[13px] font-semibold uppercase tracking-[8%] text-[#0A89FF]">
            COMPANY STORY
          </SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold leading-[130%] tracking-[-1.2%] text-[#F0F2ED] sm:text-[40px] lg:text-[48px] max-w-[760px]">
            Resilience is part of the<br className="hidden lg:block" /> operating system.
          </h2>
          <p className="mt-6 text-sm leading-[150%] text-[#8F999E] sm:text-base lg:text-[17px] max-w-[700px]">
            A long-term company story built on persistence, rebuilding, and shipping products that solve real problems.
          </p>
        </FadeInView>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-[18px] lg:grid-cols-4">
          {companyStory.map((item, i) => (
            <FadeInView key={item.year} delay={i * 0.1}>
              <StoryCard item={item} />
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StoryCard({
  item,
}: {
  item: {
    year: string;
    title: string;
    description: string;
  };
}) {
  return (
    <article
      className={cn(
        "group h-full rounded-[18px] border border-[#333B4033] shadow-sm bg-[#0E0F11] p-6 transition-all duration-300",
        "hover:border-accent/25 hover:bg-surface-elevated"
      )}
    >
      <h3
        className={cn(
          "font-heading text-[32px] font-bold tracking-[-0.4%]",
          item.year === "Today" ? "text-[#0A89FF]" : "text-[#F0F2ED]"
        )}
      >
        {item.year}
      </h3>
      <p className="mt-4 text-[18px] font-semibold text-[#F0F2ED]">
        {item.title}
      </p>
      <p className="mt-3 lg:text-sm text-xs leading-[140%] text-[#8F999E]">
        {item.description}
      </p>
    </article>
  );
}
