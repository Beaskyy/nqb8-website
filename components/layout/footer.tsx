import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { Container } from "@/components/ui/container";
import { footerColumns } from "@/lib/design-tokens";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black py-16 lg:py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-text-secondary">
              A Nigerian technology institution building digital infrastructure
              for emerging markets — systems designed to last.
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-text-muted">
              Lagos, Nigeria
            </p>
          </div>

          <FooterColumn title="Company" links={footerColumns.company} />
          <FooterColumn title="Products" links={footerColumns.products} />
          <FooterColumn title="Legal" links={footerColumns.legal} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-text-muted">
            © {new Date().getFullYear()} NQB8. All rights reserved.
          </p>
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
      <h3 className="text-[13px] font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[14px] text-text-secondary transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
