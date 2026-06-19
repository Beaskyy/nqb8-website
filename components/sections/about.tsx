"use client";

import Image from "next/image";
import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";

export function About() {
  return (
    <section id="about" className="bg-black py-20 lg:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeInView>
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#0A84FF]">
              WHO WE ARE
            </span>
            <h2 className="mt-6 text-[36px] font-bold leading-[1.15] tracking-tight text-white sm:text-[44px] lg:text-[48px]">
              A Nigerian technology<br />
              institution building<br />
              systems that last.
            </h2>
            <p className="mt-8 text-[16px] leading-[1.65] text-white/60 sm:text-[17px]">
              Founded in 2010, NQB8 builds and operates technology platforms that
              solve real problems across African markets. We are not building
              concepts. We are building working systems across commerce, education,
              trust, residential operations, and digital infrastructure.
            </p>

            <div className="mt-12 rounded-2xl border border-white/[0.04] bg-[#0A0A0A] p-8">
              <div className="mb-6 h-[2px] w-8 bg-[#0A84FF]" />
              <blockquote className="text-[20px] font-bold leading-[1.3] text-white sm:text-[22px]">
                &quot;We build products and the people who build them.&quot;
              </blockquote>
              <p className="mt-5 text-[12px] font-bold uppercase tracking-wider text-white/40">
                NQB8 Operating Principle
              </p>
            </div>
          </FadeInView>

          <FadeInView direction="left" delay={0.15}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]">
              <Image 
                src="/about-code.png" 
                alt="Code operating systems"
                fill
                className="object-cover scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
