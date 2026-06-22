"use client";

import Link from "next/link";
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
          <h2 className="font-heading mt-6 text-3xl font-extrabold leading-[134%] tracking-[-1.2%] text-[#F0F2ED] sm:text-[40px] lg:text-[48px] max-w-[760px]">
            Perspectives on systems<br className="hidden lg:block" /> that matter.
          </h2>
          <p className="mt-6 lg:text-[17px] text-sm leading-[150%] text-[#8F999E] sm:text-base max-w-[650px]">
            Essays and analysis on African infrastructure, digital trust, logistics, education<br className="hidden lg:block" /> technology, and emerging markets.
          </p>
        </FadeInView>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-[18px] lg:grid-cols-3">
          {insightsItems.map((item, i) => (
            <FadeInView key={item.title} delay={i * 0.1} className="h-full">
              <Link href="/insights/example" className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-[#0A89FF] rounded-[18px]">
                <article
                  className={cn(
                    "flex flex-col h-full rounded-[18px] bg-[#060708] border border-[#333B408C] p-6 lg:p-8 transition-all duration-300",
                    "hover:border-[#0A89FF]/30"
                  )}
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[8%] text-[#8F999E] mb-4">
                      {item.category}
                    </p>
                    <h3 className="font-heading text-[22px] tracking-[-0.4%] leading-[130%] font-bold text-[#F0F2ED]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-auto pt-10">
                    <p className="text-[13px] text-[#8F999E]">
                      {item.readTime} · {item.year}
                    </p>
                  </div>
                </article>
              </Link>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
