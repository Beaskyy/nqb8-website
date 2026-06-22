"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";

export function Article() {
  return (
    <article className="bg-[#060708] py-4">
      <Container>
        <div className="mx-auto">
          <FadeInView>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-full border border-[#333B408C] bg-[#0E0F11] px-4 py-2 text-[13px] font-medium text-[#F0F2ED] transition-colors hover:bg-[#151619]"
            >
              <ArrowLeft className="h-4 w-4 text-[#0A89FF]" />
              Back to Insights
            </Link>

            <div className="mt-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.88px] text-[#0A89FF]">
                PRODUCT
              </span>
              <h1 className="font-heading mt-[22px] max-w-[580px] text-[40px] font-extrabold leading-[105%] tracking-[-1.2%] text-[#F0F2ED] lg:text-[48px]">
                Why infrastructure companies must own the products they build
              </h1>
              
              <div className="mt-[22px] flex flex-col gap-6">
                <p className="text-sm font-medium text-[#8F999E]">
                  NQB8 Insights <span className="mx-1">·</span> 12 min read <span className="mx-1">·</span> March 2025
                </p>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-[#0A89FF]"></div>
                  <div>
                    <p className="text-[15px] font-semibold text-[#F0F2ED]">NQB8 Editorial</p>
                    <p className="text-[13px] text-[#8F999E]">Infrastructure & Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>

          <FadeInView delay={0.1}>
            <div className="relative mt-[22px] h-[532px] w-full overflow-hidden rounded-[18px] border border-[#333B408C] sm:h-[400px] lg:h-[480px]">
              <Image
                src="/images/article.png"
                alt="Article hero image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="mt-[37px] max-w-[1287px] text-[#8F999E] text-lg space-y-8">
              <p>
                Infrastructure is not a pitch deck category. It is the discipline of building systems that continue to work when markets shift, teams change, and capital cycles tighten.
              </p>
              <p>
                At NQB8, we have operated since 2010 with a simple constraint: if we identify a problem worth solving, we build the platform, ship it, and operate it. That ownership model changes how product decisions get made.
              </p>
              <p>
                Emerging markets reward endurance. Announcements fade. What remains are logistics networks that deliver, academic systems that verify outcomes, trust layers that communities rely on, and talent pipelines that compound skill over years—not sprints.
              </p>
              <p>
                This essay outlines how we think about product ownership, why African context matters in architecture decisions, and what institutions should expect when partnering with an operator—not an agency.
              </p>

              <div className="my-12 w-full max-w-[480px] rounded-[12px] bg-[#0D1114] py-6 px-[22px]">
                <div className="mb-3.5 h-[1px] w-12 bg-[#0A89FFF2]"></div>
                <p className="font-heading border-b border-[#20282ECC] pb-6 text-[22px] font-bold leading-[100%] text-[#F0F2ED] sm:text-[22px] !mb-0">
                  "We build systems that endure — not demos that expire."
                </p>
              </div>

              <p className="max-w-[720px]">
                If you are exploring partnership, platform collaboration, or institutional engagement with NQB8, we welcome the conversation.
              </p>
            </div>
          </FadeInView>
        </div>
      </Container>
    </article>
  );
}
