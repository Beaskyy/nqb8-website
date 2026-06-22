"use client";

import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { whyUsItems } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function WhyUs() {
  return (
    <section className="bg-[#060708] py-16 lg:pt-[102px] lg:pb-[96px]">
      <Container>
        <FadeInView>
          <SectionLabel className="text-[13px] font-semibold uppercase tracking-[8%] text-[#0A89FF]">
            PARTNERS & INSTITUTIONS
          </SectionLabel>
          <h2 className="font-heading mt-6 text-3xl font-extrabold leading-[130%] tracking-[-1.2%] text-[#F0F2ED] sm:text-[40px] max-w-[760px]">
            Why organizations work<br className="hidden lg:block" /> with NQB8.
          </h2>
          <p className="mt-8 lg:text-[17px] text-sm leading-[150%] text-[#8F999E] sm:text-base max-w-[650px]">
            The company brings operating history, local intelligence, product depth,
            ownership, and a builder pipeline into one credible partner.
          </p>
        </FadeInView>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-x-[18px] sm:gap-y-[25px] sm:grid-cols-2 lg:grid-cols-3">
          {whyUsItems.map((item, i) => (
            <FadeInView key={item.title} delay={i * 0.08}>
              <article
                className={cn(
                  "group h-full rounded-[18px] shadow-sm bg-[#0E0F11] p-6 lg:p-[32px] transition-all duration-300",
                  "hover:border-accent/25 hover:bg-surface-elevated"
                )}
              >
                <div className="mb-5">
                  <Image src={item.icon} alt={item.title} width={42} height={42} className="object-contain" />
                </div>
                <h3 className="font-heading text-[20px] font-semibold text-[#F0F2ED]">
                  {item.title}
                </h3>
                <p className="mt-3 lg:text-sm text-xs leading-[138%] text-[#8F999E]">
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
