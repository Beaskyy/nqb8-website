"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export function VisionDetail() {
  return (
    <section className="bg-[#0E0F11] py-20 lg:py-[112px]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[60px]">
          <FadeInView>
            <SectionLabel className="text-[13px] font-semibold uppercase tracking-[8%] text-[#0A89FF]">
              VISION
            </SectionLabel>
            <h2 className="font-heading mt-6 text-3xl font-extrabold leading-[120%] tracking-[-1.2%] text-[#F0F2ED] sm:text-[40px] max-w-[650px]">
              Future-facing infrastructure, grounded in real markets.
            </h2>
            <p className="mt-6 lg:text-[17px] text-sm leading-[150%] text-[#8F999E] sm:text-base max-w-[500px]">
              NQB8 is building toward digital trust, logistics intelligence, academic systems,
              fulfilment networks, identity, and operational infrastructure for emerging
              markets.
            </p>
            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex h-[45px] items-center justify-center rounded-full border border-[#333B40BF] px-6 text-sm font-medium text-[#F0F2ED] transition-all hover:bg-[#151619] active:scale-[0.98]"
              >
                Explore Our Vision
              </Link>
            </div>
          </FadeInView>

          <FadeInView direction="left" delay={0.15}>
            <div className="relative h-[260px] sm:h-[360px] w-full overflow-hidden rounded-[24px] border border-white/[0.08]">
              <Image
                src="/images/vision.png"
                alt="Future-facing infrastructure"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
