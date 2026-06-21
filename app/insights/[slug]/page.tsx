import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Article } from "@/components/sections/article";
import { RelatedInsights } from "@/components/sections/related-insights";

export const metadata: Metadata = {
  title: "Why infrastructure companies must own the products they build — NQB8",
  description: "Infrastructure is not a pitch deck category. It is the discipline of building systems that continue to work when markets shift...",
};

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main>
        <Article />
        <RelatedInsights />
      </main>
      <Footer />
    </>
  );
}
