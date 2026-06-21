import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductsHero } from "@/components/sections/products-hero";
import { Products } from "@/components/sections/products";
import { CompanyStory } from "@/components/sections/company-story";
import { BuilderCulture } from "@/components/sections/builder-culture";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Products — NQB8",
  description:
    "Platforms in market. Live products across commerce, education, trust, and community — built and operated by NQB8.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductsHero />
        <Products />
        <CompanyStory />
        <BuilderCulture />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
