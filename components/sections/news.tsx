"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { newsItems } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export function News() {
  return (
    <section
      id="news"
      className="border-y border-white/[0.06] bg-surface py-20 lg:py-[120px]"
    >
      <Container>
        <FadeInView>
          <SectionLabel>News</SectionLabel>
          <h2
            className="mt-4 text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[36px] lg:text-[40px]"
          >
            Perspectives on systems that matter.
          </h2>
        </FadeInView>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {newsItems.map((item, i) => (
            <FadeInView key={item.title} delay={i * 0.1}>
              <article
                className={cn(
                  "group rounded-xl border border-white/[0.08] bg-black/40 p-6 transition-all duration-300",
                  "hover:border-accent/25 hover:bg-black/60"
                )}
              >
                <p className="text-[12px] font-medium text-text-muted">
                  {item.category} · {item.date}
                </p>
                <h3 className="mt-3 text-[16px] font-semibold leading-snug text-white">
                  {item.title}
                </h3>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent transition-colors hover:text-accent-bright"
                >
                  Read more
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}
