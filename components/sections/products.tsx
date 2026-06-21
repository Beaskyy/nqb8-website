"use client";

import { FadeInView } from "@/components/motion/fade-in-view";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { products } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

export function Products() {
  const topRow = products.slice(0, 3);
  const bottomRow = products.slice(3);

  return (
    <section id="products" className="bg-[#060708] lg:pt-[104px] py-20 lg:pb-[96px]">
      <Container>
        <FadeInView>
          <SectionLabel className="text-[13px] font-semibold uppercase tracking-[8%] text-[#0A89FF]">
            PRODUCTS
          </SectionLabel>
          <h2 className="font-heading mt-6 text-[44px] font-extrabold leading-[130%] tracking-[-1.2%] text-[#F0F2ED] sm:text-[40px] lg:text-[48px] max-w-[760px]">
            Live platforms with infrastructure intent.
          </h2>
          <p className="mt-8 text-[17px] leading-[150%] text-[#8F999E] sm:text-base max-w-[700px]">
            A concise view of the NQB8 product ecosystem and the layers each product strengthens.
          </p>
        </FadeInView>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topRow.map((product, i) => (
            <FadeInView key={product.name} delay={i * 0.08}>
              <ProductCard product={product} />
            </FadeInView>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bottomRow.map((product, i) => (
            <FadeInView key={product.name} delay={0.24 + i * 0.08}>
              <ProductCard product={product} />
            </FadeInView>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductCard({
  product,
}: {
  product: {
    category: string;
    name: string;
    description: string;
  };
}) {
  return (
    <article
      className={cn(
        "group h-full rounded-[18px] border border-[#00000047] shadow-sm bg-surface-card p-4 transition-all duration-300 shadow-sm",
        "hover:border-accent/25 hover:bg-surface-elevated"
      )}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[8%] text-[#0A89FF]">
        {product.category}
      </p>
      <h3 className="font-heading mt-4 lg:text-[22px] text-xl font-bold tracking-[-1.4%] text-[#F0F2ED]">
        {product.name}
      </h3>
      <p className="mt-3 lg:text-[15px] text-sm leading-[138%] text-[#8F999E]">
        {product.description}
      </p>
    </article>
  );
}
