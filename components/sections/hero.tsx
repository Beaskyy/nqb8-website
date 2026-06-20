"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pb-16 pt-20 lg:pb-24 lg:pt-32 min-h-screen flex items-center">
      {/* Background wrapper */}
      <div className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[83%]">
        <Image
          src="/images/globe.png"
          alt="Hero background"
          fill
          className="object-cover object-center lg:object-left "
          priority
          quality={100}
        />
        {/* Smooth gradient fade to blend the left edge of the image with the black background */}
        <div className="absolute inset-y-0 left-0 hidden w-48 bg-gradient-to-r from-black to-transparent lg:block" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <FadeInView>
            <h1 className="lg:text-[64px] font-bold leading-[1.05] tracking-[-1.2%] text-[#F0F2ED] sm:text-[56px] lg:text-[72px]">
              Digital<br />
              Infrastructure for<br />
              Emerging Markets
            </h1>
          </FadeInView>

          <FadeInView delay={0.1}>
            <p className="mt-6 max-w-[435px] text-xl text-[#CCCCCC] leading-[1.6] text-white/60 sm:text-[18px]">
              NQB8 builds platforms powering commerce,
              education, communities, trust, and
              operational systems across African markets.
            </p>
          </FadeInView>

          <FadeInView delay={0.2} className="mt-10 flex flex-wrap gap-3.5">
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#0A84FF] px-8 text-[15px] font-medium text-black transition-all hover:bg-[#0A84FF]/90 active:scale-[0.98]"
            >
              Partner with Us
            </Link>
            <Link
              href="#ecosystem"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-[#111] px-8 text-[15px] font-medium text-white transition-colors hover:bg-[#222] hover:border-white/20 active:scale-[0.98]"
            >
              Explore Ecosystem
            </Link>
          </FadeInView>

          <FadeInView delay={0.25} className="mt-20">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 lg:gap-x-12">
              <div>
                <h3 className="text-[13px] font-bold text-white">Founded in 2010</h3>
                <p className="mt-1 text-[12px] text-white/50">Long-term operating history</p>
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-white">Built in Nigeria</h3>
                <p className="mt-1 text-[12px] text-white/50">Local intelligence</p>
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-white">Multiple platforms</h3>
                <p className="mt-1 text-[12px] text-white/50">Products in market</p>
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-white">Infrastructure mindset</h3>
                <p className="mt-1 text-[12px] text-white/50">Systems that endure</p>
              </div>
            </div>
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
