"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";

export function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-black pb-16 pt-20 lg:pb-24 lg:pt-32 min-h-screen flex items-center">
      {/* Background globe image */}
      <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[83%]">
        <Image
          src="/images/globe.png"
          alt="Products hero background"
          fill
          className="object-cover object-center lg:object-left"
          priority
          quality={100}
        />
        {/* Smooth gradient fade on left edge */}
        <div className="absolute inset-y-0 left-0 hidden w-48 bg-gradient-to-r from-black to-transparent lg:block" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <FadeInView>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-1.2%] text-[#F0F2ED] sm:text-[56px] lg:text-[72px]">
              Platforms<br />
              in market.
            </h1>
          </FadeInView>

          <FadeInView delay={0.1}>
            <p className="mt-6 max-w-[435px] md:text-xl text-[#CCCCCC] leading-[1.6]">
              Live products across commerce, education, trust, and community — built and operated by NQB8.
            </p>
          </FadeInView>

          <FadeInView delay={0.2} className="mt-10 flex flex-wrap gap-3.5">
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#0A89FF] px-8 text-sm font-medium text-[#060708] transition-all hover:bg-[#0A89FF]/90 active:scale-[0.98]"
            >
              Partner with Us
            </Link>
            <Link
              href="#ecosystem"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#333B40BF] bg-[#151619] px-8 text-sm font-medium text-[#F0F2ED] transition-colors hover:bg-[#1D1F23] hover:border-white/20 active:scale-[0.98]"
            >
              Explore Ecosystem
            </Link>
          </FadeInView>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 lg:mt-20">
            <FadeInView delay={0.25}>
              <h3 className="font-space text-[13px] font-bold text-[#F0F2ED]">
                Founded in 2010
              </h3>
              <p className="mt-1 text-[11px] text-[#8F999E]">
                Long-term operating history
              </p>
            </FadeInView>
            <FadeInView delay={0.3}>
              <h3 className="font-space text-[13px] font-bold text-[#F0F2ED]">
                Built in Nigeria
              </h3>
              <p className="mt-1 text-[11px] text-[#8F999E]">
                Local intelligence
              </p>
            </FadeInView>
            <FadeInView delay={0.35}>
              <h3 className="font-space text-[13px] font-bold text-[#F0F2ED]">
                Multiple platforms
              </h3>
              <p className="mt-1 text-[11px] text-[#8F999E]">
                Products in market
              </p>
            </FadeInView>
            <FadeInView delay={0.4}>
              <h3 className="font-space text-[13px] font-bold text-[#F0F2ED]">
                Infrastructure mindset
              </h3>
              <p className="mt-1 text-[11px] text-[#8F999E]">
                Systems that endure
              </p>
            </FadeInView>
          </div>
        </div>
      </Container>
    </section>
  );
}
