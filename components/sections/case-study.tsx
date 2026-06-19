"use client";

import { motion } from "framer-motion";
import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { LearnMoreLink } from "@/components/ui/learn-more-link";
import { SectionLabel } from "@/components/ui/section-label";

function CircuitVisual() {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-surface-card"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.12),transparent_70%)]" />
      <svg viewBox="0 0 500 320" className="w-full">
        <defs>
          <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00A3FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E5C07B" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {[
          [50, 80, 200, 80],
          [200, 80, 350, 80],
          [50, 80, 50, 200],
          [350, 80, 350, 200],
          [50, 200, 200, 200],
          [200, 200, 350, 200],
          [200, 80, 200, 200],
          [50, 200, 350, 80],
          [100, 140, 300, 160],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#circuitGrad)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          />
        ))}
        {[
          { x: 50, y: 80 },
          { x: 200, y: 80 },
          { x: 350, y: 80 },
          { x: 50, y: 200 },
          { x: 200, y: 200 },
          { x: 350, y: 200 },
          { x: 125, y: 140 },
          { x: 275, y: 160 },
        ].map((node, i) => (
          <motion.g key={i}>
            <circle
              cx={node.x}
              cy={node.y}
              r="5"
              fill="#0066FF"
              opacity="0.9"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="12"
              fill="#0066FF"
              opacity="0.15"
            />
          </motion.g>
        ))}
        <motion.rect
          x="160"
          y="120"
          width="80"
          height="80"
          rx="4"
          fill="none"
          stroke="#00A3FF"
          strokeWidth="1"
          strokeOpacity="0.4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        />
      </svg>
    </div>
  );
}

export function CaseStudy() {
  return (
    <section className="border-y border-white/[0.06] bg-surface py-20 lg:py-[120px]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeInView>
            <SectionLabel>Case study</SectionLabel>
            <h2
              className="mt-4 text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[36px] lg:text-[40px]"
            >
              Future-facing infrastructure grounded in real markets.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-secondary sm:text-[16px]">
              From agent networks to cloud platforms, NQB8 products are built
              where infrastructure gaps are widest — and designed to become the
              default layer for the next generation of builders.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-secondary sm:text-[16px]">
              Real markets. Real constraints. Real scale — not slide-deck
              architecture.
            </p>
            <div className="mt-6">
              <LearnMoreLink href="#">Explore the case</LearnMoreLink>
            </div>
          </FadeInView>

          <FadeInView direction="left" delay={0.15}>
            <CircuitVisual />
          </FadeInView>
        </div>
      </Container>
    </section>
  );
}
