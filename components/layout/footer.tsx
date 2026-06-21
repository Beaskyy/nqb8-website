import Link from "next/link";
import { Container } from "@/components/ui/container";
import { footerColumns } from "@/lib/design-tokens";

export function Footer() {
  return (
    <footer className="bg-[#060708] border-t border-[#333B40B2] py-10 lg:py-[56px]">
      <Container>
        <div className="grid gap-[60px] lg:grid-cols-5 lg:gap-[120px]">
          <div className="flex flex-col col-span-2">
            <Link href="/" className="text-[32px] font-bold text-[#F0F2ED] tracking-[-0.4px]">
              NQB8
            </Link>
            <p className="mt-4 max-w-[360px] text-[13px] leading-[138%] text-[#8F999E] lg:text-[15px]">
              A Nigerian digital infrastructure company building platforms and builders for emerging markets.
            </p>
            <p className="mt-4 text-[13px] font-semibold text-[#0A89FF] lg:text-[14px] hover:underline">
              Built in Nigeria. Built for emerging markets.
            </p>
          </div>

          <FooterColumn title="COMPANY" links={footerColumns.company} />
          <FooterColumn title="PRODUCTS" links={footerColumns.products} />
          <FooterColumn title="CONTACT" links={footerColumns.contact} />
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[8%] text-[#F0F2ED]">{title}</h3>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm font-medium text-[#8F999E] leading-[118%] transition-colors hover:text-[#F0F2ED] lg:text-[14px]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
