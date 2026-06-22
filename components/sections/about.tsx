"use client";

import Image from "next/image";
import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";

export function About() {
  return (
    <section id="about" className="bg-[#0B0D0F] py-16 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[70px]">
          <FadeInView>
            <span className="text-xs font-semibold uppercase tracking-[12%] text-[#0A89FF]">
              WHO WE ARE
            </span>
            <h2 className="font-heading mt-6 text-4xl font-bold leading-[1.15] tracking-[-1.2%] text-white sm:text-[44px] lg:text-[48px]">
              A Nigerian technology<br />
              institution building<br />
              systems that last.
            </h2>
            <p className="mt-8 text-base leading-[155%] text-[#9BA4A8] sm:text-lg lg:text-lg max-w-[560px]">
              Founded in 2010, NQB8 builds and operates technology platforms that
              solve real problems across African markets. We are not building
              concepts. We are building working systems across commerce, education,
              trust, residential operations, and digital infrastructure.
            </p>

            <div className="mt-12 rounded-xl bg-[#0D1114] py-6 px-[22px]">
              <div className="mb-3.5 h-[1px] w-[48px] bg-[#0A89FFF2]" />
              <blockquote className="max-w-[380px] text-[20px] font-bold text-[#F1F3EF] sm:text-[25px]">
                &quot;We build products and the people who build them.&quot;
              </blockquote>
              <p className="mt-5 text-xs font-medium tracking-[7%] text-[#76858C]">
                NQB8 Operating Principle
              </p>
            </div>
          </FadeInView>

          <FadeInView direction="left" delay={0.15}>
            <div className="relative h-[400px] sm:h-[520px] w-full max-w-[600px] overflow-hidden">
              <Image 
                src="/images/code.svg" 
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
