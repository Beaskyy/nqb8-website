"use client";

import Link from "next/link";
import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="bg-[#060708] py-20 lg:py-[112px]"
    >
      <Container className="relative text-center">
        <FadeInView>
          <h2 className="font-heading mx-auto max-w-[760px] text-[44px] font-extrabold leading-[104%] tracking-[-1.2%] text-[#F0F2ED] sm:text-[40px] lg:text-[56px]">
            Let&apos;s build infrastructure<br className="hidden lg:block" /> that matters.
          </h2>
          <p className="mx-auto mt-[30px] max-w-[630px] lg:text-[18px] leading-[150%] text-[#8F999E] sm:text-base ">
            Partner with NQB8 to build and operate systems designed for real<br className="hidden lg:block" /> communities, serious institutions, and emerging-market scale.
          </p>
        </FadeInView>

        <FadeInView
          delay={0.15}
          className="mt-[30px] flex flex-wrap items-center justify-center gap-[15px]"
        >
          <Link
            href="#partner"
            className="inline-flex h-[45px] items-center justify-center rounded-full bg-[#0A89FF] px-7 text-sm font-semibold text-black transition-all hover:bg-[#0A89FF]/90 active:scale-[0.98]"
          >
            Partner with Us
          </Link>
          <Link
            href="#platforms"
            className="inline-flex h-[45px] items-center justify-center rounded-full border border-[#333B40BF] bg-[#151619] px-7 text-sm font-medium text-[#F0F2ED] transition-all hover:bg-[#151619] active:scale-[0.98]"
          >
            Explore Platforms
          </Link>
        </FadeInView>
      </Container>
    </section>
  );
}
