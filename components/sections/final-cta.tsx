"use client";

import Link from "next/link";
import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-20 lg:py-[120px]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,102,255,0.12),transparent)]"
        aria-hidden="true"
      />

      <Container className="relative text-center">
        <FadeInView>
          <h2
            className="text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[36px] lg:text-[40px]"
          >
            Let&apos;s build infrastructure that matters.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-text-secondary sm:text-[16px]">
            Whether you&apos;re building a platform, investing in emerging
            markets, or looking to grow as a technical leader — we&apos;d like
            to hear from you.
          </p>
        </FadeInView>

        <FadeInView
          delay={0.15}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="mailto:hello@nqb8.com"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-accent px-6 text-[14px] font-medium text-white transition-all hover:bg-accent-bright active:scale-[0.98]"
          >
            Get in touch
          </Link>
          <Link
            href="#careers"
            id="careers"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-white/20 px-6 text-[14px] font-medium text-white transition-colors hover:border-white/40 hover:bg-white/[0.04]"
          >
            Join the team
          </Link>
        </FadeInView>
      </Container>
    </section>
  );
}
