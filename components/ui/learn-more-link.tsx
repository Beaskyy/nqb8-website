import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function LearnMoreLink({
  href,
  children = "Learn more",
  className,
}: {
  href: string;
  children?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-[14px] font-medium text-accent transition-colors hover:text-accent-bright",
        className
      )}
    >
      {children}
      <ArrowRight
        className="size-3.5 transition-transform group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}
