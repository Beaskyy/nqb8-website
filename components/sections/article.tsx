"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";

export function Article() {
  return (
    <article className="bg-[#060708] pt-[120px] pb-20 lg:pt-[160px] lg:pb-[100px]">
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
              <span className="text-[13px] font-bold uppercase tracking-[8%] text-[#0A89FF]">
                PRODUCT
              </span>
              <h1 className="font-heading mt-6 max-w-[900px] text-[40px] font-extrabold leading-[105%] tracking-[-1.2%] text-[#F0F2ED] sm:text-[56px] lg:text-[76px]">
                Why infrastructure companies must own the products they build
              </h1>
              
              <div className="mt-10 flex flex-col gap-6">
                <p className="text-[17px] font-medium text-[#8F999E]">
                  NQB8 Insights <span className="mx-2">·</span> 12 min read <span className="mx-2">·</span> March 2025
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#0A89FF]"></div>
                  <div>
                    <p className="text-[16px] font-bold text-[#F0F2ED]">NQB8 Editorial</p>
                    <p className="text-[15px] text-[#8F999E]">Infrastructure & Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>

          <FadeInView delay={0.1}>
            <div className="relative mt-12 h-[532px] w-full overflow-hidden rounded-[24px] border border-[#333B408C] sm:h-[400px] lg:h-[480px]">
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
            <div className="prose prose-invert mt-12 max-w-none prose-p:text-[16px] prose-p:leading-[180%] prose-p:text-[#8F999E] prose-p:mb-8">
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

              <div className="my-12 w-full max-w-[480px] rounded-[12px] border border-[#333B408C] bg-[#0E0F11] p-6 lg:p-8 lg:pb-5">
                <div className="mb-6 h-[2px] w-12 bg-[#0A89FF]"></div>
                <p className="font-heading border-b border-[#333B408C] pb-6 text-[20px] font-bold leading-[140%] text-[#F0F2ED] sm:text-[22px] !mb-0">
                  "We build systems that endure — not demos that expire."
                </p>
              </div>

              <p>
                If you are exploring partnership, platform collaboration, or institutional engagement with NQB8, we welcome the conversation.
              </p>
            </div>
          </FadeInView>
        </div>
      </Container>
    </article>
  );
}
