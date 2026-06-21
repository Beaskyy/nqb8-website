"use client";

import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { insightsItems } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export function RelatedInsights() {
  // Take just the first 3 insights for the related section
  const relatedItems = insightsItems.slice(0, 3);

  return (
    <section className="bg-[#060708] pb-20 lg:pb-[120px]">
      <Container>
        <FadeInView>
          <div className="border-t border-[#333B408C] pt-16">
            <SectionLabel className="text-[11px] font-bold uppercase tracking-[8%] text-[#0A89FF]">
              RELATED
            </SectionLabel>
            <h2 className="font-heading mt-4 text-[32px] font-bold leading-[120%] tracking-[-1%] text-[#F0F2ED] sm:text-[36px]">
              More from NQB8 Insights
            </h2>
          </div>
        </FadeInView>

        <div className="mt-12 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {relatedItems.map((item, i) => (
            <FadeInView key={item.title} delay={i * 0.1} className="h-full">
              <article
                className={cn(
                  "flex flex-col h-full rounded-[18px] bg-[#0E0F11] p-6 lg:p-8 transition-all duration-300",
                  "hover:bg-[#151619]"
                )}
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[8%] text-[#8F999E] mb-3">
                    {item.category}
                  </p>
                  <h3 className="font-heading text-[18px] tracking-[-0.4%] leading-[130%] font-bold text-[#F0F2ED]">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-auto pt-8">
                  <p className="text-[12px] text-[#8F999E]">
                    {item.readTime} · {item.year}
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
