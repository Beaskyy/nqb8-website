"use client";

import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { insightsItems } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export function Insights() {
  return (
    <section id="insights" className="bg-[#0E0F11] py-20 lg:py-[104px]">
      <Container>
        <FadeInView>
          <SectionLabel className="text-[13px] font-semibold uppercase tracking-[8%] text-[#0A89FF]">
            INSIGHTS
          </SectionLabel>
          <h2 className="font-heading mt-6 text-[44px] font-extrabold leading-[134%] tracking-[-1.2%] text-[#F0F2ED] sm:text-[40px] lg:text-[48px] max-w-[760px]">
            Perspectives on systems<br className="hidden lg:block" /> that matter.
          </h2>
          <p className="mt-6 lg:text-[17px] text-sm leading-[150%] text-[#8F999E] sm:text-base max-w-[650px]">
            Essays and analysis on African infrastructure, digital trust, logistics, education<br className="hidden lg:block" /> technology, and emerging markets.
          </p>
        </FadeInView>

        <div className="mt-16 grid gap-[22px] lg:grid-cols-3">
          {insightsItems.map((item, i) => (
            <FadeInView key={item.title} delay={i * 0.1} className="h-full">
              <article
                className={cn(
                  "flex flex-col h-full rounded-[18px] shadow-sm bg-[#0E0F11] border border-[#333B408C] p-6 lg:py-7 transition-all duration-300",
                  "hover:border-accent/25 hover:bg-surface-elevated"
                )}
              >
                <h3 className="font-heading text-[23px] tracking-[-0.4%] leading-[130%] font-bold text-[#F0F2ED]">
                  {item.title}
                </h3>
                <div className="mt-auto pt-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[8%] text-[#8F999E]">
                    {item.category}
                  </p>
                </div>
              </article>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
