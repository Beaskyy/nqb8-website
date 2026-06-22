"use client";

import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { builderCultureItems } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export function BuilderCulture() {
  return (
    <section
      id="builder-culture"
      className="bg-[#060708] py-20 lg:pt-[104px] lg:pb-[96px]"
    >
      <Container>
        <FadeInView>
          <SectionLabel className="text-[13px] font-semibold uppercase tracking-[8%] text-[#0A89FF]">
            BUILDER CULTURE
          </SectionLabel>
          <h2 className="font-heading mt-6 text-[44px] font-extrabold leading-[104%] tracking-[-1.2%] text-[#F0F2ED] sm:text-[40px] lg:text-[48px] max-w-[760px]">
            We build products and the
            <br className="hidden lg:block" /> people who build them.
          </h2>
          <p className="mt-6 lg:text-[17px] text-sm leading-[150%] text-[#8F999E] sm:text-base max-w-[650px]">
            Interns, NYSC placements, and junior engineers learn through
            <br className="hidden lg:block" /> real work, real products, and
            real stakes.
          </p>
        </FadeInView>

        <div className="mt-16 grid gap-[22px] lg:grid-cols-3">
          {builderCultureItems.map((item, i) => (
            <FadeInView key={item.title} delay={i * 0.1}>
              <article
                className={cn(
                  "h-full rounded-[18px] shadow-sm bg-[#0E0F11] border border-[#333B408C] p-6 lg:py-7 transition-all duration-300",
                  "hover:border-accent/25 hover:bg-surface-elevated",
                )}
              >
                <h3 className="font-heading text-[22px] tracking-[-0.4%] font-bold text-[#F0F2ED]">
                  {item.title}
                </h3>
                <p className="mt-4 lg:text-sm text-xs leading-[138%] text-[#8F999E]">
                  {item.description}
                </p>
              </article>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
